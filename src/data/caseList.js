// 导入统一动画数据
import { css3Animations } from "./animations/css3.js";
import { svgAnimations } from "./animations/svg.js";
import { canvasAnimations } from "./animations/canvas.js";
import { gsapAnimations } from "./animations/gsap.js";
import { lottieAnimations } from "./animations/lottie.js";

// 合并所有动画数据
export const caseData = [
  ...css3Animations,
  ...svgAnimations,
  ...canvasAnimations,
  ...gsapAnimations,
  ...lottieAnimations,
];

// 动画分类
export const animationCategories = [
  { id: "all", name: "全部动画" },
  { id: "css3", name: "CSS3" },
  { id: "svg", name: "SVG" },
  { id: "canvas", name: "Canvas" },
  { id: "gsap", name: "GSAP" },
  { id: "lottie", name: "Lottie" },
];
