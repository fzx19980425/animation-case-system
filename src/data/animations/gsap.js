// GSAP 动画数据
export const gsapAnimations = [
  {
    id: 10,
    title: "GSAP 基础动画",
    category: "gsap",
    cover:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=GSAP%20animation%20examples%20with%20smooth%20transitions&image_size=square_hd",
    description: "GSAP 基础动画效果",
    effects: [
      {
        name: "基本属性动画",
        code: "// 基本属性动画\nimport gsap from 'gsap';\n\n// 移动元素\ngsap.to('.box', {\n    x: 300,\n    duration: 1,\n    ease: 'power1.out'\n});\n\n// 缩放元素\ngsap.to('.box', {\n    scale: 1.5,\n    duration: 0.5,\n    ease: 'back.out(1.7)'\n});\n\n// 旋转元素\ngsap.to('.box', {\n    rotation: 360,\n    duration: 1,\n    ease: 'linear'\n});",
      },
      {
        name: "颜色动画",
        code: "// 颜色动画\nimport gsap from 'gsap';\nimport { ColorPlugin } from 'gsap/ColorPlugin';\n\n// 注册颜色插件\ngsap.registerPlugin(ColorPlugin);\n\n// 背景颜色渐变\ngsap.to('.box', {\n    backgroundColor: '#e74c3c',\n    duration: 1,\n    ease: 'power1.inOut'\n});\n\n// 文字颜色渐变\ngsap.to('.text', {\n    color: '#3498db',\n    duration: 1,\n    ease: 'power1.inOut'\n});",
      },
      {
        name: "透明度动画",
        code: "// 透明度动画\nimport gsap from 'gsap';\n\n// 淡入效果\ngsap.fromTo('.box', \n    { opacity: 0 },\n    { opacity: 1, duration: 1, ease: 'power1.out' }\n);\n\n// 淡出效果\ngsap.to('.box', {\n    opacity: 0,\n    duration: 1,\n    ease: 'power1.in'\n});",
      },
      {
        name: "时间线动画",
        code: "// 时间线动画\nimport gsap from 'gsap';\n\n// 创建时间线\nconst tl = gsap.timeline();\n\n// 添加动画序列\ntl.to('.box', {\n    x: 300,\n    duration: 1,\n    ease: 'power1.out'\n})\n.to('.box', {\n    y: 100,\n    duration: 0.5,\n    ease: 'power1.in'\n})\n.to('.box', {\n    rotation: 360,\n    duration: 1,\n    ease: 'linear'\n});",
      },
      {
        name: "缓动函数",
        code: "// 缓动函数\nimport gsap from 'gsap';\n\n// 不同缓动效果对比\nconst easeTypes = ['power1.in', 'power1.out', 'power1.inOut', 'back.out(1.7)', 'elastic.out(1, 0.3)', 'bounce.out'];\n\neaseTypes.forEach((ease, index) => {\n    gsap.to(`.box-${index}`, {\n        x: 300,\n        duration: 1,\n        ease: ease,\n        delay: index * 0.2\n    });\n});",
      },
    ],
  },
  {
    id: 11,
    title: "GSAP 高级动画",
    category: "gsap",
    cover:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Advanced%20GSAP%20animation%20with%20complex%20effects&image_size=square_hd",
    description: "GSAP 高级动画效果",
    effects: [
      {
        name: "滚动触发动画",
        code: "// 滚动触发动画\nimport gsap from 'gsap';\nimport { ScrollTrigger } from 'gsap/ScrollTrigger';\n\n// 注册滚动触发插件\ngsap.registerPlugin(ScrollTrigger);\n\n// 滚动时触发动画\ngsap.to('.box', {\n    x: 300,\n    duration: 1,\n    scrollTrigger: {\n        trigger: '.box',\n        start: 'top 80%',\n        end: 'bottom 20%',\n        scrub: true\n    }\n});",
      },
      {
        name: "路径动画",
        code: "// 路径动画\nimport gsap from 'gsap';\nimport { MotionPathPlugin } from 'gsap/MotionPathPlugin';\n\n// 注册路径动画插件\ngsap.registerPlugin(MotionPathPlugin);\n\n// 沿路径移动\ngsap.to('.box', {\n    motionPath: {\n        path: '.path',\n        align: '.path',\n        alignOrigin: [0.5, 0.5]\n    },\n    duration: 3,\n    ease: 'power1.inOut',\n    repeat: -1\n});",
      },
      {
        name: "stagger 动画",
        code: "// Stagger 动画\nimport gsap from 'gsap';\n\n// 错开动画\nconst boxes = document.querySelectorAll('.box');\n\ngsap.from(boxes, {\n    y: 50,\n    opacity: 0,\n    duration: 0.5,\n    stagger: 0.1,\n    ease: 'back.out(1.7)'\n});\n\n// 交错动画序列\nconst tl = gsap.timeline();\ntl.from(boxes, {\n    x: -50,\n    opacity: 0,\n    duration: 0.5,\n    stagger: 0.1\n})\n.to(boxes, {\n    x: 50,\n    duration: 0.5,\n    stagger: 0.1\n});",
      },


      {
        name: "时间线控制",
        code: "// 时间线控制\nimport gsap from 'gsap';\n\n// 创建时间线\nconst tl = gsap.timeline({\n    paused: true,\n    repeat: 2,\n    yoyo: true\n});\n\n// 添加动画\ntl.to('.box', {\n    x: 300,\n    duration: 1\n})\n.to('.box', {\n    y: 100,\n    duration: 0.5\n})\n.to('.box', {\n    rotation: 360,\n    duration: 1\n});\n\n// 控制时间线\ndocument.querySelector('.play').addEventListener('click', () => tl.play());\ndocument.querySelector('.pause').addEventListener('click', () => tl.pause());\ndocument.querySelector('.reverse').addEventListener('click', () => tl.reverse());\ndocument.querySelector('.restart').addEventListener('click', () => tl.restart());",
      },
      {
        name: "背景流动渐变",
        code: "// 背景流动渐变\nimport gsap from 'gsap';\n\n// 背景流动效果\ngsap.to('.gradient-bg', {\n    backgroundPosition: '100% 100%',\n    duration: 15,\n    ease: 'linear',\n    repeat: -1\n});",
      },
    ],
  },
  {
    id: 34,
    title: "GSAP 场景编排案例",
    category: "gsap",
    cover:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=GSAP%20hero%20timeline%20and%20scroll%20storytelling&image_size=square_hd",
    description: "复杂时间轴与滚动叙事的经典模板",
    effects: [
      {
        name: "Hero 分层入场",
        code: "// Hero 分层入场\nimport gsap from 'gsap';\n\nconst tl = gsap.timeline({ defaults: { ease: 'power3.out' } });\ntl\n  .from('.hero-badge', { y: -20, opacity: 0, duration: 0.45 })\n  .from('.hero-title', { y: 28, opacity: 0, duration: 0.7 }, '-=0.2')\n  .from('.hero-sub', { y: 20, opacity: 0, duration: 0.55 }, '-=0.35')\n  .from('.hero-cta', { scale: 0.9, opacity: 0, duration: 0.4 }, '-=0.3')\n  .from('.hero-card', { x: 40, opacity: 0, duration: 0.7 }, '-=0.45');",
      },
      {
        name: "滚动章节叙事",
        code: "// 滚动章节叙事\nimport gsap from 'gsap';\nimport { ScrollTrigger } from 'gsap/ScrollTrigger';\n\ngsap.registerPlugin(ScrollTrigger);\n\nconst tl = gsap.timeline({\n  scrollTrigger: {\n    trigger: '.story',\n    start: 'top top',\n    end: '+=1800',\n    scrub: true,\n    pin: true,\n  },\n});\n\ntl\n  .to('.story-scene-1', { opacity: 0, y: -40, duration: 1 })\n  .fromTo('.story-scene-2', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, '<')\n  .to('.story-scene-2', { opacity: 0, scale: 0.95, duration: 1 })\n  .fromTo('.story-scene-3', { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 1 }, '<');",
      },
    ],
  },
];
