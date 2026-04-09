// GSAP 动画演示数据
export const gsapDemos = {
  基本属性动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 384px; background: #f5f5f5; border-radius: 8px;">
      <div class="box" style="width: 50px; height: 50px; background: #3498db;"></div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script>
      // 基本属性动画
      // 移动元素
      gsap.to('.box', {
          x: 300,
          duration: 1,
          ease: 'power1.out'
      });

      // 缩放元素
      gsap.to('.box', {
          scale: 1.5,
          duration: 0.5,
          ease: 'back.out(1.7)',
          delay: 1.5
      });

      // 旋转元素
      gsap.to('.box', {
          rotation: 360,
          duration: 1,
          ease: 'linear',
          delay: 2.5
      });
    </script>
  `,
  颜色动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 384px; background: #f5f5f5; border-radius: 8px;">
      <div class="box" style="width: 100px; height: 100px; background: #3498db;"></div>
      <div class="text" style="margin-left: 20px; font-size: 20px;">颜色动画</div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script>
      // 颜色动画
      // 背景颜色渐变
      gsap.to('.box', {
          backgroundColor: '#e74c3c',
          duration: 1,
          ease: 'power1.inOut'
      });

      // 文字颜色渐变
      gsap.to('.text', {
          color: '#3498db',
          duration: 1,
          ease: 'power1.inOut'
      });
    </script>
  `,
  透明度动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 384px; background: #f5f5f5; border-radius: 8px;">
      <div class="box" style="width: 100px; height: 100px; background: #2ecc71; opacity: 0;"></div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script>
      // 透明度动画
      // 淡入效果
      gsap.fromTo('.box', 
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: 'power1.out' }
      );

      // 淡出效果
      gsap.to('.box', {
          opacity: 0,
          duration: 1,
          ease: 'power1.in',
          delay: 1.5
      });
    </script>
  `,
  时间线动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 384px; background: #f5f5f5; border-radius: 8px;">
      <div class="box" style="width: 50px; height: 50px; background: #f39c12;"></div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script>
      // 时间线动画
      // 创建时间线
      const tl = gsap.timeline();

      // 添加动画序列
      tl.to('.box', {
          x: 300,
          duration: 1,
          ease: 'power1.out'
      })
      .to('.box', {
          y: 100,
          duration: 0.5,
          ease: 'power1.in'
      })
      .to('.box', {
          rotation: 360,
          duration: 1,
          ease: 'linear'
      });
    </script>
  `,
  缓动函数: `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 384px; background: #f5f5f5; border-radius: 8px;">
      <div class="box" style="width: 50px; height: 50px; background: #9b59b6;"></div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script>
      // 缓动函数
      // 不同缓动效果对比
      gsap.to('.box', {
          x: 300,
          duration: 1,
          ease: 'bounce.out'
      });
    </script>
  `,
  滚动触发动画: `
    <div style="height: 1000px; padding: 20px;">
      <h2>滚动触发动画</h2>
      <div style="height: 500px;"></div>
      <div class="box" style="width: 100px; height: 100px; background: #3498db;"></div>
      <div style="height: 300px;"></div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
    <script>
      // 滚动触发动画
      gsap.registerPlugin(ScrollTrigger);

      // 滚动时触发动画
      gsap.to('.box', {
          x: 300,
          duration: 1,
          scrollTrigger: {
              trigger: '.box',
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: true
          }
      });
    </script>
  `,
  "stagger 动画": `
    <div style="display: flex; align-items: center; justify-content: center; height: 384px; background: #f5f5f5; border-radius: 8px; gap: 10px;">
      <div class="box" style="width: 30px; height: 30px; background: #3498db;"></div>
      <div class="box" style="width: 30px; height: 30px; background: #3498db;"></div>
      <div class="box" style="width: 30px; height: 30px; background: #3498db;"></div>
      <div class="box" style="width: 30px; height: 30px; background: #3498db;"></div>
      <div class="box" style="width: 30px; height: 30px; background: #3498db;"></div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script>
      // Stagger 动画
      // 错开动画
      const boxes = document.querySelectorAll('.box');

      gsap.from(boxes, {
          y: 50,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)'
      });
    </script>
  `,
  路径动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 384px; background: #f5f5f5; border-radius: 8px;">
      <svg width="400" height="300" viewBox="0 0 400 300" style="position: relative;">
        <path class="path" d="M50,150 Q200,50 350,150" fill="none" stroke="#ddd" stroke-width="2"/>
        <div class="box" style="width: 20px; height: 20px; background: #e74c3c; position: absolute; top: 140px; left: 45px; border-radius: 50%;"></div>
      </svg>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/MotionPathPlugin.min.js"></script>
    <script>
      // 路径动画
      gsap.registerPlugin(MotionPathPlugin);

      // 沿路径移动
      gsap.to('.box', {
          motionPath: {
              path: '.path',
              align: '.path',
              alignOrigin: [0.5, 0.5]
          },
          duration: 3,
          ease: 'power1.inOut',
          repeat: -1
      });
    </script>
  `,

  时间线控制: `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 384px; background: #f5f5f5; border-radius: 8px; gap: 20px;">
      <div class="box" style="width: 50px; height: 50px; background: #f39c12;"></div>
      <div style="display: flex; gap: 10px;">
        <button class="play" style="padding: 5px 10px; background: #27ae60; color: white; border: none; border-radius: 4px; cursor: pointer;">播放</button>
        <button class="pause" style="padding: 5px 10px; background: #f39c12; color: white; border: none; border-radius: 4px; cursor: pointer;">暂停</button>
        <button class="reverse" style="padding: 5px 10px; background: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer;">反转</button>
        <button class="restart" style="padding: 5px 10px; background: #e74c3c; color: white; border: none; border-radius: 4px; cursor: pointer;">重新开始</button>
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script>
      // 时间线控制
      // 创建时间线
      const tl = gsap.timeline({
          paused: true,
          repeat: 2,
          yoyo: true
      });

      // 添加动画
      tl.to('.box', {
          x: 300,
          duration: 1
      })
      .to('.box', {
          y: 100,
          duration: 0.5
      })
      .to('.box', {
          rotation: 360,
          duration: 1
      });

      // 控制时间线
      document.querySelector('.play').addEventListener('click', () => tl.play());
      document.querySelector('.pause').addEventListener('click', () => tl.pause());
      document.querySelector('.reverse').addEventListener('click', () => tl.reverse());
      document.querySelector('.restart').addEventListener('click', () => tl.restart());
    </script>
  `,
  背景流动渐变: `
    <div class="gradient-bg" style="width: 100%; height: 384px; background: linear-gradient(-45deg, #3498db, #e74c3c, #f39c12, #2ecc71, #3498db, #e74c3c, #f39c12, #2ecc71); background-size: 600% 600%; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: bold;">
      背景流动渐变效果
    </div>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script>
      // 背景流动渐变
      // 背景流动效果
      gsap.to('.gradient-bg', {
          backgroundPosition: '100% 100%',
          duration: 20,
          ease: 'linear',
          repeat: -1
      });
    </script>
  `,
};
