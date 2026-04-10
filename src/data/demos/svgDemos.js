// SVG 动画演示数据
export const svgDemos = {
  圆形加载动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="#3498db" stroke-width="8">
          <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="1s"
              repeatCount="indefinite"
          />
          <animate
              attributeName="stroke-dasharray"
              from="0 251.2"
              to="251.2 0"
              dur="1s"
              repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  `,
  脉冲加载动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="#e74c3c">
          <animate
              attributeName="r"
              values="40;45;40"
              dur="1s"
              repeatCount="indefinite"
          />
          <animate
              attributeName="opacity"
              values="1;0.5;1"
              dur="1s"
              repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  `,

  描边动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <svg width="400" height="200" viewBox="0 0 400 200">
        <path
            d="M50,100 C100,20 300,20 350,100"
            fill="none"
            stroke="#3498db"
            stroke-width="4"
            stroke-dasharray="1000"
            stroke-dashoffset="1000"
        >
            <animate
                attributeName="stroke-dashoffset"
                from="1000"
                to="0"
                dur="2s"
                repeatCount="indefinite"
            />
        </path>
      </svg>
    </div>
  `,
  路径跟随动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <svg width="400" height="200" viewBox="0 0 400 200">
        <path
            id="motionPath"
            d="M50,100 C100,20 300,20 350,100"
            fill="none"
            stroke="#e74c3c"
            stroke-width="2"
        />
        <circle r="10" fill="#2ecc71">
            <animateMotion
                dur="3s"
                repeatCount="indefinite"
                path="M50,100 C100,20 300,20 350,100"
            >
                <mpath href="#motionPath"/>
            </animateMotion>
        </circle>
      </svg>
    </div>
  `,

  形状变换动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
        <svg width="300" height="300" viewBox="0 0 300 300">
        <rect x="50" y="50" width="200" height="200" fill="#3498db">
            <animate
            attributeName="rx"
            values="0;100;0"
            dur="8s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.5;1"
            keySplines="0.1 0.1 0.1 1; 0.1 0.1 0.1 1"
            />
        </rect>
        </svg>
    </div>
  `,
  路径变形动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <svg width="400" height="200" viewBox="0 0 400 200">
        <path d="M50,100 Q150,20 250,100 Q350,180 350,100" fill="none" stroke="#e74c3c" stroke-width="4">
            <animate
                attributeName="d"
                values="M50,100 Q150,20 250,100 Q350,180 350,100; M50,100 Q150,180 250,100 Q350,20 350,100; M50,100 Q150,20 250,100 Q350,180 350,100"
                dur="4s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                keyTimes="0; 0.5; 1"
            />
            <animate
                attributeName="stroke"
                values="#e74c3c;#3498db;#e74c3c"
                dur="4s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                keyTimes="0; 0.5; 1"
            />
        </path>
      </svg>
    </div>
  `,
  文字变形动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <svg width="400" height="400" viewBox="0 0 400 400">
        <defs>
            <path id="textPath" d="M50,200 C100,200 150,200 200,200 C250,200 300,200 350,200" fill="none" stroke="none">
                <animate
                    attributeName="d"
                    values="M50,200 C100,200 150,200 200,200 C250,200 300,200 350,200; M50,200 C50,100 100,50 200,50 C300,50 350,100 350,200; M50,200 C100,200 150,200 200,200 C250,200 300,200 350,200"
                    dur="12s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keyTimes="0;0.5;1"
                    keySplines="0.1 0.1 0.1 1; 0.1 0.1 0.1 1"
                />
            </path>
        </defs>
        <text fill="#3498db" font-size="24" font-weight="bold">
            <textPath href="#textPath">
                Hello SVG Animation
                <animate
                    attributeName="fill"
                    values="#3498db;#e74c3c;#2ecc71;#3498db"
                    dur="6s"
                    repeatCount="indefinite"
                />
            </textPath>
        </text>
      </svg>
    </div>
  `,
  模糊滤镜动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <svg width="200" height="200" viewBox="0 0 200 200">
        <defs>
            <filter id="blurFilter">
                <feGaussianBlur stdDeviation="0">
                    <animate
                        attributeName="stdDeviation"
                        values="0;5;0"
                        dur="2s"
                        repeatCount="indefinite"
                    />
                </feGaussianBlur>
            </filter>
        </defs>
        <circle cx="100" cy="100" r="50" fill="#3498db" filter="url(#blurFilter)"/>
      </svg>
    </div>
  `,
  颜色滤镜动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <svg width="200" height="200" viewBox="0 0 200 200">
        <defs>
            <filter id="colorFilter">
                <feColorMatrix type="hueRotate" values="0">
                    <animate
                        attributeName="values"
                        values="0;360;0"
                        dur="5s"
                        repeatCount="indefinite"
                    />
                </feColorMatrix>
            </filter>
        </defs>
        <rect x="50" y="50" width="100" height="100" fill="#3498db" filter="url(#colorFilter)"/>
      </svg>
    </div>
  `,
  阴影滤镜动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <svg width="200" height="200" viewBox="0 0 200 200">
        <defs>
            <filter id="shadowFilter">
                <feDropShadow dx="0" dy="0" stdDeviation="0">
                    <animate
                        attributeName="dx"
                        values="0;5;0"
                        dur="2s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="dy"
                        values="0;5;0"
                        dur="2s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="stdDeviation"
                        values="0;5;0"
                        dur="2s"
                        repeatCount="indefinite"
                    />
                </feDropShadow>
            </filter>
        </defs>
        <circle cx="100" cy="100" r="50" fill="#3498db" filter="url(#shadowFilter)"/>
      </svg>
    </div>
  `,
  "Logo 描边入场": `
    <div style="display:flex;align-items:center;justify-content:center;height:400px;background:#f5f5f5;border-radius:8px;">
      <svg viewBox="0 0 320 120" width="320" height="120">
        <path class="logo-draw-1" d="M40 90 L90 30 L140 90 Z" fill="none" stroke="#4f7cff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
        <circle class="logo-draw-2" cx="205" cy="60" r="32" fill="none" stroke="#4f7cff" stroke-width="8" />
        <path class="logo-draw-3" d="M190 60 L203 73 L222 47" fill="none" stroke="#4f7cff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
    <style>
      .logo-draw-1, .logo-draw-2, .logo-draw-3 {
        stroke-dasharray: 260;
        stroke-dashoffset: 260;
        animation: draw 1.2s ease forwards;
      }
      .logo-draw-2 { animation-delay: .25s; }
      .logo-draw-3 { animation-delay: .45s; }
      @keyframes draw {
        to { stroke-dashoffset: 0; }
      }
    </style>
  `,
  路径进度环: `
    <div style="display:flex;align-items:center;justify-content:center;height:400px;background:#f5f5f5;border-radius:8px;">
      <svg viewBox="0 0 160 160" width="160" height="160">
        <circle cx="80" cy="80" r="58" fill="none" stroke="#e9edf6" stroke-width="12" />
        <circle class="ring-progress" cx="80" cy="80" r="58" fill="none" stroke="#20c997" stroke-width="12" stroke-linecap="round" />
        <text x="80" y="88" text-anchor="middle" font-size="26" fill="#2b2f36">72%</text>
      </svg>
    </div>
    <style>
      .ring-progress {
        stroke-dasharray: 364;
        stroke-dashoffset: 364;
        transform: rotate(-90deg);
        transform-origin: 80px 80px;
        animation: progress 1.6s cubic-bezier(.22,.61,.36,1) forwards;
      }
      @keyframes progress {
        to { stroke-dashoffset: 102; }
      }
    </style>
  `,
};
