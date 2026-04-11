# AI workplace assistants in 2026: market intelligence reference

> **Status:** Reference document — competitive landscape and market data as of April 2026
> **Note:** This document is retained for its granular competitive data. The Gnovi Founding Blueprint incorporates key findings; this provides the full detail for investor conversations and strategic analysis.

**The enterprise AI assistant market has reached \$3.35 billion in 2025 and is projected to hit \$21.11 billion by 2030 (44.5% CAGR), yet the space remains wide open for a knowledge graph-native, self-improving product.** The dominant incumbents — Microsoft Copilot and Google Gemini — are winning on distribution but losing on satisfaction, with Copilot posting a **negative NPS of -19.8 on accuracy** and only 35.8% of provisioned licenses converting to active users. Glean is the only pure-play competitor that has built a knowledge graph as its core architecture, reaching \$200M ARR and a \$7.2B valuation, but it serves large enterprises and leaves the mid-market underserved. Meanwhile, 88% of organizations use AI but only 6% have achieved meaningful EBIT impact — revealing a massive gap between adoption and value that a compounding intelligence product like Gnovi could fill.

---

## The competitive landscape is bifurcating between distribution and quality

The market has split into two camps: platform incumbents bundling AI into existing suites (Microsoft, Google) with massive distribution but mediocre user satisfaction, and AI-native tools (Glean, Dust, Notion AI) with superior experiences but narrower reach.

**Glean** is the most relevant direct competitor to Gnovi. Valued at **\$7.2 billion** after its June 2025 Series F, Glean surpassed \$200M ARR and explicitly pivoted from enterprise search to a knowledge graph-first architecture. In September 2025, it launched the **Enterprise Graph** — combining a company-wide knowledge graph with a personal graph per employee that captures relationships between people, content, workflows, and applications. Glean's 100+ enterprise connectors, 15+ LLM support, and agentic capabilities (powering 100M+ agent actions annually) make it the clear leader among pure-play enterprise AI search platforms. Its weaknesses are opacity on pricing, an enterprise-only focus that excludes mid-market buyers, and its graph is built for search and retrieval rather than autonomous action.

**Microsoft 365 Copilot** commands the largest installed base with **15 million paid seats** and presence across 70% of Fortune 500 companies. But the numbers beneath the headline are damning: only **35.8% activation rate**, a paid subscriber market share that contracted 39% in six months (from 18.8% to 11.5%), and when employees have access to both Copilot and ChatGPT, **76% choose ChatGPT**. At \$30/user/month on top of existing M365 licensing (\$47–87 total cost), it's expensive relative to satisfaction. Copilot's strengths remain compliance (SOC 2, HIPAA, FedRAMP) and deep M365 integration — making it the default in regulated industries regardless of quality.

**Google Gemini for Workspace** has quietly gained ground through aggressive bundling — AI features are now included in base Workspace plans at no extra cost. Gemini surpassed Copilot in paid subscriber share by January 2026 (**15.7% vs. 11.5%**). Its 1M+ token context windows, real-time speech translation across 100+ language pairs, and NotebookLM (with 13x usage growth in 2025) represent genuine capability advantages. The limitation remains ecosystem lock-in and less mature enterprise governance compared to Microsoft.

**Notion AI** has broken free of its walled garden. With Notion 3.0 (September 2025), it launched autonomous AI agents, Enterprise Search across connected tools (Slack, Google Drive, GitHub, Salesforce, Jira), and MCP integrations. Multi-model support (GPT-5, Claude Opus 4.1, o3) gives users best-of-breed AI. At a **\$10 billion valuation** and serving 85% of Fortune 500 teams, Notion is becoming a serious platform — but its AI quality depends entirely on workspace content richness.

**Dust.tt** stands out for capital efficiency: **\$7.3M ARR on just \$21.5M raised**, backed by Sequoia. Its model-agnostic agent builder at **€29/user/month** targets mid-market European tech companies with specialized "fleets of agents" rather than a single general-purpose assistant. **Moveworks** was acquired by ServiceNow for **\$2.85 billion** in 2025, validating the enterprise AI assistant category but creating platform lock-in risk as it merges into the ServiceNow ecosystem. **Guru** remains strong for knowledge verification workflows but requires heavy content maintenance and lacks conversational AI. **Mem.ai** has pivoted to a personal "AI Thought Partner" — not an enterprise play.

