// CSS3 动画数据
const css3Animations = [
  {
    id: 1,
    title: "关键帧动画",
    category: "css3",
    cover:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=CSS%20keyframes%20animation%20with%20complex%20motion%20paths&image_size=square_hd",
    description: "使用 CSS 关键帧创建复杂的动画效果",
    effects: [
      {
        name: "打字机效果",
        code: `.typewriter {
    overflow: hidden;
    border-right: 2px solid #000;
    white-space: nowrap;
    animation: typing 3.5s steps(40, end),
               blink-caret 0.75s step-end infinite;
}

@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}

@keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #000 }
}`,
      },
      {
        name: "文字渐入",
        code: `.fade-in-text {
    opacity: 0;
    animation: fadeIn 1s ease-in forwards;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}`,
      },
      {
        name: "脉冲动画",
        code: `.pulse {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.1);
        opacity: 0.8;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}`,
      },
      {
        name: "弹跳动画",
        code: `.bounce {
    animation: bounce 1s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
}`,
      },
      {
        name: "摇摆动画",
        code: `.swing {
    animation: swing 2s infinite;
    transform-origin: top center;
}

@keyframes swing {
    0% { transform: rotate(0deg); }
    20% { transform: rotate(10deg); }
    40% { transform: rotate(-10deg); }
    60% { transform: rotate(5deg); }
    80% { transform: rotate(-5deg); }
    100% { transform: rotate(0deg); }
}`,
      },
      {
        name: "旋转动画",
        code: `.rotate {
    animation: rotate 3s linear infinite;
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}`,
      },
      {
        name: "闪烁动画",
        code: `.blink {
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 50%, 100% {
        opacity: 1;
    }
    25%, 75% {
        opacity: 0;
    }
}`,
      },
      {
        name: "滑动动画",
        code: `.slide-in {
    animation: slideIn 1s ease-out forwards;
    transform: translateX(-100%);
}

@keyframes slideIn {
    to {
        transform: translateX(0);
    }
}`,
      },
      {
        name: "缩放动画",
        code: `.scale-in {
    animation: scaleIn 1s ease-out forwards;
    transform: scale(0);
}

@keyframes scaleIn {
    to {
        transform: scale(1);
    }
}`,
      },
      {
        name: "淡入淡出动画",
        code: `.fade-in-out {
    animation: fadeInOut 3s infinite;
}

@keyframes fadeInOut {
    0%, 100% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
}`,
      },
      {
        name: "波纹效果",
        code: `.ripple {
    position: relative;
    overflow: hidden;
}

.ripple::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transform: translate(-50%, -50%);
    animation: ripple 1s ease-out;
}

@keyframes ripple {
    to {
        width: 300px;
        height: 300px;
        opacity: 0;
    }
}`,
      },
      {
        name: "基本变换组合",
        code: `.transform-example {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  animation: roll 3s linear infinite;
}

@keyframes roll {
  0% {
    transform: translate(0, 20px) rotate(0deg) scale(1);
  }
  100% {
    transform: translate(250px, 20px) rotate(360deg) scale(2);
  }
}`,
      },
      {
        name: "时空穿梭效果",
        code: `:root {
  --transition-duration: 8s;
  --animation-delay: -4s;
  --transform-z: 500px;
  --transform-middle-z: 1000px;
  --opacity-low: 0.2;
  --opacity-high: 1;
  --shadow-color: #4d7e8f;
}

.full-wrap {
  width: 100%;
  height: 400px;
  background: black;
  position: relative;
  overflow: hidden;
}

.g-container {
  margin: auto;
  perspective: 5px;
  perspective-origin: center center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}

.g-group {
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: -50vw;
  top: -50vh;
  transform-style: preserve-3d;
  animation: move var(--transition-duration) infinite linear;
}

.g-group:nth-child(2) {
  animation-delay: var(--animation-delay);
}

.item {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: var(--opacity-low);
  animation: fade var(--transition-duration) infinite linear;
}

.item::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  box-shadow:
    0 0 0 0 var(--shadow-color),
    77.88vw 36.5vh 0 4px var(--shadow-color),
    59.72vw 84.41vh 0 3px var(--shadow-color),
    13vw 50.69vh 0 2px var(--shadow-color),
    28.54vw 46.72vh 0 4px var(--shadow-color),
    32.58vw 7.49vh 0 5px var(--shadow-color),
    61.04vw 93.13vh 0 3px var(--shadow-color),
    70.04vw 71.46vh 0 1px var(--shadow-color),
    92.74vw 67.9vh 0 1px var(--shadow-color),
    13.61vw 62.2vh 0 1px var(--shadow-color),
    55.17vw 49.94vh 0 2px var(--shadow-color),
    29.24vw 32.19vh 0 1px var(--shadow-color),
    18.57vw 84.19vh 0 3px var(--shadow-color),
    43.96vw 6.95vh 0 4px var(--shadow-color),
    31.04vw 30.23vh 0 4px var(--shadow-color),
    90.01vw 76.34vh 0 5px var(--shadow-color),
    52.08vw 78.82vh 0 3px var(--shadow-color),
    46.29vw 28.37vh 0 4px var(--shadow-color),
    41.33vw 22.7vh 0 5px var(--shadow-color),
    23.54vw 43.99vh 0 4px var(--shadow-color),
    60.84vw 26.45vh 0 3px var(--shadow-color),
    90.45vw 60.44vh 0 3px var(--shadow-color),
    15.27vw 79.5vh 0 1px var(--shadow-color),
    27vw 72.48vh 0 1px var(--shadow-color),
    77.09vw 84.23vh 0 4px var(--shadow-color),
    38.26vw 68.81vh 0 2px var(--shadow-color),
    45.18vw 0.5vh 0 5px var(--shadow-color),
    33.49vw 97.44vh 0 1px var(--shadow-color),
    35.3vw 19.39vh 0 1px var(--shadow-color),
    69.07vw 46.46vh 0 3px var(--shadow-color),
    41.04vw 15.47vh 0 1px var(--shadow-color),
    99.84vw 75.27vh 0 5px var(--shadow-color),
    93.89vw 40.23vh 0 4px var(--shadow-color),
    70.95vw 9.43vh 0 1px var(--shadow-color),
    95.14vw 68.34vh 0 1px var(--shadow-color),
    36.03vw 53.14vh 0 2px var(--shadow-color),
    40.96vw 17.2vh 0 3px var(--shadow-color),
    22.1vw 84.86vh 0 1px var(--shadow-color),
    24.17vw 65.4vh 0 4px var(--shadow-color),
    28.65vw 46.4vh 0 1px var(--shadow-color),
    44.21vw 22.89vh 0 4px var(--shadow-color),
    34.56vw 24.02vh 0 4px var(--shadow-color),
    9.34vw 5.8vh 0 2px var(--shadow-color),
    82.74vw 37.38vh 0 2px var(--shadow-color),
    61.59vw 4.37vh 0 3px var(--shadow-color),
    65.76vw 67.52vh 0 3px var(--shadow-color),
    2.81vw 90.53vh 0 4px var(--shadow-color),
    98.42vw 34.99vh 0 1px var(--shadow-color),
    85.38vw 29.45vh 0 3px var(--shadow-color),
    6.66vw 66.5vh 0 3px var(--shadow-color),
    33.74vw 82.35vh 0 2px var(--shadow-color),
    29.53vw 80.91vh 0 3px var(--shadow-color),
    41.86vw 9.33vh 0 2px var(--shadow-color),
    58.91vw 35.83vh 0 4px var(--shadow-color),
    91.96vw 77.01vh 0 2px var(--shadow-color),
    30.19vw 4.83vh 0 2px var(--shadow-color),
    96.48vw 3.65vh 0 3px var(--shadow-color),
    60.85vw 53.98vh 0 3px var(--shadow-color),
    14.43vw 36.72vh 0 4px var(--shadow-color),
    68.27vw 93.36vh 0 5px var(--shadow-color),
    82.22vw 95.7vh 0 5px var(--shadow-color),
    96.92vw 96.25vh 0 2px var(--shadow-color),
    90.57vw 58.36vh 0 2px var(--shadow-color),
    17.44vw 93.44vh 0 1px var(--shadow-color),
    71.53vw 90.05vh 0 3px var(--shadow-color),
    6.82vw 54.48vh 0 2px var(--shadow-color),
    7.83vw 1.08vh 0 4px var(--shadow-color),
    22.78vw 48.6vh 0 1px var(--shadow-color),
    10.3vw 24.39vh 0 4px var(--shadow-color),
    73.82vw 67.94vh 0 4px var(--shadow-color),
    9.29vw 23.4vh 0 2px var(--shadow-color),
    56.95vw 46.78vh 0 3px var(--shadow-color),
    18.27vw 81.06vh 0 3px var(--shadow-color),
    40.61vw 63.19vh 0 1px var(--shadow-color),
    71.76vw 41.65vh 0 1px var(--shadow-color),
    33.76vw 55.14vh 0 5px var(--shadow-color),
    44.09vw 32.43vh 0 3px var(--shadow-color),
    69.46vw 94.68vh 0 5px var(--shadow-color),
    68.92vw 10.55vh 0 3px var(--shadow-color),
    34.57vw 35.86vh 0 3px var(--shadow-color),
    33.17vw 7.92vh 0 3px var(--shadow-color),
    54.86vw 73.71vh 0 2px var(--shadow-color),
    26.79vw 68.12vh 0 4px var(--shadow-color),
    52.25vw 60.17vh 0 2px var(--shadow-color),
    82.97vw 74.73vh 0 5px var(--shadow-color),
    60.17vw 22.77vh 0 3px var(--shadow-color),
    14.68vw 48.49vh 0 3px var(--shadow-color),
    31.79vw 47.04vh 0 3px var(--shadow-color),
    13.84vw 19.24vh 0 5px var(--shadow-color),
    24.67vw 82.79vh 0 2px var(--shadow-color),
    15.14vw 72.59vh 0 4px var(--shadow-color),
    95.94vw 66.43vh 0 4px var(--shadow-color),
    93.89vw 92.74vh 0 2px var(--shadow-color),
    76.66vw 71.39vh 0 5px var(--shadow-color),
    87.74vw 54.93vh 0 3px var(--shadow-color),
    85.18vw 42.04vh 0 4px var(--shadow-color),
    60.68vw 56.41vh 0 1px var(--shadow-color),
    15.79vw 49.18vh 0 5px var(--shadow-color),
    42.15vw 38.25vh 0 5px var(--shadow-color),
    99.17vw 87.25vh 0 5px var(--shadow-color),
    89.66vw 95.66vh 0 1px var(--shadow-color),
    70.5vw 90.62vh 0 2px var(--shadow-color),
    55.4vw 16.95vh 0 4px var(--shadow-color),
    83.58vw 86.75vh 0 2px var(--shadow-color),
    88.63vw 27.37vh 0 2px var(--shadow-color),
    29.2vw 50.9vh 0 1px var(--shadow-color),
    12.59vw 56.17vh 0 4px var(--shadow-color),
    87.76vw 20.87vh 0 1px var(--shadow-color),
    58.98vw 72.83vh 0 5px var(--shadow-color),
    80.93vw 51.07vh 0 4px var(--shadow-color),
    19.2vw 35.46vh 0 4px var(--shadow-color),
    48.96vw 3.74vh 0 3px var(--shadow-color),
    92.94vw 45.9vh 0 1px var(--shadow-color),
    38.77vw 24.53vh 0 2px var(--shadow-color),
    55.23vw 74.82vh 0 5px var(--shadow-color),
    1.31vw 49.56vh 0 3px var(--shadow-color),
    97.9vw 42.81vh 0 2px var(--shadow-color),
    71.88vw 53.44vh 0 3px var(--shadow-color),
    39.05vw 53.82vh 0 5px var(--shadow-color),
    76.75vw 55.72vh 0 1px var(--shadow-color),
    90.95vw 71.16vh 0 4px var(--shadow-color),
    9.11vw 53.42vh 0 1px var(--shadow-color),
    84.89vw 2.39vh 0 1px var(--shadow-color),
    43.45vw 62.41vh 0 1px var(--shadow-color),
    29.01vw 51.16vh 0 5px var(--shadow-color),
    51.37vw 32.5vh 0 3px var(--shadow-color),
    74.1vw 91.01vh 0 1px var(--shadow-color),
    78.65vw 13.11vh 0 4px var(--shadow-color),
    96.67vw 95.74vh 0 1px var(--shadow-color),
    35.4vw 21.11vh 0 1px var(--shadow-color),
    98.46vw 98.1vh 0 3px var(--shadow-color),
    75.43vw 97.47vh 0 5px var(--shadow-color),
    18.92vw 13.73vh 0 3px var(--shadow-color),
    90.93vw 19.59vh 0 2px var(--shadow-color),
    57.14vw 43.68vh 0 1px var(--shadow-color),
    99.62vw 44.19vh 0 2px var(--shadow-color),
    17.37vw 75.15vh 0 2px var(--shadow-color),
    17.91vw 52.89vh 0 5px var(--shadow-color),
    37.42vw 11.99vh 0 1px var(--shadow-color),
    61.76vw 24.66vh 0 5px var(--shadow-color),
    81.94vw 24.48vh 0 2px var(--shadow-color),
    2.52vw 61.92vh 0 2px var(--shadow-color),
    96.8vw 24.22vh 0 4px var(--shadow-color),
    40.75vw 30.69vh 0 2px var(--shadow-color),
    1.9vw 7.77vh 0 4px var(--shadow-color),
    90.55vw 26.43vh 0 3px var(--shadow-color),
    95.8vw 43.94vh 0 3px var(--shadow-color),
    62.69vw 70.26vh 0 2px var(--shadow-color),
    89.3vw 81.5vh 0 3px var(--shadow-color),
    16.35vw 13.82vh 0 1px var(--shadow-color),
    5.79vw 94.05vh 0 3px var(--shadow-color),
    78.84vw 88.66vh 0 4px var(--shadow-color),
    81.72vw 41.83vh 0 4px var(--shadow-color),
    8.42vw 65.98vh 0 1px var(--shadow-color),
    7.59vw 71.11vh 0 1px var(--shadow-color),
    17.01vw 91.52vh 0 4px var(--shadow-color),
    65.23vw 22.15vh 0 1px var(--shadow-color),
    67.4vw 44.27vh 0 5px var(--shadow-color),
    32.77vw 43.74vh 0 3px var(--shadow-color),
    54.71vw 91.25vh 0 2px var(--shadow-color),
    2.68vw 83.62vh 0 1px var(--shadow-color),
    55.53vw 75.25vh 0 3px #4d7e8f;
}

.g-group:nth-child(2) .item {
  animation-delay: var(--animation-delay);
}

.item-right {
  transform: rotateY(90deg) translateZ(var(--transform-z));
}

.item-left {
  transform: rotateY(-90deg) translateZ(var(--transform-z));
}

.item-top {
  transform: rotateX(90deg) translateZ(var(--transform-z));
}

.item-bottom {
  transform: rotateX(-90deg) translateZ(var(--transform-z));
}

.item-middle {
  transform: rotateX(180deg) translateZ(var(--transform-middle-z));
}

@keyframes move {
  0% {
    transform: translateZ(-200px) rotate(0deg);
  }
  100% {
    transform: translateZ(150px) rotate(0deg);
  }
}

@keyframes fade {
  0% {
    opacity: var(--opacity-low);
  }
  25%,
  60% {
    opacity: var(--opacity-high);
  }
  100% {
    opacity: var(--opacity-low);
  }
}`,
      },
      {
        name: "3D立方体旋转",
        code: `.cube-container {
  width: 200px;
  height: 200px;
  perspective: 1000px;
  margin: 100px auto;
}

.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: cube-rotate 10s infinite linear;
}

.cube-face {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
  opacity: 0.8;
}

.front {
  background-color: #3498db;
  transform: translateZ(100px);
}

.back {
  background-color: #e74c3c;
  transform: rotateY(180deg) translateZ(100px);
}

.left {
  background-color: #f39c12;
  transform: rotateY(-90deg) translateZ(100px);
}

.right {
  background-color: #2ecc71;
  transform: rotateY(90deg) translateZ(100px);
}

.top {
  background-color: #9b59b6;
  transform: rotateX(90deg) translateZ(100px);
}

.bottom {
  background-color: #1abc9c;
  transform: rotateX(-90deg) translateZ(100px);
}

@keyframes cube-rotate {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}`,
      },
      {
        name: "波浪变形",
        code: `.wave-container {
  width: 300px;
  height: 200px;
  overflow: hidden;
  margin: 50px auto;
}

.wave {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #3498db, #9b59b6);
  animation: wave 3s infinite ease-in-out;
  border-radius: 10px;
}

@keyframes wave {
  0%, 100% {
    transform: skew(0deg, 0deg);
  }
  25% {
    transform: skew(5deg, 2deg);
  }
  50% {
    transform: skew(0deg, 0deg);
  }
  75% {
    transform: skew(-5deg, -2deg);
  }
}`,
      },
      {
        name: "弹跳变换",
        code: `.bounce-transform {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  margin: 100px auto;
  animation: bounce-transform 2s infinite ease-in-out;
  border-radius: 10px;
}

@keyframes bounce-transform {
  0%, 100% {
    transform: scale(1) translateY(0);
  }
  25% {
    transform: scale(1.2) translateY(-20px);
  }
  50% {
    transform: scale(1) translateY(0);
  }
  75% {
    transform: scale(0.8) translateY(10px);
  }
}`,
      },
    ],
  },
  {
    id: 2,
    title: "变换效果",
    category: "css3",
    cover:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=CSS%20transforms%20with%20rotations%20scaling%20and%20translations&image_size=square_hd",
    description: "CSS 变换的各种应用，包括旋转、缩放、平移等",
    effects: [
      {
        name: "位移效果",
        code: `.translate-effect {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  transition: transform 0.3s ease;
}

.translate-effect:hover {
  transform: translate(20px, 20px);
}`,
      },
      {
        name: "缩放效果",
        code: `.scale-effect {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  transition: transform 0.3s ease;
}

.scale-effect:hover {
  transform: scale(1.2);
}`,
      },
      {
        name: "旋转效果",
        code: `.rotate-effect {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  transition: transform 0.3s ease;
}

.rotate-effect:hover {
  transform: rotate(15deg);
}`,
      },
      {
        name: "倾斜变换",
        code: `.skew-effect {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  transition: transform 0.3s ease;
}

.skew-effect:hover {
  transform: skew(10deg, 5deg);
}`,
      },
      {
        name: "3D 旋转",
        code: `.rotate-3d {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  transition: transform 0.5s ease;
  transform-style: preserve-3d;
}

.rotate-3d:hover {
  transform: rotate3d(1, 1, 1, 45deg);
}`,
      },
      {
        name: "卡片翻转效果",
        code: `.flip-card {
  width: 200px;
  height: 300px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
}

.flip-card-front {
  background-color: #3498db;
}

.flip-card-back {
  background-color: #2ecc71;
  transform: rotateY(180deg);
}`,
      },
    ],
  },
  {
    id: 3,
    title: "滤镜效果",
    category: "css3",
    cover:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=CSS%20filters%20effects%20with%20blur%20grayscale%20and%20color%20manipulation&image_size=square_hd",
    description: "CSS 滤镜效果的应用",
    effects: [
      {
        name: "模糊效果",
        code: `.blur-filter {
    width: 200px;
    height: 150px;
    background-color: #3498db;
    filter: blur(5px);
    transition: filter 0.3s ease;
}

.blur-filter:hover {
    filter: blur(0);
}`,
      },
      {
        name: "灰度效果",
        code: `.grayscale-filter {
    width: 200px;
    height: 150px;
    background-color: #3498db;
    filter: grayscale(100%);
    transition: filter 0.3s ease;
}

.grayscale-filter:hover {
    filter: grayscale(0);
}`,
      },
      {
        name: "多滤镜组合",
        code: `.multiple-filters {
    width: 200px;
    height: 150px;
    background-color: #3498db;
    filter: blur(2px) grayscale(50%) contrast(120%);
    transition: filter 0.3s ease;
}

.multiple-filters:hover {
    filter: blur(0) grayscale(0) contrast(100%);
}`,
      },
    ],
  },
];

export { css3Animations };
