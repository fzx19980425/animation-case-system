// Canvas 动画演示数据
export const canvasDemos = {
  基本动画循环: `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: #f5f5f5;
        }
      </style>
    </head>
    <body>
      <canvas id="canvas" width="400" height="200" style="border: 1px solid #ddd;"></canvas>
      <script>
        // 基本动画循环
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        let time = 0;

        function animate() {
            // 清除画布
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // 计算位置和大小
            const y = 100 + Math.sin(time) * 30;
            const size = 80 + Math.sin(time * 1.5) * 20;
            
            // 计算颜色
            const hue = (time * 180) % 360;
            ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
            
            // 绘制内容
            ctx.fillRect(150 - size/2, y - size/2, size, size);
            
            // 更新时间
            time += 0.05;
            
            // 循环动画
            requestAnimationFrame(animate);
        }

        // 开始动画
        animate();
      </script>
    </body>
    </html>
  `,
  移动的矩形: `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: #f5f5f5;
        }
      </style>
    </head>
    <body>
      <canvas id="canvas" width="400" height="200" style="border: 1px solid #ddd;"></canvas>
      <script>
        // 移动的矩形
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        let x = 0;

        function animate() {
            // 清除画布
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // 绘制矩形
            ctx.fillStyle = '#e74c3c';
            ctx.fillRect(x, 50, 100, 100);
            
            // 更新位置
            x += 1;
            if (x > canvas.width) {
                x = -100;
            }
            
            // 循环动画
            requestAnimationFrame(animate);
        }

        // 开始动画
        animate();
      </script>
    </body>
    </html>
  `,
  旋转的圆形: `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: #f5f5f5;
        }
      </style>
    </head>
    <body>
      <canvas id="canvas" width="400" height="200" style="border: 1px solid #ddd;"></canvas>
      <script>
        // 旋转的圆形
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        let angle = 0;

        function animate() {
            // 清除画布
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // 保存当前状态
            ctx.save();
            
            // 移动到画布中心
            ctx.translate(200, 100);
            
            // 旋转
            ctx.rotate(angle);
            
            // 绘制圆形
            ctx.fillStyle = '#2ecc71';
            ctx.beginPath();
            ctx.arc(0, 0, 50, 0, Math.PI * 2);
            ctx.fill();
            
            // 绘制旋转的线条
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(50, 0);
            ctx.stroke();
            
            // 恢复状态
            ctx.restore();
            
            // 更新角度
            angle += 0.05;
            
            // 循环动画
            requestAnimationFrame(animate);
        }

        // 开始动画
        animate();
      </script>
    </body>
    </html>
  `,
  弹跳的球: `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: #f5f5f5;
        }
      </style>
    </head>
    <body>
      <canvas id="canvas" width="400" height="200" style="border: 1px solid #ddd;"></canvas>
      <script>
        // 弹跳的球
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        let y = 50;
        let velocity = 0;
        const gravity = 0.5;
        const bounce = 0.8;

        function animate() {
            // 清除画布
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // 绘制球
            ctx.fillStyle = '#f39c12';
            ctx.beginPath();
            ctx.arc(200, y, 30, 0, Math.PI * 2);
            ctx.fill();
            
            // 应用重力
            velocity += gravity;
            y += velocity;
            
            // 碰撞检测
            if (y > canvas.height - 30) {
                y = canvas.height - 30;
                velocity = -velocity * bounce;
            }
            
            // 循环动画
            requestAnimationFrame(animate);
        }

        // 开始动画
        animate();
      </script>
    </body>
    </html>
  `,

  粒子系统: `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: #f5f5f5;
        }
      </style>
    </head>
    <body>
      <canvas id="canvas" width="400" height="200" style="border: 1px solid #ddd;"></canvas>
      <script>
        // 粒子系统
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 2;
                this.vy = (Math.random() - 0.5) * 2;
                this.radius = Math.random() * 3 + 1;
                this.color = '#3498db';
            }
            
            update() {
                this.x += this.vx;
                this.y += this.vy;
                
                // 边界检查
                if (this.x < 0 || this.x > canvas.width) {
                    this.vx *= -1;
                }
                if (this.y < 0 || this.y > canvas.height) {
                    this.vy *= -1;
                }
            }
            
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const particles = [];
        for (let i = 0; i < 100; i++) {
            particles.push(new Particle());
        }

        function animate() {
            // 清除画布
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // 更新和绘制粒子
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            // 循环动画
            requestAnimationFrame(animate);
        }

        // 开始动画
        animate();
      </script>
    </body>
    </html>
  `,
  鼠标跟随效果: `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: #f5f5f5;
        }
      </style>
    </head>
    <body>
      <canvas id="canvas" width="400" height="200" style="border: 1px solid #ddd;"></canvas>
      <script>
        // 鼠标跟随效果
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        const mouse = { x: 200, y: 100 };

        // 粒子数组
        const particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: 0,
                vy: 0,
                radius: Math.random() * 2 + 1
            });
        }

        // 鼠标移动事件
        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });

        function animate() {
            // 清除画布
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // 更新和绘制粒子
            particles.forEach(particle => {
                // 计算到鼠标的距离
                const dx = mouse.x - particle.x;
                const dy = mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                // 应用力
                if (distance < 100) {
                    const force = (100 - distance) / 100;
                    particle.vx += dx * force * 0.01;
                    particle.vy += dy * force * 0.01;
                }
                
                // 应用阻尼
                particle.vx *= 0.95;
                particle.vy *= 0.95;
                
                // 更新位置
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // 边界检查
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;
                
                // 绘制粒子
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = '#e74c3c';
                ctx.fill();
            });
            
            // 循环动画
            requestAnimationFrame(animate);
        }

        // 开始动画
        animate();
      </script>
    </body>
    </html>
  `,
  波形动画: `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: #f5f5f5;
        }
      </style>
    </head>
    <body>
      <canvas id="canvas" width="400" height="200" style="border: 1px solid #ddd;"></canvas>
      <script>
        // 波形动画
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        let time = 0;

        function animate() {
            // 清除画布
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // 绘制波形
            ctx.beginPath();
            ctx.moveTo(0, canvas.height / 2);
            
            for (let x = 0; x < canvas.width; x++) {
                const y = canvas.height / 2 + Math.sin(x * 0.01 + time) * 50 + Math.sin(x * 0.02 + time) * 30;
                ctx.lineTo(x, y);
            }
            
            ctx.strokeStyle = '#3498db';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // 更新时间
            time += 0.05;
            
            // 循环动画
            requestAnimationFrame(animate);
        }

        // 开始动画
        animate();
      </script>
    </body>
    </html>
  `,
  碰撞检测: `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: #f5f5f5;
        }
      </style>
    </head>
    <body>
      <canvas id="canvas" width="400" height="200" style="border: 1px solid #ddd;"></canvas>
      <script>
        // 碰撞检测
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        class Ball {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 4;
                this.vy = (Math.random() - 0.5) * 4;
                this.radius = Math.random() * 10 + 10;
                this.color = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';
            }
            
            update() {
                this.x += this.vx;
                this.y += this.vy;
                
                // 边界碰撞
                if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                    this.vx *= -1;
                }
                if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                    this.vy *= -1;
                }
            }
            
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
            
            checkCollision(other) {
                const dx = this.x - other.x;
                const dy = this.y - other.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.radius + other.radius) {
                    // 碰撞处理
                    const angle = Math.atan2(dy, dx);
                    const v1 = { x: this.vx, y: this.vy };
                    const v2 = { x: other.vx, y: other.vy };
                    
                    this.vx = v2.x * Math.cos(angle) + v2.y * Math.sin(angle);
                    this.vy = v2.x * Math.sin(angle) - v2.y * Math.cos(angle);
                    other.vx = v1.x * Math.cos(angle) + v1.y * Math.sin(angle);
                    other.vy = v1.x * Math.sin(angle) - v1.y * Math.cos(angle);
                    
                    // 分离重叠的球
                    const overlap = this.radius + other.radius - distance;
                    const separationX = (overlap / 2) * Math.cos(angle);
                    const separationY = (overlap / 2) * Math.sin(angle);
                    this.x += separationX;
                    this.y += separationY;
                    other.x -= separationX;
                    other.y -= separationY;
                }
            }
        }

        const balls = [];
        for (let i = 0; i < 10; i++) {
            balls.push(new Ball());
        }

        function animate() {
            // 清除画布
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // 更新和绘制球
            balls.forEach(ball => {
                ball.update();
                ball.draw();
            });
            
            // 检查碰撞
            for (let i = 0; i < balls.length; i++) {
                for (let j = i + 1; j < balls.length; j++) {
                    balls[i].checkCollision(balls[j]);
                }
            }
            
            // 循环动画
            requestAnimationFrame(animate);
        }

        // 开始动画
        animate();
      </script>
    </body>
    </html>
  `,
  "3D 效果": `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: #f5f5f5;
        }
      </style>
    </head>
    <body>
      <canvas id="canvas" width="400" height="200" style="border: 1px solid #ddd;"></canvas>
      <script>
        // 3D 效果
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        class Cube {
            constructor() {
                this.vertices = [
                    { x: -50, y: -50, z: -50 },
                    { x: 50, y: -50, z: -50 },
                    { x: 50, y: 50, z: -50 },
                    { x: -50, y: 50, z: -50 },
                    { x: -50, y: -50, z: 50 },
                    { x: 50, y: -50, z: 50 },
                    { x: 50, y: 50, z: 50 },
                    { x: -50, y: 50, z: 50 }
                ];
                this.edges = [
                    [0, 1], [1, 2], [2, 3], [3, 0],
                    [4, 5], [5, 6], [6, 7], [7, 4],
                    [0, 4], [1, 5], [2, 6], [3, 7]
                ];
                this.rotationX = 0;
                this.rotationY = 0;
            }
            
            rotate() {
                this.rotationX += 0.01;
                this.rotationY += 0.01;
                
                const cosX = Math.cos(this.rotationX);
                const sinX = Math.sin(this.rotationX);
                const cosY = Math.cos(this.rotationY);
                const sinY = Math.sin(this.rotationY);
                
                this.vertices.forEach(vertex => {
                    // 绕 X 轴旋转
                    const y = vertex.y;
                    vertex.y = y * cosX - vertex.z * sinX;
                    vertex.z = y * sinX + vertex.z * cosX;
                    
                    // 绕 Y 轴旋转
                    const x = vertex.x;
                    vertex.x = x * cosY - vertex.z * sinY;
                    vertex.z = x * sinY + vertex.z * cosY;
                });
            }
            
            draw() {
                // 投影到 2D
                const projectedVertices = this.vertices.map(vertex => {
                    const scale = 300 / (300 + vertex.z);
                    return {
                        x: canvas.width / 2 + vertex.x * scale,
                        y: canvas.height / 2 + vertex.y * scale
                    };
                });
                
                // 绘制边
                ctx.strokeStyle = '#3498db';
                ctx.lineWidth = 2;
                
                this.edges.forEach(edge => {
                    const v1 = projectedVertices[edge[0]];
                    const v2 = projectedVertices[edge[1]];
                    ctx.beginPath();
                    ctx.moveTo(v1.x, v1.y);
                    ctx.lineTo(v2.x, v2.y);
                    ctx.stroke();
                });
            }
        }

        const cube = new Cube();

        function animate() {
            // 清除画布
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // 旋转和绘制立方体
            cube.rotate();
            cube.draw();
            
            // 循环动画
            requestAnimationFrame(animate);
        }

        // 开始动画
        animate();
      </script>
    </body>
    </html>
  `,
  流体拖尾光标: `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; display: flex; align-items: center; justify-content: center; height: 100vh; background: #f5f5f5; }
      </style>
    </head>
    <body>
      <canvas id="canvas" width="400" height="200" style="border: 1px solid #ddd; background:#fff;"></canvas>
      <script>
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const pointer = { x: canvas.width / 2, y: canvas.height / 2 };
        const trail = [];
        const TRAIL_SIZE = 36;
        canvas.addEventListener('mousemove', (e) => {
          const rect = canvas.getBoundingClientRect();
          pointer.x = e.clientX - rect.left;
          pointer.y = e.clientY - rect.top;
        });
        function loop() {
          trail.unshift({ x: pointer.x, y: pointer.y, life: 1 });
          if (trail.length > TRAIL_SIZE) trail.pop();
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          trail.forEach((p, i) => {
            const ratio = 1 - i / TRAIL_SIZE;
            const radius = 24 * ratio;
            const alpha = 0.16 * ratio;
            ctx.beginPath();
            ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(79,124,255,' + alpha.toFixed(3) + ')';
            ctx.fill();
          });
          ctx.beginPath();
          ctx.arc(pointer.x, pointer.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = '#355dff';
          ctx.fill();
          requestAnimationFrame(loop);
        }
        loop();
      </script>
    </body>
    </html>
  `,
  动态柱状图轮播: `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; display: flex; align-items: center; justify-content: center; height: 100vh; background: #f5f5f5; }
      </style>
    </head>
    <body>
      <canvas id="canvas" width="400" height="200" style="border: 1px solid #ddd; background:#fff;"></canvas>
      <script>
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const bars = Array.from({ length: 12 }, () => 30 + Math.random() * 100);
        function drawGrid() {
          ctx.strokeStyle = '#eef2f8';
          for (let y = 20; y <= 180; y += 40) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
          }
        }
        function tick() {
          for (let i = 0; i < bars.length; i++) {
            const target = 30 + Math.random() * 120;
            bars[i] += (target - bars[i]) * 0.08;
          }
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          drawGrid();
          const gap = 10;
          const width = (canvas.width - gap * (bars.length + 1)) / bars.length;
          bars.forEach((value, i) => {
            const x = gap + i * (width + gap);
            const h = value;
            const y = canvas.height - h - 12;
            ctx.fillStyle = 'rgba(32, 201, 151, 0.85)';
            ctx.fillRect(x, y, width, h);
          });
          requestAnimationFrame(tick);
        }
        tick();
      </script>
    </body>
    </html>
  `,
};