The most important new entrants are **Salesforce Agentforce** (ranked #1 on G2's 2026 Best Agentic AI Software, with CRM-native autonomous agents), **Atlassian Rovo** (AI embedded in Jira/Confluence), and **Amazon Q Business** (40+ data connectors but reportedly "significantly behind competitors" on accuracy per internal Amazon documents).

---

## Market sizing confirms a generational opportunity

The enterprise AI assistant market is growing at rates rarely seen in enterprise software. MarketsandMarkets sizes the AI assistant market at **\$3.35 billion in 2025, reaching \$21.11 billion by 2030** at a 44.5% CAGR. The broader knowledge management software market sits at **\$20–26 billion in 2025** and is projected to reach \$60–92 billion by 2033 at 12–18% CAGR, with AI integration as the primary growth catalyst.

Adoption has crossed the tipping point. **88% of organizations** now use AI in at least one function (up from 55% in 2023), according to McKinsey's 2025 State of AI survey. **75% of knowledge workers** use AI tools regularly, and **46% of enterprise leaders** use GenAI daily — up 17 percentage points year-over-year per the Wharton/GBK 2025 AI Adoption Report. **92% of companies** plan to increase AI investment over the next three years.

But the gap between adoption and impact remains vast. McKinsey finds that only **6% of organizations are "AI high performers"** attributing more than 5% of EBIT to AI. Two-thirds haven't begun scaling beyond pilots — what analysts call **"pilot purgatory."** Forrester reports only **15% of AI decision-makers** achieved EBITDA lift in the past 12 months. This disconnect creates the opening: enterprises are spending aggressively (\$87% of CIOs increasing AI budgets per Gartner) but struggling to extract value, particularly because existing tools optimize for individual tasks rather than compounding organizational intelligence.

VC funding reflects conviction. AI captured **\$211 billion in venture funding in 2025** — over 50% of all global VC for the first time. Within the application layer, Menlo Ventures counts at least **10 AI products generating over \$1B ARR** and **50 products over \$100M ARR**. The enterprise application layer specifically reached \$19 billion, with copilots commanding 86% (\$7.2B) and agent platforms growing rapidly at 10% (\$750M). Crucially, **76% of enterprise AI use cases** are now purchased rather than built internally (up from 53% in 2024), signaling that buyers want polished products, not platforms requiring heavy customization.

---

## Knowledge graphs are the architecture that unlocks compounding intelligence

The technical differentiation question is clear: **pure RAG/vector search is necessary but insufficient for enterprise-grade AI**. Benchmarks show GraphRAG achieves **80% accuracy versus 50% for standard vector RAG** across finance, healthcare, industry, and law domains (Lettria/AWS, December 2024). Microsoft Research demonstrated that GraphRAG uses up to **97% fewer tokens** while providing more comprehensive answers. The advantage grows with query complexity — simple lookups see minimal benefit, but multi-hop reasoning and cross-document synthesis show dramatic outperformance.

Gartner predicted that graph technologies would be used in **80% of data and analytics innovations by 2025**, up from 10% in 2021, and has moved knowledge graphs into the "Slope of Enlightenment" on its Hype Cycle for AI. Neo4j, the leading graph database, surpassed **\$200M ARR** at a \$2 billion valuation, serving 84% of Fortune 100 companies. The graph database market is projected to grow from \$2.85 billion in 2025 to \$20 billion by 2034 at a 24% CAGR.

Yet among AI workplace assistants, **Glean is essentially the only competitor with a knowledge graph as its core architecture**. Most competitors — Microsoft Copilot, Google Gemini, Guru, Amazon Q — rely primarily on RAG/vector search. ServiceNow is moving toward knowledge graphs through its acquisition of Data.World (a graph-native data catalog) for its Knowledge 2025 platform, and SAP announced an SAP Knowledge Graph on HANA in October 2024. But neither has shipped a graph-first workplace assistant.

The case for knowledge graphs in enterprise is well-documented. A sales organization case study found that a **1% decrease in time spent searching for customer information** by sales reps produced **\$6.24 million in annual savings**. Pharmaceutical companies (Roche, Novartis, Servier) use knowledge graphs to connect clinical trial data across thousands of sources, reducing drug discovery timelines. In M&A, graph-based deduplication achieved **80% record reduction with 95% accuracy** across ~10 billion records.

The concept of **"compounding intelligence"** — systems that demonstrably improve with use — is widely discussed but rarely proven with hard metrics. Glean claims its Enterprise Graph "continuously learns and improves over time," and its personal graphs learn individual work patterns. But most implementations remain theoretical. The knowledge graph architecture is naturally suited to compounding intelligence because it explicitly accumulates entity relationships, patterns, and outcomes as a persistent, traversable layer — unlike vector search, which is fundamentally stateless. A proposed diagnostic test: "If I run the same query through your system today and six months from now, will the reasoning be materially different?" Few products can answer yes. **Microsoft's LazyGraphRAG** (June 2025) reduced graph indexing costs to **0.1% of full GraphRAG**, removing one of the biggest adoption barriers.

---

## Agentic AI is real but trust remains the binding constraint

The agentic AI market reached **\$7.29 billion in 2025** and is projected to hit \$139 billion by 2034 at a 40% CAGR. **44% of companies** are deploying or assessing AI agents (NVIDIA), and **50% are piloting** with 24% in production (Forrester Q4 2025). Gartner predicts **40% of enterprise applications** will feature task-specific AI agents by end of 2026, up from less than 5% in 2025.

The enterprise platforms have shipped agentic capabilities at scale. Microsoft reports **160,000+ organizations** created **400,000+ custom agents** through Copilot Studio. Salesforce's Agentforce deployed to "thousands of brands" in its first quarter with an Atlas Reasoning Engine for multi-step autonomous decisions. ServiceNow launched an AI Agent Orchestrator and AI Control Tower. AWS offers a marketplace with **900+ pre-built agents**.

But the trust gap is enormous. Only **22% of decision-makers** trust autonomous AI to make decisions without human oversight (McKinsey). **80% of organizations** have encountered risky behavior from AI agents. A Fortune roundtable mapping 180 companies across maturity phases found approximately 50% in experimentation, 25% formalizing, 13% scaling — and **zero companies at full autonomy**. The security picture is alarming: the average enterprise has **~1,200 unofficial AI applications** in use, **86%** report no visibility into AI data flows, and shadow AI costs **\$670,000 more per breach** than standard incidents.

**Graduated autonomy is emerging as the consensus framework.** Multiple vendors and consultancies have converged on staged models:

- **MightyBot's three levels**: Audit (AI executes, humans review everything) → Assist (AI handles routine, humans clear exceptions) → Automate (AI operates end-to-end, humans monitor)
- **Maven AGI's "Crawl, Walk, Run"**: copilot → expanded autonomy → full backend actions
- **McKinsey's principle from 50+ agentic builds**: "Design for trust first, speed second. Start with bounded autonomy, keep humans accountable for high-impact decisions, and scale only when monitoring shows predictable behavior."

Products implementing this well use confidence thresholds (triggering human intervention when AI confidence drops below **85%**), monetary caps on autonomous actions, and separation of duties between collaborating agents. The transition between autonomy levels is data-driven — accuracy rates, override frequency, and confidence scores determine progression, not arbitrary timelines.

On self-improvement, **RLHF has become the default alignment strategy** with ~70% of organizations adopting it (up from 25% in 2023). Google Cloud identified "learning loops" as a key 2025 breakthrough, noting that agents can "shadow experts, learn, evolve, and sometimes surpass humans." NeurIPS 2025 documented five self-improvement patterns now moving from research to production: self-reflection, self-generated training data, self-adapting models, self-improving code agents, and constitutional AI. The critical risk is "learning the wrong lessons" — agents optimizing for easy wins rather than business value.

---

## The pain points are massive, quantified, and worsening

The data on knowledge worker productivity loss is staggering and creates the core business case for a product like Gnovi. Knowledge workers spend **20–30% of their workday** searching for information — estimates range from 1.8 hours/day (McKinsey) to 3.6 hours/day (Coveo 2022), with a 2025 Bloomfire/HBR study finding workers spend **21% of time searching** for knowledge and **14% recreating** information they couldn't find. That's **35% of every workday lost to information friction**.

**Information overload costs the global economy approximately \$1 trillion per year** (Rensselaer Polytechnic Institute, 2024). The average employee now receives **117 emails and 153 Teams messages daily** and is interrupted **every 2 minutes** — 275 interruptions per day during core hours (Microsoft Work Trend Index 2025). Only **43% of work time** is spent creating; the majority goes to communication overhead.

Context switching alone costs the US economy an estimated **\$450 billion annually**. The average digital worker toggles between apps **1,200 times per day** (HBR/Soroco, Fortune 500 research), requiring **9.5 minutes** to regain productive flow after each switch (Qatalog/Cornell) or up to **23 minutes** after a significant interruption (UC Irvine). Workers lose nearly **4 hours per week** reorienting after app switches — roughly **5 working weeks per year**.

Institutional knowledge loss compounds these costs. **42% of institutional knowledge is unique to the individual** and is effectively lost when that person leaves (Panopto). The average large US business loses **\$47 million per year** in productivity from inefficient knowledge sharing. A 2025 Enboarder survey found **47% of organizations** cite institutional knowledge loss as their top offboarding challenge, with 41.6% of HR leaders estimating inconsistent offboarding costs up to **\$500,000 annually**. New hires operate at just **25% productivity** during their first 30 days and take **6–12 months** to reach full effectiveness.

Tool sprawl makes everything worse. The average enterprise now uses **130–370 SaaS applications** (depending on size), spends **\$49 million annually** on SaaS (\$4,830 per employee), and wastes up to **\$21 million per year** on unused licenses. Shadow IT accounts for **33–40% of all SaaS usage**, outside IT control. Poor knowledge management costs Fortune 500 companies an estimated **\$31.5 billion annually** (IDC), and Bloomfire's 2025 HBR-published research calculates that inefficiency costs the average business **25% of annual revenue** — translating to **\$2.4 billion in enterprise value** lost annually for a typical Fortune 500 company.

---

## What enterprise buyers actually want and where Gnovi fits

Enterprise buyer sentiment in 2026 crystallizes around seven priorities, based on surveys from A16z (100 CIOs), KPMG (quarterly pulse), and Fortune (123 senior operators):

- **Measurable ROI before expansion** — products that instrument their own impact (surfacing time savings, showing before-and-after metrics) win renewals; the inability to measure AI value is the #1 reason purchases stall
- **Cross-platform context** — buyers want AI that understands organizational structure, relationships, and projects across tools, not point solutions for single apps
- **Data governance and trust as table stakes** — this has surpassed capability as the #1 blocker; nearly half of IT leaders lack confidence in managing AI security/access risks
- **Model flexibility** — lock-in to a single LLM provider is a dealbreaker; MCP is becoming the standard connective protocol
- **Agentic capabilities with guardrails** — the shift from "AI that answers" to "AI that does work" is the defining trend, but only with graduated autonomy
- **Consolidation, not proliferation** — VCs predict enterprises will spend more on AI through fewer vendors in 2026; buyers want platforms that replace multiple point solutions
- **Easy deployment** — 76% now prefer buying over building; complex setup is a disqualifier

The strategic positioning opportunity for Gnovi sits precisely in the gap the data reveals: **enterprises have adopted AI (88%) but haven't achieved compounding value (6% high performers)**. The reason is architectural — existing products are either platform-locked (Copilot, Gemini), search-first rather than knowledge-first (most competitors), or enterprise-only with opaque pricing (Glean). A knowledge graph-native product that builds compounding intelligence across the full tool ecosystem, starts with graduated autonomy that earns trust through demonstrated accuracy, and makes its own ROI visible to buyers would address the exact failure modes holding back the current generation of AI workplace assistants. Glean has proven the knowledge graph thesis at \$200M ARR and \$7.2B valuation — but the market at \$3.35B growing to \$21.1B by 2030 has room for a product that brings this architecture to the broader market with a fundamentally different autonomy model.
