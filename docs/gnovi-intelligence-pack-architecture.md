# Gnovi: intelligence pack architecture

> **Parent:** [Gnovi Founding Blueprint](./gnovi-founding-blueprint.md)  
> **Version:** 1.0 · **Date:** April 9, 2026

---

## Core principle: configuration over code, discovery over declaration

An intelligence pack is NOT manually authored configuration. It is a **structured output of an automated domain discovery process** that can be human-reviewed and refined. The distinction is critical to Gnovi's domain-agnostic positioning: if creating a new intelligence pack requires a developer to manually define entity types and extraction rules, the system is not truly domain-agnostic — it just has a plugin architecture.

The vision is a system where you say: "I want to understand my sales team's knowledge landscape" → the system connects to your CRM, email, and Slack → it automatically discovers entity types (Deal, Contact, Pipeline Stage), relationship patterns (OWNS, PROGRESSED_TO), and proposes agent personas (Pipeline Advisor, Account Historian) → you review, adjust, and activate.

**Has this been done before?** Partially. AutoSchemaKG (May 2025) demonstrates zero-intervention schema induction from 50M+ documents at 92% alignment with human-crafted schemas. OLLM (NeurIPS 2024) fine-tunes Mistral-7B to build ontological taxonomies end-to-end with 0.915 Fuzzy F1. OntoGPT/SPIRES provides zero-shot ontology-grounded extraction achieving 99.4% internal consistency. CQbyCQ translates competency questions into OWL schemas with GPT-4 achieving 0.91 success rate. However, **no existing system combines MCP-based connector metadata + data-driven schema induction + agent persona generation into a single self-configuring package.** This is novel and requires POC validation (see POC-10).

---

## Automatic domain discovery process

### Phase 1: Domain context gathering

When a user initiates intelligence pack creation, Gnovi collects domain context through three channels:

**Channel A — Natural language description:**
The user provides a brief description: "We're a consulting firm. We use Salesforce for client management, Slack for internal communication, Notion for project documentation, and Harvest for time tracking." An LLM parses this to identify: industry vertical, team function, expected data sources, and initial domain vocabulary.

**Channel B — MCP server introspection:**
For each connected MCP server, the Schema Discovery Agent (see POC-2) calls `tools/list` and `resources/list`, analyzing tool names, descriptions, input/output schemas, and resource URI templates. This produces a raw inventory of available entity types, field structures, and implied relationships per source.

**Channel C — Data sampling:**
The system samples the first 500-1,000 records from each connected source. These samples are processed through AutoSchemaKG's four-phase pipeline: input processing → triple extraction → schema induction via LLM conceptualization → ontology construction. This discovers entity types and relationships that exist in the actual data but aren't declared in the API schema.

### Phase 2: Schema synthesis and deduplication

The three channels produce overlapping, potentially contradictory entity type proposals. The Schema Synthesis Agent reconciles them:

**Cross-source type alignment:** Entities that appear across multiple sources need canonical names. The agent computes embedding similarity between proposed type labels and merges those above 0.90 similarity. Example: "Contact" (Salesforce) and "Client" (Harvest) and "Customer" (Notion) → merged into canonical type "Client" with aliases `["Contact", "Customer"]`.

**Relationship inference:** By analyzing which entity types co-occur across sources and which API parameters reference other entity types, the agent proposes relationships. `create_invoice(client_id, project_id)` implies a `BILLED_FOR` relationship between Client and Project.

**Hierarchy detection:** If some entity types are consistently subtypes of others (all "Enterprise Clients" are also "Clients"), the agent proposes a type hierarchy.

**Ambiguity resolution:** When terms are genuinely ambiguous (in engineering, "service" could mean a microservice, a managed cloud service, or a customer service team), the agent generates disambiguating subtypes with distinctive contextual patterns. The DIAL-KG MKB tracks these decisions and refines them as data accumulates.

### Phase 3: Agent persona generation

Based on the discovered entity types and relationship patterns, an LLM generates agent persona proposals. Each persona has: a name, a description of its expertise, the entity types and relationship types it primarily works with, and suggested retrieval strategies for its domain.

Example output for a consulting firm:

- **Client Advisor:** Expertise in client history, engagement patterns, and relationship health. Works with Client, Project, Invoice, Communication entities. Prioritizes temporal queries and relationship traversal.
- **Project Historian:** Expertise in project timelines, deliverable tracking, and team allocation. Works with Project, Deliverable, TimeEntry, Person entities. Prioritizes causal and temporal queries.
- **Knowledge Curator:** Monitors Notion/Confluence for undocumented processes and institutional knowledge. Works with Document, Decision, Process entities. Proactive: surfaces outdated documentation.

### Phase 4: Pack assembly and validation

The discovered schema, aliases, relationships, hierarchies, and agent personas are assembled into the intelligence pack structure:

