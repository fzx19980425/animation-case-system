// CSS3 动画演示数据
export const css3Demos = {
  波纹效果: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <button class="ripple-button">点击波纹</button>
    </div>
    <style>
      .ripple-button {
        position: relative;
        overflow: hidden;
        padding: 10px 20px;
        background-color: #3498db;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
      .ripple-button::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 5px;
        height: 5px;
        background: rgba(255,255,255,0.5);
        opacity: 0;
        border-radius: 100%;
        transform: scale(1, 1) translate(-50%);
        transform-origin: 50% 50%;
      }
      .ripple-button:focus:not(:active)::after {
        animation: ripple 1s ease-out;
      }
      @keyframes ripple {
        0% {
          transform: scale(0, 0);
          opacity: 0.5;
        }
        100% {
          transform: scale(20, 20);
          opacity: 0;
        }
      }
    </style>
  `,
  基本变换组合: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div class="transform-combination"></div>
    </div>
    <style>
      .transform-combination {
        width: 100px;
        height: 100px;
        background-color: #3498db;
        transform: translate(50px, 20px) rotate(0deg) scale(1);
        transition: transform 0.6s ease;
        animation: roll 3s linear infinite;
      }
      @keyframes roll {
        0% {
          transform: translate(50px, 20px) rotate(0deg) scale(1);
        }
        100% {
          transform: translate(250px, 20px) rotate(360deg) scale(2);
        }
      }
    </style>
  `,
  时空穿梭效果: `
    <div class="full-wrap">
      <div class="g-container">
        <div class="g-group">
          <div class="item item-right"></div>
          <div class="item item-left"></div>
          <div class="item item-top"></div>
          <div class="item item-bottom"></div>
          <div class="item item-middle"></div>
        </div>
        <div class="g-group">
          <div class="item item-right"></div>
          <div class="item item-left"></div>
          <div class="item item-top"></div>
          <div class="item item-bottom"></div>
          <div class="item item-middle"></div>
        </div>
      </div>
    </div>
    <style>
      :root {
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
        border-radius: 8px;
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
      }
    </style>
  `,
  "3D立方体旋转": `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div class="cube-container">
        <div class="cube">
          <div class="cube-face front">前</div>
          <div class="cube-face back">后</div>
          <div class="cube-face left">左</div>
          <div class="cube-face right">右</div>
          <div class="cube-face top">上</div>
          <div class="cube-face bottom">下</div>
        </div>
      </div>
    </div>
    <style>
      .cube-container {
        width: 200px;
        height: 200px;
        perspective: 1000px;
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
      }
    </style>
  `,
  波浪变形: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div class="wave-container">
        <div class="wave"></div>
      </div>
    </div>
    <style>
      .wave-container {
        width: 300px;
        height: 200px;
        overflow: hidden;
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
      }
    </style>
  `,
  弹跳变换: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div class="bounce-transform"></div>
    </div>
    <style>
      .bounce-transform {
        width: 100px;
        height: 100px;
        background-color: #3498db;
        border-radius: 10px;
        animation: bounce-transform 2s infinite ease-in-out;
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
      }
    </style>
  `,
  打字机效果: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px; padding: 0 20px;">
      <div class="typewriter">这是一个打字机效果的文字动画</div>
    </div>
    <style>
      .typewriter {
        overflow: hidden;
        border-right: 2px solid #000;
        white-space: nowrap;
        animation: typing 3.5s steps(40, end),
                   blink-caret 0.75s step-end infinite;
        width: 0;
      }
      @keyframes typing {
        from { width: 0 }
        to { width: 100% }
      }
      @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: #000 }
      }
    </style>
  `,
  文字渐入: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div class="fade-in-text">这是一个渐入效果的文字动画</div>
    </div>
    <style>
      .fade-in-text {
        opacity: 0;
        animation: fadeIn 1s ease-in forwards;
        font-size: 18px;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    </style>
  `,
  脉冲动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div class="pulse"></div>
    </div>
    <style>
      .pulse {
        width: 100px;
        height: 100px;
        background-color: #3498db;
        border-radius: 50%;
        animation: pulse 2s infinite;
      }
      @keyframes pulse {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          transform: scale(1.05);
          opacity: 0.8;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
    </style>
  `,
  弹跳动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div class="bounce">
        <h3>弹跳</h3>
      </div>
    </div>
    <style>
      .bounce {
        animation: bounce 2s infinite;
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
      }
    </style>
  `,
  摇摆动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div class="wobble">
        <h3>摇摆</h3>
      </div>
    </div>
    <style>
      .wobble {
        animation: wobble 2s infinite;
      }
      @keyframes wobble {
        0% {
          transform: translateX(0%);
        }
        15% {
          transform: translateX(-25%) rotate(-5deg);
        }
        30% {
          transform: translateX(20%) rotate(3deg);
        }
        45% {
          transform: translateX(-15%) rotate(-3deg);
        }
        60% {
          transform: translateX(10%) rotate(2deg);
        }
        75% {
          transform: translateX(-5%) rotate(-1deg);
        }
        100% {
          transform: translateX(0%);
        }
      }
    </style>
  `,
  旋转动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div class="spin"></div>
    </div>
    <style>
      .spin {
        width: 100px;
        height: 100px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #3498db;
        border-radius: 50%;
        animation: spin 2s linear infinite;
      }
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    </style>
  `,
  闪烁动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div class="blink">
        <h3>闪烁</h3>
      </div>
    </div>
    <style>
      .blink {
        animation: blink 1s step-end infinite;
      }
      @keyframes blink {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
      }
    </style>
  `,
  滑动动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px; overflow: hidden;">
      <div class="slide-in">
        <h3>滑动进入</h3>
      </div>
    </div>
    <style>
      .slide-in {
        animation: slideIn 1s ease-out forwards;
      }
      @keyframes slideIn {
        from {
          transform: translateX(-100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    </style>
  `,
  缩放动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div class="zoom-in">
        <h3>缩放进入</h3>
      </div>
    </div>
    <style>
      .zoom-in {
        animation: zoomIn 1s ease-out forwards;
      }
      @keyframes zoomIn {
        from {
          transform: scale(0);
          opacity: 0;
        }
        to {
          transform: scale(1);
          opacity: 1;
        }
      }
    </style>
  `,
  抖动动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div class="shake">
        <h3>抖动</h3>
      </div>
    </div>
    <style>
      .shake {
        animation: shake 1s cubic-bezier(.36,.07,.19,.97) both;
      }
      @keyframes shake {
        10%, 90% {
          transform: translate3d(-1px, 0, 0);
        }
        20%, 80% {
          transform: translate3d(2px, 0, 0);
        }
        30%, 50%, 70% {
          transform: translate3d(-4px, 0, 0);
        }
        40%, 60% {
          transform: translate3d(4px, 0, 0);
        }
      }
    </style>
  `,
  淡入淡出动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div class="fade-in-out">
        <h3>淡入淡出</h3>
      </div>
    </div>
    <style>
      .fade-in-out {
        animation: fadeInOut 3s ease-in-out infinite;
      }
      @keyframes fadeInOut {
        0%, 100% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
      }
    </style>
  `,
  倾斜变换: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div class="skew-transform"></div>
    </div>
    <style>
      .skew-transform {
        width: 100px;
        height: 100px;
        background-color: #f39c12;
        transform: skew(15deg, 5deg);
        transition: transform 0.3s ease;
      }
      .skew-transform:hover {
        transform: skew(-15deg, -5deg);
      }
    </style>
  `,
  "3D 旋转": `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div class="rotate-3d"></div>
    </div>
    <style>
      .rotate-3d {
        width: 100px;
        height: 100px;
        background-color: #e74c3c;
        transform-style: preserve-3d;
        transform: rotateX(45deg) rotateY(45deg);
        transition: transform 0.5s ease;
      }
      .rotate-3d:hover {
        transform: rotateX(90deg) rotateY(90deg);
      }
    </style>
  `,
  卡片翻转效果: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h3>正面</h3>
          </div>
          <div class="flip-card-back">
            <h3>背面</h3>
          </div>
        </div>
      </div>
    </div>
    <style>
      .flip-card {
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
      }
      .flip-card-front {
        background-color: #3498db;
      }
      .flip-card-back {
        background-color: #2ecc71;
        transform: rotateY(180deg);
      }
    </style>
  `,
  模糊效果: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div class="blur-filter">
        <h3>模糊效果</h3>
      </div>
    </div>
    <style>
      .blur-filter {
        width: 200px;
        height: 150px;
        background-color: #3498db;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        filter: blur(5px);
        transition: filter 0.3s ease;
      }
      .blur-filter:hover {
        filter: blur(0);
      }
    </style>
  `,
  灰度效果: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div class="grayscale-filter">
        <h3>灰度效果</h3>
      </div>
    </div>
    <style>
      .grayscale-filter {
        width: 200px;
        height: 150px;
        background-color: #e74c3c;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        filter: grayscale(100%);
        transition: filter 0.3s ease;
      }
      .grayscale-filter:hover {
        filter: grayscale(0);
      }
    </style>
  `,
  多滤镜组合: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div class="multiple-filters">
        <h3>多滤镜组合</h3>
      </div>
    </div>
    <style>
      .multiple-filters {
        width: 200px;
        height: 150px;
        background-color: #3498db;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        filter: blur(2px) grayscale(50%) contrast(120%);
        transition: filter 0.3s ease;
      }
      .multiple-filters:hover {
        filter: blur(0) grayscale(0) contrast(100%);
      }
    </style>
  `,
  按钮悬停反馈: `
    <div style="display:flex;align-items:center;justify-content:center;height:400px;background:#f5f5f5;border-radius:8px;">
      <button class="button-hover-feedback">
        <span>立即开始</span>
      </button>
    </div>
    <style>
      .button-hover-feedback {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 18px;
        border: none;
        border-radius: 10px;
        color: #fff;
        background: linear-gradient(135deg, #5b8cff, #6a5cff);
        box-shadow: 0 6px 16px rgba(91, 140, 255, 0.25);
        cursor: pointer;
        transition: transform .24s ease, box-shadow .24s ease, filter .24s ease;
      }
      .button-hover-feedback:hover {
        transform: translateY(-2px) scale(1.02);
        box-shadow: 0 12px 24px rgba(91, 140, 255, 0.35);
        filter: brightness(1.05);
      }
      .button-hover-feedback:active {
        transform: translateY(0) scale(0.98);
      }
    </style>
  `,
  列表入场错峰: `
    <div style="display:flex;align-items:center;justify-content:center;height:400px;background:#f5f5f5;border-radius:8px;">
      <ul class="stagger-list">
        <li>页面加载性能优化</li>
        <li>动效分层治理</li>
        <li>统一组件规范</li>
        <li>数据看板改版</li>
        <li>品牌活动页上线</li>
      </ul>
    </div>
    <style>
      .stagger-list {
        list-style: none;
        width: 320px;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 10px;
      }
      .stagger-list li {
        background: #fff;
        border-radius: 10px;
        padding: 12px 14px;
        color: #2f3442;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
        opacity: 0;
        transform: translateY(12px);
        animation: listIn .5s cubic-bezier(.2,.8,.2,1) forwards;
      }
      .stagger-list li:nth-child(1) { animation-delay: 0.04s; }
      .stagger-list li:nth-child(2) { animation-delay: 0.1s; }
      .stagger-list li:nth-child(3) { animation-delay: 0.16s; }
      .stagger-list li:nth-child(4) { animation-delay: 0.22s; }
      .stagger-list li:nth-child(5) { animation-delay: 0.28s; }
      @keyframes listIn {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    </style>
  `,
};
