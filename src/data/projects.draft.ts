// DRAFT PROJECTS - NOT YET POLISHED
// These 7 projects are excluded from the live site for now.
// Original HR-framed copy from initial handoff, pending rewrite for general DS positioning.
// To bring one back: polish its copy, then move its object into projects.ts.
import type { Project } from '../types/project';

export const draftProjects: Project[] = [
  {
    slug: "kg-rag-legal",
    title: "KG-RAG for Legal Document Analysis",
    category: "llm",
    projectType: "group",
    context: "CS 614 Gen AI with LLMs — SMU MITB",
    summary: "A hybrid Knowledge Graph + RAG system enabling multi-hop legal reasoning over 94 Singapore court judgments.",
    techStack: ["Neo4j", "Knowledge Graph", "RAG", "Python", "Singapore court judgments corpus"],
    skills: ["Python (Pandas, Scikit-learn, PyTorch)", "RAG"],
    featured: false,
    businessContext:
      "Standard RAG retrieves flat text chunks but cannot reason across connected entities — a limitation that matters in legal analysis, where cases reference prior judgments, statutes, and related parties.",
    myContribution:
      "Personally built the Neo4j knowledge graph from scratch: designed the ontology, ingested 94 Singapore court judgments, created 1,798 nodes and 3,229 relationships, performed vector embedding backfill, and built the Cypher query pipeline. Teammates contributed the LlamaIndex integration.",
    methodology:
      "Evolved the system through four architectures — standard RAG, Knowledge Graph, Agentic KG, and Hybrid — measuring factual retrieval and analytical reasoning scores at each stage.",
    keyResults:
      "Hybrid KG-RAG achieved 0.661 factual retrieval and 0.500 analytical reasoning scores, enabling multi-hop legal reasoning that standard RAG cannot perform.",
    takeaway:
      "Demonstrates hands-on graph database engineering — ontology design, knowledge ingestion, and query pipeline — not just API-level LLM usage.",
    slidesEmbedId: "",
    reportEmbedId: "",
  },
  {
    slug: "salary-benchmarking",
    title: "Closing the Gap: Salary Mismatch in Data Science Hiring",
    category: "data-analytics",
    projectType: "group",
    context: "ISSS 621 Data Science for Business — SMU MITB",
    summary: "A probabilistic salary prediction system translating model outputs into two actionable HR negotiation metrics across 45,000 job postings.",
    techStack: ["Python", "BERT", "NGBoost", "Optuna", "NLP", "Job posting datasets (45,000 records)"],
    skills: ["Python (Pandas, Scikit-learn, PyTorch)", "NLP", "Regression Modelling"],
    featured: true,
    businessContext:
      "Salary mismatch is a leading cause of offer rejection. Most benchmarking tools give point estimates — not the probability distributions needed for negotiation strategy.",
    myContribution:
      "Led business problem definition and designed the negotiation framework from scratch: conceptualised the Deviation Rate metric (gap between candidate expectation and market prediction) and Overlap Rate metric (negotiation room), each with defined decision thresholds for offer strategy. Teammates built the NGBoost/BERT/Optuna model.",
    methodology:
      "BERT for text feature extraction from 45,000 job postings; NGBoost for probabilistic salary distribution modelling; Optuna for hyperparameter tuning. Deviation Rate and Overlap Rate computed from model output distributions.",
    keyResults:
      "Two operational HR metrics (Deviation Rate, Overlap Rate) with decision thresholds — translating model outputs into actionable offer negotiation guidance.",
    takeaway:
      "Demonstrates the ability to bridge data science outputs and business decisions — designing metrics that HR teams can actually use, not just building models.",
    slidesEmbedId: "",
    reportEmbedId: "",
  },
  {
    slug: "employee-insights",
    title: "Employee Insights: Data-Driven Labour Force Analysis",
    category: "data-analytics",
    projectType: "group",
    context: "IS 630 Statistical Thinking for Data Science — SMU MITB",
    summary: "End-to-end workforce analytics on 4,600 employee records surfacing flight risk, hierarchy imbalance, and pay equity findings.",
    techStack: ["Python", "EDA", "Kruskal-Wallis", "Tukey HSD", "Multiple Linear Regression (Adj. R²=0.812)"],
    skills: ["Python (Pandas, Scikit-learn, PyTorch)", "Hypothesis Testing", "Regression Modelling"],
    featured: true,
    businessContext:
      "HR leaders need evidence-based workforce insights to prioritise retention efforts and address structural imbalances — not intuition.",
    myContribution:
      "Full analysis: EDA, hypothesis testing (Kruskal-Wallis, Tukey HSD), and multiple linear regression on 4,600 employee records.",
    methodology:
      "Exploratory data analysis followed by non-parametric hypothesis testing and MLR (Adj. R²=0.812) to model salary determinants and validate group differences.",
    keyResults:
      "Identified 3-to-5-year tenure as the lowest-represented cohort (12.71% of workforce), signalling the highest flight risk; exposed a top-heavy hierarchy at 46.6% management; confirmed gender pay equity across the dataset.",
    takeaway:
      "Core People Analytics skillset: translating employee data into workforce strategy recommendations with statistical rigour.",
    slidesEmbedId: "",
    reportEmbedId: "",
  },
  {
    slug: "singapore-labour-market",
    title: "Singapore's Labour Market: Opportunities, Challenges, and Insights",
    category: "data-analytics",
    projectType: "group",
    context: "IS 630 Statistical Thinking for Data Science — SMU MITB",
    summary: "Labour market forecasting and gender pay gap analysis using Singapore government datasets (MOM, Singstat, Data.gov).",
    techStack: ["Python", "SARIMA", "ANOVA", "Regression", "MOM / Singstat / Data.gov datasets"],
    skills: ["Python (Pandas, Scikit-learn, PyTorch)", "Time Series (SARIMA)", "ANOVA", "Regression Modelling"],
    featured: false,
    businessContext:
      "Foreign professionals and companies need data-grounded insights on Singapore's talent supply, wage trends, and cost-of-living thresholds for workforce planning.",
    myContribution:
      "Full analysis across MOM, Singstat, and Data.gov datasets using SARIMA forecasting, ANOVA, and regression modelling.",
    methodology:
      "SARIMA for vacancy forecasting; ANOVA for sector-level wage comparison; regression for cost-of-living threshold modelling.",
    keyResults:
      "Forecasted 434,000 Services sector vacancies by 2025; quantified a persistent 13% gender pay gap; delivered data-grounded salary benchmarking guidance for foreign professional relocation decisions.",
    takeaway:
      "Demonstrates labour market research capability directly applicable to workforce planning, talent strategy, and compensation benchmarking contexts.",
    slidesEmbedId: "",
    reportEmbedId: "",
  },
  {
    slug: "hotel-reviews",
    title: "Customer Experience Drivers in Hotel Reviews",
    category: "other",
    projectType: "group",
    context: "ISSS 609 Text Analytics — SMU MITB",
    summary: "NLP pipeline surfacing operational improvement priorities from 16,953 hotel reviews using LDA, VADER, and LLM synthesis.",
    techStack: ["Python", "LDA", "VADER", "Anomaly Detection", "NLP", "Llama 2", "Claude Sonnet"],
    skills: ["Python (Pandas, Scikit-learn, PyTorch)", "NLP", "Topic Modelling", "Sentiment Analysis"],
    featured: false,
    businessContext:
      "Hotels generate large volumes of unstructured review text. Structured extraction of operational priorities from this data supports evidence-based service improvement.",
    myContribution:
      "Full pipeline: LDA topic modelling, VADER sentiment analysis, Z-score anomaly detection on 16,953 reviews (F1=0.72). Integrated Llama 2 and Claude Sonnet to synthesise negative sentiment into a prioritised business improvement roadmap.",
    methodology:
      "LDA for topic extraction; VADER for sentiment scoring; Z-score anomaly detection for outlier reviews; LLM synthesis for roadmap generation.",
    keyResults:
      "F1=0.72 on sentiment classification; actionable operational priority roadmap generated from synthesised negative sentiment segments.",
    takeaway:
      "Demonstrates text analytics applied to customer feedback — directly transferable to employee survey analysis and HR sentiment monitoring use cases.",
    slidesEmbedId: "",
    reportEmbedId: "",
  },
  {
    slug: "reddit-sna",
    title: "Topic Trends and Communities on r/Trump",
    category: "other",
    projectType: "group",
    context: "ISSS 606 Social Analytics — SMU MITB",
    summary: "Social network and topic analysis across 1.09 million Reddit comments mapping community structure across three political terms.",
    techStack: ["Python", "LDA", "Louvain community detection", "PageRank", "Betweenness Centrality", "SNA"],
    skills: ["Python (Pandas, Scikit-learn, PyTorch)", "NLP", "Topic Modelling", "Network Analysis"],
    featured: false,
    businessContext:
      "Large-scale online community analysis reveals how information flows, who drives discourse, and how community structure shifts over time — methods applicable to workforce engagement and internal communication analytics.",
    myContribution:
      "Full analysis: LDA topic modelling and Social Network Analysis (Louvain, PageRank, Betweenness) on 1.09 million comments.",
    methodology:
      "LDA for topic modelling across three political time periods; Louvain community detection for cluster identification; PageRank and Betweenness Centrality for influence mapping.",
    keyResults:
      "Detected 247 communities (Modularity 0.5367); identified structural shift from content-creator-dominated to commenter-dominated network across three political terms.",
    takeaway:
      "Large-scale NLP and network analysis at 1M+ record scale; community detection methods applicable to organisational network analysis.",
    slidesEmbedId: "",
    reportEmbedId: "",
  },
  {
    slug: "uganda-finscope",
    title: "Gender Differences in Mobile Money Use in Uganda",
    category: "other",
    projectType: "group",
    context: "ISSS 602 Data Analytics Lab — SMU MITB",
    summary: "Sex-disaggregated logistic regression identifying gendered drivers of mobile money adoption from a 686-variable survey dataset.",
    techStack: ["SAS", "Binary Logistic Regression", "Uganda FinScope 2023", "Sex-disaggregated modelling"],
    skills: ["SAS", "Regression Modelling"],
    featured: false,
    businessContext:
      "Financial inclusion policy requires understanding not just aggregate adoption rates but the different barriers and drivers facing men and women.",
    myContribution:
      "Built two sex-disaggregated Binary Logistic Regression models on Uganda FinScope 2023 (3,176 observations, 686 variables).",
    methodology:
      "Sex-disaggregated modelling: separate BLR models for male and female respondents with stepwise variable selection across 686 candidate variables.",
    keyResults:
      "Extracted 12 significant determinants for men and 14 for women; delivered actionable geospatial and demographic insights for fintech product design and financial inclusion policy.",
    takeaway:
      "Demonstrates SAS proficiency and rigorous variable selection at high dimensionality (686 variables) — relevant to HR survey analytics and D&I measurement contexts.",
    slidesEmbedId: "",
    reportEmbedId: "",
  },
];