```yaml
# Auto-generated intelligence pack
# Domain: consulting
# Generated: 2026-04-09
# Status: DRAFT — requires human review

metadata:
  name: consulting
  version: 0.1.0
  generated_by: gnovi-domain-discovery
  confidence: 0.78 # Overall confidence in auto-generated schema

entity_types:
  - name: client
    aliases: ["contact", "customer", "account"]
    source_mappings:
      salesforce: "Contact"
      harvest: "Client"
    confidence: 0.95
    fields:
      - name: industry
        type: string
        source: salesforce.Contact.Industry
      - name: relationship_start
        type: date
        source: salesforce.Contact.CreatedDate

  - name: project
    aliases: ["engagement", "matter"]
    source_mappings:
      notion: "Project Page"
      harvest: "Project"
    confidence: 0.90
    fields:
      - name: status
        type: enum
        values: ["active", "completed", "on_hold"]
        source: harvest.Project.is_active

relationship_types:
  - name: OWNS
    source_type: person
    target_type: project
    confidence: 0.88
    evidence: "harvest.Project.client_id links to person assignments"

  - name: BILLED_FOR
    source_type: project
    target_type: client
    confidence: 0.92
    evidence: "harvest.Invoice references both project_id and client_id"

agent_personas:
  - name: client_advisor
    description: "Expertise in client relationship history and engagement patterns"
    primary_entity_types: ["client", "project", "communication"]
    retrieval_strategy: "temporal + relationship traversal"
    proactive_triggers:
      - "client communication gap > 14 days"
      - "project milestone approaching"

extraction_rules:
  patterns:
    - name: project_code
      regex: "PRJ-\\d{4}"
      entity_type: project
      source: auto-generated from observed data

  gliner_labels:
    - "client"
    - "project"
    - "deliverable"
    - "technology"
    - "process"
```

### Phase 5: Human review and activation

The auto-generated pack is presented in the UI as a reviewable draft. The user can:

- Rename entity types and aliases
- Add/remove/modify relationship types
- Adjust agent personas
- Override extraction rules
- Set confidence thresholds for auto-acceptance

Once accepted, the pack is activated and the extraction pipeline begins using it. The DIAL-KG governance loop continues to refine the schema as data accumulates — the initial pack is a starting point, not a final state.

---

## Handling ambiguity, synonyms, and near-duplicates

**Problem:** Different teams and domains use different terms for the same concept, or the same term for different concepts.

**Approach 1 — Alias management:** Each entity type carries an aliases list. During extraction, all aliases resolve to the canonical type. The alias list grows through observation: when users correct entity type assignments, the corrected-from label becomes an alias.

**Approach 2 — Contextual disambiguation:** When a term is ambiguous (e.g., "service"), the system uses surrounding context to determine which type it refers to. A Slack message mentioning "the auth service is down" → type: `microservice`. A Jira ticket mentioning "our customer service response time" → type: `business_function`. This is handled by GLiNER's contextual embedding — the same word in different contexts produces different type classifications.

**Approach 3 — User-guided refinement:** When the system encounters a term it cannot disambiguate with >0.70 confidence, it stores the extraction with both candidate types and surfaces it in the next interaction: "When you said 'service', did you mean auth-service (the microservice) or Customer Service (the team)?" The response trains future disambiguation.

**Approach 4 — Cross-pack type registry:** As multiple intelligence packs are created, a global type registry prevents duplication. "Person" in the engineering pack and "Employee" in the HR pack should be the same underlying type with domain-specific properties. The registry uses embedding similarity to detect and propose merges across packs.

---

## Pack lifecycle

```
Domain Description → MCP Introspection → Data Sampling
         ↓                    ↓                ↓
    Context Parser   Schema Discovery    AutoSchemaKG
         ↓                    ↓                ↓
              Schema Synthesis Agent
                      ↓
             Agent Persona Generator
                      ↓
               Pack Assembly (YAML)
                      ↓
               Human Review (UI)
                      ↓
              Activation + Ingestion
                      ↓
        DIAL-KG Continuous Refinement
                      ↓
        Pack Maturation (monthly check)
```

**Pack maturation:** After 30 days of active use, the system evaluates pack health: extraction accuracy (via implicit feedback), schema stability (type count not growing), entity resolution quality (false merge rate), and user satisfaction (query success rate). If all metrics are green, the pack graduates from "draft" to "stable." Stable packs can be exported and shared with other organizations in the same vertical.

---

## Engineering intelligence pack (pre-built, ships with Gnovi)

This is the reference pack — manually curated by the founder, validated against real engineering data, and used as the template for how auto-generated packs should look.

**Entity types (14):** `repository`, `service`, `api_endpoint`, `pull_request`, `incident`, `deployment`, `sprint`, `architectural_decision`, `tech_debt_item`, `runbook`, `on_call_rotation`, `code_review`, `ci_pipeline`, `feature_flag`

**Relationship types (8):** `OWNS` (person→service), `DEPENDS_ON` (service→service), `CAUSED` (deployment→incident), `RESOLVED_BY` (incident→pull_request), `DECIDED_IN` (architectural_decision→document), `BLOCKED_BY` (ticket→ticket), `REVIEWED_BY` (pull_request→person), `DEPLOYED_VIA` (service→ci_pipeline)

**Agent personas (4):** Architecture Advisor, Incident Investigator, Onboarding Guide, Code Archaeologist

**Domain-specific components:** Tree-sitter AST parsing for code knowledge graph (CodeGraph integration); CI/CD pipeline graph; incident correlation patterns.

This pack is included in the open-source core as both a functional product and a reference implementation for pack structure.

---

## Open questions and risks

1. **Quality of auto-generated packs for unfamiliar domains:** POC-10 will test this on sales data, but domains with highly specialized vocabularies (legal, medical, financial) may require more human curation. The system should degrade gracefully: a lower-quality auto-generated pack is still better than no pack.

2. **Pack sharing across organizations:** The "export and share" model creates privacy risk — even without PII, the entity type structure of an organization reveals strategic information (what they track, what they care about). Sharing should be opt-in, anonymized, and stripped of organization-specific aliases.

3. **Pack evolution divergence:** If two organizations start from the same base pack and both evolve it, their schemas will diverge. Merging updates from a base pack into a customized pack is analogous to git merge conflicts — and equally unsolved. For now, packs are forked on activation with no upstream sync.

---

_An intelligence pack is a theory about what matters in a domain. The auto-discovery process proposes the theory; data validates it; users refine it; and the DIAL-KG governance loop evolves it continuously._
