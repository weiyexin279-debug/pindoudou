# AI for Science（AI4S）行业研究报告：全球与中国

> 研究日期：2026-10-10 ｜ 口径：公开资料（优先 2024–2026） ｜ 货币：未注明者为美元
> 可信度标记：**[一手]** 公司/政府公告、同行评议论文；**[机构]** 市场研究机构报告摘要；**[媒体]** 媒体报道；**[二手]** 聚合站或转述，需复核；**[估计]** 本报告基于公开数字推算。

---

## 0. 执行摘要（关键结论）

1. **AI4S 没有统一市场口径，规模数字相差 1–2 个数量级**：窄口径的"AI 科学发现软件/平台"市场在 2025 年约 **47–86 亿美元**（Precedence、Market.us、Marketintelo），2030 年约 **110–200 亿美元**[估计]；而把 HPC 算力也算进来的"HPC+AI for science"广义支出在 2025 年约 **700 亿美元**，2030 年接近 **1,400 亿美元**（Hyperion Research，2026）。
2. **资本正在从"AI 制药"扩散到"AI 科学家/自主实验室"**：Isomorphic Labs 2026 年 5 月完成 21 亿美元 B 轮，并传出以≥400 亿美元估值再融资；Lila Sciences（洽谈约 85 亿美元投前估值）、Periodic Labs（据报约 70 亿美元估值）、Chai Discovery（38 亿美元）等形成新一轮"科学基础模型+湿实验闭环"独角兽。
3. **国家队全面入场**：美国 Genesis Mission（EO 14363，2025-11）、中国国务院"人工智能+"行动将"人工智能+科学技术"列为六大行动之首（国发〔2025〕11 号）、欧盟 AI in Science 战略/RAISE（2025-10）、英国 AI for Science Strategy（2025-11）——AI4S 已成为大国科技竞争的核心议题。
4. **商业化仍以"BD 里程碑"为主，现金收入很薄**：Lilly–Insilico 交易总额最高 27.5 亿美元但首付仅 1.15 亿美元；Insilico 2025 年收入约 5,620 万美元、Recursion 7,470 万美元、Schrödinger 2.56 亿美元；晶泰科技 2025 年首次全年盈利（收入约 8.03 亿元人民币，[二手]）。"首个完全由 AI 发现并获批上市的新药"仍未出现，Insilico rentosertib 于 2026 年 9 月进入 III 期，是行业最关键的验证节点。
5. **中国在开源科学大模型、AI 气象和 AI 制药 BD 方面形成局部优势**（书生 Intern-S1/S2、风清/风雷/风顺、盘古气象；英矽智能 2025-12 港股 IPO 募资 22.77 亿港元），但专项市场规模统计薄弱（唯一可查口径为共研 2024 年"AI4S 应用市场 47 亿元"），一级市场单笔规模与美国差距明显。

---

## 1. 行业定义与范畴

**定义**：AI for Science（科学智能 / 人工智能驱动的科学研究）指将机器学习、深度学习、生成式模型、大语言模型与智能体（Agent）、机器人自动化等技术，用于科学假设生成、模拟计算、实验设计与执行、数据分析与知识发现的新科研范式。鄂维南院士于 2018 年在国内首次系统提出推动 AI for Science（北京科学智能研究院，[媒体]）。中国科技部将其称为"人工智能驱动的科学研究"（2023 年专项部署）。

| 方向 | 典型问题 | 代表模型/系统 | 主要商业化场景 |
|---|---|---|---|
| 药物发现 / 蛋白质结构与设计 | 结构预测、分子生成、ADMET、抗体设计 | AlphaFold 2/3、RoseTTAFold、Chai-2、IsoDDE、Pharma.AI、xTrimo | 制药研发合作、自研管线、SaaS |
| 材料与化学 | 晶体结构发现、性质预测、逆向设计、合成路线 | GNoME、MatterGen、DPA 大原子模型、Uni-Mol | 电池/半导体/催化/化工材料研发 |
| 气象气候与地球科学 | 中期天气预报、集合预报、次季节预测 | GraphCast、GenCast、WeatherNext 2、AIFS、Aurora、盘古气象、风乌、伏羲、风清/风雷/风顺 | 国家气象业务、能源调度、保险、农业 |
| 物理 / 核聚变 / 高能物理 | 等离子体控制、粒子事件重建、量子多体 | DeepMind 托卡马克控制、TORAX 等 | 能源、国家实验室 |
| 生命科学 / 基因组 | DNA/RNA/蛋白质语言模型、调控元件预测、虚拟细胞 | Evo / Evo 2（Arc Institute）、AlphaGenome、ESM3 | 合成生物、基因治疗、育种 |
| 数学与自动化科研（AI Scientist） | 定理证明、算法发现、文献综述、假设—实验闭环 | AlphaEvolve、AI co-scientist、Sakana AI Scientist、FutureHouse/Edison Kosmos、OpenAI Prism | 企业研发助理、科研 SaaS |
| 自主实验室（Self-driving Lab） | 机器人合成与表征、闭环优化 | Berkeley A-Lab、Lila、Periodic Labs、DeepMind 英国自动化实验室、深势 Uni-Lab、晶泰机器人实验室 | 材料/化学/生物研发外包 |
| 科学计算基础设施 | HPC+AI 融合、科学数据库、科研云平台 | NVIDIA BioNeMo/Earth-2、Microsoft Discovery、Bohrium 玻尔、DOE American Science and Security Platform | 算力、云、平台订阅 |

---

## 2. 市场规模与增速

### 2.1 全球 AI4S 总体市场（多机构口径对比）

| 机构（年份） | 市场口径 | 基年数值 | 预测值 | CAGR | 来源 |
|---|---|---|---|---|---|
| Precedence Research（2025/26） | AI for Scientific Discovery | 2025：48.0 亿美元；2026：58.5 亿 | 2035：347.8 亿 | 21.9%（2026–35） | [机构] precedenceresearch.com |
| Market.us | AI for Scientific Discovery | 2025：47.2 亿 | 2035：342.0 亿 | ~22% | [机构] market.us |
| Technavio | AI for Scientific Discovery | — | 2024–29 增量 +44.1 亿 | 19.0% | [机构] technavio.com |
| Marketintelo | AI in Scientific Research | 2025：86 亿 | 2034：473 亿 | ~21% | [机构] marketintelo.com |
| Luminix（二手） | AI 辅助科研工具 TAM | 2025–26：80–200 亿 | — | — | [二手] |
| **Hyperion Research（2026）** | **HPC + AI for science 全栈支出**（服务器/存储/软件/服务/云） | 2025：~700 亿 | 2030：~1,400 亿 | ~15% | [机构] HPCwire 2026-06-24 |

