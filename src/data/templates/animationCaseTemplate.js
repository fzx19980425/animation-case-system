// 1) 动画案例模板：直接用于 src/data/animations/*.js
export const animationCaseTemplate = {
  id: 999, // 数字 ID，确保在同文件内唯一
  title: "案例标题",
  category: "css3", // css3 | svg | canvas | gsap
  cover: "https://example.com/cover.png",
  description: "一句话描述这个案例解决的场景问题",
  effects: [
    {
      name: "效果名称", // 必须与 demo key 完全一致
      code: `/* 可复制代码片段 */`,
    },
  ],
};

// 2) 演示模板：直接用于 src/data/demos/*Demos.js
export const animationDemoTemplate = {
  效果名称: `
    <div style="display:flex;align-items:center;justify-content:center;height:400px;background:#f5f5f5;border-radius:8px;">
      演示内容
    </div>
    <style>
      /* 样式 */
    </style>
    <script>
      // 脚本（如需要）
    </script>
  `,
};

// 3) 录入检查清单（当前项目真实约束）
export const animationChecklist = [
  "effects[].name 与 demo key 完全一致",
  "category 仅使用 css3/svg/canvas/gsap",
  "code 字段可读、可复制、无语法错误",
  "demo 在详情页能正常运行",
];
