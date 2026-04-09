// JavaScript 动画数据
export const javascriptAnimations = [
  {
    id: 8,
    title: "JavaScript 基础动画",
    category: "javascript",
    cover: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=JavaScript%20animation%20examples%20with%20DOM%20manipulation&image_size=square_hd",
    description: "使用 JavaScript 实现的基础动画效果",
    effects: [
      {
        name: "基本动画循环",
        code: `// 使用 requestAnimationFrame 实现动画循环
function animate() {
    // 动画逻辑
    requestAnimationFrame(animate);
}

// 开始动画
animate();`
      },
      {
        name: "元素移动",
        code: `// 元素移动动画
const element = document.getElementById('box');
let position = 0;

function moveElement() {
    position += 1;
    element.style.left = position + 'px';
    
    if (position < 300) {
        requestAnimationFrame(moveElement);
    }
}

// 开始移动
moveElement();`
      },
      {
        name: "淡入淡出效果",
        code: `// 淡入效果
function fadeIn(element, duration) {
    let opacity = 0;
    const startTime = performance.now();
    
    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        opacity = elapsed / duration;
        
        element.style.opacity = opacity;
        
        if (opacity < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
}

// 淡出效果
function fadeOut(element, duration) {
    let opacity = 1;
    const startTime = performance.now();
    
    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        opacity = 1 - (elapsed / duration);
        
        element.style.opacity = opacity;
        
        if (opacity > 0) {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
}`
      },
      {
        name: "缩放动画",
        code: "// 缩放动画\nfunction scaleElement(element, from, to, duration) {\n    const startTime = performance.now();\n    \n    function animate(currentTime) {\n        const elapsed = currentTime - startTime;\n        const progress = elapsed / duration;\n        const currentScale = from + (to - from) * progress;\n        \n        element.style.transform = 'scale(' + currentScale + ')';\n        \n        if (progress < 1) {\n            requestAnimationFrame(animate);\n        }\n    }\n    \n    requestAnimationFrame(animate);\n}"
      },
      {
        name: "旋转动画",
        code: "// 旋转动画\nfunction rotateElement(element, duration) {\n    const startTime = performance.now();\n    \n    function animate(currentTime) {\n        const elapsed = currentTime - startTime;\n        const rotation = (elapsed / duration) * 360;\n        \n        element.style.transform = 'rotate(' + rotation + 'deg)';\n        \n        requestAnimationFrame(animate);\n    }\n    \n    requestAnimationFrame(animate);\n}"
      },
      {
        name: "颜色渐变",
        code: "// 颜色渐变动画\nfunction colorTransition(element, startColor, endColor, duration) {\n    // 解析颜色\n    function parseColor(color) {\n        const hex = color.replace('#', '');\n        return {\n            r: parseInt(hex.substring(0, 2), 16),\n            g: parseInt(hex.substring(2, 4), 16),\n            b: parseInt(hex.substring(4, 6), 16)\n        };\n    }\n    \n    const start = parseColor(startColor);\n    const end = parseColor(endColor);\n    const startTime = performance.now();\n    \n    function animate(currentTime) {\n        const elapsed = currentTime - startTime;\n        const progress = Math.min(elapsed / duration, 1);\n        \n        const r = Math.round(start.r + (end.r - start.r) * progress);\n        const g = Math.round(start.g + (end.g - start.g) * progress);\n        const b = Math.round(start.b + (end.b - start.b) * progress);\n        \n        element.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';\n        \n        if (progress < 1) {\n            requestAnimationFrame(animate);\n        }\n    }\n    \n    requestAnimationFrame(animate);\n}"
      }
    ]
  },
  {
    id: 9,
    title: "JavaScript 高级动画",
    category: "javascript",
    cover: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Advanced%20JavaScript%20animation%20with%20complex%20effects&image_size=square_hd",
    description: "JavaScript 高级动画效果",
    effects: [
      {
        name: "缓动函数",
        code: `// 缓动函数
const easing = {
    // 线性
    linear: t => t,
    // 缓入
    easeInQuad: t => t * t,
    easeInCubic: t => t * t * t,
    // 缓出
    easeOutQuad: t => t * (2 - t),
    easeOutCubic: t => (--t) * t * t + 1,
    // 缓入缓出
    easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
};

// 使用缓动函数的动画
function animateWithEasing(element, duration, easingFn) {
    const startTime = performance.now();
    const startPosition = 0;
    const endPosition = 300;
    
    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easingFn(progress);
        const currentPosition = startPosition + (endPosition - startPosition) * easedProgress;
        
        element.style.left = currentPosition + 'px';
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
}`
      },
      {
        name: "弹簧动画",
        code: `// 弹簧动画
function springAnimation(element, targetPosition, duration) {
    let currentPosition = 0;
    let velocity = 0;
    const stiffness = 0.1;
    const damping = 0.8;
    
    function animate() {
        const distance = targetPosition - currentPosition;
        const acceleration = distance * stiffness;
        velocity = (velocity + acceleration) * damping;
        currentPosition += velocity;
        
        element.style.left = currentPosition + 'px';
        
        if (Math.abs(velocity) > 0.1 || Math.abs(distance) > 0.1) {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
}`
      },
      {
        name: "物理动画",
        code: `// 物理动画 - 重力效果
function gravityAnimation(element) {
    let position = 0;
    let velocity = 0;
    const gravity = 0.5;
    const bounce = 0.8;
    const ground = 300;
    
    function animate() {
        velocity += gravity;
        position += velocity;
        
        if (position > ground) {
            position = ground;
            velocity = -velocity * bounce;
        }
        
        element.style.top = position + 'px';
        
        requestAnimationFrame(animate);
    }
    
    requestAnimationFrame(animate);
}`
      },
      {
        name: "路径动画",
        code: `// 路径动画
function pathAnimation(element, path, duration) {
    const startTime = performance.now();
    
    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // 简单的贝塞尔曲线路径
        const x = 100 + (300 - 100) * progress;
        const y = 100 + Math.sin(progress * Math.PI * 2) * 50;
        
        element.style.left = x + 'px';
        element.style.top = y + 'px';
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
}`
      },
      {
        name: "粒子系统",
        code: `// 粒子系统
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 10;
        this.vy = (Math.random() - 0.5) * 10;
        this.life = 1;
        this.lifeSpeed = Math.random() * 0.02 + 0.01;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.lifeSpeed;
        this.vy += 0.2; // 重力
    }
    
    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.life;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#3498db';
        ctx.fill();
        ctx.restore();
    }
}

class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
    }
    
    addParticles(x, y, count) {
        for (let i = 0; i < count; i++) {
            this.particles.push(new Particle(x, y));
        }
    }
    
    update() {
        this.particles = this.particles.filter(particle => {
            particle.update();
            return particle.life > 0;
        });
    }
    
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.particles.forEach(particle => particle.draw(this.ctx));
    }
    
    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// 使用示例
const canvas = document.getElementById('canvas');
const particleSystem = new ParticleSystem(canvas);
particleSystem.addParticles(200, 100, 50);
particleSystem.animate();`
      }
    ]
  }
];
