# CityU MSc CS 往年卷索引

> 只收**考试真题**。作业、tutorial、复习提纲一律不收。
> 空白的地方不是漏了，是真的没有。

香港城市大学 MSc Computer Science 相关课程的往年考试卷索引，聚合自多个公开 GitHub 仓库，
按课程整理，标注年份、类型、有无答案，并明确标出**哪些课根本没有真题**。

- 课程数：**13 门**
- 真题卷：**41 份**
- 带答案：**13 份**
- 零存货：**3 门**

打开 [`index.html`](./index.html) 即可浏览（单文件，无需服务器）。

---

## 筛选标准

只有一条：**能不能用来预测今年考什么。**

据此计算价值：

```
收藏的价值 = 内容的可预测性 × 获取的难度
```

| 类型 | 可预测性 | 获取难度 | 结论 |
|---|---|---|---|
| 作业 Assignment / HW | 低（每学期换题） | 低（自己查得到） | **不收** |
| Tutorial 解答 | 低 | 低 | **不收** |
| 复习提纲 / Review | — | 低 | **不收** |
| 考试卷 Final / Midterm / Quiz | **高**（题型稳定） | **高**（闭卷不外传） | **收** |
| Practice / 模拟卷 | 中 | 低 | 收，但**单独标注**，不与真题混排 |

具体判定规则（可复用于其他仓库）：

1. 路径位于 `/exams/`、`/midterm/`、`/finals/` 下 → 高置信度真题
2. 路径含 `Assignment`、`Tutorial`、`HW`、`Exercise` → 直接排除
3. 文件名为 `-0102B`、`2023A`、`18-19` 等学年学期模式 → 高置信度真题
4. 文件名含 `practice`、`mock`、`模拟` → 单独归"练习"级

---

## 完整清单

### 有真题的课程

| 课程 | 课程名 | 份数 | 最近 | 完整度 | 带答案 |
|---|---|---|---|---|---|
| **CS5285** | Information Security for eCommerce | **12** | 2025 | 完整 | 2 |
| CS5489 | Machine Learning: Algorithms and Applications | 10 | 2025 | 完整 | 6 |
| CS5187 | Vision and Image | 5 | 2024 | 完整 | 0 |
| CS5487 | Machine Learning | 3 | 2024 | 残缺 | 1 |
| CS5351 | Software Engineering | 2 | 2025 | 完整 | 0 |
| CS5481 | Data Engineering | 2 | 2025 | 完整 | 0 |
| CS5182 | Computer Graphics | 2 | 2024 | 完整 | 2 |
| CS5222 | Computer Networks and Internets | 1 | 2024 | 完整 | 0 |
| CS5483 | Data Mining | 1 | — | 残缺 | 0 |
| CS5491 | Artificial Intelligence | 3 | 2026 | **仅练习** | 2 |

### 缺口（公开网络上没有真题）

| 课程 | 课程名 | 现状 |
|---|---|---|
| CS5296 | Cloud Computing | 只有 assignment |
| CS5281 | Internet Application Development | 只有复习提纲 |
| CS6493 | Natural Language Processing | 只有 HW1/HW2 及解答 |

> 这三门课的真题需要**向学长要**。知道"没有"本身就是信息——省得在群里白问。

---

## 数据来源

三家互补，单看任一家都不全：

| 仓库 | 特点 | 强项 |
|---|---|---|
| [lavine888/CityU-CS-Notes](https://github.com/lavine888/CityU-CS-Notes) | 6 门课，有独立的 `exams/` 目录 | 目录结构最干净，CS5285 全库最全 |
| [CityuMSCS/CityuMSCS](https://github.com/CityuMSCS/CityuMSCS) | 11 门课 | 覆盖面最广，年份最全，但作业与卷子混放 |
| [monkeywoora/cityu-dg-cs](https://github.com/monkeywoora/cityu-dg-cs) | 讲义 + 作业 + 解答 | 答案与 tutorial 解答丰富 |

---

## 几个值得记住的发现

- **CS5285 一门课的存量（12 份），比其他所有课加起来还多。** 存货分布极度不均。
- **CS5222 全库只有 1 份真题。** 其余 15 个文件都是作业解和 tutorial 解。稀缺是真的。
- **CS5491 的 3 份全是 practice，一份真题都没有。** 严格按标准应与零存货同档。
- **年份跨度大 ≠ 价值高。** CS5285 有 8 份是 2014 年前的老卷，教师换了之后参考价值打折。
  真正该看的是「最近一份 + 有没有答案」。

---

## 部署

单文件，三种用法：

1. 本地双击 `index.html`
2. 推到 GitHub，Settings → Pages → 选分支根目录，即可得到在线地址
3. 直接把 `index.html` 发给别人，也能打开

---

## 免责

本项目**只做索引，不托管任何文件**。所有链接指向原始公开仓库，版权归原作者与课程教师所有。

不提供、不销售任何课程材料。如原作者要求移除索引，请开 Issue。