**口径差异说明**：Precedence / Market.us / Technavio 统计的是"AI 软件平台+服务"层（Precedence 称软件平台占 2025 年约 44%，北美占约 40%）；Hyperion 统计的是科研机构和企业在 HPC 与 AI 基础设施上的全部支出（含硬件），二者不可比、不可相加。

**图表数据：全球 AI4S（窄口径）市场规模时间序列** — 以 Precedence 2025 年 48.0 亿美元、21.9% CAGR 外推 [估计]：

| 年份 | 2023 | 2024 | 2025 | 2026 | 2027 | 2028 | 2029 | 2030 |
|---|---|---|---|---|---|---|---|---|
| 规模（亿美元，估计） | ~33 | ~40 | 48.0 | 58.5 | ~71 | ~87 | ~106 | ~129 |
| 区间（含 Marketintelo 上沿，估计） | 30–60 | 35–72 | 47–86 | 58–104 | 70–126 | 85–152 | 100–180 | 115–215 |

> 2023/2024 为按同一 CAGR 倒推，2027–2030 为外推，仅作作图参考，非机构原始数字。

### 2.2 细分市场：AI 药物研发（AI in Drug Discovery）

| 机构（年份） | 基年 | 预测 | CAGR | 来源 |
|---|---|---|---|---|
| Arizton（2025） | 2024：17.1 亿美元 | 2030：85.2 亿 | 30.6% | [机构] arizton.com |
| ResearchAndMarkets（2025-05） | 2024：17.2 亿 | 2030：85.3 亿 | ~30% | [机构] BusinessWire 2025-05-09 |
| BioSpace 发布的行业报告 | — | 2030：108.0 亿 | — | [机构] biospace.com |
| Technavio（2025） | — | 2024–29 增量 +43.2 亿 | 25.7% | [机构] technavio.com |
| MarketsandMarkets（2026-07） | 2026：50.9 亿 | 2031：175.6 亿 | 28.1% | [机构] 经 Webull 转载 |
| Precedence Research | 2025：69.3 亿 | 2034：165.2 亿 | 10.1% | [机构] BioSpace |

**结论**：2025 年全球 AI 药物发现市场约 **20–70 亿美元**，2030 年约 **85–130 亿美元**（主流机构区间）。差异主要来自是否计入制药企业内部 AI 支出、CRO 服务和 AI 自研管线的里程碑收入。

**价值潜力参考**：麦肯锡估计生成式 AI 每年可为制药与医疗产品行业创造 **600–1,100 亿美元**经济价值（McKinsey，"Generative AI in the pharmaceutical industry: moving from hype to reality"，2024）。

### 2.3 细分市场：AI 材料（含材料信息学）

| 机构 | 口径 | 基年 | 预测 | CAGR |
|---|---|---|---|---|
| MarketsandMarkets | Material Informatics | 2025：1.704 亿美元 | 2030：4.104 亿 | 19.2% |
| ResearchAndMarkets（GlobeNewswire 2026-07） | GenAI in Material Science | 2025：16.8 亿；2026：22.4 亿 | 2030：70.1 亿 | ~33% |
| Technavio | GenAI in Material Science | — | 2024–29 增量 +17 亿 | 27.9% |
| The Business Research Company | GenAI in Material Science | 2025：6 亿 | 2030：>50 亿 | 文中称 28%（**数字自相矛盾**：按 28% 复合，2030 年约 21 亿，引用需谨慎） |

### 2.4 细分市场：AI 气象

暂无可信的专项市场规模数据。商业价值主要体现在国家气象业务（ECMWF AIFS、中国气象局"风"系列）、云厂商数据服务（Google WeatherNext 经 BigQuery/Earth Engine 提供）以及能源/保险下游，**本报告不给出数字**。

### 2.5 中国市场

| 机构（年份） | 口径 | 数值 | 备注 |
|---|---|---|---|
| 共研产业研究院（2024-09） | 中国 AI for Science 应用市场 | **47 亿元**（2023/2024） | [机构/二手] 经 B 站专栏转载；称 2070 年前有望达千亿级 |
| 头豹研究院（经财联社） | 中国 AI 制药 | 2019：0.7 亿元 → 2023：4.1 亿元；2024E：7.3 亿 → 2028E：58.6 亿元 | CAGR 68.5%（2024–28） |
| 观研天下（2025-07） | 中国 AI 制药 | 2020：0.82 亿元 → 2024：5.62 亿元 | 与头豹 2024 年数值不一致 |
| MarketsandMarkets | 中国 AI in Life Science | 2026：16.74 亿美元 → 2031：54.86 亿美元 | CAGR 26.8%，口径更宽 |
| 中国信通院（2025-12） | 中国人工智能核心产业（整体） | 2025：>1.2 万亿元，同比 +40% | 背景数据，不是 AI4S 专项 |

**口径说明**：国内"AI 制药市场"数字（数亿元）只统计 AI 技术服务/软件收入，不含 BD 交易额和自研管线价值，因此远低于晶泰、英矽的单家公司合作金额。若以"上市/头部 AI4S 公司收入合计"粗算：晶泰 2025 年约 8.03 亿元 + 英矽 2025 年约 5,620 万美元（约 4 亿元）+ 深势、百图等未披露，中国头部 AI4S 企业收入规模约 **15–25 亿元**量级 [估计]。

**中国 AI4S 市场规模区间（作图用，估计）**：2023 年 ~40 亿元 → 2025 年 ~60–80 亿元 → 2030 年 ~200–400 亿元。该区间以共研 47 亿元为基数，参照全球窄口径 20–25% 与头豹 AI 制药 60%+ 增速推算，**属估计，非机构数字**。

---

## 3. 技术演进与关键里程碑

