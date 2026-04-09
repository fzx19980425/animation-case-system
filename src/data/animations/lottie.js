// Lottie 动画数据
export const lottieAnimations = [
  {
    id: 19,
    title: "Lottie 基础动画",
    category: "lottie",
    cover:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Lottie%20animation%20examples%20with%20After%20Effects%20animations&image_size=square_hd",
    description: "Lottie 基础动画效果",
    effects: [
      {
        name: "基本加载动画",
        code: `// 基本加载动画
import lottie from 'lottie-web';

// 内联加载动画
const loadingAnimation = {
  "v": "5.7.6",
  "fr": 25,
  "ip": 0,
  "op": 50,
  "w": 100,
  "h": 100,
  "nm": "Loading",
  "ddd": 0,
  "assets": [],
  "layers": [{
    "ddd": 0,
    "ind": 1,
    "ty": 4,
    "nm": "Circle",
    "sr": 1,
    "ks": {
      "o": {"a": 0, "k": 100, "ix": 11},
      "r": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0]}, {"t": 50, "s": [360]}], "ix": 10},
      "p": {"a": 0, "k": [50, 50, 0], "ix": 2},
      "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
      "s": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [100, 100, 100]}, {"t": 25, "s": [150, 150, 100]}, {"t": 50, "s": [100, 100, 100]}], "ix": 6}
    },
    "ao": 0,
    "shapes": [{
      "ty": "gr",
      "it": [
        {"d": 1, "ty": "el", "s": {"a": 0, "k": [40, 40], "ix": 2}, "p": {"a": 0, "k": [0, 0], "ix": 3}, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false},
        {"ty": "st", "c": {"a": 0, "k": [0.2, 0.6, 0.9, 1], "ix": 3}, "o": {"a": 0, "k": 100, "ix": 4}, "w": {"a": 0, "k": 6, "ix": 5}, "lc": 2, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false},
        {"ty": "tr", "p": {"a": 0, "k": [0, 0], "ix": 2}, "a": {"a": 0, "k": [0, 0], "ix": 1}, "s": {"a": 0, "k": [100, 100], "ix": 3}, "r": {"a": 0, "k": 0, "ix": 6}, "o": {"a": 0, "k": 100, "ix": 7}, "sk": {"a": 0, "k": 0, "ix": 4}, "sa": {"a": 0, "k": 0, "ix": 5}, "nm": "Transform"}
      ],
      "nm": "Ellipse 1",
      "np": 3,
      "cix": 2,
      "bm": 0,
      "ix": 1,
      "mn": "ADBE Vector Group",
      "hd": false
    }],
    "ip": 0,
    "op": 50,
    "st": 0,
    "bm": 0
  }],
  "markers": []
};

// 初始化 Lottie 动画
const animation = lottie.loadAnimation({
    container: document.getElementById('lottie-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: loadingAnimation
});

// 控制动画
function playAnimation() {
    animation.play();
}

function pauseAnimation() {
    animation.pause();
}

function stopAnimation() {
    animation.stop();
}

function setSpeed(speed) {
    animation.setSpeed(speed);
}`,
      },
      {
        name: "按钮交互动画",
        code: `// 按钮交互动画
import lottie from 'lottie-web';

// 初始化 Lottie 动画
const animation = lottie.loadAnimation({
    container: document.getElementById('button-animation'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets3.lottiefiles.com/packages/lf20_3VJqB2.json' // 按钮动画 JSON
});

// 按钮点击事件
const button = document.getElementById('lottie-button');
button.addEventListener('click', () => {
    // 播放动画
    animation.playSegments([0, 30], true);
    
    // 动画完成后重置
    animation.addEventListener('complete', () => {
        animation.stop();
    });
});`,
      },
      {
        name: "页面过渡动画",
        code: `// 页面过渡动画
import lottie from 'lottie-web';

// 初始化 Lottie 动画
const transitionAnimation = lottie.loadAnimation({
    container: document.getElementById('transition-animation'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets7.lottiefiles.com/packages/lf20_UxjDgD.json' // 过渡动画 JSON
});

// 触发过渡动画
function navigateToPage(page) {
    // 播放过渡动画
    transitionAnimation.play();
    
    // 动画完成后导航
    transitionAnimation.addEventListener('complete', () => {
        // 模拟页面导航
        console.log('Navigating to:', page);
        transitionAnimation.stop();
    });
}`,
      },
      {
        name: "数据可视化动画",
        code: `// 数据可视化动画
import lottie from 'lottie-web';

// 初始化 Lottie 动画
const dataAnimation = lottie.loadAnimation({
    container: document.getElementById('data-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets4.lottiefiles.com/packages/lf20_8d33F3.json' // 数据可视化动画 JSON
});

// 控制动画速度
function updateAnimationSpeed(speed) {
    dataAnimation.setSpeed(speed);
}`,
      },
      {
        name: "图标动画",
        code: `// 图标动画
import lottie from 'lottie-web';

// 初始化 Lottie 动画
const iconAnimation = lottie.loadAnimation({
    container: document.getElementById('icon-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets2.lottiefiles.com/packages/lf20_5vN2Z4.json' // 图标动画 JSON
});

// 暂停/播放动画
function toggleAnimation() {
    if (iconAnimation.isPaused()) {
        iconAnimation.play();
    } else {
        iconAnimation.pause();
    }
}`,
      },
    ],
  },
  {
    id: 20,
    title: "Lottie 高级动画",
    category: "lottie",
    cover:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Advanced%20Lottie%20animation%20with%20interactive%20effects&image_size=square_hd",
    description: "Lottie 高级动画效果",
    effects: [
      {
        name: "交互式角色动画",
        code: `// 交互式角色动画
import lottie from 'lottie-web';

// 初始化 Lottie 动画
const characterAnimation = lottie.loadAnimation({
    container: document.getElementById('character-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets5.lottiefiles.com/packages/lf20_xZ6lGx.json' // 角色动画 JSON
});

// 鼠标跟随效果
document.addEventListener('mousemove', (e) => {
    const rect = document.getElementById('character-animation').getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    // 计算旋转角度
    const rotationX = (deltaY / rect.height) * 20;
    const rotationY = (deltaX / rect.width) * 20;
    
    // 应用变换
    document.getElementById('character-animation').style.transform = \`perspective(1000px) rotateX(\${-rotationX}deg) rotateY(\${rotationY}deg)\`;
});`,
      },
      {
        name: "动态数据驱动动画",
        code: `// 动态数据驱动动画
import lottie from 'lottie-web';

// 初始化 Lottie 动画
const dataDrivenAnimation = lottie.loadAnimation({
    container: document.getElementById('data-driven-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets9.lottiefiles.com/packages/lf20_XZ3pkn.json' // 数据驱动动画 JSON
});

// 更新动画数据
function updateAnimationData(value) {
    // 查找需要更新的属性
    const animator = dataDrivenAnimation.getAnimations()[0];
    if (animator) {
        // 更新动画中的特定属性
        // 这里需要根据具体的动画 JSON 结构来确定要更新的属性
        animator.setValue('YourPropertyPath', value);
    }
}

// 模拟数据变化
setInterval(() => {
    const randomValue = Math.random() * 100;
    updateAnimationData(randomValue);
}, 2000);`,
      },
      {
        name: "多动画序列",
        code: `// 多动画序列
import lottie from 'lottie-web';

// 初始化 Lottie 动画
const sequenceAnimation = lottie.loadAnimation({
    container: document.getElementById('sequence-animation'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets9.lottiefiles.com/packages/lf20_XZ3pkn.json' // 序列动画 JSON
});

// 播放动画序列
function playSequence() {
    // 播放入场动画
    sequenceAnimation.playSegments([0, 60], true);
    
    // 入场动画完成后播放主体动画
    sequenceAnimation.addEventListener('complete', () => {
        sequenceAnimation.playSegments([60, 120], true);
        
        // 主体动画完成后播放退场动画
        sequenceAnimation.addEventListener('complete', () => {
            sequenceAnimation.playSegments([120, 180], true);
        }, { once: true });
    }, { once: true });
}`,
      },
      {
        name: "响应式动画",
        code: `// 响应式动画
import lottie from 'lottie-web';

// 初始化 Lottie 动画
const responsiveAnimation = lottie.loadAnimation({
    container: document.getElementById('responsive-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets9.lottiefiles.com/packages/lf20_XZ3pkn.json' // 响应式动画 JSON
});

// 响应窗口大小变化
function resizeAnimation() {
    const container = document.getElementById('responsive-animation');
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    // 调整动画大小
    responsiveAnimation.resize();
}

// 监听窗口大小变化
window.addEventListener('resize', resizeAnimation);

// 初始调整
resizeAnimation();`,
      },
      {
        name: "自定义控制动画",
        code: `// 自定义控制动画
import lottie from 'lottie-web';

// 初始化 Lottie 动画
const customAnimation = lottie.loadAnimation({
    container: document.getElementById('custom-animation'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets9.lottiefiles.com/packages/lf20_XZ3pkn.json' // 自定义控制动画 JSON
});

// 控制动画进度
function setAnimationProgress(progress) {
    const totalFrames = customAnimation.totalFrames;
    const frame = progress * totalFrames;
    customAnimation.goToAndStop(frame, true);
}

// 播放特定片段
function playSpecificSegment(startFrame, endFrame) {
    customAnimation.playSegments([startFrame, endFrame], true);
}

// 监听动画事件
customAnimation.addEventListener('enterFrame', () => {
    console.log('Current frame:', customAnimation.currentFrame);
});

customAnimation.addEventListener('complete', () => {
    console.log('Animation completed');
});`,
      },
    ],
  },
];
