// Lottie 动画数据（精简为高频实用案例）
export const lottieAnimations = [
  {
    id: 35,
    title: "Lottie 业务高频案例",
    category: "lottie",
    cover:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Lottie%20empty%20state%20and%20success%20micro%20interaction&image_size=square_hd",
    description: "聚焦真实业务场景，保留可直接落地的 Lottie 示例。",
    effects: [
      {
        name: "加载中",
        code: `import lottie from 'lottie-web';
import loadingJson from '../json/loading.json';

const loadingAnim = lottie.loadAnimation({
  container: document.getElementById('lottie-container'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: loadingJson,
});`,
      },
    ],
  },
];
