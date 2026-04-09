// 导入所有动画演示数据
import { css3Demos } from "./css3Demos.js";
import { svgDemos } from "./svgDemos.js";
import { canvasDemos } from "./canvasDemos.js";
import { gsapDemos } from "./gsapDemos.js";
import { interactiveDemos } from "./interactiveDemos.js";

// 按类别组织演示数据
export const demoDataByCategory = {
  css3: css3Demos,
  svg: svgDemos,
  canvas: canvasDemos,
  gsap: gsapDemos,
  interactive: interactiveDemos,
};

// 获取演示HTML
export const getDemoHTML = (effectName, category) => {
  // 首先尝试根据类别获取演示数据
  if (
    category &&
    demoDataByCategory[category] &&
    demoDataByCategory[category][effectName]
  ) {
    return demoDataByCategory[category][effectName];
  }

  // 如果没有找到，返回默认演示
  return `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <p>动画效果演示</p>
    </div>
  `;
};
