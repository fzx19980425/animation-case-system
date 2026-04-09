// 导入所有动画数据
import { css3Animations } from "./animations/css3.js";
import { svgAnimations } from "./animations/svg.js";
import { canvasAnimations } from "./animations/canvas.js";
import { gsapAnimations } from "./animations/gsap.js";
import { interactiveAnimations } from "./animations/interactive.js";

// 合并所有动画数据
export const caseData = [
  ...css3Animations,
  ...svgAnimations,
  ...canvasAnimations,
  ...gsapAnimations,
  ...interactiveAnimations,
];

// 动画分类
export const animationCategories = [
  { id: "all", name: "全部动画" },
  { id: "css3", name: "CSS3 动画" },
  { id: "svg", name: "SVG 动画" },
  { id: "canvas", name: "Canvas 动画" },
  { id: "gsap", name: "GSAP 动画" },
  { id: "interactive", name: "交互动画" },
];
