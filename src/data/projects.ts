import type { Project } from '../types/project';

export type { Project, ProjectCategory, ProjectTopic, ProjectType } from '../types/project';

export const projects: Project[] = [
  {
    slug: "h-ai-ring",
    title: "H-ai-Ring Talent: AI-Driven Recruitment Workflow",
    category: "agentic-ai",
    topic: "hr-talent",
    projectType: "group",
    context: "CS 615 Agentic AI — SMU MITB",
    summary: "A 9-agent system redesigning end-to-end headhunting as human-AI collaboration, projecting 2x recruiter productivity and doubled pipeline conversion.",
    techStack: ["CrewAI", "FastAPI", "Next.js", "TypeScript", "OpenAI GPT-4o-mini", "Whisper", "SQLite", "JWT Auth"],
    skills: ["Agentic AI", "CrewAI", "OpenAI API", "GPT-4o"],
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
    topic: "ai-systems",
    projectType: "group",
    context: "CS 610 Applied Machine Learning — SMU MITB",
    summary: "A hallucination evaluation framework generating 50,000 synthetic QA pairs to benchmark RAG system reliability, quantifying a 16x latency cost for a more accurate reasoning model.",
    techStack: ["Python (Pandas, Scikit-learn, PyTorch, Numpy)", "Qwen2.5", "RAG", "DeepSeek", "ETL"],
    skills: [
      "Python (Pandas, Scikit-learn, PyTorch, Numpy)",
      "RAG",
      "Qwen2.5",
      "DeepSeek",
      "ETL"
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
    topic: "hr-talent",
    projectType: "personal",
    context: "CS 614 Gen AI with Large Language Models — SMU MITB",
    summary: "Fine-tuned TinyLlama-1.1B to auto-classify resumes into 5 technical categories, achieving 71.4% accuracy in 12 minutes of training.",
    techStack: ["TinyLlama-1.1B", "LoRA", "PEFT", "Hugging Face", "Pytorch", "DistilBERT", "Transformers", "Prompt engineering","ETL"],
    skills: [
      "Python (Pandas, Scikit-learn, PyTorch, Numpy)",
      "LLM Fine-tuning (LoRA/PEFT)",
      "Hugging Face",
      "Prompt Engineering",
      "TinyLlama-1.1B",
      "Pytorch",
      "Transformers",
      "DistilBERT",
      "ETL"
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
    topic: "legal",
    projectType: "group",
    context: "CS614 Group Project",
    summary: "A progression of retrieval systems, from vector-based RAG through a custom knowledge graph to an agentic reasoning layer, built and evaluated to test whether structured legal relationships could improve on standard RAG for multi-hop legal reasoning over Singapore Family Court judgments.",
    techStack: ["Neo4j", "Cypher", "Claude Sonnet 4.5", "Vector embeddings", "ETL", "RAG"],
    skills: ["Neo4j", "RAG", "Anthropic API", "Claude Sonnet 4.5", "ETL"],
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
    topic: "hr-talent",
    projectType: "group",
    context: "ISSS621 Data Science for Business",
    summary: "A salary prediction model benchmarked against the broader labor market, paired with negotiation metrics and a feedback loop, built to reduce offer rejections caused by salary mismatch in Data Science hiring.",
    techStack: ["Machine Learning", "Metrics Design"],
    skills: [
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
    slug: "uganda-finscope",
    title: "Gender Differences in Determinants of Mobile Money Use in Uganda",
    category: "data-science",
    topic: "financial-inclusion",
    projectType: "group",
    context: "ISSS602 Data Analytics Lab — SMU MITB",
    summary: "A logistic regression study using Finscope Uganda 2023 data to identify gender-specific determinants of mobile money adoption and surface insights for gender-inclusive financial policy.",
    techStack: ["SAS Studio", "SAS Visual Analytics", "Logistic Regression", "ETL"],
    skills: ["SAS", "Data Preprocessing", "Data Visualization", "Regression Modelling", "ETL"],
    featured: false,
    businessContext:
      "Mobile money has become a key driver of financial inclusion in Uganda, yet a persistent gender gap remains. Data from the World Bank shows men use mobile payments at meaningfully higher rates than women, and Uganda's National Financial Inclusion Strategy II (2023-2028) explicitly identifies reaching underserved groups, including women, as a policy priority. Most existing research identifies broad determinants of mobile money adoption (age, income, education, geography) but rarely disaggregates findings by gender, leaving a gap in what policymakers and financial institutions need to design targeted interventions. A team of three used Finscope Uganda 2023 survey data (3,200 respondents, 686 variables) to examine what specifically drives mobile money adoption among men and women, and where those drivers diverge.",
    myContribution:
      "I was responsible for data cleaning and building the logistic regression models. On the data side, I handled missing value treatment, variable encoding and recoding, and filtering variables with substantial missingness from a wide 686-column dataset down to a workable analytical frame. I then built two separate logistic regression models in SAS Studio, one for male respondents and one for female respondents, applying a Stepwise selection method at a 0.05 significance level to identify the statistically significant determinants for each gender.",
    methodology:
      "The response variable was binary: whether a respondent uses mobile money (yes/no). Independent variables spanned four categories: demographic (age, household decision-making role, documentation), financial behaviour (electronic saving, borrowing, remittances, investment), geographic (distance to mobile money agents, ATMs, bank agents, savings groups, rural/urban), and opinion (e-payment awareness, fee perception, cash preference, preference for face-to-face interaction). Two separate logistic regression models were built using Stepwise selection at p=0.05, one for each gender. The models were evaluated using fit summaries and misclassification rates, and parameter estimates (beta values and predicted probabilities) were compared across genders to identify shared and gender-specific determinants.",
    keyResults:
      "The two models identified 12 determinants for male respondents and 14 for female respondents, with 5 shared across both genders: electronic saving, borrowing in the past year, international money transfers, access to a mobile phone, and distance between workplace and mobile money agents. Gender-specific patterns emerged clearly: for women, younger age, urban residence, and having relevant documentation (subscriptions) were significant positive predictors, while women in household decision-making roles or who invest by buying goods were less likely to adopt mobile money. For men, proximity to bank agents and savings groups increased adoption likelihood, while proximity to insurance agents reduced it; preference for face-to-face interaction over machines was a significant positive predictor, and awareness of e-wallets was associated with higher adoption.",
    takeaway:
      "Running separate models for each gender rather than a single combined model with a gender interaction term made the structural differences in adoption drivers much clearer, and more directly actionable for policy. The exercise also reinforced how much analytical framing shapes the usefulness of the output: the same dataset, modelled as one group, would have surfaced averages that masked the exact disparities the Uganda NFIS is trying to address.",
    reportEmbedId: "https://drive.google.com/file/d/1_1w2J4hmSeCvWCWTv6I1QgsdBq1_DVoE/preview",
    posterEmbedId: "https://drive.google.com/file/d/1mVETapThSuMnF_Cy29ps1UNWA1ewnRqK/preview",
  },
  {
    slug: "reddit-sna",
    title: "What and Who on Reddit? — Analyzing Topic Trends and Communities on r/Trump",
    category: "data-science",
    topic: "social-analytics",
    projectType: "group",
    context: "ISSS606 Social Analytics — SMU MITB",
    summary: "A social network analysis of the r/Trump subreddit across three political periods, examining how discussion topics evolved, how user communities formed around shared themes, and how influential users shaped discourse from 2019 to 2025.",
    techStack: ["Python (Pandas, Scikit-learn, PyTorch, Numpy)", "Reddit API", "NLTK", "Gensim", "NetworkX", "NLP", "Louvain", "ETL"],
    skills: ["Network Analysis", "Topic Modeling", "NLP", "Data Preprocessing", "ETL"],
    featured: false,
    businessContext:
      "Online social communities generate large volumes of content that encodes shifting public sentiment, community structure, and influence dynamics. Studying how discourse evolves across politically significant periods offers a window into how narratives form and spread in decentralized social networks. This project applied social network analysis and topic modeling to the r/Trump subreddit across three politically distinct periods: the first presidential term and 2020 election campaign (Nov 2019 to Nov 2020), the 2024 election campaign (Nov 2023 to Nov 2024), and the start of the second presidential term (Apr 2025 to May 2025).",
    myContribution:
      "I originated the project concept and led the proposal drafting process, including researching multiple platforms and APIs before identifying Reddit as the most viable data source. I collected the 2025 data directly via the Reddit API, obtaining 2,058 submissions and 24,608 comments covering April to May 2025. I designed the Topic-central Community Detection and Analysis Framework, which combined LDA topic modeling with a user-topic co-participation network and Louvain community detection to surface how users clustered around shared discussion themes. I also designed and executed the full User Reply Network analysis, constructing a weighted directed graph of user-to-user reply interactions and tracking how network structure and user roles evolved across terms. For Term 3, I performed the complete analysis pipeline: LDA topic modeling, community detection, and influential user detection.",
    methodology:
      "The dataset combined archived Reddit data from 2016 to 2024 (143,886 submissions and 1,095,101 comments) with 2025 data collected via the Reddit API. Text preprocessing followed a multi-stage pipeline including tokenization, lemmatization, stopword removal, and bigram detection using Gensim Phrases, with bag-of-words vectorization for topic modeling. LDA coherence scores were evaluated across topic counts of 5, 10, 15, and 20; five topics per term was selected as optimal (coherence score 0.654) and fixed across all periods for comparability. The Topic-central Community Detection Framework connected users via co-participation edges weighted by shared topic engagement, then applied the Louvain algorithm to detect communities. The User Reply Network was modeled as a weighted directed graph with node size scaled by total degree and color encoding in-degree ratio to distinguish content creators from active commenters. Influential user detection used PCA embeddings of five centrality features: total degree, PageRank, betweenness centrality, clustering coefficient, and average neighbor degree.",
    keyResults:
      "Topic analysis revealed that discussion themes shifted meaningfully across periods: Election and Voting dominated Term 1 (36.77% of documents), Social Policy Issues led Term 2 (34.19%), and Term 3 showed a more balanced distribution across five topics including Reddit Policy and Ideological Conflict, US-China Trade and Economy, and Law and Immigration. The overall reply network comprised 51,193 users and 266,894 interactions, with degree distribution following a power law. Community detection via Louvain identified 247 communities with a modularity score of 0.5367. Among 85 users active across all three periods, the share classified as active commenters grew from 81.2% in Term 1 to 96.5% in Term 3, indicating a shift from content creation toward reactive engagement over time. Two distinct influence archetypes emerged across terms: topic experts who accumulated high in-degree through content creation, and bridge influencers who built cross-topic reach through active reply participation.",
    takeaway:
      "Designing the analytical framework from scratch taught me that the choice of graph representation shapes what you can see. Modeling user relationships as reply networks versus co-participation networks surfaces fundamentally different community structures, and choosing between them is a design decision that requires grounding in the research question rather than convenience. The project also reinforced how important data collection strategy is: scoping the API early, understanding rate limits, and planning around data gaps determined what analysis was even possible.",
    reportEmbedId: "https://drive.google.com/file/d/1z0UU1Qh3vxIp1OREnoaNSLbONTuL_n60/preview",
  },
  {
    slug: "singapore-labour-market",
    title: "Singapore's Job Market: Opportunities, Challenges and Insights for Foreign Job Seekers",
    category: "data-science",
    topic: "labour-market",
    projectType: "group",
    context: "IS630 Statistical Thinking for Data Science — SMU MITB",
    summary: "A data-driven analysis of Singapore's labour market for foreign job seekers, integrating government statistics on employment trends, income patterns by occupation and industry, household expenditure, and cost of living to produce actionable guidance on sector targeting and financial planning.",
    techStack: ["Python (Pandas, Scikit-learn, PyTorch, Numpy)", "Matplotlib", "Statsmodels", "ETL"],
    skills: [
      "ETL",
      "Linear Regression",
      "Time Series Forecasting",
      "Hypothesis Testing",
      "Exploratory Data Analysis",
      "Data Visualization",
    ],
    featured: false,
    businessContext:
      "Foreign professionals considering relocation to Singapore face fragmented information across labour market conditions, salary expectations, and cost of living. Consolidating these into an integrated analysis helps job seekers make informed decisions about sector targeting and financial planning. This project examined Singapore's labour market across three dimensions: labour force dynamics including employment, unemployment, and retrenchment trends; income patterns by occupation and industry; and living expenses including housing, food, and transport, synthesized into income sufficiency scenarios for different household profiles.",
    myContribution:
      "I was responsible for the job vacancy analysis and demand forecasting components of the project. I analyzed job vacancy trends from 2006 to 2022 across industries and occupational groups, identifying that the services sector and professional and managerial occupations showed the strongest growth trajectories post-2020. I built linear regression models to forecast near-term demand for three sectors. For the overall services sector, the model produced an R-squared of 0.793 and projected approximately 434,000 vacancies by 2025. For the IT and information services subsector, the model achieved an R-squared of 0.735 and projected approximately 14,000 openings in 2025. For financial services, the model achieved an R-squared of 0.701 and projected approximately 14,000 openings in 2025. These forecasts provided the quantitative foundation for the project's sector targeting recommendations.",
    methodology:
      "Job vacancy data was sourced from Singapore's Ministry of Manpower, covering annual figures by industry and occupational group from 2006 to 2022. Vacancy trends were visualized by industry and occupation to identify structural shifts. Linear regression was applied to model vacancy growth over time for the services sector and its IT and financial subsectors, with year as the predictor variable. Model fit was assessed using R-squared. Forecasts were extrapolated to 2025 and presented alongside historical actuals and regression trend lines to contextualize prediction uncertainty. Other components of the project used Welch's ANOVA with Games-Howell pairwise testing for income comparisons across occupations and industries, SARIMA modeling for CPI inflation forecasting, Kruskal-Wallis testing for housing rental differences by region, and chi-square testing for associations between housing type, household size, and income.",
    keyResults:
      "Job vacancies in the services sector surged after 2020, with professional and managerial occupations showing the steepest growth among occupational groups. Linear regression forecasts projected services sector vacancies reaching 434,000 by 2025 (R² = 0.793), with IT and financial services each projected at approximately 14,000 openings (R² = 0.735 and 0.701 respectively). Across the broader analysis, Finance, Banking and Insurance, IT, and Professional Scientific and Technical Activities were confirmed as the top three highest-paying industries via pairwise statistical testing. A single early-career professional would need at minimum an associate professional income level of SGD 4,000 per month to achieve income sufficiency in Singapore.",
    takeaway:
      "Forecasting with linear regression on time series data is straightforward to implement but requires honest communication of its assumptions. Vacancy growth in Singapore's services sector was largely monotonic before 2020, which made linear models a reasonable fit, but the post-COVID surge introduced structural breaks that the model could not fully capture. Presenting forecasts alongside historical actuals and confidence bounds, rather than as point estimates, made the uncertainty explicit and more honest for the audience.",
    slidesEmbedId: "https://drive.google.com/file/d/1oiI898vjPfU7vVOHzBTYY7mLVkI0_8Yk/preview",
    reportEmbedId: "https://drive.google.com/file/d/10b_7b4PbgkO04rwCwycfNwZ-h6hvScr6/preview",
  },
  {
    slug: "employee-insights",
    title: "Employee Insights: Data-Driven Labor Force Analysis",
    category: "data-science",
    topic: "hr-talent",
    projectType: "group",
    context: "IS630 Statistical Thinking for Data Science — SMU MITB",
    summary: "A statistical analysis of a 4,600-employee dataset examining salary drivers, management pay gaps, gender pay equity, and departmental compensation differences, designed to help HR make more transparent and evidence-based compensation decisions.",
    techStack: [
      "Python (Pandas, Scikit-learn, PyTorch, Numpy)",
      "Exploratory Data Analysis",
      "Hypothesis Testing",
      "Regression Modelling",
      "Data Visualization",
      "ANOVA",
    ],
    skills: [
      "Exploratory Data Analysis",
      "Hypothesis Testing",
      "Regression Modelling",
      "Data Visualization",
      "ANOVA",
    ],
    featured: true,
    businessContext:
      "HR departments managing large workforces often lack a structured, evidence-based framework for understanding what drives compensation and whether pay is distributed fairly. Without that foundation, salary decisions default to tenure-based intuition rather than data, making it harder to address equity concerns or justify pay structures to employees. This project used a 4,600-employee dataset from a multinational organization to examine four business questions: what factors most strongly predict salary, whether management roles command a proportionally higher premium, whether gender pay gaps exist, and whether salary differences across departments are statistically significant.",
    myContribution:
      "I defined the four business questions and selected the appropriate statistical methods for each, translating the HR team's compensation concerns into a structured analytical plan. For the hypothesis testing components, I ran the full inferential analysis for gender pay equity and departmental salary differences. For gender, I applied Shapiro-Wilk to test normality within each group, Levene's test to assess variance equality, and Kruskal-Wallis as the non-parametric test given non-normal distributions, finding no statistically significant salary difference across gender groups (p = 0.344). For departments, the same testing sequence led to a significant Kruskal-Wallis result (p = 0.013), and I followed up with a Tukey HSD post-hoc test to identify which specific departments differed, finding that Sales earned 5% more than HR as the only statistically significant pairwise difference. I also wrote the full executive summary recommendations section, translating each statistical finding into a concrete action item for the HR department.",
    methodology:
      "The dataset covered 4,600 employees across five departments with variables including salary, gross salary, housing allowance, COLA, CPF, years of experience, tenure, position, gender, insurance, and marital status. For salary driver analysis, multicollinearity was assessed via correlation heatmap and VIF before building a multiple linear regression model with HC1 robust standard errors to handle heteroscedasticity, with a power transformation applied to the dependent variable to reduce skewness. Management versus non-management pay was compared using mean and median differences. Gender and departmental salary comparisons followed a three-step inferential sequence: Shapiro-Wilk normality test, Levene's test for variance equality, and Kruskal-Wallis as the primary test given non-normal distributions. The departmental analysis added a Tukey HSD post-hoc test to identify specific pairwise differences. Sampling distribution and confidence intervals were estimated for housing allowance and COLA using Z-distribution and t-distribution respectively.",
    keyResults:
      "Years of experience was the strongest predictor of salary in the MLR model (adjusted R² = 0.812 after transformation), with dependents as the second significant predictor. Management roles earned 57.6% more than non-management on a mean basis and 60.6% more at the median. Gender pay analysis found no statistically significant difference across male, female, and other gender groups (Kruskal-Wallis p = 0.344), indicating pay parity within this organization. Departmental salary differences were significant overall (p = 0.013), with Tukey HSD identifying Sales as the only department earning significantly more than another, at 5% above HR. A 95% confidence interval estimated new employee housing allowance between SGD 7,075 and SGD 8,519, and cost of living allowance between SGD 16,447 and SGD 28,463.",
    takeaway:
      "The most valuable part of this project was learning how domain knowledge changes what a statistical result actually means. A 5% salary gap between departments sounds small, but knowing how Sales compensation typically works in practice is what determines whether that gap warrants action or not. My recruiting background gave me enough HR context to make that judgment, and it made the recommendations more specific and defensible than they would have been from the numbers alone. That experience reinforced something I now apply broadly: the analytical output is only as useful as your understanding of the business context it lands in.",
    reportEmbedId: "https://drive.google.com/file/d/1h6dCj4bUVnmkK6Vr8u8x_fevg2St1ZvU/preview",
  },
  {
    slug: "inventory-optimization",
    title: "Intelligent Inventory Optimization System",
    category: "data-science",
    topic: "operations",
    projectType: "group",
    context: "IS602 Spreadsheet Modeling for Decision Making",
    summary: "A three-stage spreadsheet model for retail inventory planning: trade-off and sensitivity analysis to set cost-optimal service levels, a demand forecasting and order optimization model, and a Monte Carlo simulation stress-testing the resulting policy against real-world demand uncertainty.",
    techStack: ["Excel", "Monte Carlo simulation"],
    skills: ["Excel (Solver, Monte Carlo)"],
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
  {
    slug: "hotel-reviews",
    title: "Uncovering Customer Experience Drivers in Hotel Reviews",
    category: "data-science",
    topic: "hospitality",
    projectType: "group",
    context: "ISSS609 Text Analytics — SMU MITB",
    summary: "A text analytics pipeline applied to 26,675 Booking.com hotel reviews, combining topic modeling and sentiment analysis to surface satisfaction drivers across traveler segments and generate actionable recommendations for hotel partners and the platform.",
    techStack: [
      "Python (Pandas, Scikit-learn, PyTorch, Numpy)",
      "BERTopic",
      "NLTK",
      "VADER",
      "Llama 3.3 70B",
      "Claude Sonnet 4",
      "NLP",
    ],
    skills: [
      "NLP",
      "Topic Modeling",
      "Sentiment Analysis",
      "Data Preprocessing",
      "Llama 3.3 70B",
      "Anthropic API",
    ],
    featured: false,
    businessContext:
      "Online hotel reviews are a critical signal for both travelers making booking decisions and hotel partners seeking to improve service quality. For a platform like Booking.com, the volume of unstructured review text makes manual analysis infeasible, creating demand for automated methods that can surface recurring themes, quantify sentiment, and flag inconsistencies between textual feedback and numerical ratings. This project applied a four-stage text analytics framework to 26,675 Booking.com reviews collected between 2018 and 2021, targeting three stakeholder groups: Booking.com's internal teams seeking to strengthen rating reliability, hotel partners identifying service improvement priorities, and travelers who benefit from more personalized recommendations.",
    myContribution:
      "I led the complete BERTopic modeling component of the project. Starting from 26,386 raw reviews, I preprocessed the dataset down to 16,969 high-quality samples through systematic tag parsing and noise removal. I implemented the BERTopic framework using all-MiniLM-L6-v2 sentence embeddings, conducting extensive experimentation with preprocessing approaches including NLTK versus spaCy lemmatization and hyperparameter optimization across multiple configurations. The final model identified 56 interpretable topics at a 60.64% classification rate, with the remaining 39.36% treated as noise. I also designed and executed the LLM-based recommendation generation pipeline for the bottom 20% of hotels by sentiment score. Using Llama 3.3 and Claude Sonnet 4, I built a two-stage analysis for the 73 worst-scoring hotels: a topic-level problem identification stage where each LLM sampled 100 reviews per topic to surface three to five core issues with severity rankings, followed by a recommendation generation stage producing specific, actionable improvement guidance. Using two LLMs served as a model-agnostic validation strategy to ensure the identified problems and recommendations were robust.",
    methodology:
      "The preprocessing pipeline converted raw review text to lowercase, removed URLs, punctuation, and special characters, applied NLTK stopword removal and lemmatization, and tokenized at both word and sentence level. BERTopic used all-MiniLM-L6-v2 embeddings with HDBSCAN clustering to automatically determine the number of topics without requiring a predefined k, producing 56 topics. For comparison, LDA was evaluated across k = 4 to 8, with k = 5 achieving the highest coherence score of 0.6439 and selected as the primary quantitative model for sentiment integration; GSDMM was also tested but failed to converge consistently. Sentiment analysis used VADER at the sentence level, aggregating compound scores to the review level. VADER thresholds were tuned against 500 manually annotated reviews, achieving 74.2% accuracy overall (F1 0.8 for positive, 0.9 for neutral, 0.3 for negative). Topic-sentiment integration merged LDA topic labels with VADER scores by review ID, ranking hotels into top and bottom 20% by mean sentiment per topic. Star rating anomaly detection rescaled VADER compound scores to the 0 to 10 range and applied z-score analysis, flagging reviews with deviation beyond 2 standard deviations as anomalies.",
    keyResults:
      "BERTopic identified 56 topics at a 60.64% classification rate across 16,969 reviews, with noise as the dominant complaint across all traveler segments. Segment-specific patterns emerged clearly: solo travelers showed the highest noise sensitivity at 7.8% of reviews, business travelers prioritized Wi-Fi and reception efficiency, and family travelers exhibited the most diverse topic distribution at 31.3% classified as other topics. The LLM-based bottom 20% analysis identified a clear operational failure hierarchy across five LDA topics, with Room Comfort and Amenities showing the most negative mean sentiment at -0.28, followed by Location and Room Condition at -0.12 and Reception and Check-In at -0.10. Anomaly detection flagged approximately 2.3% of reviews as exhibiting significant divergence between textual sentiment and numerical rating.",
      takeaway:
      "BERTopic generates richer clusters than LDA, but 56 topics at 60% coverage is harder to operationalize than 5 interpretable ones at full coverage. The more useful approach was combining both: BERTopic for segment-level storytelling, LDA for quantitative integration with sentiment scores. On the LLM pipeline, filtering and prompt design mattered more than model choice. The keyword filtering and sentiment threshold that determined which reviews the LLM saw shaped the output quality more than the model itself. Framing the prompt around severity-ranked problems with specific improvement actions, rather than open-ended summarization, was what made the recommendations actionable. Both decisions required more iteration than any of the modeling steps.",
    reportEmbedId: "https://drive.google.com/file/d/1NFHOOpdUJHNiwGzWkP-vHG743sIK5xtX/preview",
  }

];