| 时间 | 事件 | 意义 | 来源 |
|---|---|---|---|
| 2020-11 / 2021-07 | AlphaFold 2 在 CASP14 夺冠；Nature 论文与 AlphaFold DB 发布 | 蛋白质结构预测达到实验精度 | Jumper et al., Nature 2021 |
| 2022-07 | AlphaFold DB 扩展至 2 亿+ 结构 | 覆盖几乎所有已知蛋白 | DeepMind/EMBL-EBI |
| 2023-03 | 中国科技部、自然科学基金委启动"人工智能驱动的科学研究"专项部署 | 中国 AI4S 国家层面起点 | 新华社 2023-03-27 |
| 2023-07 | 华为盘古气象大模型登上 Nature | 首个精度超过传统数值预报的 AI 模型 | Bi et al., Nature 2023 |
| 2023-11 | GNoME（Nature）发现 220 万种新晶体，其中约 38 万种稳定；GraphCast（Science） | 材料发现与 AI 天气预报的标志性工作 | Merchant et al., Nature 2023；Lam et al., Science 2023 |
| 2024-05 | AlphaFold 3（Nature），可预测蛋白与 DNA/RNA/配体复合物；同年 11 月开放学术代码 | 从单体结构走向分子互作 | Abramson et al., Nature 2024 |
| 2024-08 | Sakana AI 发布 "The AI Scientist" | 端到端自动写 ML 论文的雏形 | Sakana AI |
| 2024-10 | **诺贝尔化学奖**授予 David Baker（计算蛋白设计）、Demis Hassabis 与 John Jumper（AlphaFold） | AI4S 获得科学界最高认可 | nobelprize.org |
| 2024-11/12 | Evo（Science，Arc Institute）；GenCast（Nature）集合预报优于 ECMWF ENS | 基因组语言模型；AI 概率天气预报 | Science 2024；Nature 2024 |
| 2025-01 | 微软 MatterGen 登上 Nature；Aurora 地球系统模型（Nature 2025） | 生成式材料设计 | Microsoft Research |
| 2025-02 | Evo 2 发布；Google AI co-scientist；**ECMWF AIFS 于 2025-02-25 投入业务运行** | 首个由主流业务中心运行的 AI 预报系统 | ECMWF [一手] |
| 2025-05 | DeepMind AlphaEvolve：4×4 复数矩阵乘法降至 48 次标量乘法，56 年来首次改进 Strassen 算法；微软在 Build 2025 发布 Microsoft Discovery | AI 进入数学与算法发现 | DeepMind / Google Cloud |
| 2025-06 | AlphaGenome 发布；英矽智能 rentosertib IIa 期结果发表于 Nature Medicine | 首个"AI 发现靶点+AI 设计分子"药物的随机对照数据 | Nature Medicine 2025 |
| 2025-07 | AIFS ENS 集合预报业务化（7-01）；上海 AI 实验室在 WAIC 开源"书生"科学多模态大模型 Intern-S1；北京发布全国首个科学智能专项地方政策 | 中国开源科学大模型 | ECMWF；aibase；新京报 |
| 2025-08 | 国务院《关于深入实施"人工智能+"行动的意见》，"人工智能+科学技术"居六大行动之首 | 中国顶层政策 | gov.cn |
| 2025-09/10 | Periodic Labs 以 3 亿美元种子轮亮相；欧盟发布 AI in Science 战略（10-08） | "AI 科学家+物理实验室"创业潮 | Maginative；欧盟委员会 |
| 2025-11 | 美国 Genesis Mission（EO 14363，11-24）；英国 AI for Science Strategy；FutureHouse 分拆 Edison Scientific（Kosmos）；Google WeatherNext 2 | 美国国家级 AI4S 计划 | Federal Register；gov.uk |
| 2025-12 | 中国气象局发布升级版风清/风雷/风顺及"风源"；DeepMind 宣布 2026 年在英国建首个自动化材料实验室；深势科技完成超 8 亿元 C 轮 | 自主实验室进入巨头布局 | 新华网；DeepMind blog |
| 2026-01 | NVIDIA–礼来宣布 5 年最高 10 亿美元的 AI 联合创新实验室；OpenAI 发布 Prism（GPT-5.2 科研写作工作台）；Isomorphic–强生合作 | 算力巨头与药企深度绑定 | Fierce Biotech；OpenAI |
| 2026-02/03 | Generate Biomedicines 纳斯达克 IPO（募资 4 亿美元）；礼来–英矽 27.5 亿美元合作；DOE 发布 2.93 亿美元 Genesis RFA | AI 生物公司重返 IPO 窗口 | Bloomberg；DOE |
| 2026-05 | Isomorphic Labs 完成 21 亿美元 B 轮；ECMWF AIFS v2 上线（5-12）；上海 AI 实验室开源 Intern-S2-Preview（35B） | AI 制药单笔融资纪录 | 公司公告；ECMWF |
| 2026-06/07 | 北京《加快推进人工智能赋能科学研究实施方案（2026—2028）》；美日 10 亿美元 Genesis 伙伴关系；Chai Discovery 4 亿美元 C 轮（估值 38 亿）；Genesis Consortium 伙伴承诺超 8 亿美元 | — | 新京报；FedScoop；DOE |
| 2026-09/10 | rentosertib III 期（GENESIS-IPF-3）首例患者给药；Bloomberg 报道 Isomorphic 以≥400 亿美元估值洽谈融资 | 关键临床验证节点 | 同花顺；Bloomberg |

**技术演进三阶段**：
- **AI4S 1.0（2018–2022）**：专用模型解决单点问题（AlphaFold2、DeePMD 等分子动力学势函数）。
- **AI4S 2.0（2023–2025）**：科学基础模型/大模型（AlphaFold 3、Evo 2、GNoME、Intern-S1、xTrimo）和 AI 业务化气象预报。
- **AI4S 3.0（2025– ）**：LLM 智能体 + 自主实验室形成"假设—实验—学习"闭环（AI co-scientist、Kosmos、Lila、Periodic、DeepMind 自动化实验室）。State of AI 评估认为，目前**还没有系统真正独立完成从选题到独立验证结果的完整闭环**。

---

## 4. 产业链

```
上游：基础资源                 中游：模型/平台/工具                 下游：应用行业
─────────────────           ───────────────────────          ─────────────────
算力：NVIDIA/AMD GPU、         通用大模型厂商的科学化：             制药/生物技术：礼来、诺华、
 华为昇腾、国家超算、           OpenAI Prism、Google co-scientist、   赛诺菲、强生、辉瑞、恒瑞、
 DOE 17 个国家实验室、          Claude for Life Sciences             石药、施维雅
 云(AWS/Azure/GCP/阿里云)       科学基础模型：AlphaFold3、Evo2、      材料/化工/电池：宁德时代类电池
数据：PDB、UniProt、            Intern-S1、xTrimo、DPA、盘古          企业、半导体、催化
 Materials Project、ERA5、      平台/SaaS：Schrödinger、BioNeMo、    能源：核聚变、电网、新能源
 CRA-40、ChEMBL、专有           Bohrium、Microsoft Discovery          气象/地球科学：ECMWF、
 湿实验数据                     自主实验室/机器人：Lila、Periodic、    中国气象局、保险、农业
科学软件与仪器：               晶泰、深势 Uni-Lab                    科研机构与高校
 Thermo Fisher、Agilent 等      AI 原生 Biotech：Isomorphic、         
                                Insilico、Recursion、Xaira、Chai
```

