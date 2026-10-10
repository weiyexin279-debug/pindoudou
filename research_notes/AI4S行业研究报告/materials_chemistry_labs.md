# AI for Materials Science, Chemistry and Autonomous Labs (AI4S segments): global and China, as of October 2026

Research date: 2026-10-10. Every figure is dated. "Reported" means the figure comes from media or unconfirmed sources. Several primary sites (TechCrunch, Toutiao, Sacra) could not be fetched from this environment, so some items rely on search snippets or secondary sources. Those items are flagged.

## 1. Global materials/chemistry AI: technology status and key players

### Takeaway
Big-tech labs (DeepMind GNoME, Microsoft MatterGen/MatterSim/Azure Quantum Elements, Meta FAIR OMat24/UMA) mostly publish open models and datasets. Their headline "discovery" claims have drawn serious novelty criticism. Venture capital has moved hard into vertically integrated "AI + own lab" startups. In 2025–26, Periodic Labs, Lila Sciences and CuspAI reached multi-billion-dollar valuations before they had material public revenue.

### Cited Findings
**Google DeepMind GNoME**
- Late 2023 (Nature): GNoME predicted 2.2 million new crystal structures, of which about 380,000 were judged stable. DeepMind contributed the 380,000 most stable candidates to the Materials Project — [Freethink](https://www.freethink.com/robots-ai/google-ai-discovers-2-2-million-new-materials); [Interesting Engineering](https://interestingengineering.com/innovation/google-deepmind-invents-400000-materials)

**Microsoft (MatterGen / MatterSim / Azure Quantum Elements)**
- Jan 2025: Microsoft released MatterGen, a generative model, and MatterSim, a simulator — [The Decoder](https://the-decoder.com/mattergen-microsoft-presents-ai-tools-for-generating-and-simulating-new-materials/)
- MatterGen proposed TaCr2O6, which the Shenzhen Institute of Advanced Technology (中科院深圳先进院) then synthesized. The target bulk modulus was 200 GPa and the measured value was 169 GPa, roughly 20% error — [CO/AI](https://getcoai.com/news/microsoft-built-an-ai-model-that-designs-materials-for-the-future-heres-how-it-works/); [Warpnews](https://www.warpnews.org/artificial-intelligence/new-ai-model-creates-tailored-materials-for-future-technology-2/)
- Jan 2024: Microsoft and PNNL used Azure Quantum Elements (AI plus HPC; despite the name, no quantum computer was used) to screen 32 million candidates down to 18 in about 80 hours. The result was a Na/Li solid electrolyte (NaxLi3−xYCl6) using up to 70% less lithium. It was synthesized and prototyped in under 9 months, but its measured conductivity was lower than predicted — [Utility Dive](https://www.utilitydive.com/news/pnnl-microsoft-artificial-intelligence-research-battery/704176/); [EEPower](https://eepower.com/news/microsofts-quantum-computing-tools-expedite-battery-materials-research/); [Notebookcheck](https://www.notebookcheck.net/Microsoft-AI-creates-cheap-solid-state-battery-by-sifting-through-32-million-virtual-electrolyte-materials.792316.0.html)

**Meta FAIR Chemistry (OMat24, UMA)**
- Oct 2024: OMat24 released more than 110 million DFT calculations. Its EquiformerV2 models reached state of the art on Matbench Discovery (F1 above 0.9 for stability; about 20 meV/atom formation-energy error). Code is MIT-licensed and data is CC BY 4.0 — [arXiv 2410.12771](https://arxiv.org/pdf/2410.12771)
- May–Jun 2025: UMA (Universal Model for Atoms) was released. It is one family of models trained across molecules, materials and catalysts, using a "mixture of linear experts" design. Press coverage claimed it is about 10,000 times faster than DFT — [arXiv 2506.23971](https://arxiv.org/abs/2506.23971); [Semafor, 2025-05-14](https://www.semafor.com/article/05/14/2025/meta-releases-new-data-set-ai-model-aimed-at-speeding-up-scientific-research)

**Periodic Labs (US; founded by ex-OpenAI and ex-DeepMind researchers)**
- Sep 30, 2025: raised a $300M seed led by a16z, with DST Global, NVIDIA, Accel and others. Post-money valuation is reported as about $1.3B or $1.5B; sources disagree — [TechCrunch 2025-09-30](https://techcrunch.com/2025/09/30/former-openai-and-deepmind-researchers-raise-whopping-300m-seed-to-automate-science); [SiliconANGLE](https://siliconangle.com/2025/10/01/periodic-labs-raises-300m-accelerate-scientific-research-ai/); [Contrary](https://research.contrary.com/company/periodic-labs/quick-facts)
- Its first stated goal is to discover new, higher-temperature superconductors. It also works on agents for analyzing semiconductor experimental data, and says it is helping an unnamed semiconductor maker with chip heat dissipation — [SiliconANGLE](https://siliconangle.com/2025/10/01/periodic-labs-raises-300m-accelerate-scientific-research-ai/); [SVIC tear sheet](https://siliconvalleyinvestclub.com/companies/periodic/tear-sheet.pdf)
- Mar–Jun 2026 (reported, not announced by the company): Bloomberg reported a raise of hundreds of millions of dollars at about $7B. Later reports describe about $500M at $7B, with AMP (Anjney Midha) as lead at about $7.5B — [The Logic](https://thelogic.co/briefing/radical-ventures-backs-periodic-labs-in-us300m-round-to-build-ai-scientists/); [RevenueMemo](https://www.revenuememo.com/p/periodic-labs-funding)
- The company says its "Periodic Neon" model analyzes experimental (diffraction) data in its own labs and beats frontier LLMs. This is self-reported with no independent benchmark — [SVIC tear sheet](https://siliconvalleyinvestclub.com/companies/periodic/tear-sheet.pdf)

**Lila Sciences (US; Flagship Pioneering spin-out; "scientific superintelligence" and "AI Science Factories")**
- 2025: the Series A totaled $350M, including a $115M extension with NVentures. Valuation was above $1.3B and total capital raised was $550M — [Reuters via Yahoo](https://finance.yahoo.com/news/exclusive-ai-lab-lila-sciences-101645837.html)
- Jun 3, 2026 (Bloomberg, reported): in talks to raise about $2B at about $8.5B pre-money, anchored by CalPERS and NVentures. Sacra cites about $10.5B post-money. As of Jul 2026 the company had not confirmed the round — [Bloomberg Law](https://news.bloomberglaw.com/private-equity/lila-sciences-said-in-talks-for-funds-at-8-5-billion-valuation); [Startup Fortune 2026-07-14](https://startupfortune.com/lila-sciences-is-testing-how-much-investors-will-pay-for-automated-labs/); [Sacra](https://sacra.com/c/lila-sciences/)
- Business model: generate proprietary experimental data in automated labs ("AI Science Factories") rather than train on internet data — [Reuters via Yahoo](https://finance.yahoo.com/news/exclusive-ai-lab-lila-sciences-101645837.html)

**CuspAI (Cambridge, UK; materials for carbon capture, chemicals and similar)**
- Jun 2024: $30M seed — [Latham & Watkins](https://lw.com/en/news/2024/06/latham-advises-on-30-million-seed-fundraising-of-cuspai)
- Sep 2025: $100M at a $520M valuation — [Tech.eu](https://tech.eu/2026/07/20/jeff-bezos-and-sovereign-ai-back-cuspai-in-450m-raise)
- Jul 20, 2026: $450M Series B at a $2.6B valuation. Kleiner Perkins and NEA co-led, with Bezos Expeditions, the UK Sovereign AI Fund, Temasek and Northzone participating. Total raised is above $670M. Stated aim: a "global AI materials foundry." Some outlets reported a $400M figure in June 2026; it appears to be the same round — [Tech.eu](https://tech.eu/2026/07/20/jeff-bezos-and-sovereign-ai-back-cuspai-in-450m-raise); [Axios Pro](https://www.axios.com/pro/climate-deals/2026/07/21/cuspai-ceo-material-challenge); [Runtimewire](https://runtimewire.com/article/cuspai-450m-series-b-ai-materials-foundry)

**Orbital Materials → renamed Orbital Industries (London/SF; founder Jonathan Godwin, ex-DeepMind)**
- May 28, 2026: $50M Series B led by Plural, with NVentures, Radical Ventures, Compound and Fly Ventures. The first two products target data centers. A third-party claim of a "$200M Series B at $1.2B" in Sep 2025 is unreliable — [Fortune](https://fortune.com/2026/05/28/exclusive-orbital-industries-raises-50-million-series-b-funding-round-ai-to-discover-exotic-new-materials/); [Runtimewire](https://runtimewire.com/article/orbital-industries-50m-series-b-ai-materials-jonathan-godwin)

**Radical AI (NYC; AI plus self-driving lab for materials)**
- Jul 1, 2025: $55M seed led by RTX Ventures. No 2026 round was found — [StartupIntros](https://startupintros.com/news/2025-07-01-radical-ai-seed); [Signalbase](https://www.trysignalbase.com/news/funding/radicalai-secures-55m-seed-round-to-revolutionize-materials-rd-with-ai-driven-innovation)

**Schrödinger (incumbent physics-based software; materials is a minority segment)**
- FY2025 10-K: annual contract value (ACV) was $198.5M in 2025, up from $190.8M in 2024. The filing cites a growing number of materials-science customers but gives no separate materials revenue — [SEC 10-K FY2025](https://www.sec.gov/Archives/edgar/data/1490978/000149097826000010/sdgr-20251231.htm)

**Citrine Informatics and other materials-informatics incumbents**
- MarketsandMarkets names Mat3ra, Schrödinger, Dassault Systèmes, Citrine Informatics and Phaseshift as the top 5 material-informatics vendors. This is a vendor-sold report — [MarketsandMarkets](https://www.marketsandmarkets.com/ResearchInsight/material-informatics-market.asp)

### Inferences
- Valuations rose roughly 5–7x in about 9–12 months: Periodic went from about $1.3B to $7–7.5B, Lila from $1.3B to $8.5–10.5B, and CuspAI from $0.52B to $2.6B. No public revenue backs these figures. The market is pricing these firms as frontier-AI labs, not SaaS businesses.
- Big tech mostly open-sources models and data (Meta MIT/CC BY; GNoME data given to the Materials Project). Startups' moats therefore come from wet-lab data generation, not models. This is the stated thesis of Lila and Periodic.
- Smaller, product-focused firms (Orbital's data-center products, Radical AI) raise much smaller rounds. Capital is concentrating in a few "lab-native AI" platforms.

### Gaps
- No public revenue for Periodic Labs, Lila, CuspAI, Orbital or Radical AI was found.
- Citrine Informatics funding, revenue and customers since 2024 were not found.
- Microsoft Discovery (the agentic platform launched at Build 2025) and its 2026 status, and Microsoft's commercial terms for Azure Quantum Elements, were not verified.
- Mitra Chem (battery cathode AI) 2025–26 status was not researched (no tool budget left).
- No 2025–26 updates on GNoME (e.g., new DeepMind materials work or a commercial unit) were found.

## 2. Key results and controversies (novelty, reproducibility)

### Takeaway
All three flagship "AI discovered new materials" claims (GNoME, A-Lab, MatterGen) have published challenges. The challenges say outputs are often duplicates or already-known compounds, or lack demonstrated utility. Credible validation, ideally independent synthesis plus property measurement, has become the field's central issue.

### Cited Findings
- Cheetham and Seshadri, Chemistry of Materials (Apr 2024): sampling GNoME/A-Lab outputs found "scant evidence for compounds that fulfill the trifecta of novelty, credibility, and utility." They found no "strikingly novel" compounds in their sample. Many entries assume unrealistic metal-ion orderings, and none of the 384,870 compositions has demonstrated function. They still say the methods "appear to hold promise" with more domain expertise — [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC11044265); [The Register 2024-04-11](https://www.theregister.com/2024/04/11/google_deepmind_material_study/)
- Kurlin et al. found 1,224 exact-duplicate pairs in GNoME, plus many near-duplicates, consistent with atom substitution into known structures — [Gigazine 2024-04-28](https://gigazine.net/gsc_news/en/20240428-deepmind-materials)
- A-Lab (Berkeley Lab, Nature 2023) reported synthesizing 41 of 58 targets in 17 days, a 71% success rate — [Freethink](https://www.freethink.com/robots-ai/google-ai-discovers-2-2-million-new-materials)
- A single, unconfirmed source says Nature issued a correction to the A-Lab paper in Jan 2026, following a UCL critique (Robert Palgrave) that the compounds were largely already in ICSD. This needs verification — [PDP Spectra blog](https://pdpspectra.com/blog/ai-materials-discovery-gnome-2026)
- MatterGen challenge (2026, Materials Horizons, Juelsholt): the synthesized "TaCr2O6" was a disordered Ta1/3Cr2/3O2 identical to a compound reported decades ago and already in MatterGen's training data — [HU Berlin edoc](https://edoc.hu-berlin.de/18452/38430); [Cambridge Engage preprint](https://www.cambridge.org/engage/coe/article-details/694d24f36e8e74030e9067de)
- Microsoft/PNNL electrolyte: measured conductivity was lower than predicted, and researchers caution it may not scale — [Notebookcheck](https://www.notebookcheck.net/Microsoft-AI-creates-cheap-solid-state-battery-by-sifting-through-32-million-virtual-electrolyte-materials.792316.0.html); [EEPower](https://eepower.com/news/microsofts-quantum-computing-tools-expedite-battery-materials-research/)

### Inferences
- The critiques strengthen the case for closed-loop labs with expert characterization (the Lila and Periodic thesis). They weaken pure "compute-only discovery" claims.
- For investors, the fact that compounds were "already in ICSD or training data" is the key diligence risk for any AI-materials novelty claim.

### Gaps
- The Jan 2026 Nature correction to A-Lab is not confirmed by a primary source; the Nature notice should be checked. The Palgrave/Schoop critique of A-Lab (believed to be published around 2024) was not retrieved here.
- DeepMind's or Microsoft's formal responses were not retrieved; [The Stack](https://thestack.technology/scant-evidence-googles-ai-chemistry-claims-were-misleading) carries some of the back-and-forth.

## 3. China: DP Technology (深势科技), XtalPi (晶泰), MegaRobo (镁伽), CAS/USTC robotic chemist, others

### Takeaway
DP Technology (深势科技) is China's flagship AI4S platform company. It is valued above RMB 6B after an RMB 800M+ Series C (Dec 2025), completed its joint-stock conversion, and reportedly plans a Hong Kong IPO in 2026. XtalPi (晶泰, 2228.HK) is the only listed scale player. Its revenue is lumpy, driven by deals (H1 2026: RMB 393.6M), with no materials breakout. MegaRobo (镁伽) filed for a Hong Kong IPO in Jul 2025 at a valuation of about RMB 10.5B, with losses of RMB 0.74–0.78B a year.

### Cited Findings
**深势科技 DP Technology**
- Earlier round: "超7亿元" (RMB 700M+) new round — [界面新闻](https://www.jiemian.com/article/9950844.html); [财联社](https://www.cls.cn/detail/1436782)
- Dec 2025: Series C above RMB 800M from 达晨财智, 京国瑞基金, 北京市人工智能产业投资基金 and 联想创投. Cumulative funding is "数十亿元" (several billion RMB), and the company is now a unicorn — [投资界 2025-12](https://news.pedaily.cn/202512/559044.shtml); [新浪科技 2025-12-24](https://finance.sina.com.cn/tech/csj/2025-12-24/doc-inhcwxmm4453931.shtml)
- Post-money valuation above RMB 6B (about ¥130B JPY); the round is about ¥18B JPY — [36Kr Japan](https://36kr.jp/454066/)
- Another round of "数亿元" (several hundred million RMB) from 北京市人工智能产业投资基金 and 中关村科学城公司 — [界面](https://www.jiemian.com/article/11830121.html); [创业邦 (Oct 2025 weekly)](https://m.cyzone.cn/article/778821)
- Early 2026: completed joint-stock reform and renamed 北京深势科技股份有限公司. It reportedly plans to launch a Hong Kong IPO and be the "AI4S第一股" (first AI4S listing). Shareholdings: 张林峰 19.2%, 鄂维南 (CAS academician) 5.8%. This is media-reported; no HKEX filing was found as of this research — [知乎/智能纪元](https://zhuanlan.zhihu.com/p/2002660483581358638)
- Products and business model: Bohrium (玻尔) 科研空间站, a "Hugging Face for science" covering literature, computation, experiments and collaboration — [新华网 2025-04-17](https://www.xinhuanet.com/tech/20250417/832cc5eeb42e4452b83e2751b4941362/c.html). Revenue comes from SaaS platforms (Bohrium, Hermite drug-design) for scale, plus custom solutions for pharma and new-energy materials customers — [36Kr Japan](https://36kr.jp/454066/)
- Apr 2026 coverage of DP Technology products — [量子位 2026-04](https://www.qbitai.com/2026/04/402988.html)

**晶泰科技 XtalPi (2228.HK)**
- FY2025: revenue about RMB 800M, up more than 200%. First net profit, RMB 258M — [虎嗅](https://www.huxiu.com/article/4854752.html?f=rss)
- H1 2026 (announced 2026-08-19): revenue RMB 393.6M, down from 517.1M, against a high base from a $51M upfront in 2025. Excluding that, revenue grew 73.8%. AI4S Intelligent Solutions revenue was RMB 193.5M (+136.4%) and Drug Discovery Solutions about RMB 200.1M. Net loss RMB 224.9M; adjusted net loss RMB 105.5M; R&D up 66%; cash RMB 8.67B at 2026-06-30 — [FilingReader 2026-08-19](https://filingreader.com/news-wire/hongkong/2026-08-19/xtalpi-posts-first-half-loss-despite-revenue-growth); [Tirto](https://tirto.id/xtalpi-holdings-announces-2026-interim-results-hBvU)
- DoveTree deal: total potential value about $5.99B, mostly milestones. A $51M upfront plus a second payment of $19M have been received — [PharmaShots](https://pharmashots.com/26886/dovetree-medicines-enters-a-5-99b-deal-with-xtalpi-to-discover-novel-therapeutics-across-various-indications/); [1stOncology](https://www.1stoncology.com/blog/?p=111450)
- Materials and robotics: new materials (新材料) is a key expansion direction, using AI plus robotic experiments to find structures — [财联社](https://www.cls.cn/detail/1845105). The 2026 H1 deck describes autonomous labs, "Agentic HTE" and a "physical intelligence" (lab robot) layer — [XtalPi IR H1 2026 deck](https://ir.xtalpi.com/media/bunjanst/2026-中期业绩发布会演示材料-cn.pdf). A recruiting page claims more than 5,000 m² of AI autonomous labs and more than 300 robots (self-reported) — [牛企招聘](https://campus.niuqizp.com/schedule-78rr5M5nt.html)

**镁伽科技 MegaRobo**
- 8 funding rounds, about RMB 2.7B raised in total. Jul 2025: filed for an HKEX Main Board listing with sponsors Morgan Stanley, Huatai International, Deutsche Bank and CCB International. Reported valuation about RMB 10.5B. Net losses: RMB 759M (2022), 742M (2023), 780M (2024) — [蓝鲸新闻](https://www.lanjinger.com/d/1752275541584677009); [周刊](https://static.weeklyonstock.com/25/0715/zbf161142.html)
- Jun 2026: named to Fortune China Tech 50 (2026) for "AI + life sciences" smart labs. Product: "autonomous agents" (hardware, software and AI) for smart labs and smart manufacturing — [中华网 2026-06-26](https://m.tech.china.com/digi/articles/20260626/202606261902950.html); [量子位 2025-07](https://www.qbitai.com/2025/07/306259.html)

**中国科大 USTC "机器化学家" (Robotic Chemist)**
- Concept proposed 2014 by 江俊's team. In 2022 the 罗毅/江俊 team (with 尚伟伟, Automation dept.) built the data-driven "全流程机器化学家" (full-process robotic chemist), published in National Science Review. The "小来" platform has 2 mobile robots, 19 chemical workstations, and high-throughput computing plus databases. The team was named CAS Team of the Year 2022 — [羊城晚报/中新网 2022-10-06](https://news.ycwb.com/2022-10/06/content_41089233.htm); [人民日报 2023-04-24](https://paper.people.com.cn/rmrb/html/2023-04/24/nw.D110000renmrb_20230424_1-19.htm)
- Apr 2025: 人民日报 continued to profile the 江俊/"小来" work — [人民日报客户端](https://www.peopleapp.com/column/30048917938-500006228875)

### Inferences
- China's AI4S capital is heavily state-guided: Beijing AI fund, 京国瑞, 中关村科学城 in DP Technology. Valuations are an order of magnitude below US peers (DP Technology at RMB 6B+, about $0.85B, vs Lila/Periodic at $7–10B).
- XtalPi's revenue swings on single pharma licensing deals. Its growing "AI4S Intelligent Solutions" line (which includes robotics and materials work) is the better proxy for platform demand, but materials is not broken out.
- Hong Kong (HKEX 18C/Main Board) is the exit route for the sector: XtalPi listed, MegaRobo filed, DP Technology preparing.

### Gaps
- No HKEX filing for DP Technology was found as of Oct 2026, nor revenue figures, Bohrium user counts, Piloteye battery-design product metrics, or the Uni-Mol / Uni-Lab commercial status.
- No confirmed DP Technology–CATL relationship was found. CATL's and other battery or semiconductor makers' internal AI-materials efforts were not verified.
- 创腾科技 (Neotrident) and Huawei, Baidu and Alibaba materials efforts were not researched within the tool budget.
- MegaRobo IPO outcome (listed or lapsed) as of Oct 2026 was not confirmed.

## 4. Autonomous labs and lab-automation market size

### Takeaway
Self-driving labs have academic demonstrators (Berkeley A-Lab; USTC robotic chemist; CMU–Emerald cloud lab) and are now the core capex thesis of Lila and Periodic. The broader lab automation market is only about $6–6.5B (2025 estimates, vendor reports), growing about 9–13% a year.

### Cited Findings
- Lab automation and self-driving lab market: $6.0B in 2025, projected $20B by 2035 (CAGR 12.8%, 2026–2035) — [Astute Analytica](https://www.astuteanalytica.com/request-sample/lab-automation-and-self-driving-lab-market)
- Alternative estimate: $6.5B (2025) to $16B (2035), CAGR 9.4% (Roots Analysis via a secondary page) — sourced from search snippet; treat as secondary.
- Emerald Cloud Lab and CMU: an Aug 2021 partnership to build the first academic cloud lab (about $40M, more than 100 instrument types, on ECL software) at Bakery Square, Pittsburgh, targeted to be operational by fall 2023 — [CMU](https://www.cmu.edu/chemistry/news-events/2021/0830_cloud-lab-partnership.html); [Tradeline 2023](https://www.tradelineinc.com/reports/2023-1/carnegie-mellon-open-first-ever-academic-cloud-lab)
- Lila "AI Science Factories" (robotic instruments running continuous experiments) — [Reuters via Yahoo](https://finance.yahoo.com/news/exclusive-ai-lab-lila-sciences-101645837.html)
- XtalPi: more than 5,000 m² of autonomous labs and more than 300 robots (self-reported) — [牛企招聘](https://campus.niuqizp.com/schedule-78rr5M5nt.html)

### Inferences
- The traditional lab-automation hardware market (about $6B) is small relative to the capital being raised by AI-native lab startups. Lila's reported $2B round alone is about a third of annual market size. This implies the investment thesis rests on value from discoveries or IP, not on selling automation.

### Gaps
- No 2024–26 news on Emerald Cloud Lab's funding or status, Ginkgo's automation business (e.g., RACs/"Datapoints") metrics, or the 2026 state of Berkeley A-Lab was retrieved.
- Market-size figures come only from paid vendor reports; no independent source was found.

## 5. Business models, revenue evidence and who pays

### Takeaway
Four models coexist:
- (a) Software/SaaS licenses: Schrödinger (ACV $198.5M FY2025, mostly pharma), Citrine, DP Technology's Bohrium/Hermite.
- (b) Pharma-style R&D services plus milestone deals: XtalPi.
- (c) Lab automation hardware: MegaRobo, with large ongoing losses.
- (d) Vertically integrated "discover-and-own" materials IP or products: Periodic, Lila, CuspAI, Orbital, which so far has data-center products.

Pharma remains the main proven payer. Materials, battery and semiconductor revenue is real but small and rarely disclosed.

### Cited Findings
- Schrödinger ACV $198.5M (2025) vs $190.8M (2024); materials is a minority with a growing customer count — [SEC 10-K](https://www.sec.gov/Archives/edgar/data/1490978/000149097826000010/sdgr-20251231.htm)
- XtalPi H1 2026: AI4S solutions RMB 193.5M vs drug discovery RMB 200.1M; FY2025 profit was driven by the DoveTree deal — [FilingReader](https://filingreader.com/news-wire/hongkong/2026-08-19/xtalpi-posts-first-half-loss-despite-revenue-growth); [虎嗅](https://www.huxiu.com/article/4854752.html?f=rss)
- DP Technology: SaaS plus custom solutions for pharma and new-energy materials — [36Kr Japan](https://36kr.jp/454066/)
- MegaRobo: net losses of RMB 0.74–0.78B a year (2022–24) — [蓝鲸](https://www.lanjinger.com/d/1752275541584677009)
- Periodic: unnamed semiconductor customer (thermal management) — [SVIC tear sheet](https://siliconvalleyinvestclub.com/companies/periodic/tear-sheet.pdf). Orbital: first two products for data centers — [Fortune 2026-05-28](https://fortune.com/2026/05/28/exclusive-orbital-industries-raises-50-million-series-b-funding-round-ai-to-discover-exotic-new-materials/)

### Inferences
- Paying customers for materials AI are emerging in semiconductors and data centers (thermal, cooling, carbon capture), battery and energy, and chemicals. However, no company in this sample discloses materials-specific revenue above roughly tens of millions of dollars.
- The outlook for 2026–27 depends on (1) whether Lila or Periodic show verified discoveries that can be commercialized, given the novelty critiques, and (2) China's IPO wave (DP Technology, MegaRobo), which would create the first public valuation benchmarks for AI4S platforms.

### Gaps
- No disclosed materials revenue for any company. Customer names in chemicals (BASF, Dow and others), battery (CATL and others) and semiconductors were not verified in this research.
