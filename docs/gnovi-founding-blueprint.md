# Gnovi: founding blueprint for an open-source knowledge intelligence platform

> **Version:** 2.0 · **Date:** April 9, 2026 · **Status:** Pre-implementation  
> **Repository:** [github.com/gnovi-ai/gnovi](https://github.com/gnovi-ai/gnovi) · **License:** AGPL-3.0  
> **Domain:** [gnovi.ai](https://gnovi.ai) · **Defensive:** [gnovi.io](https://gnovi.io) (redirects to gnovi.ai)  
> **Companion docs:** [Implementation Roadmap](./gnovi-implementation-roadmap.md) · [POC Validation Plan](./gnovi-poc-validation-plan.md) · [Intelligence Pack Architecture](./gnovi-intelligence-pack-architecture.md) · [Algorithm Reference Plan](./gnovi-algorithm-reference-plan.md)

---

## Executive summary

Gnovi (Latin: _"I have known"_) is an open-source, knowledge-graph-native intelligence platform that builds a living, self-discovering knowledge graph from any organization's workplace tools, learns from every interaction through cognitive-science-inspired memory, and progressively automates knowledge work through graduated autonomy. It is architected as **domain-agnostic infrastructure** — the same engine that understands an engineering organization's codebase, incidents, and architectural decisions can understand a legal team's cases, a sales team's pipeline, or a consulting firm's client engagements — launched through an **engineering knowledge intelligence wedge** where the founder has deepest expertise and the pain is most acute.

**Core thesis:** Every knowledge worker operates within a web of tools, people, processes, and institutional knowledge that no single system captures holistically. The connections between information live only in workers' heads. When those workers are new, overwhelmed, context-switching, or leave the organization, those connections degrade. Gnovi externalizes this web into a living knowledge graph, then layers comprehension, augmentation, prediction, and automation on top. It is not a search engine with AI bolted on — it is a learning system that gets measurably smarter every month.

**What makes it different from Glean, Copilot, and every other AI assistant:**

- **Knowledge graph as core, not search.** Gnovi builds an increasingly rich understanding of relationships — between people, decisions, code, documents, and systems — through graph traversal and multi-hop reasoning. Glean indexes and retrieves. Gnovi understands.
- **Self-discovering schema.** Gnovi does not require pre-configured entity types or relationship definitions. It discovers the ontology of your organization from your data, using AutoSchemaKG-inspired dynamic schema induction (92% alignment with human-crafted schemas). Connect your tools; the graph emerges.
- **Compounding memory.** Five independent learning subsystems — observation, consolidation, pattern mining, self-improvement, and expertise extraction — continuously refine the knowledge graph. A six-month-old Gnovi deployment is fundamentally more capable than a one-week-old one. This is not a feature — it is the architecture.
- **Formal belief revision.** When new information contradicts existing knowledge, Gnovi applies AGM-compliant belief revision (Kumiho, 93.3% accuracy) with immutable revision history. You can ask "what did the system believe about service-X three months ago, and what changed?"
- **Graduated autonomy with architectural guarantees.** A Trinity-inspired deterministic control plane treats the LLM as an untrusted component. Unauthorized actions are architecturally impossible, not merely prompt-engineered away. Trust is earned per action type through demonstrated accuracy.
- **Domain-agnostic by design.** The same extraction, memory, retrieval, and agent infrastructure serves any knowledge-worker vertical. Domain-specific "intelligence packs" (starter templates with pre-configured entity types, relationship patterns, and specialized agents) provide immediate time-to-value for specific industries.
- **Open source and self-hostable.** The core platform is AGPL-licensed, runs in Docker containers on modest hardware, and requires no vendor lock-in. Bring your own models, your own infrastructure, your own data.

**Market opportunity:** The AI-driven knowledge management market is projected at \$51 billion by 2030 (46.7% CAGR). The broader knowledge management software market reaches \$74 billion by 2034. Within this, Glean (\$7.2B valuation, \$200M+ ARR) has proven the knowledge graph thesis for enterprises, but leaves the mid-market underserved with opaque \$50+/user/month pricing and \$60K annual minimums. Gnovi fills this gap with transparent pricing, open-source trust, and a self-adapting architecture that Glean's search-first approach cannot replicate.

---

## Part I: market positioning and go-to-market

### The "horizontal infrastructure, vertical wedge" strategy

The evidence from every successful horizontal platform in the last decade — Notion (\$10B), Airtable (\$5.8B), Figma (\$10B+), Databricks (\$134B) — points to one pattern: **build horizontal infrastructure, launch through a vertical wedge, expand once the wedge is won.** Horizontal AI products spend 2.1× more on sales and marketing as a share of revenue versus vertical products, achieving EBITDA margins of just 0.8% versus 13%. But the largest absolute outcomes are horizontal: Glean's \$7.2B, Moveworks' \$2.85B acquisition, the \$8.4B horizontal AI application market growing 5.3× year-over-year.

Gnovi's architecture is domain-agnostic from day one. The knowledge graph engine, memory systems, retrieval pipeline, agent orchestration, and learning subsystems contain zero domain-specific code. What changes between domains is the intelligence pack: pre-configured entity types, relationship patterns, connector priorities, agent personas, and starter templates.

The **engineering knowledge intelligence** wedge is the launch vertical because:

- **The founder builds with Claude Code daily** — firsthand understanding of the pain
- **Zero regulatory overhead** — no HIPAA, SOX, or FINRA compliance required at launch
- **All data sources have rich APIs** — GitHub, Jira, Slack, Confluence, PagerDuty, Linear, CI/CD systems
- **Concentrated, quantifiable pain** — developers juggle 14 tools on average, lose 4+ hours/week to context switching, and 42% of institutional knowledge walks out the door when engineers leave
- **AI coding makes this MORE valuable, not less** — 41% of committed code is now AI-generated; understanding _why_ code exists, who knows about it, and how it connects to decisions becomes critical as the human-written percentage shrinks
- **Clear expansion path** — engineering → product management → cross-functional → general workplace

### Why the engineering vertical is durable despite AI coding disruption

The concern that AI will replace software engineering is real but misunderstood. Dario Amodei predicts AI doing most coding end-to-end within 6-12 months. Sam Altman says engineers will become "much, much more productive." But total software engineering hiring rose 9% in 2025, the BLS projects 17.9% employment growth through 2033, and the developer tools market is expanding from \$6.41B to \$15.72B by 2031.

What's disappearing is the _coding_ layer — writing boilerplate, implementing known patterns, debugging syntax. What's enduring and growing is the _knowledge_ layer — understanding architectural decisions, preserving institutional memory, reasoning across fragmented tools, and coordinating increasingly complex AI-augmented systems. As Jellyfish found in July 2025: "AI coding productivity gains are cancelled out by other friction points that slow developers down." Those friction points — context fragmentation, knowledge silos, cross-tool reasoning — are exactly what a knowledge graph addresses.

Gnovi is positioned not as "engineering productivity" (competing with Cursor) or "engineering metrics" (competing with Jellyfish) but as **"engineering knowledge intelligence"** — the system that understands the relationships between code, decisions, people, and context that AI coding tools cannot access.

### Pricing strategy

A massive gap exists between Notion AI (\$10/user/mo) and Glean (\$50+/user/mo with \$60K minimums). Gnovi fills this:

| Tier           | Price        | Target                        | Differentiators                                                                                         |
| -------------- | ------------ | ----------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Community**  | Free         | Individual users, small teams | Self-hosted, full knowledge graph engine, 3 connectors, BYOM, unlimited users                           |
| **Team**       | \$15/user/mo | Startups, teams 2–20          | Managed cloud, unlimited connectors, 1,000 AI queries/mo, Slack/Teams integration                       |
| **Business**   | \$29/user/mo | Mid-market 20–200             | SSO/SAML, RBAC, audit logs, 5,000 queries/mo, advanced analytics, priority support                      |
| **Enterprise** | \$49/user/mo | Large organizations 200+      | On-premises deployment support, SLAs, unlimited queries, SOC 2, custom model hosting, dedicated support |

The BYOM architecture creates a structural cost advantage: customers using their own API keys reduce Gnovi's inference costs while gaining cost control. The open-source free tier drives adoption and reduces customer acquisition cost to an estimated \$100-300 versus the \$702 B2B SaaS industry average.

### Go-to-market through open source

Gnovi's primary distribution channel is the open-source community, not a sales team. The playbook follows Grafana (1% of 20M users monetized = \$270M ARR at \$6B valuation), PostHog (\$1.4B valuation, sub-2-month CAC payback), and Supabase (\$5B valuation, \$70M ARR, 250% YoY growth).

**Phase 1 (Months 0–6): Build in public, ship the core.**
Open-source the knowledge graph engine, basic memory, and engineering intelligence pack on GitHub. Write technical blog posts on gnovi.ai. Engage on Discord. Target 1,000 GitHub stars and 200 Discord members. Ship Docker Compose for one-command self-hosted deployment.

**Phase 2 (Months 6–12): Community growth, managed cloud beta.**
Launch on Hacker News, dev.to, Reddit r/selfhosted and r/devops. Reach 5,000+ GitHub stars. Ship the managed cloud (app.gnovi.ai) on cost-controlled infrastructure. First 50 free beta users. Begin collecting usage data to optimize the product.

**Phase 3 (Months 12–18): Monetization, first intelligence packs.**
Launch Team tier (\$15/user/mo). Ship product management and DevOps/SRE intelligence packs. Target \$5-10K MRR from 30-60 paying accounts. Publish case studies.

**Phase 4 (Months 18–24): Enterprise, expansion.**
Launch Business and Enterprise tiers. Add SSO, RBAC, audit logs. Begin SOC 2 Type I preparation. Ship "create your own intelligence pack" capability. Target \$30-50K MRR and evaluate seed fundraising (\$2-4M at \$15-25M pre-money).

---

## Part II: open-source strategy

### AGPL v3 with contributor license agreement

The industry has converged on AGPL as the optimal license for commercial open-source AI products. Grafana Labs switched from Apache 2.0 to AGPL in 2021 (widely praised). Redis switched to AGPL for Redis 8 in May 2025. Elastic added AGPL in August 2024. ParadeDB chose AGPL from day one. Leading licensing attorney Heather Meeker: "AGPL has emerged the license of choice for commercial open source software companies in application space."

**Why AGPL specifically:**

- **Community trust:** AGPL is a recognized OSI-approved open-source license. Unlike BSL (HashiCorp's switch triggered the OpenTofu fork within 5 days) or SSPL (not recognized by OSI), AGPL is genuinely open source. Users adopt software, not licenses — but starting with a non-OSI license undermines credibility for a solo founder who needs community trust.
- **Cloud protection:** AGPL's network use clause means any cloud provider offering modified Gnovi as a service must release all modifications under AGPL. AWS cannot strip-mine the code without contributing back. This removes the competitive advantage of proprietary forks.
- **Dual-licensing optionality:** Require a Contributor License Agreement (CLA) from all contributors. This preserves the right to offer a separate commercial license for enterprises wanting to avoid AGPL obligations and cloud providers wanting to offer Gnovi-as-a-Service without AGPL requirements.

### What's open-source vs proprietary

The split follows one principle: **open-source everything that builds trust and attracts contributors; keep proprietary the compounding intelligence that creates defensible value over time.**

**Open-source (AGPL v3) — the Gnovi core:**

- Knowledge graph engine with FalkorDB integration and Cypher query layer
- Domain-agnostic schema induction (AutoSchemaKG-inspired discovery + DIAL-KG incremental evolution)
- Entity extraction pipeline (GLiNER2 + GLiNKER + LLM fallback)
- Cross-source entity resolution (CausalFusion-inspired)
- Graphiti temporal memory integration with FalkorDB backend
- Basic memory system (episodic storage, simple semantic extraction, Ebbinghaus decay)
- Single-agent framework with tool-calling (Research Agent with MCP support)
- Hybrid retrieval engine (vector + graph + BM25 with Reciprocal Rank Fusion)
- MCP gateway with security hardening (tool allowlisting, credential scoping, audit logging)
- Permission-aware graph traversal engine (access-scoped queries respecting source permissions)
- Source connectors: GitHub, Jira, Slack, Linear, Confluence, PagerDuty (community-extensible via MCP)
- Engineering intelligence pack (pre-configured entity types, relationship patterns, agent personas)
- Web UI (chat interface, knowledge graph explorer, settings dashboard)
- CLI tool (`gnovi` command)
- Docker Compose deployment with full self-hosted capability
- BYOM integration via LiteLLM (100+ LLM providers)
- Langfuse-based observability (self-hosted)
- Comprehensive documentation

**Why these are open:** They represent the platform infrastructure that must be trusted, auditable, and extensible. An enterprise evaluating Gnovi for sensitive data needs to inspect the knowledge graph logic, memory mechanisms, permission model, and agent behaviors. Contributors need access to connector APIs, extraction pipelines, and graph schemas. This is the 90% of the system that builds the community moat.

**Proprietary (commercial license) — Gnovi Cloud and Enterprise:**

- **Multi-agent orchestration** with Trinity deterministic control plane and supervisor/planner architecture
- **MAGMA-style multi-graph memory decomposition** (semantic, temporal, causal, entity views with adaptive traversal policy)
- **Kumiho-style formal belief revision** (AGM-compliant knowledge updates with immutable revision history)
- **Prospective indexing** (Kumiho's innovation: LLM-generated future-scenario implications indexed at write time)
- **SwiftMem DAG-Tag indexing** for sub-linear memory retrieval (47× faster than baseline)
- **Five learning subsystems** (observation layer, memory consolidation, pattern mining, expertise extraction, ACE self-improvement loop)
- **AutoRefine dual-form expertise extraction** (subagent patterns for complex workflows, skill patterns for lightweight heuristics)
- **MemRL non-parametric Q-learning** for continuous memory optimization from user feedback
- **DSPy/GEPA automated prompt optimization** across all agent pipelines
- **Emergent entity type discovery** (Level 3: implicit teams, hidden dependencies, undocumented processes)
- **Personal ↔ organizational graph interaction layer** with privacy-preserving aggregation
- **Graduated autonomy** with per-action trust profiles that evolve based on accumulated success metrics
- **Proactive intelligence** with flow-state-aware notification timing (ProAgentBench-inspired)
- **Knowledge crystallization engine** (automatic conversion of tacit knowledge from Slack/PR comments into structured knowledge base articles)
- **Advanced analytics and reporting** (team knowledge health, coverage gaps, institutional risk)
- **Domain intelligence pack builder** (create custom intelligence packs for any vertical)
- **SSO/SAML, RBAC, audit logs, compliance reporting**
- **SOC 2 compliance documentation and controls**
- **Managed cloud infrastructure** (app.gnovi.ai)
- **Priority support and SLAs**

**Why these are proprietary:** They represent the compounding intelligence that makes Gnovi genuinely different from a fork. A competitor taking the open-source core gets a solid knowledge graph with basic memory and single-agent retrieval — already valuable. They don't get the system that learns from every interaction, discovers implicit organizational patterns, anticipates needs through prospective indexing, and autonomously acts within earned trust boundaries. That gap widens every month as the proprietary learning subsystems accumulate improvements. This is the 10% that creates 90% of the defensible value.

---

## Part III: technical architecture

### System overview

Gnovi is a Python-primary backend with a TypeScript/React frontend, organized as a monorepo. The architecture separates into seven layers:

```
┌─────────────────────────────────────────────────────────┐
│                    Web UI (Next.js + React)               │
│        Chat · Graph Explorer · Findings · Settings        │
├─────────────────────────────────────────────────────────┤
│                   API Layer (FastAPI)                      │
│         REST + WebSocket · Auth · Rate Limiting           │
├─────────────────────────────────────────────────────────┤
│              Agent Orchestration (LangGraph)               │
│    Supervisor · Monitor · Research · Analyst · Action      │
│         Trinity Control Plane · Graduated Autonomy         │
├─────────────────────────────────────────────────────────┤
│               Retrieval Engine                             │
│   Adaptive Router · LazyGraphRAG · Relink · CIRAG         │
│        Vector (pgvector) · Graph (FalkorDB) · BM25        │
├─────────────────────────────────────────────────────────┤
│              Memory Architecture                           │
│   MAGMA Multi-Graph · Kumiho Belief Revision · SwiftMem   │
│   Working (Redis) · Episodic (Graphiti) · Semantic (KG)   │
├─────────────────────────────────────────────────────────┤
│            Knowledge Graph Engine                          │
│   FalkorDB · Schema Induction · Entity Extraction          │
│   Entity Resolution · Temporal Tracking · DIAL-KG          │
├─────────────────────────────────────────────────────────┤
│              Data Ingestion Layer                          │
│     MCP Connectors · Custom Collectors · iPaaS Bridge     │
│   GitHub · Jira · Slack · Confluence · PagerDuty · ...    │
└─────────────────────────────────────────────────────────┘
        │                    │                    │
   PostgreSQL           FalkorDB              Redis
  (relational +        (knowledge           (working
   pgvector)             graph)             memory +
                                           task queue)
```

### Technology stack

| Component               | Technology                                       | Version/Details            | Rationale                                                                                                                                                                      |
| ----------------------- | ------------------------------------------------ | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Primary language**    | Python 3.12+                                     | —                          | AI/ML ecosystem native; Graphiti, LangGraph, GLiNER, DSPy all Python-first; Claude Code generates excellent Python for AI patterns                                             |
| **API framework**       | FastAPI                                          | 0.115+                     | Async-native, Pydantic validation, OpenAPI auto-docs, dominant in AI backends                                                                                                  |
| **Frontend**            | Next.js 15 + React 19 + TypeScript               | —                          | Largest web ecosystem; React Flow for graph visualization; type safety for UI                                                                                                  |
| **Relational DB**       | PostgreSQL 16                                    | + pgvector + pgvectorscale | Single database for relational data, vector search, and embeddings. pgvectorscale achieves 11.4× more throughput than Qdrant at 99% recall on 50M embeddings                   |
| **Knowledge graph**     | FalkorDB                                         | v4.16+                     | Sub-140ms P99 latency (496× faster than Neo4j); sparse matrix algebra via GraphBLAS; GraphRAG SDK with auto-ontology detection; 10K+ tenants per instance; Apache 2.0 licensed |
| **Temporal memory**     | Graphiti (Zep)                                   | v0.17+ (FalkorDB backend)  | Bi-temporal model; 94.8% DMR accuracy; incremental real-time updates; hybrid search (semantic + BM25 + graph traversal)                                                        |
| **Agent orchestration** | LangGraph                                        | Python, latest             | Graph-based state machine; checkpointing; streaming; human-in-the-loop; largest ecosystem (27,100 monthly searches); used by Replit, Uber, LinkedIn                            |
| **Entity extraction**   | GLiNER2 bi-encoder + GLiNKER                     | —                          | Zero-shot NER on CPU; 130× throughput vs uni-encoder at 1,000+ entity types; 61.5% Micro-F1 on CrossNER (SOTA zero-shot); GLiNKER for entity linking/disambiguation            |
| **Relation extraction** | GLiREL                                           | —                          | Companion to GLiNER for relationship extraction across arbitrary relation types                                                                                                |
| **LLM gateway**         | LiteLLM                                          | —                          | Unified API for 100+ LLMs; BYOM support; OpenAI-compatible interface; per-operation model assignment                                                                           |
| **Prompt optimization** | DSPy + MIPROv2                                   | —                          | Programmatic prompt optimization; ~\$2 per optimization run; 20-50% quality improvement without manual tuning                                                                  |
| **Task queue**          | Celery + Redis                                   | —                          | Python-native; battle-tested for background ML jobs; priority queues; scheduled tasks; retry logic                                                                             |
| **Working memory**      | Redis                                            | 7+                         | Session-scoped context; SwiftMem DAG-Tag index; BullMQ-compatible for future TS needs                                                                                          |
| **Observability**       | Langfuse (self-hosted)                           | —                          | Open-source LLM tracing (MIT license); prompt management; evaluation; OpenTelemetry compatible; 5-minute Docker setup                                                          |
| **Deployment**          | Docker Compose → Kubernetes                      | —                          | Start with single-node Docker Compose; graduate to k8s when multi-node needed                                                                                                  |
| **Monorepo**            | uv workspaces (Python) + Turborepo (TS frontend) | —                          | uv for fast Python dependency resolution; Turborepo for frontend build caching                                                                                                 |
| **CI/CD**               | GitHub Actions                                   | —                          | 2,000 free minutes/month for public repos; lint → typecheck → test → build → deploy                                                                                            |
| **Security testing**    | promptfoo                                        | —                          | Open-source AI red teaming; 40+ vulnerability types; CI/CD integration                                                                                                         |

### BYOM (Bring Your Own Model) architecture

Gnovi is model-agnostic by design. LiteLLM provides a unified OpenAI-compatible API gateway that routes to any LLM provider. Users configure which model handles each operation type:

| Operation                    | Recommended Default                    | Characteristics                    | Alternatives                    |
| ---------------------------- | -------------------------------------- | ---------------------------------- | ------------------------------- |
| Query routing / triage       | GPT-4.1 Nano or Gemini 2.5 Flash-Lite  | Cheapest, fastest                  | Any small model                 |
| Entity extraction            | GPT-4o-mini or Mistral Small           | Cheap with structured output       | GLiNER handles 90%+ without LLM |
| Complex analysis / synthesis | Claude Sonnet 4.6 or GPT-4o            | Quality-focused                    | DeepSeek V4, Gemini 2.5 Pro     |
| Conversational Q&A           | Claude Sonnet 4.6 or Gemini 3 Flash    | Balanced cost/quality              | Any capable chat model          |
| Memory consolidation         | GPT-4o-mini                            | High volume, structured extraction | Any cheap model with JSON mode  |
| Prompt optimization (DSPy)   | GPT-4o-mini (optimizer) + target model | Runs infrequently (~\$2/run)       | Any model pair                  |

**Self-hosted deployment:** For air-gapped or privacy-sensitive environments, all components run locally. LLMs via vLLM or Ollama with open-weight models (Qwen 3.5, Llama 4, DeepSeek V4 — all Apache 2.0 or MIT). Embeddings via Qwen3-Embedding or BGE-M3 (self-hostable, Apache 2.0). Zero external API calls required.

### Infrastructure cost model

Gnovi is designed to run on modest infrastructure. The self-hosted Community edition requires nothing more than a developer laptop or a \$20/month VPS.

**Why Hetzner over AWS/GCP/Azure:** Hetzner delivers 5-10× cost advantage for equivalent compute. A Hetzner EX44 dedicated server (Intel i5-13500, 14 cores, 64GB RAM, 2×512GB NVMe) costs ~€47/month; equivalent AWS EC2 instances run \$200-400/month. Bandwidth is included at 20-60TB versus AWS's \$90/TB egress — critical for API-heavy knowledge graph applications. Hetzner is ISO 27001 and C5 certified with data centers in Germany and Finland, providing excellent EU data residency and GDPR compliance. Tradeoffs: 99.9% SLA (vs AWS 99.99%), email-only support, no SOC 2 certification (ISO 27001 instead). For a bootstrapped startup targeting \$130/month infrastructure costs, these tradeoffs are acceptable. Docker-based deployments are inherently portable — migrating to AWS/GCP later requires only changing the deployment target, not the application code.

**Why Docker Compose, not Kubernetes:** Kubernetes adds operational complexity (etcd cluster management, node scheduling, networking overlays, RBAC configuration) that provides zero benefit at <100 users on a single server. Docker Compose runs all services on one machine with a single `docker compose up` command. Kubernetes becomes justified when: (a) multi-node deployment is needed for horizontal scaling (>1,000 concurrent users), (b) zero-downtime rolling deployments become contractually required (Enterprise tier), or (c) customers require Kubernetes-native deployment for their own infrastructure. The roadmap targets Kubernetes readiness in Phase 5 (months 9-18) using Helm charts, but Docker Compose remains the primary deployment method for self-hosted users and early managed cloud.

| Scale              | Users        | LLM API/mo  | Hosting/mo          | Graph + Vector            | Redis | Total/mo      |
| ------------------ | ------------ | ----------- | ------------------- | ------------------------- | ----- | ------------- |
| **Dev/MVP**        | 1-10         | \$15 (BYOM) | \$0 (local Docker)  | \$0 (all in Docker)       | \$0   | **~\$15**     |
| **Early adopters** | 10-100       | \$150       | \$20 (Hetzner CX32) | \$0 (same server)         | \$0   | **~\$170**    |
| **Growth**         | 100-1,000    | \$1,200     | \$80 (Hetzner CX52) | \$40 (dedicated FalkorDB) | \$0   | **~\$1,320**  |
| **Scale**          | 1,000-10,000 | \$10,000    | \$300               | \$200                     | \$50  | **~\$10,550** |

The managed cloud (app.gnovi.ai) for the first 50-100 users can run on a single Hetzner dedicated server (AX102, ~\$130/month: 128GB RAM, 2×1TB NVMe, AMD Ryzen 9) running Docker Compose with all services. This supports PostgreSQL + pgvector, FalkorDB, Redis, the FastAPI backend, Celery workers, Langfuse, and the Next.js frontend — all on one machine with room to spare. At \$130/month with 50 users paying \$15/user/month (\$750 MRR), the managed cloud is profitable from day one.

**Cloud provider startup credits:** Apply to all three on day one. GCP for Startups offers up to \$350K in credits (requires partner referral — join Google for Startups Cloud program). AWS Activate Founders tier offers \$1,000 self-serve (no VC needed). Microsoft Founders Hub offers \$1,000-\$5,000. Portfolio-tier programs (AWS up to \$100K, Microsoft up to \$150K) require VC/accelerator backing — pursue after seed funding. Total potential: \$600K+ in combined credits.

---

## Part IV: knowledge graph engine

The knowledge graph is Gnovi's core — not a supporting index or retrieval optimization, but the primary knowledge representation through which the system understands the world.

### Self-discovering schema: domain-agnostic by design

Traditional knowledge graph systems require pre-defined ontologies. Gnovi inverts this: **the schema emerges from the data.** This is what makes the system truly domain-agnostic — you don't configure entity types; you connect data sources, and the system discovers what matters.

The schema induction pipeline operates at three levels:

**Level 1 — Source-native types (automatic, from MCP server metadata + API structure):**
Entity types are NOT manually declared. They are automatically discovered through two mechanisms. First, **MCP schema introspection:** when a new MCP server is connected, Gnovi calls `tools/list` and `resources/list` to discover all available tools and resources. Each MCP tool exposes a `name`, `description`, and `inputSchema` (JSON Schema with typed properties). Gnovi's Schema Discovery Agent analyzes these tool signatures to infer entity types — `create_issue` with fields `owner`, `repo`, `title`, `assignees[]`, `labels[]` implies an "Issue" entity type with those fields and relationships to "Repository" and "User" entities. The 2025-06-18 MCP spec added `outputSchema`, enabling servers to declare structured return types, making entity field discovery even more complete. Second, **direct API field parsing:** for non-MCP connectors, structured fields from source APIs are parsed directly — Jira's API returns tickets with `key`, `assignee`, `status`, `project` as typed fields. These produce confirmed entities from authoritative sources with zero NLP cost. Both mechanisms register entity types dynamically when connectors are attached — never hardcoded. Approximately 60% of all entities come from this tier.

**Level 2 — Inferred types (from cross-source pattern analysis):**
When entities from one source are consistently discussed in specific contexts across other sources, the system proposes higher-level types. Following AutoSchemaKG's approach (92% semantic alignment with human-crafted schemas), an LLM receives a cluster of related entities with their contexts and generates conceptual categories. Example: GitHub repos named `tap-*` appearing in deployment contexts, CI pipelines, and QA discussions → the system proposes "data connector" as an inferred type.

**Our innovation beyond existing tools:** FalkorDB's GraphRAG-SDK provides automated ontology detection, but it operates on a single document corpus — it discovers entity types within one data source. Gnovi's contribution is **cross-source schema induction** — discovering entity types that only become apparent when you analyze the intersections between multiple workplace tools. A "deployment" entity emerges not from GitHub alone (where it's a "workflow_run") or from PagerDuty alone (where it's a "change event"), but from the correlation pattern across both. DIAL-KG's incremental schema evolution provides the mechanism: a Meta-Knowledge Base (MKB) tracks proposed schema extensions, validates them against accumulated evidence, and promotes them to the active schema only when sufficient cross-source corroboration exists. This MKB is Gnovi's novel contribution — the governance layer that turns FalkorDB's single-source ontology detection into a multi-source, continuously evolving organizational ontology.

**Level 3 — Emergent concepts (novel, discovered from the graph):**
The most valuable discoveries are entities that exist in no source system. These emerge from graph structure analysis:

- **Implicit teams:** "Three people always collaborate on auth-service incidents but have no formal group in Slack or Jira" — discovered via co-occurrence clustering
- **Hidden dependencies:** "Every time service-A deploys, service-B has issues within 24 hours" — discovered via temporal correlation analysis
- **Undocumented processes:** "Before every release, a specific sequence of actions happens across 4 tools" — discovered via procedural memory mining (PMAx-inspired)
- **Recurring situations:** "Deployments after Friday merges fail 3× more often" — discovered via temporal pattern analysis

No competitor does Level 3 discovery. Glean indexes what exists. Gnovi discovers what's implicit. This is the difference between a search engine and a system that understands.

### Entity extraction pipeline

A tiered extraction approach maximizes quality while minimizing cost. Each tier is described with its mechanism, source of rules, and failure modes.

**Tier 1 — Structured extraction (free, deterministic, ~60% of entities):**
Source: MCP server responses and direct API calls. When Gnovi calls an MCP tool like `get_issue` or polls a webhook, the response contains structured JSON with typed fields. A field named `assignee` with value `{"login": "jsmith", "id": 12345}` produces a confirmed Person entity linked to the Issue entity via an `ASSIGNED_TO` relationship. No NLP is involved — the data's own structure declares the entities and their relationships. This tier is entirely automatic: when a new MCP server is connected, the Schema Discovery Agent maps tool output schemas to entity types, and all subsequent API responses produce entities through those mappings. The extraction rules are generated programmatically from MCP `outputSchema` metadata, not manually authored.

**Tier 2 — Pattern-based extraction (near-free, deterministic, ~15% of entities):**
Source: unstructured text fields within structured responses (PR descriptions, commit messages, Slack message text, Jira descriptions). Rules come from two sources: (a) **auto-generated patterns** derived from observed Tier 1 entities — once the system knows `AUTH-1234` is a Jira key, it generates a regex `AUTH-\d+` and applies it to all text fields, creating cross-references between sources; (b) **globally shared patterns** for universal formats — URLs, email addresses, @mentions, #channel references, ISO dates, semantic versioning strings. Auto-generated patterns are per-integration-source (Jira key patterns differ from GitHub issue patterns) while global patterns apply everywhere. A Pattern Registry manages active patterns with hit rates — patterns that stop matching after schema changes are automatically flagged for review and deprecated. This is a self-maintaining system, not a manually curated ruleset.

**Tier 3 — GLiNER2 zero-shot NER + GLiNKER + GLiREL (cheap, CPU-only, ~20% of entities):**
For unstructured text where Tiers 1-2 cannot extract entities (novel mentions, informal references, domain-specific terms), GLiNER2 bi-encoder performs zero-shot named entity recognition. Here's how the three tools interact:

**GLiNER2** accepts a text passage and a list of entity type labels (e.g., `["person", "service", "technology", "architectural_concept", "team"]`). These labels are dynamically sourced from the current schema — whatever entity types the system has already discovered become GLiNER's label set, growing automatically as the schema evolves. The "5 labels" in the benchmark refers to the number of concurrent entity types GLiNER can process per inference call at 130ms latency — in practice, you batch text through multiple passes with different label subsets for large schemas. At 205M parameters, the bi-encoder architecture encodes entity labels separately from text (unlike the uni-encoder which concatenates them), achieving 130× throughput improvement at 1,000+ entity types because label encodings are cached and reused across documents. GLiNER2 outputs span-tagged entities: `"We migrated auth-service to Kubernetes"` → `{text: "auth-service", type: "service", start: 12, end: 24}`, `{text: "Kubernetes", type: "technology", start: 28, end: 38}`.

**GLiNKER** takes GLiNER's extracted entity mentions and resolves them against known entities in the knowledge graph. It handles coreference (linking "the auth thing" to the canonical `auth-service` entity), disambiguation (distinguishing between two services with similar names), and nil detection (recognizing when an extracted mention doesn't correspond to any known entity and should create a new one). GLiNKER uses a combination of embedding similarity against existing entity embeddings and contextual matching using the surrounding text.

**GLiREL** extracts relationships between entity pairs identified by GLiNER. Given two entities in a sentence, it classifies the relationship type from an open set of labels (similar to GLiNER's approach but for relations). Example: `"Sarah reviewed the auth-service PR"` → `{head: "Sarah", tail: "auth-service PR", relation: "REVIEWED"}`. Like GLiNER, the relation labels are sourced from the active schema's relationship types.

**What this combination misses:** Implicit references ("the issue we discussed yesterday"), anaphora without nearby antecedents ("it broke again"), sarcasm/irony ("great, another config change"), and complex multi-sentence reasoning ("John mentioned that the team Sarah leads recently switched to a new framework" — extracting LEADS relationship requires multi-hop inference). These failure cases cascade to Tier 4.

**Tier 4 — LLM extraction (expensive, highest quality, ~5% of entities):**
Reserved for cases where Tiers 1-3 fail: ambiguous references, implicit relationships requiring inference, context-dependent entities, and nuanced sentiment-bearing relationships. The LLM model is configurable (BYOM) — GPT-4o-mini is recommended as the default for its strong structured output support at low cost, but Claude Haiku, Mistral Small, or self-hosted Qwen 3 14B are equally viable. The choice is not architecturally significant because the LLM receives a structured prompt with explicit JSON Schema output requirements; any model supporting JSON mode works.

Practical example: A Slack message reads `"The thing that powers our onboarding flow has been flaky since last deploy."` Tiers 1-2 extract nothing (no structured data, no matching patterns). Tier 3 might extract "onboarding flow" as a concept but cannot resolve it to a specific service. Tier 4 receives the message plus contextual data from the knowledge graph (recent deployments, services related to onboarding) and infers: `{entity: "user-registration-service", relationship: "EXPERIENCED_DEGRADATION", confidence: 0.72, evidence: "recent deploy correlation"}`. The LLM provides contextual inference that purely extractive methods cannot — connecting informal language to structured entities through graph-backed context.

Few-shot examples are drawn from accumulated user corrections and Tier 1-3 validated extractions, improving over time without manual curation.

### Entity resolution across sources

The same person appears as `@john` in Slack, `john.smith` in GitHub, and `John Smith` in Jira. The same service is called `auth-service` in code, `Authentication Service` in docs, and "the auth thing" in Slack. Entity resolution merges these into canonical entities. **This is a novel system design — no existing product performs fully automated, self-learning entity resolution across heterogeneous workplace MCP sources.** The design draws from production-validated components but their integration is new.

**Phase 1 — Deterministic anchoring (zero ambiguity):**
Many workplace entities have unambiguous cross-system identifiers. Email addresses link a Slack user to a Jira user to a GitHub user. SSO/SCIM directory data (when available) provides authoritative identity mapping. Repository URLs are globally unique. These produce confirmed merge decisions with 100% confidence, forming the anchor points for subsequent probabilistic resolution.

**Phase 2 — Semantic blocking + probabilistic matching:**
Following Splink's Fellegi-Sunter model (open-source, 7M records in 2 minutes), candidate pairs are generated through semantic blocking: entities are embedded using S-MiniLM (speed/quality balance) and indexed in FAISS/HNSW. Top-K similar entities per new entity form the candidate pool. Each candidate pair is scored using a weighted combination of: name embedding similarity (0.3 weight), type compatibility (0.2 — a Person cannot merge with a Service), contextual co-occurrence (0.2 — do these entities appear in the same conversations/threads?), temporal alignment (0.15 — do they appear in the same time periods?), and graph structural similarity (0.15 — do they connect to the same neighboring entities?). Pairs above threshold 0.85 are auto-merged. Pairs in the 0.60-0.85 range are stored as candidates.

**Phase 3 — Active learning bootstrap (minimal human input):**
Following ALER (2025, 98.7% F1 on million-record datasets), the system presents the highest-uncertainty candidate pairs to users for confirmation — not as an explicit "confirm/reject" workflow, but embedded naturally in the product experience. When a user searches for "auth service" and the system retrieves results from both `auth-service` (GitHub) and `Authentication Service` (Confluence), the user's click behavior implicitly confirms or rejects the merge. If they interact with both results as if they're the same thing, confidence increases. If they explicitly correct ("no, that's a different service"), the merge is rejected. **20-50 labeled pairs are sufficient** to bootstrap competitive accuracy (AnyMatch, 2024). Over time, the learned weights replace initial heuristics.

**Phase 4 — Graph-based post-resolution refinement:**
After initial merges, graph structure analysis detects inconsistencies: if entity A was merged with entity B but A's graph neighborhood is completely disjoint from B's, the merge is flagged for reconsideration. Conversely, if two un-merged entities share 80%+ of their graph neighbors, they are proposed for merge. This catches false negatives that embedding similarity misses.

**Temporal entity evolution:**
Entities change over time — people change roles, teams rename, services are refactored. Each entity carries a temporal attribute history: `{role: "SRE", valid_from: "2025-01", valid_to: "2025-08"}, {role: "Platform Eng", valid_from: "2025-09", valid_to: null}`. Name changes create `RENAMED_FROM` edges rather than new entities. The entity resolution system considers temporal context when matching — an entity reference from January should match against January-era attributes, not current attributes.

**Handling remaining ambiguity:**
When resolution confidence is below 0.60, entities remain separate with a `POSSIBLY_SAME_AS` edge carrying the confidence score. The system never forces a bad merge. Ambiguous references in agent responses are surfaced with explicit uncertainty: "This may refer to auth-service (GitHub) or Authentication Module (design docs) — which one?" Over time, accumulated interaction patterns resolve most ambiguities without explicit user intervention.

**Risk: false positive merges.** A false merge (combining two distinct entities) is more damaging than a false negative (keeping duplicates separate), because merges cascade through the graph. The 0.85 auto-merge threshold is deliberately conservative. All merges are logged and reversible — a user can "split" a merged entity at any time, propagating the split through all derived relationships.

### FalkorDB as the graph substrate

FalkorDB is the graph database, not the intelligence. Gnovi builds on FalkorDB's storage and query capabilities, but the schema induction, memory architecture, retrieval pipeline, and learning subsystems are entirely Gnovi's innovation layer. The relationship is analogous to PostgreSQL and Supabase — the database provides the foundation; the product provides the intelligence.

- **Performance:** Sub-140ms P99 latency (496× faster than Neo4j); 22,784 reviews/second ingestion at batch 5000
- **Architecture:** Sparse matrix algebra via GraphBLAS — treats graph operations as matrix computations rather than pointer-chasing, enabling hardware-level parallelism
- **Multi-tenancy:** 10K+ tenants per instance with zero overhead via named graphs. Each Gnovi tenant gets a dedicated graph (e.g., `tenant_42`)
- **GraphRAG SDK:** v0.5 provides automated single-source ontology detection — Gnovi extends this to cross-source ontology induction (see Level 2 schema discovery above), which is our novel contribution
- **CodeGraph:** Converts Git repos into queryable FalkorDB graphs. This is a **domain-specific intelligence pack component** for the engineering vertical, not part of the core system. Non-engineering intelligence packs would not use CodeGraph. It is loaded only when the engineering intelligence pack is activated.
- **MCP server:** Updated April 8, 2026 — active development confirms long-term viability
- **License:** Apache 2.0 — safe for commercial SaaS use
- **Self-hostable:** Single Docker container, 2-4GB RAM for small deployments
- **Memory reduction:** 42% since v4.8, making it increasingly practical for budget-conscious deployments

### Bi-temporal knowledge tracking

Every edge in the knowledge graph carries four timestamps following Graphiti's model:

- `created_at` — when the system first learned this fact (transaction time start)
- `invalidated_at` — when the system recorded this fact was no longer current (transaction time end; null if still the system's current belief)
- `valid_from` — when this relationship was true in the real world (valid time start)
- `valid_to` — when this relationship stopped being true in the real world (valid time end; null if still valid)

**Handling facts that change multiple times:** Each change creates a new edge — the old edge is invalidated but never deleted. Example: "Sarah owns auth-service" valid Jan-Mar produces edge E1 `(Sarah, OWNS, auth-service, valid_from=Jan, valid_to=Mar, invalidated_at=Mar-15)`. "Tom owns auth-service" valid Mar-Jul produces edge E2 `(Tom, OWNS, auth-service, valid_from=Mar, valid_to=Jul, invalidated_at=Jul-20)`. "Sarah owns auth-service again" valid Jul-present produces edge E3 `(Sarah, OWNS, auth-service, valid_from=Jul, valid_to=null)`. The complete ownership history is reconstructable by querying all `OWNS` edges for `auth-service` ordered by `valid_from`. Point-in-time queries ("who owned auth-service in February?") filter edges where `valid_from <= Feb AND (valid_to IS NULL OR valid_to >= Feb)`. Retroactive corrections are handled by invalidating the wrong edge and creating a corrected one — the system's belief history (transaction time) and the real-world truth history (valid time) are independently queryable.

**ATOM's temporal 5-tuple decomposition:** ATOM (EACL 2026) extends the standard triple `(subject, predicate, object)` to a 5-tuple `(entity_subject, relation_predicate, entity_object, [t_start_list], [t_end_list])` where the temporal fields are **lists**, not single values. This supports entities with multiple non-contiguous validity periods — Sarah owned auth-service in Jan-Mar AND Jul-present, representable as `t_start=[Jan, Jul], t_end=[Mar, null]` in a single 5-tuple rather than requiring multiple edges. Gnovi adopts this for compact temporal representation in the MAGMA temporal graph view, while the primary Graphiti-based storage uses the multiple-edge approach for compatibility with standard graph traversal.

**"Fine-grained validity tracking"** means the system can answer not just "who owns X now" but "who owned X on any specific date, how many ownership changes occurred, what was the average tenure, and were there any gaps in ownership." This level of temporal resolution is impossible in search-based systems that only store current state.

### Streaming knowledge graph construction via DIAL-KG

The knowledge graph is not built in batch — it evolves continuously as new data arrives. DIAL-KG (March 2026) provides the incremental construction framework:

- **Dual-Track Extraction:** Simultaneously extract triples (entity-relation-entity) and events (structured causal occurrences with temporal markers)
- **Governance Adjudication:** Every new triple passes fidelity checks (is this consistent with existing knowledge?), currency checks (is this information fresh?), and anti-hallucination validation (does this trace to source evidence?)
- **Schema Evolution:** When extracted knowledge doesn't fit existing schemas, the Meta-Knowledge Base proposes new schema elements through an evolution-intent assessment. New entity types and relationship types are induced from validated knowledge, not hardcoded
- **Soft Deprecation:** Entities aren't deleted — they're marked as superseded with provenance. This preserves historical integrity while keeping the active graph current. Critical for engineering orgs where APIs are deprecated, not deleted

**Schema drift prevention — how the system avoids diverging from truth:** Schema drift (unintended divergence from accurate representation) is the central risk in self-evolving knowledge graphs. DIAL-KG achieves 15% fewer relation types than unconstrained systems while improving F1 by 4.7%, demonstrating that governance produces more compact, accurate schemas. Gnovi implements five defenses:

1. **Proposer-Critic architecture:** A SchemaAgent proposes schema changes (new entity types, new relationship types). A CriticAgent validates each proposal against the existing ontology using semantic similarity (is this a near-duplicate of an existing type?), structural consistency (does this type fit the existing hierarchy?), and evidence strength (how many independent data points support this type?). Only proposals passing all three checks are promoted.

2. **SHACL constraint validation:** W3C Shapes Constraint Language validates the graph against declared constraints — cardinality limits, type restrictions, value ranges. New triples that violate constraints are rejected or flagged. Trav-SHACL optimizes traversal for up to 28.93× speedup on large graphs.

3. **Concept drift detection:** Automated monitoring tracks schema health metrics: type count growth rate (alert if >10% monthly), redundancy ratio (embedding similarity between type labels — alert if any pair >0.90), orphan type rate (types with <3 instances after 30 days), and extraction distribution shift (if a type's extraction rate changes dramatically, investigate).

4. **Schema versioning with rollback:** Every schema change is versioned (inspired by Kafka's Schema Registry pattern). If a schema change degrades query quality (measured by retrieval relevance scores dropping), the system automatically rolls back to the previous schema version and flags the change for investigation.

5. **Human-reviewable schema evolution log:** All schema changes are logged in a human-readable feed. Users with admin privileges can view proposed changes, accept/reject them, and provide corrections that feed back into the CriticAgent's learned preferences.

### Knowledge graph refinement

**What are triples and triple scoring?** A triple is the atomic unit of a knowledge graph: `(subject, predicate, object)` — for example, `(Sarah, OWNS, auth-service)` or `(auth-service, DEPENDS_ON, config-service)`. A triple scorer evaluates how likely a newly extracted triple is to be true before it enters the graph. The goal is preventing bad data from entering the graph in the first place, rather than cleaning it up afterward.

**Automated multi-signal scoring (no human required for 95%+ of triples):**
Following Google's Knowledge Vault approach (324M triples at ≥0.7 confidence from 1.6B extracted), Gnovi computes a confidence score for each new triple using five weighted signals:

`confidence = w₁·source_authority + w₂·extraction_confidence + w₃·schema_consistency + w₄·graph_coherence + w₅·cross_source_corroboration`

- **Source authority (w₁):** Structured API data (Tier 1) scores 0.95+. Regex patterns (Tier 2) score 0.85+. GLiNER extraction (Tier 3) scores 0.50-0.85 based on span confidence. LLM extraction (Tier 4) scores based on model self-reported confidence, calibrated over time.
- **Extraction confidence:** GLiNER and LLM both produce confidence scores per extraction. These are calibrated against a held-out validation set.
- **Schema consistency:** Does this triple conform to SHACL constraints? A `Person OWNS Service` triple is consistent; a `Service OWNS Person` triple violates expected cardinality.
- **Graph coherence:** Does this triple fit the existing graph neighborhood? If the subject entity has no other edges of this type, and similar entities do, this is unusual but not impossible. Scored via KG embedding models (TransE/ComplEx via PyKEEN).
- **Cross-source corroboration:** A fact mentioned in Slack AND Jira AND GitHub is more trustworthy than one mentioned only in a single Slack message. Knowledge Vault's key finding: belief increases proportionally with independent source count.

Triples scoring above 0.80 are auto-inserted. Triples scoring 0.50-0.80 are inserted with a `needs_review` flag but are still queryable (they appear in results with lower ranking). Triples below 0.50 are stored as candidates but excluded from active queries.

**Implicit feedback replacing explicit confirmation:** Rather than asking users to "confirm or reject" triples (which nobody will do), Gnovi captures implicit signals: (a) **query success** — if an agent answer using a triple is rated helpful, the triple's confidence increases; (b) **correction patterns** — if a user corrects an agent's answer, the triples used in that answer are downweighted; (c) **usage frequency** — triples referenced frequently in successful interactions accrue confidence; (d) **temporal corroboration** — facts confirmed across multiple time periods gain confidence. These signals flow into the MemRL Q-learning subsystem, which learns optimal confidence weights from accumulated interaction patterns.

**Security of user-facing data:** When triples are surfaced to users (in agent responses, graph explorer, or review queues), they inherit the permission-aware graph traversal constraints — users only see triples derived from sources they have access to. The `needs_review` queue is scoped per user's permission set. Admins see all flagged triples; regular users see only those from their accessible sources.

**Knowledge graph completion** using the SAT Framework (8.7-29.8% improvement in link prediction) enables Gnovi to predict missing relationships: "This engineer likely works on this service" or "This team probably owns this repository." These predicted edges are stored with a `source: system_inference` tag and confidence from the link prediction model. They are surfaced as suggestions in the UI ("Did you know...?") and promoted to confirmed when corroborated by subsequent observation or when users interact with them without correction.

---

## Part V: memory architecture

Gnovi's memory system is inspired by cognitive science and implemented using the strongest 2026 research across five complementary systems.

### Multi-graph memory decomposition (MAGMA)

Following MAGMA (January 2026, 45.5% higher reasoning accuracy, 95% token reduction), each memory item is represented across four orthogonal graph views:

- **Semantic graph:** Conceptual relationships between entities. "Auth-service DEPENDS_ON config-service." Queried when the user asks "what's related to X?"
- **Temporal graph:** Chronological ordering with NEXT-edge chaining. "Deployment-A happened BEFORE incident-B." Queried when the user asks "what happened before/after X?"
- **Causal graph:** Cause-effect relationships extracted from event analysis. "Config change CAUSED deployment failure." Queried when the user asks "why did X happen?"
- **Entity graph:** Co-occurrence and interaction patterns between people, systems, and artifacts. "Person-A and Person-B frequently collaborate on auth-related issues." Queried when the user asks "who knows about X?"

An **Adaptive Traversal Policy** routes retrieval based on query intent: temporal queries traverse the temporal graph, causal queries the causal graph, entity lookups the entity graph, and conceptual queries the semantic graph. Complex queries that span multiple dimensions perform multi-graph fusion.

**Implementation approach:** Rather than four separate graph instances (which would multiply infrastructure), Gnovi implements MAGMA's views as typed edge categories within FalkorDB's single-instance named graphs. A query-intent classifier (cheap model) determines which edge types to traverse, achieving MAGMA's routing benefits without the infrastructure overhead.

### Formal belief revision (Kumiho)

When new information contradicts existing knowledge — a common occurrence in fast-moving engineering organizations — Gnovi applies formal AGM belief revision following Kumiho (March 2026, 93.3% accuracy on LoCoMo-Plus):

- **Minimal change principle (Relevance):** Only revise what's necessary. If a new fact contradicts one edge, revise that edge, not the entire subgraph.
- **Core-Retainment:** Don't discard beliefs without justification. Old facts are _invalidated_ (marked with `invalidated_at` timestamp), not deleted. The revision history is immutable.
- **Supersedes edges:** New facts link to the old facts they replace via typed `SUPERSEDES` edges with provenance. You can always trace why the system changed its mind.

**Prospective indexing** (Kumiho's innovation): At write time, the LLM generates predicted future scenarios where this information would be relevant, and indexes those predictions. When an engineer asks "what could go wrong with deploying service-X?" the system retrieves not just current facts about service-X but also forward-looking implications generated when those facts were first recorded. Cost: one additional LLM call per significant memory write, using a cheap model.

### Sub-linear memory retrieval (SwiftMem)

SwiftMem (January 2026, 47× faster search than SOTA) provides Gnovi's primary memory indexing layer:

- **DAG-Tag Index:** During memory ingestion, an LLM generates hierarchical semantic tags organized into a Directed Acyclic Graph. At query time, a Query-Tag Router maps natural language queries to relevant DAG nodes, retrieving only memory subsets associated with those tags. Complexity: O(K_tag · D_max) instead of O(N_mem).
- **Temporal Index:** Binary-searchable sorted timelines per user, activated by a Temporal Indicator module detecting both explicit ("last week") and implicit temporal cues. O(log N_mem) range queries.
- **Co-consolidation:** Periodic reorganization of embedding storage based on semantic tag clusters improves cache locality.

Result: Search latency remains sub-15ms regardless of memory size, enabling real-time retrieval even with months of accumulated organizational knowledge.

### Three-tier memory architecture

**Working memory (Redis):** Current conversation buffer, active task context, retrieved memories for the current agent workflow. Volatile, session-scoped. Cleared between sessions.

**Episodic memory (Graphiti temporal graph on FalkorDB):** Raw interaction records — what happened, when, who was involved, what the outcome was. Each episode has: timestamp, duration, trigger, actions taken, entities involved (linked to KG nodes), outcome, user satisfaction signal. Append-only at write time (no LLM cost). NEXT-edge temporal chaining enables timeline traversal.

**Semantic memory (FalkorDB knowledge graph):** Extracted facts, preferences, domain knowledge, and institutional understanding. Derived from episodic memory through the consolidation pipeline. Three scopes: user-level (private), organization-level (shared across users in same tenant), domain-level (learned patterns about the type of work).

**Procedural memory (structured templates + reflections):** Learned workflows and compound skills. Following AutoRefine's dual-form approach: **Subagent Patterns** for complex multi-step procedures (5+ steps, 3+ decision points, tool dependencies) stored as reusable agent blueprints, and **Skill Patterns** for lightweight strategic knowledge expressed as natural language guidelines. Discovered through PMAx-inspired autonomous process mining over episodic memory.

### Consolidation pipeline (Learning Subsystem 2)

The consolidation pipeline transforms raw interaction history into durable organizational knowledge. It is implemented as an independent background service running on its own schedule.

**Trigger:** Hybrid — weekly batch (steady state) PLUS threshold-based (when a user accumulates >100 unconsolidated episodes).

**Step 1 — Clustering by shared entities:** Episodes are clustered by the entities they reference, not by time or topic. A Cypher query finds episode groups sharing 2+ entity references.

**Step 2 — Extraction (GAAMA three-step):** Following GAAMA (March 2026), each cluster is processed through: (a) verbatim episode preservation with no LLM call, (b) atomic fact extraction with concept labels using a cheap model, (c) higher-order reflection synthesis identifying patterns across facts.

**Step 3 — Validation against existing knowledge:** Each extracted fact is checked against the knowledge graph. Consistent facts strengthen existing knowledge. Contradictory facts trigger Kumiho belief revision. Novel facts create new semantic memories at extracted confidence level. Below-threshold facts are stored as candidates.

**Step 4 — Archive and re-link:** Consolidated episodes are retained 90 days for audit/debugging, then deleted. Graph edges referencing archived episodes are re-linked to the semantic memories they produced. Provenance is preserved.

### Forgetting as a first-class feature

**Ebbinghaus decay:** `S(t) = S₀ × e^(-t/τ)`. Memories that aren't accessed lose strength over time. Recalled memories are reinforced. Computed at query time (no background job needed). Configurable half-life per entity type. Entities below retrieval threshold are excluded from active queries but remain available for historical/temporal queries.

**Active invalidation:** Kumiho belief revision handles contradictions.

**Contextual archival:** Resolved tickets, merged PRs, completed projects are downranked from active context but searchable.

**Hierarchical consolidation (xMemory):** Messages → episodes → semantic facts → themes. Each level is a compression step. Lower levels archived once consolidated upward. SimpleMem's semantic lossless compression achieves 30× token savings as a pre-processing step.

**Memory compression budget:** Following Omni-SimpleMem's hot/cold storage pattern, lightweight metadata (entity names, relationship types, temporal markers) stays in hot storage for fast retrieval. Full documents, conversation transcripts, and code snippets live in cold storage, expanded on demand only when the retrieval pipeline determines they're needed. CIRAG's cascaded granularity approach means triples suffice for 57-76% of queries.

### Personal graph ↔ organizational graph

This is Gnovi's most important architectural innovation.

**Personal graph (per user, private):** Each user accumulates their own memory scope capturing individual work patterns, preferences, expertise areas, communication style, investigation workflows, and decision history. Kumiho's prospective indexing personalizes anticipation: the system predicts what _this specific user_ will need based on their patterns.

**Organizational graph (per tenant, shared):** The organizational graph captures institutional knowledge derived from ingested data sources. It is enriched by the consolidation pipeline processing ALL users' episodic data (with permission) into anonymized organizational patterns.

**Upward flow (personal → organizational):** When the pattern mining service detects that multiple users independently discover the same pattern — "deployments on Fridays fail more often" — it proposes the pattern as organizational knowledge. Users can approve or reject. This is how institutional knowledge that previously existed only in individual heads becomes explicit organizational intelligence.

**Downward flow (organizational → personal):** New team members' personal graphs bootstrap from organizational knowledge. They immediately benefit from accumulated institutional understanding. As they interact, their personal graph diverges to reflect their specific role and expertise.

**Privacy-preserving aggregation:** Personal graphs contain sensitive behavioral data. The organizational graph receives only anonymized, aggregated patterns — never individual interaction logs or behavioral profiles. A user's personal investigation workflow is private; the fact that "auth-service investigations are 40% faster when Slack threads are checked before Jira" is organizational knowledge derived from aggregated patterns.

**Multi-user memory consistency:** Following the March 2026 paper "Multi-Agent Memory from a Computer Architecture Perspective," Gnovi implements a three-layer memory hierarchy (I/O for real-time interactions, cache for frequently-accessed team context, memory for persistent KG) with eventual consistency for organizational knowledge and strong consistency for personal memories.

---

## Part VI: retrieval architecture

### Adaptive query routing

Not every query needs the full GraphRAG pipeline. A lightweight classifier (trained via DSPy on accumulated query patterns) routes queries by complexity:

| Query Type                 | Route                                                | Example                                                      | Cost       |
| -------------------------- | ---------------------------------------------------- | ------------------------------------------------------------ | ---------- |
| Simple factual             | Direct vector search (pgvector)                      | "Who owns auth-service?"                                     | Lowest     |
| Relationship               | Graph traversal (FalkorDB Cypher)                    | "What services depend on config-service?"                    | Low        |
| Temporal                   | Temporal index + graph traversal                     | "What changed after the v3.0 release?"                       | Low-medium |
| Multi-hop reasoning        | Relink dynamic evidence construction                 | "Why did deployment X fail after the config change?"         | Medium     |
| Global synthesis           | LazyGraphRAG deferred summarization                  | "What are the biggest risks in our current architecture?"    | Higher     |
| Cross-source investigation | CIRAG multi-evidence-chain with adaptive granularity | "How does the auth change in PR #4521 affect rate limiting?" | Highest    |

Following the SoK paper's (March 2026) formalization of agentic RAG as a finite-horizon POMDP, the retrieval pipeline operates as an agent loop: Router → Retriever → Grader → Generator → Hallucination Checker, with hard cycle limits (~3 iterations resolve 95% of beneficial queries). Caching the router eliminates 30-40% of routing LLM calls.

### LazyGraphRAG for global synthesis

For broad "what's the state of X?" queries, LazyGraphRAG (Microsoft, June 2025) defers all LLM summarization to query time:

1. At ingest: NLP noun phrase extraction builds a lightweight concept co-occurrence graph (no LLM, identical cost to vector RAG)
2. At query: LLM refines query into 3-5 subqueries, traverses graph, rates relevance iteratively, synthesizes answer
3. Cost: 0.1% of full GraphRAG indexing, 4% of GraphRAG global search query cost
4. Quality: Outperforms all competing methods including standard GraphRAG, LightRAG, RAPTOR

### Relink for dynamic evidence construction

For queries where the pre-built knowledge graph has gaps — inevitable in any real organization — Relink (January 2026, +5.4% EM, +5.2% F1 over baselines) dynamically repairs broken reasoning paths:

- **Latent relation pool:** Potential relationships derived from raw source text that weren't extracted into the KG. When reasoning paths break at missing links, Relink reaches into this pool to instantiate facts on demand.
- **Unified evaluation:** Both pre-built KG facts and latent relations are jointly scored for query relevance.
- **Distractor filtering:** Actively discards query-relevant but goal-misaligned knowledge that disrupts reasoning.

This means Gnovi doesn't need a perfect knowledge graph to deliver excellent answers. Missing edges are repaired at query time from the original source data.

### CIRAG for multi-hop evidence chains

For complex questions spanning multiple sources — "How does the authentication change in PR #4521 affect the API gateway's rate limiting configuration described in the architecture doc?" — CIRAG (January 2026, +4.3% F1, +4.9% EM over baselines) preserves multiple plausible evidence chains rather than committing to a single greedy path:

- **Iterative Construction-Integration:** Alternates between retrieving documents and extracting candidate triples, maintaining provenance mappings back to source sentences
- **Multi-chain preservation:** All plausible evidence paths are maintained, with the LLM selecting the most coherent chain at generation time
- **Cascaded granularity:** Starts with compact triples (sufficient for 57-76% of queries), falls back to sentences, then full documents only when needed. This dramatically reduces token consumption.

### Embedding strategy

Dual embeddings optimized for Gnovi's mixed content:

- **Code content:** CodeXEmbed/SFR-Embedding-Code (Salesforce, COLM 2025) — SOTA on CoIR benchmark, outperforming Voyage-Code by >20% across 12 programming languages
- **Text content:** Qwen3-Embedding-0.6B (March 2026, Apache 2.0) — Matryoshka embeddings with 128K context, self-hostable
- **Re-ranking:** Cohere Rerank v3.5 as cross-encoder for final result ordering
- **Hypothetical indexing (HyPE):** Precompute hypothetical questions at indexing time for question-question matching, improving retrieval precision by up to 42 percentage points. Particularly effective for workplace queries.

---

## Part VII: agent architecture

### LangGraph orchestration with Trinity control plane

The orchestration follows a **hybrid hierarchical** pattern: a supervisor agent receives user queries, classifies intent and complexity, then delegates to specialized domain agents. Individual agents use ReAct (Reason + Act) for step-by-step execution. Complex multi-step workflows use Plan-and-Execute.

**The Trinity-inspired deterministic control plane** (February 2026) sits between the LLM planner and action execution:

- The LLM is treated as an **untrusted component** that proposes actions
- A small, formally verifiable Trusted Computing Base validates each step against the user's trust profile
- **Finite Action Calculus** makes unauthorized actions architecturally impossible regardless of what the model attempts
- Information-flow control tags prevent cross-user data leakage at the query level
- This is not prompt engineering — it is structural enforcement

For enterprise buyers, this transforms "we hope the AI doesn't do something wrong" into "the architecture makes it impossible for the AI to do something unauthorized." Only 22% of enterprise decision-makers trust autonomous AI — Trinity-style guarantees directly address this blocker.

### Specialized agents

| Agent        | Responsibility                                                              | Tools                                        | Side Effects                                  |
| ------------ | --------------------------------------------------------------------------- | -------------------------------------------- | --------------------------------------------- |
| **Monitor**  | Watches data sources, triages events, creates findings, detects anomalies   | Connectors, triage classifier, graph queries | Internal only                                 |
| **Research** | Answers questions via graph traversal + RAG + memory, investigates findings | Graph traversal, hybrid search, MCP tool use | Read-only external                            |
| **Analyst**  | Synthesizes reports, identifies trends, generates periodic briefs           | Graph analytics, aggregation, LLM synthesis  | Internal only                                 |
| **Action**   | Executes tasks on behalf of user (under graduated autonomy)                 | Source API write access via MCP              | **External writes — gated by trust profiles** |

Monitor, Research, and Analyst are safe to run autonomously because they only read external systems. The Action Agent is the only agent that modifies the outside world — every Action Agent call is gated by graduated autonomy.

### Graduated autonomy

Four levels, earned per action type through accumulated success metrics:

**Level 0 (Suggest only):** Agent analyzes and recommends. User manually executes. Default for new deployments.

**Level 1 (Act with approval):** Agent prepares action with preview. Human approval gate before execution. Full audit trail. Used for knowledge graph mutations, sending messages, creating tasks.

**Level 2 (Act and notify):** Agent executes within approved boundaries. User notified post-execution. Reversible actions preferred. Used for routine lookups and scheduling.

**Level 3 (Fully autonomous):** Agent acts without notification. Continuous monitoring with anomaly detection. Auto-escalates on low confidence. Used for status checks and routine reporting.

Trust profiles evolve based on: accuracy rate (what percentage of suggestions were accepted?), override frequency (how often did the user change the agent's action?), confidence calibration (when the agent said 90% confident, was it right 90% of the time?), and blast radius (higher-impact actions require more evidence of trustworthiness).

### Cost optimization

Agent systems make 3-10× more LLM calls than chatbots. Without optimization, a single agent task can cost \$5-8 in API fees. Gnovi implements:

- **Prompt caching:** Anthropic (90% cost reduction on cache hits), OpenAI (75% cheaper). Enabled from day one on all system prompts.
- **Model tiering:** Cheap models for routing/triage (90% of traffic), expensive models for reasoning (10%). Plan-and-Execute reduces total calls by routing simple plans to single-model execution.
- **DSPy/GEPA automated prompt optimization:** ~\$2 per optimization run, 20-50% quality improvement. Runs periodically against accumulated evaluation data.
- **Semantic caching:** Cache responses to semantically similar queries (31% reduction per NeurIPS 2025).
- **Dynamic toolset pruning:** Instead of exposing all MCP tools to every agent call, a search_tools → describe_tools → execute_tool pattern reduces MCP token usage by 100×.

---

## Part VIII: five learning subsystems

These are the independent background services that make Gnovi's "compounding value" claim real. Each runs on its own schedule with clear triggers and failure isolation.

### Subsystem 1: Observation layer (real-time, passive)

Runs continuously via hooks into agent execution and web app event stream. Captures three signal categories:

- **What worked:** Findings investigated, suggestions accepted, questions answered satisfactorily, action drafts used
- **What didn't work:** Findings dismissed, suggestions rejected, questions requiring rephrasing, drafts discarded
- **What's missing:** Questions the system couldn't answer (auto-detected from failed retrieval), cross-source correlations the system should have made (detected via graph analysis), user investigation patterns revealing unconnected information

The observation layer does not make decisions — it captures signals for downstream subsystems.

### Subsystem 2: Memory consolidation service (periodic batch)

See Part V consolidation pipeline. Weekly batch + threshold-based triggering. Distills episodic → semantic memory via GAAMA three-step extraction with Kumiho belief revision for contradictions.

### Subsystem 3: Pattern mining service (periodic async)

Operates on the observation log and knowledge graph to discover:

- **Behavioral patterns → agent improvement:** Triage rules evolve based on what users care about. Research retrieval strategies improve based on what worked. Analyst reports adapt based on what users read.
- **Workflow sequences → procedural memory:** PMAx-inspired autonomous process mining discovers repeated action patterns, validates them against outcomes, codifies successful patterns as AutoRefine dual-form expertise (subagent patterns for complex workflows, skill patterns for lightweight heuristics).
- **Emergent concepts → new entity types:** Embedding clustering and co-occurrence analysis discover Level 3 entities.
- **Voice capture → personalized drafts:** Analysis of user's past messages (Slack, email, PR comments) extracts style features for draft generation. Opt-in, viewable, clearable.

### Subsystem 4: MemRL continuous optimization (background)

MemRL's non-parametric Q-learning (January 2026, 61.3% on HLE, cross-model transferable) optimizes memory utilization without retraining the LLM:

- Memory is structured as Intent-Experience-Utility triplets: M = {(z_i, e_i, Q_i)}
- When users give feedback (thumbs-up/down, whether they used a suggestion), Q-values of retrieved context update: Q_new ← Q_old + α(r − Q_old)
- Over time, the system learns which past debugging sessions, architectural decisions, and code patterns are actually useful for which types of queries
- Q-value correlation with actual success: Pearson r = 0.861
- Cross-model transfer: memory banks trained with one LLM transfer to others without retraining

### Subsystem 5: ACE self-improvement loop (periodic)

The Generator-Reflector-Curator loop (ACE, +10.6% improvement without fine-tuning):

- **Generator:** Produces hypotheses about what to improve based on observation log trends ("Triage is over-prioritizing Slack mentions from #general")
- **Reflector:** Evaluates expected impact vs cost of each hypothesis
- **Curator:** Selects the best improvements, applies configuration changes (triage rules, retrieval parameters, extraction patterns, monitoring scope)

All changes are logged and reversible. The observation layer detects degradation from bad changes, and the next cycle course-corrects.

**DSPy/GEPA integration:** The ACE loop uses DSPy's MIPROv2 optimizer for automated prompt improvement across all agent pipelines. A typical optimization run costs ~\$2 and takes 10-30 minutes, improving accuracy 20-50% without manual prompt engineering.

---

## Part IX: proactive intelligence

### Flow-state-aware notification design

The CHI 2025 finding is the most important design principle: **timing of proactive suggestions matters more than their content quality.** "Persistent Suggest" was perceived as distracting and annoying; non-persistent suggestions were welcome. The five-day field study with professional developers found interventions at workflow boundaries (post-commit) achieved 52% engagement vs 62% dismissal mid-task.

**Four-tier notification queue:**

| Tier                    | Delivery                                      | Examples                                     |
| ----------------------- | --------------------------------------------- | -------------------------------------------- |
| **Immediate**           | Interrupt now                                 | P0 incidents only, security alerts           |
| **Next breakpoint**     | Deliver within 30 min at natural pause        | Deployment anomalies, blocked PR reviews     |
| **Daily digest**        | Morning brief or end-of-day summary           | Stale tickets, knowledge gaps, team patterns |
| **Store for discovery** | Available in findings dashboard, never pushed | Organizational insights, long-term trends    |

**Flow state detection** uses heuristics: continuous single-tool activity >15 min + no outgoing communication + calendar shows focus time = "likely in flow." The system batches non-urgent notifications until the user transitions to a lower-focus activity.

**Absorption model:** Instead of pinging a developer about a question on their code, proactively answer the questioner using the knowledge graph and only escalate to the developer if truly necessary. This turns Gnovi into a shield that _protects_ flow state rather than disrupting it.

### Knowledge crystallization

The most compelling feature narrative for enterprise adoption: Gnovi automatically converts tacit knowledge into explicit, structured knowledge.

- PR review comments become coding standards
- Incident retrospectives become runbooks
- Slack Q&A threads become FAQ entries
- Architecture discussions become decision records
- Onboarding conversations become documentation

The knowledge crystallization engine monitors Slack channels, PR comments, and documentation changes for knowledge-worthy content (decisions, rationale, lessons learned), then uses LLMs to auto-generate draft knowledge base articles linked to relevant graph entities. Teams review and approve, building an ever-growing organizational knowledge base without anyone manually writing documentation.

---

## Part X: data governance, security, and compliance

### Permission-aware graph traversal

Every query filters nodes and edges based on the authenticated user's permissions inherited from source systems. If you can't see a Slack channel in Slack, you can't see messages from that channel in the graph, entities extracted from those messages, or edges created from those messages. This permission inheritance flows through the entire graph — including derived facts and consolidated memories.

Implementation: Every node carries an `access_scope` attribute listing which source permissions grant visibility. At query time, the traversal engine intersects the user's permission set with each node's access scope. This adds latency to deep traversals but is non-negotiable for enterprise data.

### Tenant isolation

Each tenant gets a separate FalkorDB named graph instance. No cross-tenant queries are possible at the data layer. PostgreSQL uses row-level security with `org_id` on all tables. Redis uses key prefixing with tenant namespaces. Memory scoping: user memories are private to the user, organization memories are shared within the tenant, domain memories are tenant-private (never shared across tenants).

### EU AI Act compliance

The EU AI Act reaches full applicability August 2, 2026. Workplace AI systems processing employee data are potentially high-risk (Annex III, Category 4). Gnovi's strategy:

- **Self-classification:** Document Gnovi's intended purpose as a knowledge retrieval tool, not an employee monitoring system. Avoid features that rank, score, or profile individuals.
- **Explainability:** Knowledge graph architecture provides inherent explainability through traceable reasoning paths. Every answer can cite its source entities and traversal path.
- **Human oversight:** Graduated autonomy ensures human-in-the-loop for all consequential actions.
- **Audit trails:** Every agent action, knowledge graph mutation, and autonomy decision is logged with full provenance.

### Prompt injection defense

PoisonedRAG (USENIX Security 2025) showed 5 crafted documents among millions achieve 90% attack success. Since Gnovi ingests data from Slack/GitHub/Jira, any source could contain crafted content. The three-layer defense (Balaji et al., reducing attack success from 73.2% to 8.7%):

1. **Content filtering:** Scan ingested content for injection patterns before graph insertion
2. **Hierarchical system prompt guardrails:** Separate system prompts for retrieval and generation, with immutable safety instructions
3. **Multi-stage response verification:** Cross-check generated answers against source evidence

### Memory poisoning defense

MINJA (NeurIPS 2025) demonstrated >95% memory injection success rate. Gnovi's defenses:

- **Kumiho's formal belief revision:** The memory graph accepts no fabricated information because every belief must trace to a source via typed edges. Kumiho reports 97.5% adversarial refusal accuracy.
- **Trust scoring per source:** User input (highest), system observation (high), agent inference (medium), external content (lowest). Memory from lower-trust sources requires more corroboration before consolidation.
- **Anomaly detection:** Sudden changes in entity relationships or unexpected high-confidence assertions trigger review.

### MCP security hardening

67% of open-source MCP servers show poor security practices. Gnovi implements:

- **MCP gateway architecture:** All MCP servers accessed through a centralized proxy
- **Tool allowlisting:** Only explicitly approved tools are exposed to agents
- **Credential scoping:** OAuth 2.1 per MCP server, with minimal-privilege tokens
- **Audit logging:** Every MCP tool invocation is logged with full parameters and response
- **Human-in-the-loop for write operations:** All MCP write operations require explicit approval (Level 0-1 autonomy) until trust is earned

### Right to be forgotten (RTBF)

Graph databases make deletion both harder (cascade effects) and more traceable (relationships are explicit). Gnovi's approach:

- **Pseudonymous IDs:** PII is separated from structural data. The graph uses opaque IDs; a separate PII table maps IDs to personal information and can be independently purged.
- **Cascade-aware deletion:** Deleting a person node triggers deletion of all personal memories, de-identification of organizational memories they contributed to, and re-anonymization of aggregate patterns.
- **Immediate propagation:** Since Gnovi uses RAG (not fine-tuning), deletion from the knowledge graph takes effect immediately — no model retraining needed.

### Compliance roadmap

| Phase                | Timeline    | Cost     | Deliverables                                                                         |
| -------------------- | ----------- | -------- | ------------------------------------------------------------------------------------ |
| **Foundation**       | Months 1-2  | \$0-500  | Privacy-by-design architecture, tenant isolation, access-scoped queries, RTBF schema |
| **Pre-launch**       | Months 2-4  | \$2-5K   | Security whitepaper, pen test, MCP hardening, RBAC, promptfoo CI/CD integration      |
| **First enterprise** | Months 4-8  | \$15-30K | SOC 2 Type I (Vanta ~\$5K + auditor ~\$10K), EU data residency, GDPR documentation   |
| **Scaling**          | Months 8-18 | \$30-70K | SOC 2 Type II, multi-region, full EU AI Act compliance                               |

---

## Part XI: implementation roadmap

> **Full detail:** See [gnovi-implementation-roadmap.md](./gnovi-implementation-roadmap.md) for phase-by-phase tasks, dependencies, and milestones.  
> **POC validation:** See [gnovi-poc-validation-plan.md](./gnovi-poc-validation-plan.md) for proof-of-concept requirements per technology.  
> **Algorithm references:** See [gnovi-algorithm-reference-plan.md](./gnovi-algorithm-reference-plan.md) for per-algorithm deep-dive documentation plan.

### Summary roadmap

### Phase 1 — Foundation (Weeks 1-8)

**Goal:** Core knowledge graph engine running locally with GitHub connector.

- Set up Python monorepo with uv workspaces + Turborepo for frontend
- Create CLAUDE.md with comprehensive project context
- FastAPI backend with authentication, PostgreSQL + pgvector, FalkorDB (Docker Compose)
- Implement GitHub connector (commits, PRs, issues, reviews) with webhook support
- Build initial entity extraction pipeline: structured API fields → regex patterns → GLiNER2
- Implement entity resolution with embedding similarity + exact match
- Deploy Graphiti on FalkorDB backend for temporal memory
- Build basic hybrid retrieval (vector + graph + BM25 with RRF)
- Basic CLI tool for testing queries
- Docker Compose for one-command self-hosted deployment
- Comprehensive test suite (property-based testing with Hypothesis for extraction quality)

### Phase 2 — Intelligence layer (Weeks 9-16)

**Goal:** Working product with multiple connectors, conversational AI, and web UI.

- Add Jira/Linear, Slack, Confluence/Notion connectors
- Implement DIAL-KG incremental schema evolution with Meta-Knowledge Base
- Add GLiNKER for cross-source entity linking, GLiREL for relationship extraction
- Build the observation layer (Learning Subsystem 1)
- Implement memory consolidation service (Learning Subsystem 2) with GAAMA three-step
- Add Ebbinghaus decay with query-time strength computation
- Implement adaptive query routing with complexity classifier
- Build LazyGraphRAG concept co-occurrence graph for global synthesis
- Deploy LangGraph orchestration with Monitor + Research agents
- Build Next.js web UI: chat interface, knowledge graph explorer (React Flow), findings dashboard, settings
- Implement Langfuse observability
- Add prompt caching on all LLM calls
- Open-source launch on GitHub

### Phase 3 — Learning and agents (Weeks 17-24)

**Goal:** System that learns and improves. Community building.

- Implement pattern mining service (Learning Subsystem 3)
- Add MemRL non-parametric Q-learning for memory optimization
- Implement permission-aware graph traversal
- Add Kumiho-style belief revision for contradiction handling
- Begin prospective indexing on newly consolidated memories
- Implement Level 0-1 graduated autonomy with Trinity control plane
- Add Analyst and Action agents
- Implement SwiftMem DAG-Tag indexing for sub-linear retrieval
- Add Relink dynamic evidence construction for incomplete KG paths
- Build engineering intelligence pack (pre-configured entities, relationships, agents)
- Launch on Hacker News, dev.to, Reddit
- Set up Discord community
- Write documentation (docs.gnovi.ai)
- Target: 2,000+ GitHub stars, 500+ Discord members

### Phase 4 — Monetization and proactive intelligence (Weeks 25-32)

**Goal:** Revenue and differentiation.

- Launch managed cloud (app.gnovi.ai) on Hetzner dedicated server
- Ship Team tier (\$15/user/mo) with Stripe billing
- Implement DSPy/GEPA automated prompt optimization (Learning Subsystem 5 - ACE loop)
- Add AutoRefine dual-form expertise extraction
- Build proactive intelligence with flow-state-aware notification system
- Implement knowledge crystallization engine
- Add CIRAG multi-hop evidence chains
- Build personal ↔ organizational graph interaction layer
- Add PagerDuty/incident integration for engineering intelligence pack
- Begin CI/CD pipeline data ingestion (GitHub Actions, CircleCI)
- Target: 50+ free cloud users, 10+ paying accounts, \$2-5K MRR

### Phase 5 — Scale and expand (Months 9-18)

**Goal:** Enterprise readiness and vertical expansion.

- Implement MAGMA multi-graph memory decomposition
- Add SSO/SAML, RBAC, audit logs for Business tier
- Ship product management intelligence pack
- Ship DevOps/SRE intelligence pack
- Build "create your own intelligence pack" capability
- Add emergent entity type discovery (Level 3)
- Implement fine-tuning pipeline (Learning Subsystem 4) with LoRA adapters
- Begin SOC 2 Type I preparation
- Add code knowledge graph layer (tree-sitter AST + FalkorDB CodeGraph)
- Implement technical debt detection via graph analysis
- Add A2A protocol readiness for inter-system agent communication
- Target: 10K+ free users, 100+ paying accounts, \$30-50K MRR
- Evaluate seed fundraising

---

## Part XII: key research references

The architecture draws from 45+ papers published January-April 2026:

| Paper                                 | Date     | Key Contribution                                                 | Gnovi Application                                               |
| ------------------------------------- | -------- | ---------------------------------------------------------------- | --------------------------------------------------------------- |
| MAGMA (arXiv 2601.03236)              | Jan 2026 | Multi-graph memory: 45.5% higher accuracy, 95% token reduction   | Memory decomposition into semantic/temporal/causal/entity views |
| Kumiho (arXiv 2603.17244)             | Mar 2026 | Formal AGM belief revision: 93.3% accuracy, prospective indexing | Knowledge contradiction handling, forward-looking implications  |
| SwiftMem (arXiv 2601.08160)           | Jan 2026 | DAG-Tag indexing: 47× faster retrieval, sub-15ms latency         | Primary memory indexing layer                                   |
| Relink (arXiv 2601.07192)             | Jan 2026 | Dynamic evidence graph construction: +5.4% EM over baselines     | Repairing incomplete KG paths at query time                     |
| AutoRefine (arXiv 2601.22758)         | Jan 2026 | Dual-form expertise extraction: 98.4% ALFWorld success           | Procedural memory as subagent patterns + skill patterns         |
| CIRAG (arXiv 2601.06799)              | Jan 2026 | Multi-hop evidence chains: +4.3% F1, cascaded granularity        | Cross-source reasoning with provenance                          |
| DIAL-KG (arXiv 2603.20059)            | Mar 2026 | Schema-free incremental KG construction: +4.7% F1                | Streaming knowledge graph evolution                             |
| CompassMem (arXiv 2601.04726)         | Jan 2026 | Event-centric logic map: 52.18% F1, 57.96% temporal F1           | Engineering event reasoning (incidents, decisions)              |
| MemRL (arXiv 2601.03192)              | Jan 2026 | Non-parametric Q-learning: cross-model transferable              | Continuous memory optimization from user feedback               |
| Omni-SimpleMem (arXiv 2604.01007)     | Apr 2026 | Autonomous research-guided optimization: F1=0.613                | Hot/cold storage, self-optimizing memory parameters             |
| Trinity (arXiv 2602.09947)            | Feb 2026 | Deterministic control plane for untrusted LLMs                   | Graduated autonomy with architectural safety guarantees         |
| Graphiti/Zep (arXiv 2501.13956)       | Jan 2025 | Bi-temporal knowledge graph: 94.8% DMR accuracy                  | Temporal memory substrate on FalkorDB                           |
| LazyGraphRAG (Microsoft, Jun 2025)    | Jun 2025 | 99.9% indexing cost reduction, query-time synthesis              | Cost-effective global synthesis queries                         |
| GLiNER2 bi-encoder (arXiv 2602.18487) | Feb 2026 | 130× throughput, million-label NER                               | Entity extraction at scale on CPU                               |
| GAAMA (arXiv 2603.27910)              | Mar 2026 | Verbatim episodes + atomic facts + reflections                   | Memory consolidation pipeline                                   |
| ProAgentBench (arXiv 2602.04482)      | Feb 2026 | First proactive agent benchmark: timing vs content               | Proactive notification design                                   |
| HippoRAG 2 (ICML 2025)                | Feb 2025 | Outperforms NV-Embed-v2, <10% GraphRAG cost                      | Multi-hop reasoning upgrade path                                |
| KGCompass (arXiv 2503.21710)          | Mar 2026 | Repository-aware KG: 45.67% repair rate at \$0.20                | Code knowledge graph construction                               |
| AutoSchemaKG (arXiv 2505.23628)       | May 2025 | Zero-intervention schema induction: 92% alignment                | Domain-agnostic ontology discovery                              |
| DSPy/MIPROv2 (Stanford NLP)           | Feb 2026 | Programmatic prompt optimization: ~\$2/run                       | Automated quality improvement across all agents                 |
| SoK: Agentic RAG (arXiv 2603.07379)   | Mar 2026 | POMDP formalization of agentic retrieval                         | Retrieval pipeline design principles                            |
| ACE (arXiv 2510.04618)                | 2025     | Generator-Reflector-Curator loop: +10.6%                         | Self-improvement without fine-tuning                            |
| CausalFusion (Nature, 2026)           | 2026     | Multi-source KG entity resolution: 91.2% precision               | Cross-source entity merging                                     |
| PMAx (arXiv 2603.15351)               | Mar 2026 | Autonomous agentic process mining                                | Procedural memory discovery                                     |
| LifeBench (arXiv 2603.03781)          | Mar 2026 | Multi-source memory benchmark: best=55.2%                        | Evaluation target for non-declarative reasoning                 |

---

## Part XIII: code knowledge graph layer

The engineering intelligence pack's most distinctive capability is a structured code knowledge graph built from deterministic AST parsing — not LLM extraction.

### Why AST-derived graphs, not LLM-extracted

The January 2026 benchmark "Reliable Graph-RAG for Codebases" (arXiv 2601.08773) is architecturally decisive: deterministic AST-derived graphs achieved **15/15 answer correctness** vs 13/15 for LLM-extracted KGs and 6/15 for no-graph approaches. AST graphs built in **2.81 seconds** vs 200.14 seconds for LLM extraction (71× faster). LLM extraction **skipped 31.2% of files** due to extraction failures, creating dangerous blind spots. At scale, LLM-extracted KG costs reached 45.64× baseline vs 2.25× for AST graphs.

### Implementation

**Tree-sitter** provides language-agnostic AST parsing for all major languages. A two-pass extraction creates the code graph:

- **Pass 1 (Discovery):** Parse all files, register project-local types (classes, interfaces, enums, functions, modules)
- **Pass 2 (Relationship extraction):** Walk ASTs again, emitting typed edges: `CALLS`, `IMPORTS`, `EXTENDS`, `IMPLEMENTS`, `INJECTS`, `DEPENDS_ON`, `DEFINES`, `CONTAINS`

**FalkorDB CodeGraph** (updated April 2026) can be used directly for this — it already converts Git repositories into queryable FalkorDB graphs with these exact node and edge types.

**Bidirectional traversal with InterfaceConsumerExpand** — critical for Java/TypeScript dependency injection codebases — pulls in consumers of implemented interfaces during upstream discovery queries. "What would break if we changed this interface?" becomes a graph query, not a grep.

**Semantic enrichment layer:** On top of the deterministic structural graph, LLM extraction adds docstrings, code purpose summaries, design intent annotations, and natural-language descriptions of complex functions. These are stored as node properties, not structural edges — preserving the deterministic backbone while adding semantic richness.

**KGCompass integration** (March 2026): Repository-aware KG unifying code entities with repository artifacts (issues, PRs, CI runs). On SWE-Bench-Lite, 69.7% of successfully localized bugs required multi-hop KG traversals — confirming that graph structure (not just embedding search) is essential for code understanding.

**Code-Craft hierarchical summarization** (April 2026): Language Server Protocol-based hierarchical code graph summarization (function → class → module → package → repo) providing natural abstraction layers. Up to 82% relative improvement in top-1 retrieval precision for large codebases.

### Code graph refresh strategy

Full re-parse on webhook (push events). Tree-sitter parses a 100K-line codebase in under 2 seconds. Incremental updates via git diff: only re-parse changed files, update edges for modified function signatures and imports. FalkorDB's in-memory graph makes sub-second updates practical.

---

## Part XIV: intelligence pack architecture

> **Full detail:** See [gnovi-intelligence-pack-architecture.md](./gnovi-intelligence-pack-architecture.md) for automatic domain discovery, self-generating configuration, ambiguity handling, and the complete pack lifecycle.

An intelligence pack is a structured configuration package that adapts Gnovi's domain-agnostic engine to a specific vertical. It contains zero custom code — only configuration, templates, and pre-trained patterns.

### Pack structure

```
intelligence-packs/
└── engineering/
    ├── pack.yaml                  # Metadata, version, dependencies
    ├── schema/
    │   ├── entity_types.yaml      # Pre-configured entity types
    │   ├── relationship_types.yaml # Pre-configured relationship types
    │   └── extraction_rules.yaml  # Domain-specific extraction patterns
    ├── connectors/
    │   ├── priority.yaml          # Which connectors to enable first
    │   └── field_mappings.yaml    # Source field → entity type mappings
    ├── agents/
    │   ├── personas.yaml          # Agent personality/expertise config
    │   └── workflows.yaml         # Pre-built multi-step workflows
    ├── templates/
    │   ├── findings.yaml          # Proactive finding templates
    │   └── reports.yaml           # Periodic report templates
    └── prompts/
        ├── triage.yaml            # Domain-specific triage instructions
        └── synthesis.yaml         # Domain-specific analysis prompts
```

### Engineering intelligence pack contents

**Entity types:** `repository`, `service`, `api_endpoint`, `pull_request`, `incident`, `deployment`, `sprint`, `architectural_decision`, `tech_debt_item`, `runbook`, `on_call_rotation`, `code_review`, `ci_pipeline`, `feature_flag`

**Relationship types:** `OWNS` (person→service), `DEPENDS_ON` (service→service), `CAUSED` (deployment→incident), `RESOLVED_BY` (incident→pull_request), `DECIDED_IN` (architectural_decision→document), `BLOCKED_BY` (ticket→ticket), `REVIEWED_BY` (pull_request→person), `DEPLOYED_VIA` (service→ci_pipeline)

**Agent personas:** Architecture Advisor (draws on ADRs and design docs), Incident Investigator (correlates across PagerDuty, logs, deploys), Onboarding Guide (surfaces institutional knowledge for new team members), Code Archaeologist (explains why code exists and who knows about it)

**Creating new packs:** The "intelligence pack builder" (proprietary, Business+ tier) lets teams create custom packs from their organization's observed patterns. The system analyzes the accumulated knowledge graph and proposes entity types, relationship types, and agent workflows based on actual usage patterns. Teams review, edit, and export as a pack — usable by other organizations in the same vertical.

---

## Part XV: financial projections

Conservative projections assuming solo founder, no external funding, managed cloud launching Month 6.

| Month | Free Users | Paying Users | MRR      | LLM Costs  | Infra Costs | Net/mo   |
| ----- | ---------- | ------------ | -------- | ---------- | ----------- | -------- |
| 1-5   | 0-50       | 0            | \$0      | \$15 (dev) | \$0 (local) | -\$15    |
| 6     | 80         | 5            | \$75     | \$30       | \$130       | -\$85    |
| 7     | 120        | 12           | \$180    | \$50       | \$130       | \$0      |
| 8     | 180        | 22           | \$330    | \$80       | \$130       | \$120    |
| 9     | 250        | 35           | \$525    | \$120      | \$130       | \$275    |
| 10    | 350        | 50           | \$750    | \$160      | \$130       | \$460    |
| 11    | 500        | 70           | \$1,050  | \$220      | \$130       | \$700    |
| 12    | 700        | 100          | \$1,500  | \$300      | \$200       | \$1,000  |
| 15    | 2,000      | 250          | \$4,500  | \$750      | \$400       | \$3,350  |
| 18    | 5,000      | 500          | \$10,000 | \$1,500    | \$800       | \$7,700  |
| 24    | 15,000     | 1,200        | \$30,000 | \$4,000    | \$2,000     | \$24,000 |

**Key milestones:**

- **Break-even:** Month 7-8 (~\$180 MRR covers infrastructure)
- **Ramen profitable (\$3K/mo):** Month 14-15
- **\$100K ARR:** Month 15-16
- **Seed-ready:** Month 18-22 (\$120-360K ARR, 5K+ community users)

These projections assume 2-3% free-to-paid conversion (industry average for open-source: 1-5%), \$15 ARPU (Team tier only), and linear growth in early months accelerating after HN/community launches. Business and Enterprise tiers are not included — they represent upside.

---

## Part XVI: risk analysis

### Technical risks

| Risk                                                   | Severity   | Mitigation                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **FalkorDB stability/maturity**                        | Medium     | FalkorDB is younger than Neo4j; potential edge cases at scale. Mitigation: Graphiti already runs on FalkorDB in production (Zep customers). Architecture allows swapping to Neo4j or Kuzu via Graphiti's multi-backend support.                                                                                                                                           |
| **GLiNER2 extraction quality on domain-specific text** | Medium     | Zero-shot NER may underperform on specialized engineering jargon. Mitigation: Tiered extraction (structured → pattern → GLiNER → LLM fallback) means GLiNER failures cascade to LLM, not to silence. Fine-tune GLiNER on accumulated user-validated entities over time.                                                                                                   |
| **LLM cost overruns at scale**                         | High       | Agent systems make 3-10× more calls than chatbots. Mitigation: Aggressive prompt caching (90% reduction), model tiering (cheap for routing/triage), DSPy optimization, semantic caching (31% reduction), and BYOM shifts costs to users.                                                                                                                                  |
| **Memory consolidation quality**                       | Medium     | LLM-based fact extraction is imperfect; bad consolidation corrupts the knowledge graph. Mitigation: Kumiho belief revision catches contradictions. Low-confidence extractions require corroboration before promotion. Users can flag and correct errors. All consolidation is reversible.                                                                                 |
| **Research paper reproducibility**                     | Low-Medium | Many referenced papers are pre-prints, not peer-reviewed. Mitigation: Core architecture (Graphiti, FalkorDB, LangGraph, GLiNER) is production-proven open-source software, not papers. Research-derived components (MAGMA views, Kumiho revision, SwiftMem indexing) are Phase 3-5 additions with graceful degradation to simpler alternatives if papers don't reproduce. |

### Market risks

| Risk                                                    | Severity | Mitigation                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Glean drops pricing or launches free tier**           | High     | Glean's \$200M+ ARR and enterprise focus makes aggressive down-market moves unlikely (cannibalization risk). Mitigation: Gnovi's open-source self-hosted option is structurally unmatchable by a VC-funded SaaS company. Even if Glean offers free search, it won't open-source the graph.                                                      |
| **Microsoft/Google bundles equivalent functionality**   | High     | Copilot and Gemini for Workspace already exist. Mitigation: Platform bundling offers breadth, not depth. Copilot doesn't build a cross-tool knowledge graph. Gnovi's graph-native reasoning and learning systems are architecturally different from search-augmented chatbots. Open-source community provides distribution Microsoft can't buy. |
| **Engineering vertical contracts faster than expected** | Medium   | If AI truly replaces 50%+ of engineering roles by 2028, the addressable market shrinks. Mitigation: Domain-agnostic architecture from day one. Intelligence packs for other verticals are Phase 3. The knowledge graph engine is vertical-independent.                                                                                          |
| **Open-source competitors emerge**                      | Medium   | Another team could build a similar OSS knowledge graph platform. Mitigation: First-mover advantage in combining KG + memory + agents in OSS. Compounding learning subsystems create moat that grows over time. Contributor community and ecosystem create switching costs.                                                                      |

### Execution risks

| Risk                               | Severity  | Mitigation                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Solo founder bandwidth**         | Very High | The scope described here would take a 5-person team 18 months. Mitigation: Ruthless phasing — Phase 1-2 are a functional, useful product without MAGMA, Kumiho, SwiftMem, or learning subsystems. Those are Phase 3-5 differentiation layers. Ship early, iterate based on user feedback. Use Claude Code aggressively for implementation. |
| **Community fails to materialize** | Medium    | Many OSS projects never gain traction. Mitigation: Build in public from day one. Write genuinely useful technical content. Engage on HN, Reddit, Discord. The project is technically novel enough (knowledge-graph-native, not RAG-with-a-graph-bolted-on) to generate organic interest. Target 1,000 stars before expecting revenue.      |
| **Burnout**                        | High      | 18-month solo execution on a complex system is grueling. Mitigation: Phase aggressively — a useful product exists at Phase 2 (week 16). Revenue begins Phase 4 (week 25-32). If the project has traction, fundraise to hire. If not, the open-source contribution stands on its own.                                                       |

---

## Part XVII: UI/UX strategy (research required)

> **ACTION ITEM:** Conduct dedicated UI/UX research before implementation. The UI assumptions in v1.0 (chat + graph explorer + settings) were premature. Emerging patterns suggest a fundamentally different approach.

**Current thinking based on initial research:**

The dominant 2025-2026 pattern for AI+KG products is **invisible knowledge graph, visible intelligence** — users experience better search, recommendations, and contextual awareness without directly interacting with graphs. Gnovi's UI should follow a **three-layer architecture:**

1. **Ambient layer (passive):** Proactive cards, notifications, and contextual insights that surface without user action. Flow-state-aware timing. The system acts as a "knowledge shield" — answering questions _about_ the user's work domain so colleagues don't interrupt them, and surfacing relevant context _before_ the user realizes they need it. Design pattern: notification stream with tiered urgency, not a traditional dashboard.

2. **Command palette layer (active):** A ⌘+K command palette (Linear/Raycast-style) unifying entity search, agent commands, navigation, and natural language queries in a single keyboard-first input. This replaces the traditional chat interface for most interactions — faster, less context-switching, and more aligned with how developers already work.

3. **Analytical layer (optional):** Graph exploration view shown only when spatial/relational context adds genuine value. NOT a default view. Must provide actionable structural insights (community detection, dependency analysis, knowledge gap identification) or it should not be shown. Obsidian's graph view is "essentially decorative" without analytical depth — a cautionary example.

**As proactive tasks and automation grow**, the UI must evolve to handle: agent activity streams (what agents are doing in the background), trust calibration interfaces (adjusting autonomy levels per action type), knowledge evolution timeline (what changed in the graph and why), and multi-agent coordination visibility. These are novel UX challenges with no established patterns.

**Research topics to investigate before Phase 2 implementation:**

- Ambient AI interface patterns (Microsoft's Agent UX Design Principles, April 2025)
- Benjamin Prigent's 7 UX patterns for ambient AI agents
- LangChain's Agent Inbox proposer-critic pattern
- AGENTiGraph conversational + spatial hybrid interface
- Linear's command palette implementation patterns
- GitHub Next's proactive suggestion UX research
- Trust calibration UI patterns from autonomous vehicle interfaces
- Knowledge graph visualization that provides analytical value (InfraNodus, not Obsidian)

---

## Part XVIII: open questions and future directions

### Resolved with recommendation

1. **MAGMA implementation approach:** **Recommendation: typed edges within a single FalkorDB named graph per tenant.** Rationale: FalkorDB named graphs already provide tenant isolation. Adding 4× graph instances per tenant (one per MAGMA view) would quadruple memory usage and complicate cross-view queries (which are the most valuable — "what entity is causally linked to this temporal event?"). Typed edges (`edge_type IN ['semantic', 'temporal', 'causal', 'entity']`) with the Adaptive Traversal Policy filtering by edge type achieves the same routing benefit at zero additional infrastructure cost. The query-intent classifier (cheap model) selects which edge types to traverse. If benchmarking in Phase 5 reveals that edge-type filtering adds unacceptable latency to large graphs, the separate-graph approach can be reconsidered — the data model is identical either way.

2. **A2A protocol integration:** **Recommendation: implement A2A-compatible agent card and task interface in Phase 5.** A2A (Agent-to-Agent, Google + 150+ partners) provides agent discovery via `.well-known/agent.json`, task lifecycle management, and capability negotiation. Gnovi agents should expose an A2A agent card describing their capabilities so customer-side agents can discover and delegate tasks to Gnovi. The protocol is JSON-RPC-based and lightweight to implement. This is not urgent (the protocol is still maturing) but the interface design should be considered from Phase 3 onward.

3. **Formal verification of trust profiles:** **Recommendation: defer to post-seed.** VeriGuard-style Hoare triple verification requires translating natural language policies into formal specifications and running them through a theorem prover (Nagini/Viper). This is powerful for enterprise audit compliance but adds significant implementation complexity. The Trinity deterministic control plane (POC-7) provides strong safety guarantees without formal verification. Formal verification is a Phase 5+ Enterprise tier differentiator.

### Remaining open — requires future research

4. **Multi-modal ingestion:** Architecture diagrams, whiteboard photos, and meeting recordings contain high-value knowledge that text-only ingestion misses. Cohere Embed v4 supports text+image unified embedding. Whisper/Deepgram handle audio transcription. The extraction pipeline is designed for extensibility (new modality = new Tier 1 extractor). **Decision point:** Phase 4 — evaluate whether customer demand justifies multi-modal ingestion before investing. The pipeline architecture supports it without structural changes.

5. **Graph neural networks for embeddings:** Node2Vec, FastRP, or GNN-based approaches could incorporate graph structure into entity embeddings, potentially improving entity resolution and similarity search. **Risk:** computational cost may be prohibitive for real-time updates. **Decision point:** Phase 5 — benchmark against standard embedding approaches on Gnovi's actual graph topology. If improvement is <5% F1, not worth the complexity.

6. **Cross-tenant pattern sharing:** An opt-in anonymized model where tenants contribute non-identifying heuristics back to curated per-vertical starter packs could significantly reduce cold-start time. **Risk:** even anonymized schema structures reveal strategic information about what organizations track. **Decision point:** Post-PMF. Requires privacy review, legal analysis, and user trust that only comes with established reputation.

7. **Digital twin of engineering processes:** The organizational knowledge graph naturally evolves toward a predictive model of how the engineering org works — predicting which PRs will be delayed, which services will have incidents, and which team members are approaching burnout. This "organizational world model" framing is compelling for fundraising. **Decision point:** Phase 5+ — build toward it incrementally through temporal knowledge tracking and causal discovery. Do not promise it until the KG has enough data to make predictions that are measurably better than random.

---

_Gnovi: "I have known." Knowledge acquired, retained, and compounded — the intelligence layer that understands how work connects._