| 环节 | 关键要素 | 价值与瓶颈 | 代表数据 |
|---|---|---|---|
| 上游·算力 | GPU 集群、国家超算、云 | 最集中的价值池；美国出口管制使中国依赖国产算力 | Hyperion：HPC+AI for science 2025 年约 700 亿美元，云部分 124 亿美元，2030 年 >300 亿 |
| 上游·数据 | 公共科学数据库、专有实验数据 | **高质量实验数据稀缺**是核心瓶颈；新兴公司通过自建湿实验室生产数据（Periodic 提出要产出"别处没有的 GB 级实验数据"） | 北京计划 2027 年前建设≥10 个高质量科学数据库 |
| 中游·模型/平台 | 科学基础模型、Agent、SaaS | 开源与闭源并存；平台型公司（Schrödinger 2025 年软件收入 2.0 亿美元）增长较稳 | — |
| 中游·自主实验室 | 机器人+AI 闭环 | 资本最热；验证周期长 | Lila、Periodic、DeepMind 英国实验室 |
| 下游·制药 | BD 合作、自研管线 | 当前最大付费方；收入以首付+里程碑为主 | Lilly–Insilico 27.5 亿美元；NVIDIA–Lilly 10 亿美元 |
| 下游·气象/能源/材料 | 业务系统、研发服务 | 政府主导，商业化路径较长 | ECMWF AIFS、风清系列 |

---

## 5. 主要玩家

### 5.1 国际

| 公司/机构 | 类型 | 代表产品/成果 | 融资/估值/上市（最新） | 来源 |
|---|---|---|---|---|
| Google DeepMind | 科技巨头研究部门 | AlphaFold 2/3、GNoME、GraphCast/GenCast/WeatherNext 2、AlphaGenome、AlphaEvolve、AI co-scientist；2026 年英国自动化材料实验室 | Alphabet 内部 | DeepMind blog 2025-12 |
| **Isomorphic Labs** | DeepMind 分拆的 AI 制药公司 | IsoDDE 药物设计引擎；与礼来、诺华合作（合计潜在价值近 30 亿美元，2024）、诺华扩展（2025-02）、强生（2026-01） | A 轮 6 亿美元（2025-03）；**B 轮 21 亿美元（2026-05，Thrive 领投）**；此前估值约 175 亿美元；2026-10 传以≥400 亿（最高 500 亿）美元估值洽谈 | 公司公告；Bloomberg |
| Microsoft Research AI for Science | 巨头研究部门 | MatterGen、MatterSim、Aurora、Microsoft Discovery 平台 | — | Microsoft |
| NVIDIA | 算力+平台 | BioNeMo、Earth-2、Clara；NVentures 投资 Lila、Periodic 等 | 与礼来共建最高 10 亿美元的联合实验室（2026-01） | Fierce Biotech |
| OpenAI | 通用大模型 | OpenAI for Science、Prism（2026-01，基于 GPT-5.2） | — | OpenAI |
| Recursion（RXRX，纳斯达克） | AI 原生 Biotech | Recursion OS；2024 年 11 月合并 Exscientia；REC-4881（FAP） | 2025 年收入 7,470 万美元（+27%）；年末现金 7.54 亿美元，可支撑至 2028 年初；2025 年砍掉多条管线并裁员约 20% | 公司 10-K；Fierce |
| Insilico Medicine 英矽智能（3696.HK） | AI 原生 Biotech | Pharma.AI、Chemistry42；rentosertib（TNIK，IPF） | 2025-12-30 港股上市，募资 22.77 亿港元；2025 年收入约 5,620 万美元 | 中证网；年报 |
| Schrödinger（SDGR） | 物理计算+AI 软件 | 分子模拟平台 | 2025 年收入 2.56 亿美元（+23%），软件收入 2.0 亿美元；净亏损 1.03 亿美元 | BusinessWire 2026-02-25 |
| Xaira Therapeutics | AI 原生 Biotech | 蛋白设计（David Baker 团队背景） | 2024-04 以 10 亿美元启动（ARCH、Foresite） | Drug Discovery Trends |
| Chai Discovery | 分子结构/设计基础模型 | Chai-1/Chai-2 | A 轮 7,000 万（2025）、B 轮 1.3 亿（2025-12，估值 13 亿）、**C 轮 4 亿（2026-07，估值 38 亿）** | 公司公告 |
| Generate Biomedicines（GENB） | 生成式蛋白设计 | GB-0895（哮喘，III 期） | 2026-02 纳斯达克 IPO 募资 4 亿美元；2025 年收入约 3,200 万美元，亏损约 2.23 亿美元 | Bloomberg |
| **Lila Sciences** | 科学超级智能+自主实验室（Flagship 孵化） | AI Science Factories | A 轮合计 3.5 亿美元，估值超 13 亿美元（2025-10，NVIDIA 参投）；2026-06 传以约 85 亿美元投前估值洽谈约 20 亿美元 B 轮 | Reuters；Bloomberg |
| **Periodic Labs** | AI 科学家+材料实验室 | 高温超导、芯片散热材料 | 3 亿美元种子轮（2025-09，a16z 等，估值约 10 亿美元）；据报 2026 年估值约 70–75 亿美元（[二手]） | Maginative；Bloomberg 转述 |
| FutureHouse / Edison Scientific | 非营利实验室 + 商业分拆 | Robin、Kosmos "AI scientist" | Edison 种子轮 7,000 万美元，估值约 2.5 亿美元（2025-11/12） | Endpoints；Caproasia |
| Sakana AI | AI 科学家 | AI Scientist v1/v2 | — | — |

### 5.2 中国

| 公司/机构 | 类型 | 代表产品/成果 | 融资/估值/上市 | 来源 |
|---|---|---|---|---|
| **深势科技 DP Technology** | AI4S 平台 | 玻尔 Bohrium 科研平台、Hermite 药物设计、Piloteye 电池设计、Uni-Lab 实验室操作系统、"Particle Universe"科学模型体系；DeepModeling 开源社区 | **C 轮超 8 亿元人民币（约 1.14 亿美元，2025-12）**，投后估值超 60 亿元（36Kr Japan）；投资方含北京 AI 产业基金、联想创投等 | SCMP；CB Insights |
| **晶泰科技 XtalPi（2228.HK）** | AI+机器人药物/材料发现 | 量子物理+AI+自动化实验室 | 2024-06 港股上市；2025 年收入约 8.03 亿元（+201%），首次全年盈利（净利润约 1.24 亿元，[二手]）；与 DoveTree 管线合作总额约 59.9 亿美元（首付 5,100 万美元，2025-08；第二笔 1,900 万美元，2026-05） | 公司公告；老虎证券 |
| **英矽智能**（总部香港/上海） | AI 制药 | rentosertib III 期；ISM 系列管线 | 港股 IPO 22.77 亿港元（礼来、腾讯等基石认购 1.15 亿美元）；BD 合同累计 21.74 亿美元（年报）；2026 年施维雅 8.88 亿美元、礼来 27.5 亿美元合作 | 36Kr；每经 |
| **百图生科 BioMap** | 生命科学基础模型 | xTrimo V3（2,100 亿参数，2024-10）；与赛诺菲合作潜在价值超 10 亿美元 | A 轮"亿级美元"（2021）；2024 年战略融资；2026-03 报道正推进香港 IPO，尚未盈利 | 36Kr；观察者网 |
| 华为 | 科技巨头 | 盘古气象（Nature 2023）、盘古药物分子模型 | — | — |
| 百度 | 科技巨头 | PaddleHelix 螺旋桨生物计算；投资百图生科 | — | 本轮检索未获 2025 年新动态 |
| 阿里巴巴 | 科技巨头 | 达摩院 AI 气象等 | — | 本轮检索未获 2025 年新动态 |
| 上海人工智能实验室 | 国家级新型研发机构 | 书生 Intern-S1（2025-07 开源）、万亿参数 Intern-S1-Pro、Intern-S2-Preview（35B，2026-05）；风乌气象 | — | aibase；腾讯新闻 |
| 北京科学智能研究院（AISI） | 新型研发机构（2021-09 成立） | DPA 大原子模型（覆盖 90+ 元素）、玻尔科研空间站 | — | 国家科技信息中心 |
| 中国气象局 | 国家业务机构 | 风清（全球中短期）、风雷（临近）、风顺（次季节）、风和（服务）、风源 | — | 新华网 2025-12-19 |
| 复旦大学 | 高校 | 伏羲气象大模型 | — | — |

