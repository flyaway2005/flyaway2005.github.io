import type { Project } from '../types/project';

export type { Project, ProjectCategory, ProjectType } from '../types/project';

export const projects: Project[] = [
  {
    slug: "h-ai-ring",
    title: "H-ai-Ring Talent: AI-Driven Recruitment Workflow",
    category: "agentic-ai",
    projectType: "group",
    context: "CS 615 Agentic AI — SMU MITB",
    summary: "A 9-agent system redesigning end-to-end headhunting as human-AI collaboration, projecting 2x recruiter productivity and doubled pipeline conversion.",
    techStack: ["CrewAI", "FastAPI", "Next.js", "TypeScript", "OpenAI GPT-4o-mini", "Whisper", "SQLite", "JWT Auth"],
    skills: ["Agentic AI", "CrewAI", "OpenAI API", "OpenAI API", "GPT-4o"],
    featured: true,
    businessContext:
      "Recruiters managing a high-volume pipeline juggle a fragmented workflow: manually parsing resumes and job descriptions, drafting outreach one candidate at a time, running screening interviews without structured guidance, and comparing finalists from memory rather than evidence. Much of this is repetitive enough to automate, freeing recruiters to spend their time and judgment on higher-value conversations instead. Agentic AI Recruiter is an internal platform for recruiters and hiring teams that turns this into a structured, end-to-end system. Specialised agents each own one stage of the pipeline.",
    myContribution:
      "Mapped the end-to-end headhunting process from 4+ years of hands-on recruiting experience, then deconstructed it into discrete decision points to determine what could be fully automated, what required human judgment, and where handoffs between agent and recruiter needed to happen. Designed the original 5-agent architecture and handoff logic from that breakdown, which was later extended to a 9-agent system with full technical implementation in CrewAI, LangChain, and Python.",
    methodology:
      "Multi-agent orchestration with task-specialised agents covering resume parsing, personalised candidate outreach, interview assistance, and evaluation scoring, each mapped to a discrete step in the original workflow breakdown.",
    keyResults:
      "Projected 2x recruiter productivity, halved time-to-placement, and doubled pipeline conversion rate from 20% to 40%.",
    takeaway:
      "Demonstrates the ability to deconstruct a human workflow into its component decisions, then redesign it as a human-AI collaboration: identifying which steps an agent can fully own, which still need human judgment, and how the handoffs between them should work. That's task reallocation and workflow redesign, not just model building, and it's the core skill behind any AI enablement initiative, regardless of domain.",
    reportEmbedId: "",
  },
  {
    slug: "rag-testing-framework",
    title: "A Testing Framework for Q&A RAG Systems",
    category: "llm",
    projectType: "group",
    context: "CS 610 Applied Machine Learning — SMU MITB",
    summary: "A hallucination evaluation framework generating 50,000 synthetic QA pairs to benchmark RAG system reliability, quantifying a 16x latency cost for a more accurate reasoning model.",
    techStack: ["Python", "Qwen2.5", "RAG"],
    skills: [
      "Python (Pandas, Scikit-learn, PyTorch)",
      "RAG",
      "Qwen2.5",
    ],
    featured: false,
    businessContext:
      "Enterprises deploying RAG systems lack standardised ways to evaluate factual reliability. Without rigorous benchmarking, model selection defaults to heuristics rather than data.",
    myContribution:
      "Built the synthetic QAC (Question-Answer-Context) dataset generation pipeline end-to-end: conducted EDA on the underlying SQuAD2.0 dataset to understand answer distribution and question structure, then designed the sampling strategy, answer-shuffling logic to construct hallucinated samples, and H/NH labelling process. Also analysed the resulting synthetic dataset itself, including hallucination ratio distribution across titles and title/context overlap between hallucinated and non-hallucinated samples, to validate dataset quality before it was used for downstream evaluation. The pipeline produced 50,000 paraphrased QA pairs used to tune and evaluate the hallucination detection system.",
    methodology:
      "Title-based stratified sampling from SQuAD2.0, answer-shuffling to construct labelled hallucinated samples, and LLM-based paraphrasing to scale the evaluation set. LettuceDetect was tuned across confidence thresholds and benchmarked against DeepSeek-r1 and Qwen2.5-based RAG responses for correctness and inference latency.",
    keyResults:
      "LettuceDetect peak F1 of 0.696 at a 0.95 confidence threshold. DeepSeek-r1 showed higher correctness than Qwen2.5 but took 16x longer to respond (52.81s vs. 3.27s average), quantifying a concrete accuracy-latency trade-off for production RAG model selection.",
    takeaway:
      "Demonstrates the ability to build evaluation infrastructure from scratch, not just consume existing benchmarks: constructing a labelled synthetic dataset, validating its quality, and using it to produce a data-grounded answer to a real deployment question. That same approach, building the right test data before trusting a model's output, applies to evaluating any LLM or AI system before it goes into production, regardless of domain.",
    reportEmbedId: "https://drive.google.com/file/d/1hJ-JaPlACeDPkX6FQlIcN_X3nOD108iq/preview",
  },
  {
    slug: "resume-classification",
    title: "Resume Classification Using Supervised Fine-Tuning",
    category: "llm",
    projectType: "personal",
    context: "CS 614 Gen AI with Large Language Models — SMU MITB",
    summary: "Fine-tuned TinyLlama-1.1B to auto-classify resumes into 5 technical categories, achieving 71.4% accuracy in 12 minutes of training.",
    techStack: ["TinyLlama-1.1B", "LoRA", "PEFT", "Hugging Face", "Pytorch", "DistilBERT", "Transformers", "Prompt engineering"],
    skills: [
      "Python (Pandas, Scikit-learn, PyTorch)",
      "LLM Fine-tuning (LoRA/PEFT)",
      "Hugging Face",
      "Prompt Engineering",
      "TinyLlama-1.1B",
      "Pytorch",
      "Transformers",
      "DistilBERT",
    ],
    featured: false,
    businessContext:
      "Recruiters accumulate hundreds of resumes across hiring cycles, but without persistent classification tags, finding the right past candidate when a similar role opens means manually re-screening the entire database. Turning an unstructured resume collection into a searchable, categorised talent pool needs more than one-time screening, it needs a classifier that runs reliably across the whole archive. With only 181 labelled examples and a free-tier GPU budget, fine-tuning a small open-source model was the more realistic path than calling a large LLM API per resume.",
    myContribution:
      "Ran the project end-to-end across five experiments. Started with prompt engineering on TinyLlama-1.1B: an initial version failed completely (0% accuracy, the model returned full resume text instead of a label), and redesigning the prompt to explicitly constrain output to a single category lifted accuracy to 66.7%. Scaled to the full 181-sample dataset with LoRA/PEFT fine-tuning, reaching 71.4% test accuracy, the best result across all experiments. Diagnosed that the dataset's 8.75:1 class imbalance was driving most remaining errors (87.5% of misclassifications collapsed into the majority class), then tested three corrective approaches: weighted loss on TinyLlama (failed during training due to gradient instability), over-sampling the minority classes (made accuracy worse and triggered overfitting, evidenced by a validation-test gap and incoherent multi-label outputs), and switching to a DistilBERT classification head (worst result, predicting the majority class for every single test sample). Concluded that standard fine-tuning on the original, imbalanced dataset outperformed all three interventions.",
    methodology:
      "Five-experiment design: baseline prompt engineering (V1 vs. V2 prompt structure), standard LoRA/PEFT fine-tuning on the full dataset, then three class-imbalance interventions tested against that baseline, weighted cross-entropy loss with a custom training loop, minority-class over-sampling (126 to 350 samples), and a DistilBERT-based classifier with weighted loss. Each approach was evaluated on held-out validation and test accuracy under identical conditions (Google Colab T4 GPU, no paid API calls).",
    keyResults:
      "Standard LoRA fine-tuning achieved 71.4% test accuracy in 12 minutes of training, outperforming every class-imbalance correction attempted: weighted loss failed outright, over-sampling dropped accuracy to 67.9% with clear overfitting, and a DistilBERT alternative collapsed to 57.1%, predicting a single class for all test samples.",
    takeaway:
      "Demonstrates real experimental design on a real-world problem and a real, messy dataset, not a clean benchmark: structuring each experiment as a controlled comparison against the previous baseline, isolating exactly one variable at a time (prompt structure, then loss weighting, then sampling strategy, then model architecture), and using each result to diagnose the actual failure mechanism (gradient instability, overfitting, majority-class collapse) rather than guessing at fixes. That ability, designing the right comparison to isolate why something failed and what to try next, is what separates systematic model development from trial and error. The course instructor's feedback described it as among the best individual assignments seen in the course, citing sound model choices, training setup, and dataset effort.",
    reportEmbedId: "https://drive.google.com/file/d/1Or8oT8idHzDI0V_uaskk5sPcgbzoCBoi/preview",
    extraLinks: [
      {
        title: "Experiment Comparison",
        url: "https://wirehaired-attention-87b.notion.site/A1_Experiment-Comparison-285557ab448080d29942d2e208147979",
      },
    ],
  },
  {
    slug: "kg-rag-legal",
    title: "Knowledge Graphs and Retrieval-Augmented Generation for Family Courts Appeals Analysis",
    category: "llm",
    projectType: "group",
    context: "CS614 Group Project",
    summary: "A progression of retrieval systems, from vector-based RAG through a custom knowledge graph to an agentic reasoning layer, built and evaluated to test whether structured legal relationships could improve on standard RAG for multi-hop legal reasoning over Singapore Family Court judgments.",
    techStack: ["Neo4j", "Cypher", "Claude Sonnet 4.5", "Vector embeddings"],
    skills: ["Neo4j", "RAG"],
    featured: false,
    businessContext:
      "Singapore's Family Justice Courts handle complex cases such as divorce, custody, and division of matrimonial assets, producing judgments that are lengthy and dense with legal reasoning, footnotes, citations, and cross-references. Legal professionals must manually comb through these documents to locate facts that are often scattered and inconsistently phrased, then synthesize that information across multiple cases to build an argument, a process that is slow and error-prone. Retrieval-augmented generation (RAG) helps with the first part of that problem: it searches efficiently across large document collections and surfaces relevant passages. But legal reasoning depends on connecting principles and precedent across cases, not just matching keywords, and domain-specific language and cross-references can mislead semantic search in ways that make RAG weak at exactly the multi-step, synthesis-style questions lawyers actually need answered. Knowledge graphs were explored as a way to close that gap, since representing cases, arguments, and statutes as explicit, connected entities promised more accurate and explainable answers than retrieval over isolated text chunks. A team of five built and evaluated a progression of retrieval systems, from baseline RAG through a custom knowledge graph to an agentic and a LlamaIndex-based KG-RAG pipeline, across 94 Singapore Family Court judgments from 2024 to 2025.",
    myContribution:
      "I owned the self-curated knowledge graph component: defining the ontology, building and populating the Neo4j graph, and building the query pipeline that let it answer natural language questions. The graph covers five entity types (cases, persons, arguments, statutes, legal principles) and nine relationship types, populated from 94 judgments into 1,798 nodes and 3,229 relationships with no isolated nodes. I backfilled vector embeddings onto case, argument, and statute nodes to support hybrid retrieval that combines graph traversal with semantic similarity, and built a two-stage query pipeline that generates Cypher from natural language questions and extracts answers from the results.",
    methodology:
      "Defining the ontology meant reconciling how legal professionals actually reason, in terms of principles, precedent, and argument structure, with what could be reliably extracted from dense, cross-referenced judgment text. After settling on the five node types and nine relationship types, I extracted entities across all 94 judgments and validated the graph for completeness, resolving cases where the same person, statute, or principle was referenced under different phrasing. I then backfilled vector embeddings in batches onto case, argument, and statute nodes using their summary, outcome, and reasoning fields. The query layer uses a schema-aware prompt, documenting node and relationship types plus valid field values, to translate questions into Cypher, followed by a second prompt that extracts the final answer from the query results.",
    keyResults:
      "The graph achieved full coverage with no isolated nodes across 1,798 nodes and 3,229 relationships drawn from 94 judgments. Queried directly, the self-curated graph scored 0.186 on Factual Retrieval, well below the team's vector-based RAG baseline (0.63 to 0.69 depending on chunking strategy), with 0.045 on Analytical Reasoning and 0.000 on Legal Insight and Synthesis. This clarified that a well-constructed ontology and graph alone don't guarantee strong retrieval performance against a single static query, a limitation that motivated the team's later move to an agentic query approach.",
    takeaway:
      "This project clarified when a knowledge graph is worth the investment over standard RAG, and when it isn't. Ontology design is the hard part: it takes real domain expertise to decide what counts as an entity versus a relationship, and getting the schema wrong limits everything built on top of it later, no matter how clean the graph itself is. That's a lesson I now apply early on any project involving structured data, invest in getting the representation right before optimizing retrieval on top of it.",
    reportEmbedId: "https://drive.google.com/file/d/1ywFb-31ZjJuY-nTzHqxa6wSDBOY8OUwQ/preview",
  },
  {
    slug: "salary-benchmarking",
    title: "Closing the Gap: A Data-Driven Solution for Salary Mismatch in Hiring",
    category: "data-science",
    projectType: "group",
    context: "ISSS621 Data Science for Business",
    summary: "A salary prediction model benchmarked against the broader labor market, paired with negotiation metrics and a feedback loop, built to reduce offer rejections caused by salary mismatch in Data Science hiring.",
    techStack: ["Machine Learning", "Metrics Design"],
    skills: [
      "NGBoost",
      "Machine Learning"
    ],
    featured: true,
    businessContext:
      "HR teams negotiating Data Science salaries often had no data-backed reference point for what a role should pay, leaving offers anchored to outdated pay structures or gut feel, a common cause of rejected offers and wasted recruiting effort. A team of five addressed the first half of that gap by training a machine learning model on roughly 45,000 US job postings, scraped along with their listed salary ranges, location, industry, years of experience, and required skills, so HR could query a position's market-aligned salary just by entering its location, skills, and experience level. On top of that prediction, the system adds a set of metrics that guide HR through the negotiation itself, translating the gap between a candidate's ask and the market estimate into a clear accept, negotiate, or reset decision. The system was also designed to keep working after launch rather than go stale: a data feedback loop captures each negotiation's outcome and feeds it back into the training set, tracks the model's prediction accuracy over time, and flags when performance has drifted enough to warrant retraining, so the salary estimates stay current as new market data comes in.",
    myContribution:
      "I led the business problem framing and designed the full data science approach used to address it: translating a vague HR pain point, too many offers falling through, into a diagnosis of three root causes (offers anchored to outdated pay data, no quantitative framework for negotiation, candidates anchoring to unrealistic expectations), then mapping each cause to a specific technique, which set the direction for the salary prediction model the team built. On top of that model, I designed the three layers that turn a prediction into a usable system: the Deviation Rate and Overlap Rate metrics that convert a candidate's expectation into a negotiation stance, the threshold optimization process that recalibrates those negotiation cutoffs against real outcomes over time, and the data feedback loop that governs when and how the underlying model itself gets retrained. The salary prediction model (NGBoost, BERT embeddings, Optuna tuning) was built by teammates; the business framing and everything connecting that model back to an actual, ongoing negotiation decision was mine.",
    methodology:
      "Deviation Rate measures how far a candidate's requested salary sits from the model's prediction, as a percentage, which I mapped to three negotiation postures: accept immediately under 15% deviation, negotiate with confidence between 15 and 25%, and reset expectations above 25%. Overlap Rate compares the candidate's requested range against the model's predicted range (point estimate plus or minus one standard deviation) to quantify how much room actually exists for a deal, using the ratio of the overlapping range to the combined union of both ranges. I designed those initial thresholds to be revisited, not fixed: the threshold optimization flow tracks actual negotiation success rates against target rates for each deviation band, then adjusts the band boundaries depending on whether a category is over- or under-performing, on a continuous monthly cycle. The data feedback loop runs in parallel at the model level: HR-collected offer outcomes and candidate survey data would feed back into the training set, model accuracy would be tracked via MAPE after each update, and retraining would trigger if MAPE exceeds 15%, if a systematic bias appears for a job category, or if new data reaches a meaningful share of the total dataset. All of this was specified as formulas and decision rules rather than built out in code.",
    keyResults:
      "The result is a layered system rather than a single model: a prediction layer that returns a market-aligned salary estimate with a confidence range, a decision layer (Deviation Rate and Overlap Rate) that turns that estimate plus a candidate's ask into a clear accept, negotiate, or reset recommendation, a calibration layer (the threshold optimization flow) that adjusts those decision boundaries over time based on which negotiation outcomes actually succeed, and a maintenance layer (the data feedback loop) that defines when the underlying model itself needs retraining. Only the prediction layer was carried through to a working implementation within the project's scope; the three layers built on top of it were fully specified designs, covering both how HR should use the model's output and how the system should keep itself current.",
      takeaway:
      "This project taught me how to design metrics that actually fit the business decision they're meant to support, not just ones that are statistically sound. Deviation Rate and Overlap Rate only matter because they map directly onto how a negotiation actually plays out: accept, push back, or walk away. Building the threshold optimization process and the data feedback loop on top of that reinforced a bigger point: a good metrics system isn't static. Tying the decision thresholds to real outcomes, and the model itself to fresh data, lets the whole system keep iterating over time, whether that means correcting for market drift or adjusting as the business's goals shift.",
    reportEmbedId: "https://drive.google.com/file/d/1VgLEjThPKXFR7CLQ_jqVVC7iwHY8PkSx/preview",
  },
  {
    slug: "inventory-optimization",
    title: "Intelligent Inventory Optimization System",
    category: "data-science",
    projectType: "group",
    context: "IS602 Spreadsheet Modeling for Decision Making",
    summary: "A three-stage spreadsheet model for retail inventory planning: trade-off and sensitivity analysis to set cost-optimal service levels, a demand forecasting and order optimization model, and a Monte Carlo simulation stress-testing the resulting policy against real-world demand uncertainty.",
    techStack: ["Excel", "Monte Carlo simulation"],
    skills: ["Excel (Monte Carlo Simulation)"],
    featured: false,
    businessContext:
      "A five-store, 20-SKU retail company was approaching Q4 2025, the seasonal peak when demand is both higher and harder to predict. Effective inventory management meant balancing two competing risks: overstocking, which raises holding costs, against understocking, which causes stockouts, lost sales, and costly expedited orders. A team of five used spreadsheet modeling to address this in three stages: analyzing historical trade-offs among the cost drivers behind replenishment decisions, building an optimization model to set order quantities under both standard and promotional demand scenarios, and stress-testing the resulting policy against real-world demand uncertainty through Monte Carlo simulation.",
    myContribution:
      "My role was the third stage: stress-testing the team's replenishment policy through Monte Carlo simulation. I modeled demand as a normal distribution centered on the forecast for each SKU and store, then ran 100 simulation iterations per scenario across five demand variation levels (10% to 30%) to see how forecast uncertainty itself would affect fill rate and stockout risk, independent of the underlying ordering policy.",
    methodology:
      "Each simulation iteration drew a random demand value from a normal distribution bounded within the tested variation range, then propagated that demand through the existing inventory position to calculate ending inventory, stockout units, and fill rate at the SKU level. I aggregated those SKU-level results up to the store level across all 100 iterations per scenario, averaging fill rate and stockout units to get a stable read on performance under each variation level. Running the same ordering policy through five variation scenarios, from 30% down to 10%, isolated the effect of demand uncertainty itself, holding the replenishment logic constant.",
    keyResults:
      "Across the five stores, tightening demand variation from 30% to 10% raised average fill rate from 88.4% to 91.0% and cut average stockout units by 31.6%. The improvement wasn't uniform: one store reached a 100% fill rate at the lower variation level, while two others remained the weakest performers under both scenarios, around 80 to 85%, pointing to those stores as the highest stockout risk heading into the December peak regardless of how much forecast accuracy improved.",
    takeaway:
      "Running the same policy through a range of demand variation levels separated two questions that are easy to conflate: whether the ordering policy itself is good, and how exposed that policy is to forecast error. That distinction matters in any planning context built on a single point forecast. The same approach, vary the input uncertainty and watch how the outcome distribution shifts, applies just as well to staffing models, capacity planning, or budget forecasting as it does to inventory.",
    reportEmbedId:
      "https://docs.google.com/document/d/19XOgY9bZA5zdmYhtncrJa5DUp9j41N9z/preview",
  },

];
