// 交互动画演示数据
export const interactiveDemos = {
  "鼠标跟随": `
    <div style="display: flex; align-items: center; justify-content: center; height: 384px; background: #f5f5f5; border-radius: 8px; position: relative; overflow: hidden;">
      <div class="mouse-follower-container" style="width: 100%; height: 100%; position: relative;">
        <div class="follower" style="width: 10px; height: 10px; background: #3498db; border-radius: 50%; position: absolute; transform: translate(-50%, -50%); pointer-events: none; transition: all 0.1s ease;"></div>
        <div class="trail" style="width: 6px; height: 6px; background: rgba(52, 152, 219, 0.5); border-radius: 50%; position: absolute; transform: translate(-50%, -50%); pointer-events: none; transition: all 0.2s ease;"></div>
        <div class="trail" style="width: 4px; height: 4px; background: rgba(52, 152, 219, 0.3); border-radius: 50%; position: absolute; transform: translate(-50%, -50%); pointer-events: none; transition: all 0.3s ease;"></div>
      </div>
    </div>
    <style>
      .mouse-follower-container {
        cursor: crosshair;
      }
    </style>
    <script>
      const container = document.querySelector('.mouse-follower-container');
      const followers = document.querySelectorAll('.follower, .trail');
      
      container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        followers.forEach((follower, index) => {
          setTimeout(() => {
            follower.style.left = x + 'px';
            follower.style.top = y + 'px';
          }, index * 50);
        });
      });
    </script>
  `,
  "手势识别": `
    <div style="display: flex; align-items: center; justify-content: center; height: 384px; background: #f5f5f5; border-radius: 8px;">
      <div id="gesture-element" style="width: 200px; height: 200px; background: #3498db; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px; border-radius: 8px; transition: transform 0.2s ease, background 0.2s ease;">
        拖拽我
      </div>
    </div>
    <script>
      class GestureRecognizer {
          constructor(element) {
              this.element = element;
              this.touchStart = { x: 0, y: 0 };
              this.touchEnd = { x: 0, y: 0 };
              this.isMouseDown = false;
              this.init();
              console.log('GestureRecognizer initialized');
          }
          
          init() {
              // 触摸事件
              this.element.addEventListener('touchstart', (e) => {
                  this.touchStart.x = e.touches[0].clientX;
                  this.touchStart.y = e.touches[0].clientY;
              });
              
              this.element.addEventListener('touchend', (e) => {
                  this.touchEnd.x = e.changedTouches[0].clientX;
                  this.touchEnd.y = e.changedTouches[0].clientY;
                  this.recognizeGesture();
              });
              
              // 鼠标事件
              this.element.addEventListener('mousedown', (e) => {
                  console.log('mousedown', e.clientX, e.clientY);
                  this.isMouseDown = true;
                  this.touchStart.x = e.clientX;
                  this.touchStart.y = e.clientY;
                  this.element.style.background = '#2980b9';
                  this.element.style.cursor = 'grabbing';
              });
              
              // 全局鼠标移动事件
              document.addEventListener('mousemove', (e) => {
                  if (this.isMouseDown) {
                      this.touchEnd.x = e.clientX;
                      this.touchEnd.y = e.clientY;
                  }
              });
              
              // 全局鼠标释放事件
              document.addEventListener('mouseup', (e) => {
                  console.log('mouseup', e.clientX, e.clientY);
                  if (this.isMouseDown) {
                      this.isMouseDown = false;
                      this.touchEnd.x = e.clientX;
                      this.touchEnd.y = e.clientY;
                      this.recognizeGesture();
                      this.element.style.background = '#3498db';
                      this.element.style.cursor = 'grab';
                  }
              });
              
              // 鼠标离开元素时重置
              this.element.addEventListener('mouseleave', () => {
                  console.log('mouseleave');
                  // 不在这里重置isMouseDown，让鼠标释放事件来处理
                  // 这样即使鼠标移出元素，也能完成拖拽操作
              });
          }
          
          recognizeGesture() {
              const dx = this.touchEnd.x - this.touchStart.x;
              const dy = this.touchEnd.y - this.touchStart.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < 20) return; // 忽略小幅度移动
              
              const angle = Math.atan2(dy, dx) * 180 / Math.PI;
              
              let moveDistance = 150;
              let backgroundColor = '#3498db';
              
              if (angle > -45 && angle < 45) {
                  console.log('向右滑动');
                  this.element.style.transform = 'translateX(' + moveDistance + 'px)';
                  backgroundColor = '#27ae60'; // 绿色
              } else if (angle > 135 || angle < -135) {
                  console.log('向左滑动');
                  this.element.style.transform = 'translateX(-' + moveDistance + 'px)';
                  backgroundColor = '#e74c3c'; // 红色
              } else if (angle > 45 && angle < 135) {
                  console.log('向下滑动');
                  this.element.style.transform = 'translateY(' + moveDistance + 'px)';
                  backgroundColor = '#f39c12'; // 橙色
              } else {
                  console.log('向上滑动');
                  this.element.style.transform = 'translateY(-' + moveDistance + 'px)';
                  backgroundColor = '#9b59b6'; // 紫色
              }
              
              // 改变背景色
              this.element.style.background = backgroundColor;
              
              // 重置变换
              setTimeout(() => {
                  this.element.style.transform = '';
                  this.element.style.background = '#3498db';
              }, 300);
          }
      }

      // 使用示例
      const element = document.getElementById('gesture-element');
      const recognizer = new GestureRecognizer(element);
    </script>
  `,
};