---

## 6. 投融资

### 6.1 总量

| 指标 | 2024 | 2025 | 来源/备注 |
|---|---|---|---|
| AI 驱动药物发现/Biotech 风险投资 | ~89 亿美元（264 笔） | ~110 亿美元（348 笔） | IntuitionLabs《AI adoption in pharma & biotech 2026》[二手]，未与 PitchBook 原始数据核对 |
| AI/ML 药物发现合作 + 并购总价值（2024–2025 合计） | 合计 >550 亿美元 | | 同上 [二手] |
| 全球医疗健康 VC（背景） | ~532 亿美元 | 468 亿美元（-12%） | SVB [二手] |
| 全球 AI 风投（背景） | — | ~2,702 亿美元（占全部 VC 的 52.7%） | PitchBook / CB Insights 综合 [二手] |
| 中国创新药对外授权总额（背景） | — | >1,300 亿美元（>150 笔） | 国家药监局口径（媒体转述） |

**图表数据：代表性 AI4S 公司单笔融资（亿美元）**

| 年份 | 事件 | 金额 |
|---|---|---|
| 2024 | Xaira 启动融资 | 10.0 |
| 2025 | Isomorphic A 轮 | 6.0 |
| 2025 | Lila A 轮（含扩展） | 3.5 |
| 2025 | Periodic Labs 种子轮 | 3.0 |
| 2025 | Chai B 轮 | 1.3 |
| 2025 | 深势科技 C 轮 | 1.14 |
| 2025 | Edison Scientific 种子轮 | 0.7 |
| 2025 | 英矽智能港股 IPO | ~2.9（22.77 亿港元） |
| 2026 | Isomorphic B 轮 | 21.0 |
| 2026 | Generate Biomedicines IPO | 4.0 |
| 2026 | Chai C 轮 | 4.0 |
| 2026（洽谈中） | Lila B 轮 | ~20（未确认） |

### 6.2 标志性 BD 合作与并购

| 时间 | 交易 | 首付 | 总额（含里程碑） | 来源 |
|---|---|---|---|---|
| 2024-01 | Isomorphic–礼来、诺华 | 礼来 4,500 万美元；诺华 3,750 万美元 | 合计近 30 亿美元 | 公司公告 |
| 2024-11 | Recursion 合并 Exscientia（全股票） | — | 约 6.88 亿美元 | Fierce Biotech |
| 2025-02 | Isomorphic–诺华扩展（新增最多 3 个项目） | — | 条款同原协议 | Pharmaceutical Technology |
| 2025-08 | 晶泰科技–DoveTree | 5,100 万美元 | 约 59.9 亿美元 | 公司公告 |
| 2025-11 | 英矽智能–礼来研究合作 | — | 1 亿美元 | pharmaphorum |
| 2026-01 | 英矽智能–施维雅 | — | 8.88 亿美元 | 36Kr |
| 2026-01 | NVIDIA–礼来联合创新实验室 | — | 5 年最高 10 亿美元投入 | Fierce Biotech |
| 2026-01 | Isomorphic–强生 | 未披露 | 未披露 | Isomorphic 官网 |
| 2026-03 | **英矽智能–礼来管线授权** | **1.15 亿美元** | **最高 27.5 亿美元**+分级特许权使用费 | pharmaphorum；每经 |
| 2025 前后 | 百图生科–赛诺菲 | — | 潜在价值超 10 亿美元 | 观察者网 |

> 要点：BD 头条金额 90% 以上是或有里程碑，首付款占比通常只有 2–5%。

---

## 7. 政策

### 7.1 中国
| 时间 | 政策 | 要点 |
|---|---|---|
| 2023-03 | 科技部、自然科学基金委启动"人工智能驱动的科学研究"专项部署 | 聚焦数学、物理、化学、天文等基础学科，以及药物研发、基因研究、生物育种、新材料；建设专用平台；推动成立创新联合体（新华社） |
| 2025-07 | 《北京市加快人工智能赋能科学研究高质量发展行动计划（2025—2027 年）》 | 全国首个科学智能专项地方政策；2027 年前建设≥10 个高质量科学数据库（新京报） |
| 2025-08 | 国务院《关于深入实施"人工智能+"行动的意见》（国发〔2025〕11 号） | "人工智能+科学技术"列六大行动之首：探索 AI 驱动的新型科研范式、建设与应用科学大模型、推动科研平台和重大科技基础设施智能化、建设开放共享的高质量科学数据集（gov.cn） |
| 2026-06 | 《北京市加快推进人工智能赋能科学研究实施方案（2026—2028 年）》 | 5 个方向 18 项任务：自主实验室体系、标杆场景、科学模型、科学数据、创新生态 |
| 2026 | 江苏连云港、内蒙古包头等地"人工智能+科学研究/科学技术"方案 | 地方跟进，结合稀土、冶金等特色产业 |

> 本轮检索未找到科技部层面 2026 年全国性的"人工智能+科学技术"专项实施方案，如有需以科技部官网为准。

### 7.2 美国
- **Genesis Mission（EO 14363，2025-11-24）**：由 DOE 牵头、白宫科技政策办公室（OSTP）统筹，建设"American Science and Security Platform"（超算+科学基础模型+AI 智能体），覆盖 20+ 国家科技挑战（先进制造、生物技术、关键矿产、核能、量子、半导体等）。
- 落地进展：2025-12-10 DOE 宣布 3.2 亿美元以上初始投入并与 24 家机构签订 MOU（微软、谷歌、AWS、NVIDIA、OpenAI、Anthropic 等）；2026-03 发布 2.93 亿美元 RFA；2026-06 与日本建立 10 亿美元战略伙伴关系；2026-07-22 Genesis Consortium 伙伴承诺超 8 亿美元（17 个国家实验室+41 家机构）。另有报道称白宫宣布 15+ 机构合计超 50 亿美元联邦承诺、DOE 遴选 278 个项目共 2.5 亿美元（[二手]，仅一家来源）。

