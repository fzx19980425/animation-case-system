// JavaScript 动画演示数据
export const javascriptDemos = {
  基本动画循环: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div id="box" style="width: 50px; height: 50px; background: #3498db;"></div>
    </div>
    <script>
      // 基本动画循环
      function animate() {
          const box = document.getElementById('box');
          const currentLeft = parseFloat(box.style.left) || 0;
          box.style.left = (currentLeft + 1) % 300 + 'px';
          requestAnimationFrame(animate);
      }
      // 开始动画
      animate();
    </script>
  `,
  元素移动: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div id="box" style="width: 50px; height: 50px; background: #e74c3c; position: relative;"></div>
    </div>
    <script>
      // 元素移动动画
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
      moveElement();
    </script>
  `,
  淡入淡出效果: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div id="box" style="width: 100px; height: 100px; background: #2ecc71; opacity: 0;"></div>
    </div>
    <script>
      // 淡入效果
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

      // 开始淡入
      fadeIn(document.getElementById('box'), 2000);
    </script>
  `,
  缩放动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div id="box" style="width: 50px; height: 50px; background: #f39c12;"></div>
    </div>
    <script>
      // 缩放动画
      function scaleElement(element, from, to, duration) {
          const startTime = performance.now();
          
          function animate(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = elapsed / duration;
              const currentScale = from + (to - from) * progress;
              
              element.style.transform = \`scale(\${currentScale})\`;
              
              if (progress < 1) {
                  requestAnimationFrame(animate);
              }
          }
          
          requestAnimationFrame(animate);
      }

      // 开始缩放
      scaleElement(document.getElementById('box'), 1, 2, 1000);
    </script>
  `,
  旋转动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div id="box" style="width: 50px; height: 50px; background: #9b59b6;"></div>
    </div>
    <script>
      // 旋转动画
      function rotateElement(element, duration) {
          const startTime = performance.now();
          
          function animate(currentTime) {
              const elapsed = currentTime - startTime;
              const rotation = (elapsed / duration) * 360;
              
              element.style.transform = \`rotate(\${rotation}deg)\`;
              
              requestAnimationFrame(animate);
          }
          
          requestAnimationFrame(animate);
      }

      // 开始旋转
      rotateElement(document.getElementById('box'), 2000);
    </script>
  `,
  颜色渐变: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div id="box" style="width: 100px; height: 100px; background: #3498db;"></div>
    </div>
    <script>
      // 颜色渐变动画
      function colorTransition(element, startColor, endColor, duration) {
          // 解析颜色
          function parseColor(color) {
              const hex = color.replace('#', '');
              return {
                  r: parseInt(hex.substring(0, 2), 16),
                  g: parseInt(hex.substring(2, 4), 16),
                  b: parseInt(hex.substring(4, 6), 16)
              };
          }
          
          const start = parseColor(startColor);
          const end = parseColor(endColor);
          const startTime = performance.now();
          
          function animate(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              const r = Math.round(start.r + (end.r - start.r) * progress);
              const g = Math.round(start.g + (end.g - start.g) * progress);
              const b = Math.round(start.b + (end.b - start.b) * progress);
              
              element.style.backgroundColor = \`rgb(\${r}, \${g}, \${b})\`;
              
              if (progress < 1) {
                  requestAnimationFrame(animate);
              }
          }
          
          requestAnimationFrame(animate);
      }

      // 开始颜色渐变
      colorTransition(document.getElementById('box'), '#3498db', '#e74c3c', 2000);
    </script>
  `,
  缓动函数: `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 200px; background: #f5f5f5; border-radius: 8px;">
      <div id="box" style="width: 50px; height: 50px; background: #3498db; position: relative;"></div>
      <p style="margin-top: 20px;">缓动动画效果</p>
    </div>
    <script>
      // 缓动函数
      const easing = {
          // 线性
          linear: t => t,
          // 缓入
          easeInQuad: t => t * t,
          // 缓出
          easeOutQuad: t => t * (2 - t),
          // 缓入缓出
          easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
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
      }

      // 开始动画
      animateWithEasing(document.getElementById('box'), 2000, easing.easeOutQuad);
    </script>
  `,
  弹簧动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div id="box" style="width: 50px; height: 50px; background: #2ecc71; position: relative;"></div>
    </div>
    <script>
      // 弹簧动画
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
      }

      // 开始弹簧动画
      springAnimation(document.getElementById('box'), 300, 2000);
    </script>
  `,
  物理动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div id="ball" style="width: 50px; height: 50px; background: #f39c12; border-radius: 50%; position: relative; top: 0;"></div>
    </div>
    <script>
      // 物理动画 - 重力效果
      function gravityAnimation(element) {
          let position = 0;
          let velocity = 0;
          const gravity = 0.5;
          const bounce = 0.8;
          const ground = 150; // 地面位置
          
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
      }

      // 开始物理动画
      gravityAnimation(document.getElementById('ball'));
    </script>
  `,
};
