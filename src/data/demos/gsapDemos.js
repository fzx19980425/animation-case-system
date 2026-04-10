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
      <div style="position: relative; width: 400px; height: 300px;">
        <svg width="400" height="300" viewBox="0 0 400 300">
        <path class="path" d="M50,150 Q200,50 350,150" fill="none" stroke="#ddd" stroke-width="2"/>
        </svg>
        <div class="box" style="width: 20px; height: 20px; background: #e74c3c; position: absolute; top: 140px; left: 45px; border-radius: 50%;"></div>
      </div>
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
  "Hero 分层入场": `
    <div class="hero-wrap" style="height:384px;display:grid;place-items:center;background:linear-gradient(120deg,#eef3ff,#f6f8ff);border-radius:8px;">
      <div style="width:88%;max-width:760px;display:grid;grid-template-columns:1.2fr 1fr;gap:20px;align-items:center;">
        <div>
          <span class="hero-badge" style="display:inline-block;padding:4px 10px;background:#dfe7ff;color:#4f5bd5;border-radius:999px;font-size:12px;">Animation Library</span>
          <h2 class="hero-title" style="margin:14px 0 10px;color:#1f2430;">为页面建立可复用动效系统</h2>
          <p class="hero-sub" style="margin:0 0 16px;color:#5f6572;">统一反馈、滚动叙事与品牌动态表达，沉淀可维护的动效资产。</p>
          <button class="hero-cta" style="border:none;background:#4f7cff;color:#fff;border-radius:8px;padding:10px 14px;cursor:pointer;">查看案例</button>
        </div>
        <div class="hero-card" style="height:150px;border-radius:14px;background:#fff;box-shadow:0 12px 26px rgba(79,124,255,.16);display:grid;place-items:center;color:#4f7cff;font-weight:600;">Timeline Scene</div>
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script>
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl
        .from('.hero-badge', { y: -20, opacity: 0, duration: 0.45 })
        .from('.hero-title', { y: 28, opacity: 0, duration: 0.7 }, '-=0.2')
        .from('.hero-sub', { y: 20, opacity: 0, duration: 0.55 }, '-=0.35')
        .from('.hero-cta', { scale: 0.9, opacity: 0, duration: 0.4 }, '-=0.3')
        .from('.hero-card', { x: 40, opacity: 0, duration: 0.7 }, '-=0.45');
    </script>
  `,
  滚动章节叙事: `
    <div class="story" style="height:384px;background:#f5f5f5;border-radius:8px;position:relative;overflow:hidden;">
      <div class="story-scene-1" style="position:absolute;inset:0;display:grid;place-items:center;font-size:28px;color:#4f7cff;">章节 1：问题背景</div>
      <div class="story-scene-2" style="position:absolute;inset:0;display:grid;place-items:center;font-size:28px;color:#20c997;opacity:0;">章节 2：方案推演</div>
      <div class="story-scene-3" style="position:absolute;inset:0;display:grid;place-items:center;font-size:28px;color:#f39c12;opacity:0;">章节 3：成果展示</div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script>
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });
      tl
        .to('.story-scene-1', { opacity: 0, y: -40, duration: 1 })
        .fromTo('.story-scene-2', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, '<')
        .to('.story-scene-2', { opacity: 0, scale: 0.95, duration: 1 })
        .fromTo('.story-scene-3', { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 1 }, '<')
        .to('.story-scene-3', { opacity: 0, duration: 0.8 });
    </script>
  `,
};