### 7.3 欧盟
- **European Strategy for AI in Science（2025-10-08）**及 **RAISE（Resource for AI Science in Europe）**虚拟研究院：试点资金 1.07 亿欧元（Horizon Europe）；2021 年以来地平线计划已投入 AI 超 80 亿欧元，2025 年工作计划新增 16 亿欧元；承诺 2028 年前将 AI 与 AI 科研投入翻倍；2025-11 在哥本哈根峰会启动试点。

### 7.4 英国
- **AI for Science Strategy（DSIT，2025-11）**：15 项行动，最高 1.37 亿英镑（属 2026–2030 年 20 亿英镑 AI 行动计划投资的一部分），首要聚焦药物发现；UKRI 另行承诺 2026–2030 年 AI 投入 16 亿英镑（含 3,600 万英镑升级剑桥 DAWN 超算）；Google DeepMind 与英国政府深化合作，2026 年在英国建设自动化材料实验室；英国主权 AI 基金参投 Isomorphic B 轮。

---

## 8. 商业模式与盈利挑战

| 模式 | 代表 | 收入特征 | 优势 | 挑战 |
|---|---|---|---|---|
| 软件/SaaS 订阅 | Schrödinger、深势 Bohrium、BioNeMo、Microsoft Discovery | 经常性收入；Schrödinger 软件收入 2.0 亿美元，+11% | 现金流稳定、毛利高 | 天花板受药企 IT 预算限制，增速放缓；开源模型（AlphaFold、Boltz、Chai-1）带来价格压力 |
| 合作研发 + 里程碑分成（BD） | Isomorphic、Insilico、Chai、百图 | 首付+里程碑+特许权使用费 | 头条金额大，可借药企能力推进 | 现金收入集中在首付，里程碑高度不确定 |
| 自研管线 | Insilico、Recursion、Xaira、Generate | 授权或上市后才有大额收入 | 价值捕获最大 | 烧钱多、周期长；Recursion 2025 年砍掉多条管线 |
| CRO / 服务化（AI+自动化实验） | 晶泰（药物发现解决方案收入约 5.38 亿元，+419%） | 按项目收费 | 现金流快，可实现盈利（晶泰 2025 年首次盈利） | 毛利与估值倍数低于平台公司；同质化竞争 |
| 混合（平台+管线+服务） | 多数中国 AI4S 公司 | — | 分散风险 | 资源分散、定位不清 |
| 国家/机构合同 | 气象、国家实验室、Genesis | 政府采购 | 规模大、稳定 | 回款周期长、可复制性差 |

**盈利挑战**：
1. **收入规模与估值严重背离**：Isomorphic 洽谈估值≥400 亿美元，但尚未进入临床（预计 2026 年底首个试验）；Insilico 2025 年收入约 5,600 万美元。
2. **临床成功率并未被证明显著提高**：有二手统计称 AI 发现分子 I 期成功率约 80–90%，但 II 期约 40%，与历史水平相当；在 6,147 个临床在研药物中，AI 发现的仅约 67 个（约 1%）（[二手]，非 BCG 原始数据）。
3. **通用大模型厂商下沉**（OpenAI、Google、Anthropic）压缩中游工具类公司的空间。

---

## 9. 驱动因素、挑战与风险

### 驱动因素
- 基础模型能力跃升（推理型 LLM、科学多模态大模型）以及 AlphaFold 和诺奖效应带来的范式认可。
- 算力成本下降、NVIDIA 等算力厂商主动布局科学场景。
- 药企研发效率压力（专利悬崖、研发回报率下降）推动大额 BD。
- 国家战略投入（Genesis、"人工智能+"、RAISE、英国战略）。
- 资本追逐"下一个 AGI 应用场景"：科学被视为通往"科学超级智能"的路径。

### 挑战与风险
| 类别 | 说明 | 严重度 |
|---|---|---|
| 数据稀缺与质量 | 实验数据少、阴性结果缺失、跨实验室不一致；公共数据库已被充分利用 | 高 |
| 实验验证瓶颈 | 干实验快、湿实验慢；"AI 加速"往往卡在合成、表征和临床环节；GNoME 等成果的可合成性曾受到质疑 | 高 |
| 可解释性与可复现性 | 黑箱模型难以进入监管决策；厂商自报的基准缺乏独立验证（如 IsoDDE 的基准由厂商撰写） | 中高 |
| 算力成本与获取 | 前沿训练成本高；中国受出口管制影响 | 中高（中国） |
| 监管 | FDA/NMPA 对 AI 生成证据的规则仍在演进；数据跨境（中国《数据安全法》、美国生物安全法案相关讨论）影响中美合作 | 中 |
| 估值泡沫 | 2026 年头部公司估值大幅跃升，一旦临床失败可能引发重估 | 中高 |
| 地缘政治 | 美国 Genesis 平台强调安全与 IP 保护；中美科学数据与模型生态可能分化 | 中 |
| 双重用途与生物安全 | 生物设计模型可能被滥用 | 中 |

---

## 10. 趋势展望与投资/战略建议

### 趋势展望（2026–2030）
1. **从"模型"到"闭环"**：竞争焦点从单一模型精度转向"AI 智能体+自主实验室+专有数据飞轮"的闭环能力（Lila、Periodic、DeepMind 英国实验室、NVIDIA–礼来实验室）。
2. **科学大模型走向平台化与开源分化**：美国以闭源前沿模型+国家平台（Genesis）为主；中国以开源科学大模型（书生、DPA、Uni-Mol）和国家队平台为主。
3. **2026–2028 年是 AI 制药的"临床兑现期"**：rentosertib III 期、Isomorphic 首个临床试验、REC-4881 注册路径都将检验 AI 制药的真实价值。
4. **AI 气象率先全面业务化**，并向次季节/气候、能源和保险延伸。
5. **材料与能源成为第二增长曲线**：电池、超导、半导体材料和核聚变领域的 AI 投资加速。
6. **巨头与国家资本主导，资本集中度上升**，中小工具型公司面临整合（如 Recursion–Exscientia 模式）。

