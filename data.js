// CityU MSc CS 往年考试卷数据集
// 加一门课：在数组里加一个对象；修数据：改字段即可，页面会自动渲染
// level: full 完整真题 / partial 残缺 / practice 仅练习模拟 / none 零存货
// file 字段: y 年份 / t 学期或说明 / ty 类型(final|midterm|quiz|practice) / ans 有无答案
//           / partial 是否残缺 / r 仓库 / b 分支 / p 路径

window.COURSES = [
  {
    code:"CS5285", cn:"电子商务信息安全", en:"Information Security for eCommerce",
    level:"full", note:"12 份跨 2001–2025，是三个仓库里最完整的一门。但 8 份是 2014 年前的老卷，近年 final 仅 2020 两份；midterm 有 2023 与 2025 的官方答案。",
    files:[
      {y:2025,t:"Sem A",ty:"midterm",ans:1,r:"lavine888/CityU-CS-Notes",b:"main",p:"courses/CS5285-Information-Security-for-eCommerce/materials/official/exams/Midterm Solutions 2025.pdf"},
      {y:2023,t:"Sem A",ty:"midterm",ans:1,r:"lavine888/CityU-CS-Notes",b:"main",p:"courses/CS5285-Information-Security-for-eCommerce/materials/official/exams/CS5285 Midterm solutions 2023.pdf"},
      {y:2020,t:"Sem A",ty:"final",ans:0,r:"lavine888/CityU-CS-Notes",b:"main",p:"courses/CS5285-Information-Security-for-eCommerce/materials/official/exams/CS5285_Exam_SemA_2020__1_.pdf.pdf"},
      {y:2020,t:"Final",ty:"final",ans:0,r:"lavine888/CityU-CS-Notes",b:"main",p:"courses/CS5285-Information-Security-for-eCommerce/materials/official/exams/5285final20.pdf"},
      {y:2014,t:"13/14 A",ty:"final",ans:0,r:"lavine888/CityU-CS-Notes",b:"main",p:"courses/CS5285-Information-Security-for-eCommerce/materials/official/exams/CS5285-1314A.pdf"},
      {y:2012,t:"11/12 A",ty:"final",ans:0,r:"lavine888/CityU-CS-Notes",b:"main",p:"courses/CS5285-Information-Security-for-eCommerce/materials/official/exams/CS5285-1112A.pdf"},
      {y:2011,t:"10/11 A",ty:"final",ans:0,r:"lavine888/CityU-CS-Notes",b:"main",p:"courses/CS5285-Information-Security-for-eCommerce/materials/official/exams/CS5285-1011A.pdf"},
      {y:2010,t:"09/10 A",ty:"final",ans:0,r:"lavine888/CityU-CS-Notes",b:"main",p:"courses/CS5285-Information-Security-for-eCommerce/materials/official/exams/CS5285-0910A.pdf"},
      {y:2009,t:"08/09 A",ty:"final",ans:0,r:"lavine888/CityU-CS-Notes",b:"main",p:"courses/CS5285-Information-Security-for-eCommerce/materials/official/exams/CS5285-0809A.pdf"},
      {y:2008,t:"07/08 A",ty:"final",ans:0,r:"lavine888/CityU-CS-Notes",b:"main",p:"courses/CS5285-Information-Security-for-eCommerce/materials/official/exams/CS5285-0708A.pdf"},
      {y:2004,t:"03/04 B",ty:"final",ans:0,r:"lavine888/CityU-CS-Notes",b:"main",p:"courses/CS5285-Information-Security-for-eCommerce/materials/official/exams/CS5285-0304B.pdf"},
      {y:2002,t:"01/02 B",ty:"final",ans:0,r:"lavine888/CityU-CS-Notes",b:"main",p:"courses/CS5285-Information-Security-for-eCommerce/materials/official/exams/CS5285-0102B.pdf"}
    ]
  },
  {
    code:"CS5489", cn:"机器学习", en:"Machine Learning: Algorithms and Applications",
    level:"full", note:"期末 2020/2021，中期 2021A/2021B/2023A/2023B，多数带答案，还有 2020B quiz。年份集中在 2020–2023。",
    files:[
      {y:2025,t:"24/25 B",ty:"midterm",ans:1,r:"CityuMSCS/CityuMSCS",b:"main",p:"CS5489 Machine Learning Application/Midterms/CS5489 24-25B Midterm solution.docx"},
      {y:2023,t:"Sem A",ty:"midterm",ans:1,r:"CityuMSCS/CityuMSCS",b:"main",p:"CS5489 Machine Learning Application/Midterms/CS5489-midterm-2023A-questions+answers.pdf"},
      {y:2023,t:"Sem B",ty:"midterm",ans:1,r:"CityuMSCS/CityuMSCS",b:"main",p:"CS5489 Machine Learning Application/Midterms/CS5489-midterm-2023B-questions+answers.pdf"},
      {y:2021,t:"Sem A",ty:"midterm",ans:1,r:"CityuMSCS/CityuMSCS",b:"main",p:"CS5489 Machine Learning Application/Midterms/CS5489-midterm-2021A-answers.pdf"},
      {y:2021,t:"Sem A",ty:"midterm",ans:0,r:"CityuMSCS/CityuMSCS",b:"main",p:"CS5489 Machine Learning Application/Midterms/CS5489-midterm-2021A-questions.pdf"},
      {y:2021,t:"Sem B",ty:"midterm",ans:1,r:"CityuMSCS/CityuMSCS",b:"main",p:"CS5489 Machine Learning Application/Midterms/CS5489-midterm-2021B-answers.pdf"},
      {y:2021,t:"Sem B",ty:"midterm",ans:0,r:"CityuMSCS/CityuMSCS",b:"main",p:"CS5489 Machine Learning Application/Midterms/CS5489-midterm-2021B-questions.pdf"},
      {y:2021,t:"Final",ty:"final",ans:0,r:"CityuMSCS/CityuMSCS",b:"main",p:"CS5489 Machine Learning Application/Finals/CS5489-final-2021-questions.pdf"},
      {y:2020,t:"Final",ty:"final",ans:0,r:"CityuMSCS/CityuMSCS",b:"main",p:"CS5489 Machine Learning Application/Finals/CS5489-final-2020-questions.pdf"},
      {y:2020,t:"Sem B",ty:"quiz",ans:1,r:"CityuMSCS/CityuMSCS",b:"main",p:"CS5489 Machine Learning Application/Midterms/CS5489-quiz-2020B-questions+answers.pdf"}
    ]
  },
  {
    code:"CS5187", cn:"视觉与图像", en:"Vision and Image",
    level:"full", note:"两份 2024 final、一份 18/19 真题，另有一份中文模拟卷（已标注，非真题）。",
    files:[
      {y:2024,t:"Final",ty:"final",ans:0,r:"lavine888/CityU-CS-Notes",b:"main",p:"courses/CS5187-Vision-and-Image/materials/official/exams/5187final.pdf"},
      {y:2024,t:"Final",ty:"final",ans:0,r:"CityuMSCS/CityuMSCS",b:"main",p:"CS5187 Vision and Image/CS 5187 vision and image final.pdf"},
      {y:2021,t:"Past",ty:"final",ans:0,r:"lavine888/CityU-CS-Notes",b:"main",p:"courses/CS5187-Vision-and-Image/materials/official/exams/CS5187past+exam.pdf"},
      {y:2019,t:"18/19",ty:"final",ans:0,r:"CityuMSCS/CityuMSCS",b:"main",p:"CS5187 Vision and Image/cs5187_exam 18-19.pdf"},
      {y:0,t:"模拟",ty:"practice",ans:0,r:"lavine888/CityU-CS-Notes",b:"main",p:"courses/CS5187-Vision-and-Image/materials/official/exams/模拟试卷.pdf"}
    ]
  },
  {
    code:"CS5487", cn:"机器学习（另一门）", en:"Machine Learning",
    level:"partial", note:"只有 1 份完整 final（2020，带水印），midterm 2024 有答案，另一份只有 problem 1 残缺。",
    files:[
      {y:2024,t:"Sem A",ty:"midterm",ans:1,r:"CityuMSCS/CityuMSCS",b:"main",p:"CS5487 Machine Learning/midterm-2024A-SOLUTIONS.pdf"},
      {y:2020,t:"Final",ty:"final",ans:0,r:"CityuMSCS/CityuMSCS",b:"main",p:"CS5487 Machine Learning/CS5487-final-v1-2020-question_加水印.pdf"},
      {y:0,t:"残缺",ty:"midterm",ans:0,partial:1,r:"CityuMSCS/CityuMSCS",b:"main",p:"CS5487 Machine Learning/CS 5487-machine learning-midterm-problem1.pdf"}
    ]
  },
  {
    code:"CS5351", cn:"软件工程", en:"Software Engineering",
    level:"full", note:"2024/25 quiz 与 midterm quiz 各一份。GitHub 上有 191 个 CS5351 仓库，绝大多数是小组项目，卷子只有这两份。",
    files:[
      {y:2025,t:"24/25",ty:"quiz",ans:0,r:"CityuMSCS/CityuMSCS",b:"main",p:"CS5351 Software Engineering/CS5351-202425_quiz.pdf"},
      {y:2025,t:"24/25",ty:"midterm",ans:0,r:"CityuMSCS/CityuMSCS",b:"main",p:"CS5351 Software Engineering/CS5351_software engineering_midterm quiz.pdf"}
    ]
  },
  {
    code:"CS5481", cn:"数据工程", en:"Data Engineering",
    level:"full", note:"final 直接分了 sectA / sectB 两卷，2024/25。作业解答已剔除。",
    files:[
      {y:2025,t:"Sect A",ty:"final",ans:0,r:"CityuMSCS/CityuMSCS",b:"main",p:"CS5481 Data Engineering/CS 5481 Dataengineering-final-sectA.pdf"},
      {y:2025,t:"Sect B",ty:"final",ans:0,r:"CityuMSCS/CityuMSCS",b:"main",p:"CS5481 Data Engineering/CS 5481 Dataengineering-final-sectB.pdf"}
    ]
  },
  {
    code:"CS5182", cn:"计算机图形学", en:"Computer Graphics",
    level:"full", note:"midterm 与 2024 quiz，两份都带答案。",
    files:[
      {y:2024,t:"Quiz",ty:"quiz",ans:1,r:"CityuMSCS/CityuMSCS",b:"main",p:"CS5182 Computer Graphics/QUIZ_2024_CS5182_DG_answer.pdf"},
      {y:2024,t:"Midterm",ty:"midterm",ans:1,r:"CityuMSCS/CityuMSCS",b:"main",p:"CS5182 Computer Graphics/Mid_term_answer.pdf.pdf"}
    ]
  },
  {
    code:"CS5222", cn:"计算机网络", en:"Computer Networks and Internets",
    level:"full", note:"全库只有这一份真题。三个仓库里的其余文件是 3 份作业解、12 份 tutorial 解、1 份复习提纲，全部剔除。",
    files:[
      {y:2024,t:"Final",ty:"final",ans:0,r:"CityuMSCS/CityuMSCS",b:"main",p:"CS5222 Computer Networks/CS5222 Computer Networks & Internets final.pdf"}
    ]
  },
  {
    code:"CS5483", cn:"数据挖掘", en:"Data Mining",
    level:"partial", note:"仅有 1 份 Canvas quiz 的网页导出，不是标准试卷格式，参考价值有限。",
    files:[
      {y:0,t:"Quiz",ty:"quiz",ans:0,partial:1,r:"CityuMSCS/CityuMSCS",b:"main",p:"CS5483 Data Mining/Quiz_ Attempt review _ cs5483-equiz.pdf"}
    ]
  },
  {
    code:"CS5491", cn:"人工智能", en:"Artificial Intelligence",
    level:"practice", note:"3 份全是 practice midterm，一份真题都没有。严格按标准应与零存货同档，单独列出供参考。",
    files:[
      {y:2026,t:"Practice",ty:"practice",ans:0,r:"lavine888/CityU-CS-Notes",b:"main",p:"courses/CS5491-Artificial-Intelligence/materials/official/midterm/2026_CS5491AI_practice_midterm.pdf"},
      {y:2025,t:"Practice · 答案",ty:"practice",ans:1,r:"CityuMSCS/CityuMSCS",b:"main",p:"CS5491 Artificial Intelligence/2025_CS5491AI_practice_midterm_soln.pdf"},
      {y:2025,t:"答案",ty:"practice",ans:1,r:"CityuMSCS/CityuMSCS",b:"main",p:"CS5491 Artificial Intelligence/2025_CityU_CS5491AI_soln.pdf"}
    ]
  },
  {
    code:"CS5296", cn:"云计算", en:"Cloud Computing",
    level:"none", note:"三个仓库里都只有 assignment，没有任何考试卷。这门课的真题目前不在公开网络上，需要向学长要。",
    files:[]
  },
  {
    code:"CS5281", cn:"互联网应用开发", en:"Internet Application Development",
    level:"none", note:"仅有 revision 提纲与 exam guide 笔记，没有卷子本身。缺口。",
    files:[]
  },
  {
    code:"CS6493", cn:"自然语言处理", en:"Natural Language Processing",
    level:"none", note:"只有 HW1 / HW2 及其解答，属于作业，按标准剔除。缺口。",
    files:[]
  }
];
