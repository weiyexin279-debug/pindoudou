# AI4S Platform & Model Layer, AI Weather/Climate, AI-Scientist Agents, and Science Compute (Global + China), as of Oct 2026

Method note: 17 web searches, done 2026-10-10. Many 2026 items come from secondary or aggregator coverage. Where no primary source was found, the item is marked "(secondary)". Background facts from 2023–2025 papers cite the journal DOI pages.

## 1. Big tech / AI lab AI4S strategy (Google DeepMind, Microsoft, NVIDIA, OpenAI, Anthropic, Meta, startups)

### Takeaway
By 2026 every frontier lab sells "AI for science" as a product layer, usually as agentic research platforms on top of general LLMs rather than single domain models:
- Google: Gemini for Science (I/O, May 2026), with AlphaEvolve and Co-Scientist sold through Google Cloud.
- Microsoft: Discovery reached GA at Build, June 2026.
- Anthropic: Claude for Life Sciences (Oct 2025), then "Claude Science" (reported June 30, 2026).
- OpenAI: "OpenAI for Science" (late 2025), led by Kevin Weil.
- NVIDIA: positioned as the infrastructure and open-model supplier (Earth-2 open models, BioNeMo).

Startups (Periodic Labs, Edison Scientific, Sakana) raised large seed rounds to build "AI scientists".