### 投资/战略建议
1. **优先投资"专有数据+湿实验闭环"能力**，而非单纯模型层；评估项目时重点看实验通量、数据独占性和闭环迭代速度。
2. **用"首付/现金收入"而非 BD 头条金额评估 AI 制药公司**；关注临床阶段资产和 II 期以上数据。
3. **把握 2026–2027 年临床读出事件窗口**：rentosertib III 期、Isomorphic 首个 IND/临床、Generate GB-0895 III 期是行业估值的关键催化剂，需做好对冲。
4. **中国企业走"出海 BD + 港股上市"路径**：英矽、晶泰已验证；深势、百图等平台公司可借助政策（北京 2026–2028 实施方案）和国资基金，同时开拓海外药企客户。
5. **材料/能源 AI4S 是相对低估的赛道**：可关注电池、半导体材料、催化方向的 AI+自动化实验平台及其与产业资本的合作。
6. **政府与科研机构的采购是确定性需求**：可参与 Genesis、RAISE 及国内科学数据库、智能化科研平台建设，切入"科研基础设施即服务"。
7. **警惕估值过热与"厂商自报基准"**：要求独立基准与前瞻性实验验证；对 2026 年估值翻倍的私募轮次控制仓位。
8. **合规前置**：针对数据跨境、生物安全、FDA/NMPA AI 证据规则，提前设计数据治理与模型可解释性方案。

### 关键结论（一句话要点）
- **AI4S 已从科研概念变为国家战略和资本主线，但商业收入仍处早期**：窄口径市场在 2025 年约 50–90 亿美元，2030 年有望达 110–200 亿美元（估计）。
- **AI 制药仍是唯一形成规模付费的方向**，资金和 BD 金额高度集中于头部公司，现金收入远低于头条数字。
- **"AI 科学家+自主实验室"是 2025–2026 年最热的新赛道**，估值领先于验证。
- **中国在政策、开源模型和 AI 制药出海 BD 上进展快**，但专项市场统计与一级市场体量偏弱。
- **2026–2028 年的临床与实验验证结果将决定 AI4S 估值体系能否成立。**

---

## 数据可信度备注
- 市场规模类数字均来自商业研究机构的公开摘要，方法论不透明，机构之间差异可达 3–10 倍；本报告"估计"列为作者外推。
- 晶泰 2025 年收入/利润来自媒体转述，Periodic Labs 2026 年估值、Lila 85 亿美元估值、Isomorphic 400 亿美元估值均为媒体报道的洽谈信息，尚未确认完成。
- AI 药物发现 VC 总额（2024 年 89 亿、2025 年 110 亿美元）来自二手汇编，未与 PitchBook/Dealforma 原始数据核对。
- 中国 AI4S 专项市场规模仅有共研 47 亿元一个口径，可信度有限。

---

## 参考来源

**市场规模**
- Hyperion Research via HPCwire (2026-06-24): https://www.hpcwire.com/aiwire/2026/06/24/hyperion-research-slices-and-dices-the-hpc-ai-market/
- Precedence Research, AI for Scientific Discovery Market: https://www.precedenceresearch.com/ai-for-scientific-discovery-market
- Market.us, AI for Scientific Discovery: https://market.us/report/ai-for-scientific-discovery-market/
- Technavio, AI for Scientific Discovery: https://www.technavio.com/report/ai-for-scientific-discovery-market-industry-analysis
- Marketintelo, AI in Scientific Research: https://marketintelo.com/report/ai-in-scientific-research-market/amp
- Luminix (secondary): https://www.useluminix.com/reports/product-strategy/why-is-anthropic-launching-claude-science/source/3
- Arizton, AI in Drug Discovery: https://arizton.com/market-reports/ai-in-drug-discovery-market
- ResearchAndMarkets via BusinessWire (2025-05-09): https://www.businesswire.com/news/home/20250509495976/en/
- MarketsandMarkets AI in Drug Discovery (2026): https://www.webull.com/news/15271438694376448
- Precedence AI in Drug Discovery via BioSpace: https://www.biospace.com/press-releases/artificial-intelligence-ai-in-drug-discovery-market-size-expected-to-reach-usd-16-52-billion-by-2034
- BioSpace (USD 10.80B by 2030): https://www.biospace.com/ai-in-drug-discovery-market-size-to-hit-usd-10-80-billion-by-2030
- Technavio AI in Drug Discovery: https://www.technavio.com/report/artificial-intelligence-in-drug-discovery-market-industry-analysis
- MarketsandMarkets Material Informatics: https://paymentib.marketsandmarkets.com/Market-Reports/material-informatics-market-237816259.html
- GlobeNewswire GenAI in Material Science (2026-07-09): https://www.globenewswire.com/news-release/2026/07/09/3324587/0/en/
- Technavio GenAI in Material Science: https://www.technavio.com/report/generative-ai-in-material-science-market-industry-analysis
- 共研产业研究院（转载）: https://www.bilibili.com/read/cv38650956
- 头豹研究院（财联社）: https://www.cls.cn/detail/2184144
- 观研天下: https://www.chinabaogao.com/baogao/202507/758114.html
- MarketsandMarkets China AI in Life Science: https://www.marketsandmarkets.com/Market-Reports/geography/ai-in-life-science-market/China
- 中国信通院（China Daily）: https://investinchina.chinadaily.com.cn/s/202512/22/WS6948a350498e36855033911c/
- McKinsey, Generative AI in pharma: https://www.mckinsey.com/industries/life-sciences/our-insights/generative-ai-in-the-pharmaceutical-industry-moving-from-hype-to-reality

