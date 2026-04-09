// 高级动画数据
export const advancedAnimations = [
  {
    id: 15,
    title: "高级动画示例",
    category: "advanced",
    cover: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Advanced%20animation%20examples%20with%20complex%20effects&image_size=square_hd",
    description: "高级动画效果示例",
    effects: [
      {
        name: "粒子系统",
        code: `class Particle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2
        };
        this.alpha = 1;
    }
    
    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }
    
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= 0.01;
    }
}

class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.animate = this.animate.bind(this);
    }
    
    createParticles(x, y, count = 50) {
        for (let i = 0; i < count; i++) {
            const radius = Math.random() * 3 + 1;
            const color = '#3498db';
            this.particles.push(new Particle(x, y, radius, color));
        }
    }
    
    animate() {
        requestAnimationFrame(this.animate);
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles = this.particles.filter(particle => {
            particle.update();
            particle.draw(this.ctx);
            return particle.alpha > 0;
        });
    }
    
    start() {
        this.animate();
    }
}

// 使用示例
const canvas = document.getElementById('canvas');
const particleSystem = new ParticleSystem(canvas);
canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    particleSystem.createParticles(x, y);
});
particleSystem.start();`
      },
      {
        name: "物理引擎",
        code: `class PhysicsObject {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.velocity = { x: 0, y: 0 };
        this.acceleration = { x: 0, y: 0.5 };
        this.friction = 0.98;
    }
    
    update() {
        // 应用加速度
        this.velocity.x += this.acceleration.x;
        this.velocity.y += this.acceleration.y;
        
        // 应用摩擦力
        this.velocity.x *= this.friction;
        this.velocity.y *= this.friction;
        
        // 更新位置
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        
        // 边界碰撞
        if (this.x < 0 || this.x + this.width > canvas.width) {
            this.velocity.x *= -1;
        }
        if (this.y + this.height > canvas.height) {
            this.y = canvas.height - this.height;
            this.velocity.y *= -0.8;
        }
    }
    
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

class PhysicsEngine {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.objects = [];
        this.animate = this.animate.bind(this);
    }
    
    addObject(object) {
        this.objects.push(object);
    }
    
    animate() {
        requestAnimationFrame(this.animate);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.objects.forEach(object => {
            object.update();
            object.draw(this.ctx);
        });
    }
    
    start() {
        this.animate();
    }
}

// 使用示例
const canvas = document.getElementById('canvas');
const engine = new PhysicsEngine(canvas);

// 添加物体
for (let i = 0; i < 10; i++) {
    const object = new PhysicsObject(
        Math.random() * (canvas.width - 50),
        Math.random() * (canvas.height - 50),
        50,
        50,
        '#3498db'
    );
    object.velocity.x = (Math.random() - 0.5) * 10;
    engine.addObject(object);
}

engine.start();`
      },
      {
        name: "WebGL 动画",
        code: `// 顶点着色器
const vertexShaderSource = \`
    attribute vec4 a_position;
    uniform float u_time;
    
    void main() {
        vec4 pos = a_position;
        pos.y += sin(pos.x + u_time) * 0.1;
        gl_Position = pos;
    }
\`;

// 片段着色器
const fragmentShaderSource = \`
    precision mediump float;
    uniform float u_time;
    
    void main() {
        gl_FragColor = vec4(sin(u_time), cos(u_time), 0.5, 1.0);
    }
\`;

// 初始化 WebGL
const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl');

// 创建着色器
function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}

// 创建程序
function createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(program));
        return null;
    }
    return program;
}

// 创建着色器和程序
const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
const program = createProgram(gl, vertexShader, fragmentShader);

// 获取属性和 uniform 位置
const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
const timeUniformLocation = gl.getUniformLocation(program, "u_time");

// 创建缓冲区
const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

// 设置顶点数据
const positions = [
    -1.0, -1.0,
     1.0, -1.0,
    -1.0,  1.0,
     1.0,  1.0,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

// 动画循环
function animate(time) {
    requestAnimationFrame(animate);
    
    // 清除画布
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    // 使用程序
    gl.useProgram(program);
    
    // 设置 uniform
    gl.uniform1f(timeUniformLocation, time * 0.001);
    
    // 启用属性
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
    
    // 绘制
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

// 开始动画
requestAnimationFrame(animate);`
      }
    ]
  },
  {
    id: 21,
    title: "高级交互动画",
    category: "advanced",
    cover: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Advanced%20interactive%20animation%20effects&image_size=square_hd",
    description: "高级交互动画效果",
    effects: [
      {
        name: "鼠标跟随效果",
        code: `class MouseFollower {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        this.init();
    }
    
    init() {
        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
        });
        
        // 创建初始粒子
        for (let i = 0; i < 50; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: 0,
                vy: 0
            });
        }
    }
    
    update() {
        this.particles.forEach(particle => {
            // 计算到鼠标的距离
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // 根据距离计算速度
            if (distance < 100) {
                const angle = Math.atan2(dy, dx);
                const force = (100 - distance) / 100;
                particle.vx -= Math.cos(angle) * force * 0.2;
                particle.vy -= Math.sin(angle) * force * 0.2;
            }
            
            // 更新位置
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // 添加阻尼
            particle.vx *= 0.95;
            particle.vy *= 0.95;
            
            // 边界检查
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
        });
    }
    
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // 绘制粒子
        this.particles.forEach(particle => {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
            this.ctx.fillStyle = '#00ff00';
            this.ctx.fill();
        });
        
        // 绘制连线
        this.ctx.beginPath();
        this.particles.forEach((particle, i) => {
            if (i === 0) {
                this.ctx.moveTo(particle.x, particle.y);
            } else {
                this.ctx.lineTo(particle.x, particle.y);
            }
        });
        this.ctx.strokeStyle = 'rgba(0, 255, 0, 0.1)';
        this.ctx.stroke();
    }
    
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.update();
        this.draw();
    }
    
    start() {
        this.animate();
    }
}

// 使用示例
const canvas = document.getElementById('canvas');
const follower = new MouseFollower(canvas);
follower.start();`
      },
      {
        name: "手势识别",
        code: `class GestureRecognizer {
    constructor(element) {
        this.element = element;
        this.touchStart = { x: 0, y: 0 };
        this.touchEnd = { x: 0, y: 0 };
        this.init();
    }
    
    init() {
        this.element.addEventListener('touchstart', (e) => {
            this.touchStart.x = e.touches[0].clientX;
            this.touchStart.y = e.touches[0].clientY;
        });
        
        this.element.addEventListener('touchend', (e) => {
            this.touchEnd.x = e.changedTouches[0].clientX;
            this.touchEnd.y = e.changedTouches[0].clientY;
            this.recognizeGesture();
        });
    }
    
    recognizeGesture() {
        const dx = this.touchEnd.x - this.touchStart.x;
        const dy = this.touchEnd.y - this.touchStart.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 50) return; // 忽略小幅度移动
        
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        
        if (angle > -45 && angle < 45) {
            console.log('向右滑动');
            this.element.style.transform = 'translateX(100px)';
        } else if (angle > 135 || angle < -135) {
            console.log('向左滑动');
            this.element.style.transform = 'translateX(-100px)';
        } else if (angle > 45 && angle < 135) {
            console.log('向下滑动');
            this.element.style.transform = 'translateY(100px)';
        } else {
            console.log('向上滑动');
            this.element.style.transform = 'translateY(-100px)';
        }
        
        // 重置变换
        setTimeout(() => {
            this.element.style.transform = '';
        }, 500);
    }
}

// 使用示例
const element = document.getElementById('gesture-element');
const recognizer = new GestureRecognizer(element);`
      },
      {
        name: "语音控制",
        code: `class VoiceController {
    constructor(element) {
        this.element = element;
        this.init();
    }
    
    init() {
        if ('webkitSpeechRecognition' in window) {
            this.recognition = new webkitSpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'zh-CN';
            
            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                this.processCommand(transcript);
            };
            
            this.recognition.onerror = (event) => {
                console.error('语音识别错误:', event.error);
            };
        } else {
            console.error('浏览器不支持语音识别');
        }
    }
    
    start() {
        if (this.recognition) {
            this.recognition.start();
        }
    }
    
    processCommand(command) {
        console.log('识别到命令:', command);
        
        if (command.includes('向上')) {
            this.element.style.transform = 'translateY(-100px)';
        } else if (command.includes('向下')) {
            this.element.style.transform = 'translateY(100px)';
        } else if (command.includes('向左')) {
            this.element.style.transform = 'translateX(-100px)';
        } else if (command.includes('向右')) {
            this.element.style.transform = 'translateX(100px)';
        } else if (command.includes('放大')) {
            this.element.style.transform = 'scale(1.5)';
        } else if (command.includes('缩小')) {
            this.element.style.transform = 'scale(0.5)';
        }
        
        // 重置变换
        setTimeout(() => {
            this.element.style.transform = '';
        }, 500);
    }
}

// 使用示例
const element = document.getElementById('voice-element');
const controller = new VoiceController(element);

// 开始语音识别
document.getElementById('start-voice').addEventListener('click', () => {
    controller.start();
});`
      }
    ]
  }
];