### Cited Findings
**Google DeepMind / Google**
- Background: the 2024 Nobel Prize in Chemistry went half to Demis Hassabis and John Jumper for AlphaFold protein structure prediction — [NobelPrize.org](https://www.nobelprize.org/prizes/chemistry/2024/summary/)
- Background: GNoME (Nature, Nov 2023) predicted about 2.2M new crystals, about 380k of them stable — [Nature](https://www.nature.com/articles/s41586-023-06735-9)
- Background: GraphCast (Science, 2023) and GenCast (Nature, Dec 2024) were the ML medium-range weather models that beat ECMWF HRES/ENS on most targets — [Science](https://www.science.org/doi/10.1126/science.adi2336); [Nature GenCast](https://www.nature.com/articles/s41586-024-08252-9)
- WeatherNext 2 (Google DeepMind + Google Research) is the current weather model family and is described as about 8x faster. The Earth Engine notice says the older WeatherNext Gen dataset is deprecated on 15 July 2026 and users should migrate to WeatherNext 2. Launch was reportedly Nov 2025 (secondary) — [DeepMind WeatherNext](https://deepmind.google/science/weathernext/); [Earth Engine catalog](https://developers.google.com/earth-engine/datasets/tags/weathernext?hl=es)
- AlphaEvolve (May 2025) is a Gemini-powered evolutionary coding agent with automated evaluators. It found a 4×4 complex matrix multiplication using 48 scalar multiplications, beating Strassen (1969). Google also uses it internally for data-center scheduling, chip design and training efficiency — [The Register](https://theregister.com/2025/05/15/google_deepmind_debuts_algorithm_evolving)
- Co-Scientist and AlphaEvolve are now offered as R&D agents inside Gemini Enterprise on Google Cloud. A Pushmeet Kohli post says AlphaEvolve is "GA on Google Cloud" — [Google Cloud docs](https://docs.cloud.google.com/gemini/enterprise/docs/co-scientist-and-alphaevolve); [Sequoia podcast w/ Kohli](https://sequoiacap.com/podcast/training-data-pushmeet-kohli)
- "Gemini for Science" was announced at Google I/O on May 19–20, 2026:
  - Google Labs prototypes for hypothesis generation, literature insights and computational discovery.
  - "Science Skills" agent skills that integrate 30+ life-science databases and tools.
  - Enterprise access via Google Cloud is planned.
  - Sources: [Gigazine](https://www.gigazine.net/gsc_news/en/20260520-google-gemini-for-science-science-skills-era); [ai-tldr](https://ai-tldr.dev/releases/google-gemini-for-science-io2026/); [Mezha](https://mezha.ua/en/news/google-gemini-science-311442/) (secondary)

**Microsoft**
- Background: Aurora, a foundation model for the Earth system, was published in Nature in May 2025. MatterGen, generative materials design, was published in Nature in Jan 2025 — [Nature Aurora](https://www.nature.com/articles/s41586-025-09005-y); [Nature MatterGen](https://www.nature.com/articles/s41586-025-08628-5)
- Microsoft Discovery was announced at Build 2025 and spent about a year in private preview. It became generally available around Build 2026 (June 2026).
  - Design: a graph-based knowledge engine plus a "Discovery Engine" that plans work, delegates to specialized agents, monitors progress and adapts.
  - Named early adopters: Yale Engineering, PNNL, Ginkgo Bioworks, GSK.
  - A desktop app is in preview for academic labs.
  - Sources: [Redmond Mag](https://redmondmag.com/articles/2026/06/02/microsoft-discovery-hits-ga.aspx); [Campus Technology](https://campustechnology.com/articles/2026/06/12/microsoft-discovery-platform-brings-agentic-ai-to-scientific-research.aspx); [TechCrunch 2025](https://techcrunch.com/2025/05/19/microsoft-wants-to-tap-ai-to-accelerate-scientific-discovery/?.tsrc=rss)
- ECMWF stopped producing graphical products from third-party experimental ML models, including Aurora, FourCastNet, GraphCast and Pangu-Weather, when AIFS v2 launched (May 2026) — [ECMWF Set XIII](https://www.ecmwf.int/en/forecasts/dataset/set-xiii)

**NVIDIA**
- At GTC 2026 (Mar 16–19, San Jose), NVIDIA announced "the New NVIDIA Earth-2 Family of Open Models", billed as a "fully open, production-ready stack" for weather AI. BioNeMo was showcased for genomics and drug discovery. NVIDIA and Lilly announced a "Co-Innovation AI Lab". Model-level details were not found — [NVIDIA GTC page](https://www.nvidia.com/en-au/); [TechDogs GTC Day 3](https://www.techdogs.com/tech-news/td-newsdesk/all-the-biggest-reveals-from-nvidia-gtc-day-3)

**OpenAI**
- "OpenAI for Science" launched in late 2025, led by Kevin Weil and aimed at physics and math.
  - Weil cited GPT-5 suggesting ideas for theoretical-physics proofs.
  - Black-hole physicist Alex Lupsasca joined.
  - Sources: [CO/AI](https://getcoai.com/news/openai-launches-openai-for-science-platform-powered-by-gpt-5) (secondary)
- OpenAI's Dec 2025 letter to the White House OSTP calls 2026 "the Year of AI and Science" — [OpenAI OSTP RFI PDF](https://cdn.openai.com/pdf/openai-ostp-accelerating-science-rfi.pdf)

**Anthropic**
- Claude for Life Sciences (Oct 2025) offers connectors to Benchling, PubMed and 10x Genomics. It covers literature review, hypothesis generation, analysis and regulatory drafting — [Tech.co](https://tech.co/news/claude-for-life-sciences); [TipRanks](https://www.tipranks.com/news/anthropic-launches-claude-for-life-sciences-to-speed-up-discoveries-with-ai)
- Claude for Healthcare (Jan 2026) added HIPAA-ready tools and EHR connectors — [IntuitionLabs](https://intuitionlabs.ai/articles/claude-healthcare-life-sciences-ai-capabilities-2026) (secondary)
- "Claude Science" was reportedly unveiled on June 30, 2026 (single blog source; treat with caution):
  - 60+ skills and connectors for genomics, protein biology and chemistry.
  - Can run code on HPC clusters.
  - A demo identified candidate drugs for phenylketonuria.
  - Source: [LoveMyTool](https://www.lovemytool.com/2026/07/anthropic-launches-claude-science-ai.html)

**Startups**
- FutureHouse spun out Edison Scientific (Nov 2025), which launched Kosmos, an "AI scientist" that reads literature, analyzes data, and produces cited reports with code. Edison raised a $70M seed (Dec 18, 2025), led by Triatomic Capital and Spark Capital. A ~$250M valuation is reported by an aggregator only — [HPCwire](https://www.hpcwire.com/aiwire/2025/11/07/futurehouse-spins-out-edison-scientific-launches-kosmos-ai-for-research/); [Edison](https://edisonscientific.com/news/we-raised-70m-to-accelerate-science); [SiliconANGLE](https://siliconangle.com/2025/12/18/edison-scientific-raises-70m-build-autonomous-ai-scientists-research)
- Periodic Labs raised a US$300M round in Sept/Oct 2025, led by a16z, with Radical, Accel, Felicis and Khosla. It is building AI scientists with autonomous labs, focused on materials — [The Logic](https://thelogic.co/briefing/radical-ventures-backs-periodic-labs-in-us300m-round-to-build-ai-scientists/)
- Reflection AI signed a DOE MOU (May 22, 2026) to supply an open-source AI platform to the 17 national labs — [CDO Magazine](https://www.cdomagazine.tech/us-federal-news-bureau/doe-expands-genesis-mission-with-reflection-ai-partnership-to-accelerate-scientific-discovery)

### Inferences
- The competitive unit has moved from "a domain model" (AlphaFold, GraphCast) to "an agentic research platform plus enterprise cloud distribution" (Gemini for Science/Cloud, Microsoft Discovery/Azure, Claude Science). Domain models become tools the agents call.
- Google DeepMind has the deepest stack: Nobel-level models, WeatherNext in production, AlphaEvolve and Co-Scientist sold commercially. Microsoft competes on enterprise R&D workflow. NVIDIA competes as an open-model and compute supplier.

### Gaps
- Meta's 2026 AI4S activity was not researched. Its known earlier assets include the OMat/OMol open chemistry datasets and ESM, which spun out to EvolutionaryScale.
- No primary announcement found for Claude Science or for specific OpenAI for Science discoveries in 2026.
- No 2026 funding data found for Periodic Labs or Edison. A reported $1B+ Periodic valuation is unverified.
- No details found on the GTC 2026 Earth-2 open model names.

## 2. China: AI4S platform & model layer

### Takeaway
China's AI4S effort is led by state-linked labs:
- Shanghai AI Lab: the Intern-S1 / Intern-S1-Pro scientific foundation models.
- 上海科学智能研究院 with Fudan: 伏羲 (FuXi).
- 中国气象局 (CMA) with Tsinghua: the 风清/风雷/风顺 operational weather models.

Huawei 盘古 (Pangu-Weather) was the 2023 breakthrough. ByteDance Seed works on protein models. 深势科技 (DP Technology) is the leading commercial AI4S platform company (Bohrium), valued at over ¥6B after its Dec 2025 round.

### Cited Findings
- **Intern-S1** (上海AI实验室) was released and open-sourced at WAIC on July 26, 2025. It is a scientific multimodal model and is reported to beat Grok-4 on chemistry, materials and earth-science benchmarks. Third-party pages describe a ~235B MoE (Qwen3-derived) language backbone with a 6B InternViT encoder and ~5T tokens of continued pretraining — [BAAI Hub](https://hub.baai.ac.cn/view/47633); [DataLearner](https://www.datalearner.com/en/ai-models/pretrained-models/Intern-S1)
- **Intern-S1-Pro** (2026) has 1T total parameters and ~22B active (MoE), built on the "SAGE 通专融合" architecture. It claims olympiad gold-level math reasoning and is open on GitHub and HuggingFace. A March 2026 arXiv paper calls it the first trillion-parameter scientific multimodal foundation model, covering 100+ disciplines — [AIBase](https://www.aibase.com/zh/news/25272) (secondary)
- **Huawei Pangu-Weather** was published in Nature (2023) as the first AI model more accurate than NWP, running more than 10,000x faster — [Nature](https://www.nature.com/articles/s41586-023-06185-3); [CS.com.cn](https://www.cs.com.cn/ssgs/gsxw/202307/t20230706_6354292.html)
- **ByteDance**: AI Lab, including its AI4S unit, was merged into Seed (Apr 2025). Seed's AI4S work centers on SeedFold, SeedProteo and DPLM. Its paper reports that SeedFold beats AlphaFold3 on several FoldBench tasks — [ITHome](https://www.ithome.com/0/845/639.htm); [QbitAI](https://www.qbitai.com/2025/01/247606.html)
- **深势科技 (DP Technology)**:
  - Series C, Dec 2025: over ¥800M, from 达晨财智, 联想创投 and 北京市人工智能产业投资基金. Post-money valuation over ¥6B (~¥130B JPY).
  - Product matrix: Bohrium (micro-scale scientific computing cloud) and Hermite (drug design).
  - Total funding exceeded ¥1B by Oct 2024. No 2026 round found.
  - Sources: [36Kr pitchhub](https://pitchhub.36kr.com/project/1678547907048450); [36Kr Japan](https://36kr.jp/454066/); [TMTPost](https://www.tmtpost.com/7285112.html)
- **伏羲 (FuXi)** comes from 上海科学智能研究院 with Fudan and others.
  - Deployed operationally in several meteorological departments as a complement to NWP.
  - FuXi 2.0 (June 2024) added medium-range and sub-seasonal models aimed at renewables and aviation.
  - Alibaba Cloud provides its compute, including the Ulanqab data center.
  - Sources: [People's Daily app](https://www.peopleapp.com/column/30051669554-500007399159); [Yangzi Evening News, Jan 2026](https://www.yzwb.net/news/kj/202601/t20260109_309334.html)

### Inferences
- In China, the national-lab and government sector is the primary model builder. Big tech supplies compute (Alibaba Cloud for FuXi) or narrow domain models (ByteDance proteins, Huawei weather).
- Open-sourcing trillion-scale science models (Intern-S1-Pro) is China's main differentiation against closed US agent platforms.

### Gaps
- No 2026-specific findings for Baidu (飞桨/文心生物), Alibaba DAMO weather/medical, Tencent AI4S, Huawei 盘古 科学 updates, 北京科学智能研究院 AISI, or CAS 磐石. Searches did not surface them, and these need follow-up.
- Intern-S1-Pro benchmark numbers and exact release date were not confirmed from a primary source.

## 3. AI weather & climate: operational status, commercial players, business models

### Takeaway
AI weather forecasting is fully operational at the leading centers:
- **ECMWF:** AIFS Single and AIFS ENS have been operational since 2025. Both were upgraded to v2 on 12 May 2026, adding the first operational data-driven wave forecasts.
- **China CMA:** runs 风清 (medium range), 风雷 (nowcasting) and 风顺 (S2S) operationally.

Commercial players monetize through energy trading (Jua), proprietary observations plus AI (Tomorrow.io DeepSky satellites, WindBorne balloons), and sector services (renewables, aviation, insurance).

### Cited Findings
- **ECMWF AIFS**:
  - The AIFS ENS ensemble has been operational since 1 July 2025.
  - IFS Cycle 50r1, AIFS Single v2 and AIFS ENS v2 were implemented jointly on 12 May 2026.
  - New in v2: a wave component (first operational data-driven wave forecasts, 4 runs a day to 15 days) and a 10 hPa stratospheric level.
  - At the same time ECMWF stopped products from third-party ML models (Aurora, FourCastNet, GraphCast, Pangu).
  - Sources: [ECMWF forum](https://forum.ecmwf.int/t/confirmation-ifs-cycle-50r1-and-aifs-v2-joint-implementation-on-12-may-2026/14937); [ECMWF Set XIII](https://www.ecmwf.int/en/forecasts/dataset/set-xiii); [ECMWF AIFS data](https://www.ecmwf.int/en/forecasts/datasets/aifs-machine-learning-data)
- **CMA 风清/风雷/风顺** were released together on June 18 (year per Tsinghua/Xinhua coverage, 2025):
  - **风清** (CMA + Tsinghua, global medium range): officially verified at 10.5 days of useful forecast skill, claimed to exceed European and US AI models. Deployed operationally nationwide for disaster prevention, PV/wind dispatch and aviation.
  - **风雷** (nowcasting): 1 km national resolution, 0–3h forecasts every 10 minutes. The full system produces radar extrapolation in under 3 minutes.
  - **风顺**: sub-seasonal-to-seasonal forecasting.
  - Sources: [Tsinghua](https://www.tsinghua.edu.cn/info/1182/112280.htm); [Xinhua](https://www.news.cn/tech/20251206/93b4002c213549efa784691a38dbb8f9/c.html)
- CMA launched "风和", an AI weather service assistant, in Oct 2025 — [科技日报](https://www.stdaily.com/web/gdxw/2025-10/28/content_422720.html)
- CMA released the open-source "风源 V1.0" model in Dec 2025, its first end-to-end model with domestic IP — [China Services Info](https://www.chinaservicesinfo.com/s/202512/19/WS69464ac2498e3685503390a9/china-unveils-a-new-ai-meteorological-model.html); [Xinhua](https://www.news.cn/tech/20251219/99223b9d028a46faa3dda987a5f607b9/c.html)
- CMA's 2024 AI weather model demonstration program selected 14 models, including 伏羲, 璞云, 风乌 and 盘古 — [People's Daily app](https://www.peopleapp.com/column/30051669554-500007399159)
- **风乌** (Shanghai AI Lab lineage) is commercialized by Techwind. Its CTO told Reuters that five days before Typhoon "海豚" made landfall, 风乌's landfall error was within 30 minutes and 30 km. He also said AI still trails physics models on intensity — [nai500 (Aug 2026, citing Reuters)](https://nai500.com/zh-hans/blog/2026/08/8-48/) (secondary)
- **Tomorrow.io**:
  - Series F totals $210M after a $35M extension (May 2026), from Pitango and Harel Insurance plus Stonecourt and HarbourVest.
  - Funds go to the DeepSky "AI-native weather satellite constellation" and an agentic platform.
  - Target sectors: energy, aviation, logistics, government.
  - Sources: [BuiltIn Boston](https://www.builtinboston.com/articles/tomorrowio-series-f-extension-210m-20260520); [Pulse2](https://pulse2.com/tomorrow-io-210-million-series-f-expanded-with-additional-investment-from-pitango-and-harel-insurance/amp/)
- **Jua** (Zurich) focuses on energy trading. Its EPT-2 model is pitched as more accurate than NWP and as cutting balancing costs for traders. Funding is reported as $11.4M (Series A, June 2025) by one source and $18.5M by another — [Asymmetrix](https://asymmetrixintelligence.substack.com/p/company-analysis-jua); [Crunchbase](https://www.crunchbase.com/organization/jua)

### Inferences
- Once ECMWF and CMA offer free operational AI forecasts, a model alone stops being a moat. Commercial value moves to:
  - proprietary observations (Tomorrow.io satellites, WindBorne balloons),
  - vertical decision products (energy trading, renewables dispatch, insurance),
  - latency and resolution.
- The insurer Harel investing in Tomorrow.io points to insurance and risk as a business line.
- Known weakness: tropical cyclone intensity, per the Techwind CTO.

### Gaps
- No 2026 data found on WindBorne (funding, the WeatherMesh model, government contracts) or 墨迹天气 AI.
- No market-size figures for AI weather found.
- Alibaba DAMO's weather model (e.g., 八观) 2026 status not found.

## 4. AI agents for scientific discovery ("AI scientist") — state in 2025–2026

### Takeaway
"AI scientist" systems now complete end-to-end research loops at workshop-paper quality:
- Sakana's AI Scientist, described in Nature (Mar 2026).
- Edison's Kosmos.
- Google Co-Scientist and AlphaEvolve.

Reliability is still limited. Independent evaluation found 42% of experiments failed from coding errors, and hallucination persists. Big tech is productizing these as agents (Gemini for Science, Microsoft Discovery Engine, Claude Science).

### Cited Findings
- **Sakana AI Scientist**:
  - Published in Nature on March 26, 2026, co-authored with UBC, the Vector Institute and Oxford. The paper covers the architecture, scaling results and challenges; the paper itself was human-authored.
  - The automated reviewer reaches 69% balanced accuracy.
  - An AI Scientist-v2 paper was accepted at an ICLR 2025 workshop (score 6.33/10, above 55% of human submissions) and then voluntarily withdrawn.
  - Sources: [Sakana](https://sakana.ai/ai-scientist-nature/); [Pebblous](https://blog.pebblous.ai/report/ai-science-new-era/en/); [noqta](https://noqta.tn/en/news/sakana-ai-scientist-nature-automated-research-2026)
- An independent evaluation of AI Scientist found 42% of experiments failed from coding errors, with hallucination remaining — [rywalker.com](https://rywalker.com/research/ai-scientist) (secondary)
- **Edison Kosmos** runs literature review, data analysis and hypothesis generation and testing, and produces cited reports with code — [HPCwire](https://www.hpcwire.com/aiwire/2025/11/07/futurehouse-spins-out-edison-scientific-launches-kosmos-ai-for-research/)
- **Microsoft Discovery Engine** is an "autonomous research partner" that plans, delegates to agents, monitors and adapts — [Redmond Mag](https://redmondmag.com/articles/2026/06/02/microsoft-discovery-hits-ga.aspx)
- **Google Co-Scientist** is a multi-agent Gemini system for hypothesis and experiment proposals with a biomedical focus — [Google Cloud docs](https://docs.cloud.google.com/gemini/enterprise/docs/co-scientist-and-alphaevolve)
- **Intern-S1-Pro** is claimed to be first-tier among open models on agent tasks that reflect real research workflows — [AIBase](https://www.aibase.com/zh/news/25272)

### Inferences
- 2026 is when "AI scientist" moved from demo to product. The proven value so far is in computable domains: algorithms and math (AlphaEvolve), ML research (Sakana), and literature or data synthesis (Kosmos). Wet-lab closed loops (Periodic Labs) are still early.

### Gaps
- No peer-reviewed measurements found of discoveries made by AI-scientist agents in 2026 beyond the Sakana Nature paper.
- Not covered: China AI-scientist agents (e.g., 深势 Bohrium agents, Shanghai AI Lab agent platforms) and AI-for-math formal provers (e.g., DeepMind AlphaProof, Seed-Prover). These need a dedicated search.

## 5. Compute / HPC for science: national supercomputing + AI, DOE Genesis Mission

### Takeaway
The US organizes AI-for-science compute through the DOE **Genesis Mission**:
- Executive order, Nov 2025.
- MOUs with 24 organizations, Dec 2025.
- Over $800M in partner commitments and 41 industry/nonprofit consortium members by July 2026.
- First awards: 278 projects and $250M.

Nearly all frontier labs and chip/cloud vendors are partners. China's equivalent relies on national labs plus cloud providers (e.g., Alibaba Cloud compute for FuXi); no 2026 specifics were found.

### Cited Findings
- **Genesis Mission partners (Dec 2025)**: DOE signed collaboration agreements with 24 organizations. Named partners include Accenture, AMD, Anthropic, AWS, Google, HPE, IBM, Intel, Microsoft, NVIDIA, OpenAI, Oracle, Palantir, xAI and XPRIZE — [DOE](https://www.energy.gov/node/4855568); [TechInformed](https://techinformed.com/doe-and-24-organizations-sign-ai-collaboration-deal/)
- **Genesis Mission summit (July 2026)**: DOE announced more than $800M in partner commitments through the Genesis Mission Consortium. Members are all 17 DOE national labs, 5 NNSA plants and sites, and 41 industry, nonprofit and philanthropic organizations. Outreach is expanding to universities — [DOE](https://www.energy.gov/node/4859592); [HPCwire](https://www.hpcwire.com/off-the-wire/doe-launches-genesis-mission-consortium-to-coordinate-public-private-ai-research/)
- **First awards**: 278 projects and $250M. The White House cites more than $5B in federal commitments across agencies. One report lists 16 labs versus DOE's 17 — [AI Weekly](https://aiweekly.co/alerts/trump-unveils-5b-genesis-mission-doe-picks-278-ai-projects) (secondary)
- **Reflection AI** MOU, May 22, 2026 (open-source AI platform for the national labs) — [CDO Magazine](https://www.cdomagazine.tech/us-federal-news-bureau/doe-expands-genesis-mission-with-reflection-ai-partnership-to-accelerate-scientific-discovery)
- Alibaba Cloud's Ulanqab data center supplies compute for FuXi — [People's Daily app](https://www.peopleapp.com/column/30051669554-500007399159)

### Inferences
- Genesis turns frontier labs into quasi-national science infrastructure suppliers, which reinforces US labs' AI4S positioning (OpenAI's "Year of AI and Science" letter, Anthropic and Google as partners).
- It is unclear how much of the $800M is cash versus in-kind (compute credits).

### Gaps
- Not found: the split of Genesis commitments between firm cash and in-kind.
- Not found: specific Genesis supercomputer builds (e.g., NVIDIA/Oracle systems at Argonne, AMD systems at ORNL).
- Not found: China's national supercomputing-plus-AI for science programs in 2026 (国家超算中心, "AI for Science" 专项, 科技部 programs).
