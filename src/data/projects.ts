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
    skills: ["Agentic AI", "CrewAI", "OpenAI API"],
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
    slidesEmbedId: "",
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
    slidesEmbedId: "",
    reportEmbedId: "https://drive.google.com/file/d/1hJ-JaPlACeDPkX6FQlIcN_X3nOD108iq/preview",
  },
  {
    slug: "resume-classification",
    title: "Resume Classification Using Supervised Fine-Tuning",
    category: "llm",
    projectType: "personal",
    context: "CS 614 Gen AI with LLMs — SMU MITB",
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
    slidesEmbedId: "",
    reportEmbedId: "https://drive.google.com/file/d/1Or8oT8idHzDI0V_uaskk5sPcgbzoCBoi/preview",
    extraLinks: [
      {
        title: "Experiment Comparison",
        url: "https://wirehaired-attention-87b.notion.site/A1_Experiment-Comparison-285557ab448080d29942d2e208147979",
      },
    ],
  },
  {
    slug: "inventory-optimization",
    title: "Intelligent Inventory Optimization System",
    category: "other",
    projectType: "group",
    context: "IS 602 Spreadsheet Modeling — SMU MITB",
    summary: "A Monte Carlo simulation quantifying how reducing demand variability improves retail inventory fill rates and cuts stockout risk.",
    techStack: ["Excel", "Monte Carlo simulation", "Trade-off Analysis", "Sentivity Analysis", "Solver"],
    skills: ["Excel (Solver, Monte Carlo)"],
    featured: false,
    businessContext:
      "Retail inventory planning at peak season requires balancing service level and holding cost under demand uncertainty, a classic operations research problem. Within a broader three-stage modelling pipeline (demand forecasting, cost optimisation, and risk simulation), Monte Carlo simulation was the component used to quantify how demand uncertainty itself affects service outcomes.",
    myContribution:
      "Built the Monte Carlo simulation component: modelled stockout risk and fill rate outcomes under varying demand variability assumptions, running repeated simulations to quantify how tightening forecast uncertainty would change service-level performance.",
    methodology:
      "Monte Carlo simulation in Excel, varying the demand variability input parameter and measuring the resulting distribution of fill rates and stockout units across simulation runs.",
    keyResults:
      "Tightening demand variation from 30% to 10% improved average fill rate from 88.4% to 91.0% and reduced stockout units by 31.6%, quantifying the direct value of better demand forecasting on service-level outcomes.",
    takeaway:
      "Demonstrates quantitative risk modelling using accessible tools (Excel), translating an abstract input like forecast uncertainty into concrete, decision-relevant outcomes like fill rate and stockout risk. That same simulation approach applies to any planning problem under uncertainty, inventory, staffing, or capacity, regardless of industry.",
    slidesEmbedId: "",
    reportEmbedId:
      "https://docs.google.com/document/d/19XOgY9bZA5zdmYhtncrJa5DUp9j41N9z/preview",
  },
];