**公司与投融资**
- Isomorphic Labs Series B: https://www.mobihealthnews.com/news/google-backed-isomorphic-labs-raises-21b-ai-drug-discovery-platform ; Bloomberg Law: https://news.bloomberglaw.com/private-equity/googles-isomorphic-labs-to-raise-over-2-billion-in-new-funding ; $40B talks: https://runtimewire.com/article/isomorphic-labs-40-billion-valuation-funding-talks ; Partnerships: https://www.isomorphiclabs.com/partnerships ; Novartis expansion: https://www.pharmaceutical-technology.com/newsletters/isomorphic-labs-ai-drug-development
- Lila Sciences: Reuters via Yahoo https://finance.yahoo.com/news/exclusive-ai-lab-lila-sciences-101645837.html ; Bloomberg https://news.bloombergtax.com/financial-accounting/lila-sciences-said-in-talks-for-funds-at-8-5-billion-valuation
- Periodic Labs: https://www.maginative.com/article/periodic-labs-launches-with-300m-to-build-an-ai-scientist/ ; https://www.agbi.com/ai/2025/10/ai-lab-lila-sciences-tops-1bn-valuation-with-nvidia-backing/
- Xaira: https://www.drugdiscoverytrends.com/xaira-therapeutics-billion-dollar-ai-biotech-funding/
- Edison Scientific: https://www.caproasia.com/2025/12/19/ ; https://endpoints.news/?p=554880
- Chai Discovery Series C: https://www.chaidiscovery.com/news/series-c
- Generate Biomedicines IPO: https://news.bgov.com/capital-markets/flagship-backed-generate-biomedicines-raises-400-million-in-ipo
- Recursion FY2025: https://ir.recursion.com/news-releases/news-release-details/recursion-reports-fourth-quarter-and-full-year-2025-financial ; pipeline cuts: https://www.biopharmadive.com/news/recursion-pipeline-cuts-first-quarter-earnings/747119/ ; layoffs: https://www.fiercebiotech.com/biotech/recursion-lays-20-staff-wake-pipeline-cutbacks
- Schrödinger FY2025: https://www.businesswire.com/news/home/20260225969788/en/
- NVIDIA–Lilly lab: https://www.fiercebiotech.com/biotech/lilly-nvidia-tag-partnership-new-ai-co-innovation-lab-1b-investment
- Lilly–Insilico: https://pharmaphorum.com/news/lilly-puts-275bn-insilico-alliance ; 每经 https://www.nbd.com.cn/articles/2026-03-30/4316672.html ; 36Kr https://www.36kr.com/p/3745377703608832
- 英矽智能 IPO: https://www.36kr.com/p/3600333723058178 ; https://www.cs.com.cn/ssgs/gsxw/202512/t20251230_6531010.html ; III 期 https://stock.10jqka.com.cn/20260917/c679998858.shtml
- 深势科技 C 轮: https://www.scmp.com/business/companies/article/3337648/ai-science-start-dp-technology-raises-us114-million-series-c-round ; https://36kr.jp/454066/ ; https://www.dp.tech/en/about
- 晶泰科技: https://www.itiger.com/news/1173204622 ; DoveTree https://n.yam.com/Article/20260529757900 ; 2025 中期报告 https://ir.xtalpi.com/media/fupppcoo/2025-interim-report.pdf
- 百图生科: https://www.guancha.cn/GongSi/2026_03_27_811620.shtml ; https://news.qq.com/rain/a/20241029A05YHS00
- AI drug discovery VC (secondary): https://intuitionlabs.ai/pdfs/ai-adoption-in-pharma-biotech-2026-industry-benchmarks.pdf
- AI VC 2025 背景: https://www.bloomberg.com/news/articles/2025-10-03/ai-is-dominating-2025-vc-investing-pulling-in-192-7-billion
- AI 药物临床统计（secondary）: https://intuitionlabs.ai/pdfs/ai-drug-discovery-fda-approvals.pdf

**技术里程碑**
- Nobel Prize in Chemistry 2024: https://www.nobelprize.org/prizes/chemistry/2024/summary/
- AlphaFold 2 (Nature 2021): https://www.nature.com/articles/s41586-021-03819-2 ; AlphaFold 3 (Nature 2024): https://www.nature.com/articles/s41586-024-07487-w
- GNoME (Nature 2023): https://www.nature.com/articles/s41586-023-06735-9 ; GraphCast (Science 2023): https://www.science.org/doi/10.1126/science.adi2336 ; GenCast (Nature 2024): https://www.nature.com/articles/s41586-024-08252-9
- Pangu-Weather (Nature 2023): https://www.nature.com/articles/s41586-023-06185-3
- ECMWF AIFS operational: https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ensemble-ai-forecasts-become-operational ; AIFS v2: https://www.ecmwf.int/en/newsletter/187/news/implementation-aifs-v2
- Microsoft MatterGen/Aurora: https://news.microsoft.com/source/features/ai/2-ai-breakthroughs-unlock-new-potential-for-health-and-science/
- AlphaEvolve / co-scientist: https://docs.cloud.google.com/gemini/enterprise/docs/co-scientist-and-alphaevolve ; State of AI: https://www.stateof.ai/predictions/ai-agents-scientific-discovery
- DeepMind UK automated lab: https://deepmind.google/blog/strengthening-our-partnership-with-the-uk-government-to-support-prosperity-and-security-in-the-ai-era/
- OpenAI Prism: https://techinformed.com/openai-launches-prism-a-free-workspace-that-embeds-gpt-5-2-into-scientific-writing/
- 书生 Intern-S1: https://www.aibase.com/zh/news/20050 ; Intern-S2-Preview: https://news.qq.com/rain/a/20260515A0AQ4M00
- 中国气象局风系列: https://www.news.cn/tech/20251219/99223b9d028a46faa3dda987a5f607b9/c.html ; https://www.stdaily.com/web/gdxw/2025-10/28/content_422720.html ; https://www.tsinghua.edu.cn/info/1182/112280.htm
- 北京科学智能研究院: https://www.ncsti.gov.cn/kjdt/ztbd/szn/snhc/202501/t20250103_191555.html

**政策**
- 科技部 AI for Science 专项（新华社 2023）: https://www.cs.com.cn/5g/202303/t20230328_6332474.html ; https://www.ncsti.gov.cn/kjdt/ztbd/rgzn/zxjz/202308/t20230831_132530.html
- 国务院"人工智能+"行动意见: https://www.gov.cn/yaowen/liebiao/202508/content_7037868.htm ; https://www.news.cn/tech/20250916/6ce9f611a89c48f7af6fa52369e2183c/c.html
- 北京 2025–2027 行动计划: https://www.bjnews.com.cn/detail/1752224571129051.html ; 北京 2026–2028 实施方案: https://www.bjnews.com.cn/detail/1783014152189464.html
- 连云港方案: https://lianyungang.jstec.com.cn/file/6977489777201152.pdf ; 包头方案: https://www.baotou.gov.cn/zfxxgk/fdzdgknr/fd_zcwj/202605/W020260608392096928021.pdf
- Genesis Mission EO 14363: https://public-inspection.federalregister.gov/2025-21665.pdf ; MoFo: https://www.mofo.com/resources/insights/251211-executive-order-establishes-genesis-mission ; DOE $800M: https://www.energy.gov/undersecretaryforscience/articles/us-department-energy-announces-more-800-million-partner ; DOE $293M: https://www.energy.gov/articles/energy-department-announces-293-million-funding-support-genesis-mission-national-science ; US–Japan: https://fedscoop.com/doe-japan-genesis-mission-partnership-national-labs/ ; $5B/278 projects (secondary): https://aiweekly.co/alerts/trump-unveils-5b-genesis-mission-doe-picks-278-ai-projects
- EU AI in Science Strategy / RAISE: https://research-and-innovation.ec.europa.eu/strategy/strategy-research-and-innovation/our-digital-future/european-ai-science-strategy_en
- UK AI for Science Strategy: https://data.parliament.uk/DepositedPapers/Files/DEP2025-0762/AI_for_Science_Strategy.pdf ; https://www.gov.uk/government/news/bold-bet-on-ai-to-keep-uk-at-forefront-of-science-and-research-breakthroughs-from-healthcare-to-better-public-services ; UKRI £1.6bn: https://www.digit.fyi/?p=131047
