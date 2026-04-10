import loadingJson from "../json/loading.json";

// Lottie 动画演示数据（键名须与 src/data/animations/lottie.js 中 effects[].name 完全一致）
const LOTTIE_CDN =
  '<script>(function(){window.__loadLottie=window.__loadLottie||function(cb){if(window.lottie){cb(window.lottie,true);return;}var urls=["https://cdn.jsdelivr.net/npm/lottie-web@5.12.2/build/player/lottie.min.js","https://unpkg.com/lottie-web@5.12.2/build/player/lottie.min.js","https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js"];var i=0;var done=false;function finish(lib,ok){if(done)return;done=true;cb(lib,ok);}function next(){if(i>=urls.length){finish(null,false);return;}var s=document.createElement("script");s.src=urls[i++];s.async=true;s.onload=function(){if(window.lottie){finish(window.lottie,true);}else{next();}};s.onerror=next;document.head.appendChild(s);}next();};})();<\\/script>';

const BOX =
  "display:flex;flex-direction:column;align-items:center;justify-content:center;height:384px;background:#f5f5f5;border-radius:8px;gap:12px;";

const RING = {
  v: "5.7.6",
  fr: 30,
  ip: 0,
  op: 60,
  w: 120,
  h: 120,
  nm: "ring",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "ring",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 1, k: [{ t: 0, s: [0] }, { t: 60, s: [360] }], ix: 10 },
        p: { a: 0, k: [60, 60, 0], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            { d: 1, ty: "el", s: { a: 0, k: [66, 66], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, nm: "Ellipse", mn: "ADBE Vector Shape - Ellipse", hd: false },
            { ty: "st", c: { a: 0, k: [0.22, 0.53, 0.98, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 8, ix: 5 }, lc: 2, lj: 1, ml: 4, bm: 0, nm: "Stroke", mn: "ADBE Vector Graphic - Stroke", hd: false },
            { ty: "tm", s: { a: 0, k: 20, ix: 1 }, e: { a: 0, k: 80, ix: 2 }, o: { a: 0, k: 0, ix: 3 }, m: 1, ix: 6, nm: "Trim Paths" },
            { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" },
          ],
          nm: "Ring Group",
          np: 4,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 60,
      st: 0,
      bm: 0,
    },
  ],
  markers: [],
};

const EMPTY_DATA = {
  v: "5.7.6",
  fr: 30,
  ip: 0,
  op: 90,
  w: 140,
  h: 140,
  nm: "empty",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "card",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 1, k: [{ t: 0, s: [70, 76, 0] }, { t: 45, s: [70, 64, 0] }, { t: 90, s: [70, 76, 0] }], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
      },
      ao: 0,
      shapes: [
        { ty: "gr", it: [
          { d: 1, ty: "rc", s: { a: 0, k: [84, 64], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 12, ix: 4 }, nm: "Rect", mn: "ADBE Vector Shape - Rect", hd: false },
          { ty: "st", c: { a: 0, k: [0.58, 0.77, 0.98, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 4, ix: 5 }, lc: 2, lj: 1, ml: 4, bm: 0, nm: "Stroke", mn: "ADBE Vector Graphic - Stroke", hd: false },
          { ty: "fl", c: { a: 0, k: [0.93, 0.96, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill", mn: "ADBE Vector Graphic - Fill", hd: false },
          { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" },
        ], nm: "Card", np: 4, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: false },
      ],
      ip: 0, op: 90, st: 0, bm: 0,
    },
  ],
  markers: [],
};

const SUCCESS_DATA = {
  v: "5.7.6", fr: 30, ip: 0, op: 50, w: 120, h: 120, nm: "success", ddd: 0, assets: [],
  layers: [{
    ddd: 0, ind: 1, ty: 4, nm: "ok", sr: 1,
    ks: {
      o: { a: 1, k: [{ t: 0, s: [0] }, { t: 10, s: [100] }], ix: 11 },
      r: { a: 0, k: 0, ix: 10 },
      p: { a: 0, k: [60, 60, 0], ix: 2 },
      a: { a: 0, k: [0, 0, 0], ix: 1 },
      s: { a: 1, k: [{ t: 0, s: [40, 40, 100] }, { t: 20, s: [110, 110, 100] }, { t: 50, s: [100, 100, 100] }], ix: 6 },
    },
    ao: 0,
    shapes: [{ ty: "gr", it: [
      { d: 1, ty: "el", s: { a: 0, k: [72, 72], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, nm: "Circle", mn: "ADBE Vector Shape - Ellipse", hd: false },
      { ty: "st", c: { a: 0, k: [0.13, 0.78, 0.6, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 8, ix: 5 }, lc: 2, lj: 1, ml: 4, bm: 0, nm: "Stroke", mn: "ADBE Vector Graphic - Stroke", hd: false },
      { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" },
    ], nm: "ok", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: false }],
    ip: 0, op: 50, st: 0, bm: 0,
  }],
  markers: [],
};

const BRAND_DATA = {
  ...RING,
  nm: "brand",
  layers: [
    {
      ...RING.layers[0],
      ks: {
        ...RING.layers[0].ks,
        s: { a: 1, k: [{ t: 0, s: [80, 80, 100] }, { t: 30, s: [108, 108, 100] }, { t: 60, s: [80, 80, 100] }], ix: 6 },
        r: { a: 0, k: 0, ix: 10 },
      },
    },
  ],
};

const GUIDE_DATA = {
  ...RING,
  nm: "guide",
  layers: [
    {
      ...RING.layers[0],
      ks: {
        ...RING.layers[0].ks,
        s: { a: 1, k: [{ t: 0, s: [70, 70, 100] }, { t: 20, s: [100, 100, 100] }, { t: 40, s: [130, 130, 100] }, { t: 60, s: [70, 70, 100] }], ix: 6 },
      },
    },
  ],
};

const lottieBlock = (id, statusId, fallbackHtml, extra = "") => `
  <div style="${BOX}">
    <style>
      @keyframes lottie-fallback-spin { to { transform: rotate(360deg); } }
      @keyframes lottie-fallback-pulse { 0%,100% { transform: scale(0.9); opacity: 0.7; } 50% { transform: scale(1.08); opacity: 1; } }
      @keyframes lottie-fallback-bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
      @keyframes lottie-fallback-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
      @keyframes lottie-fallback-guide { 0%,100% { opacity: .35; transform: scaleX(.6); } 50% { opacity: 1; transform: scaleX(1); } }
      .lottie-fallback {
        width: 72px;
        height: 72px;
        border: 8px solid #dbeafe;
        border-top-color: #3b82f6;
        border-radius: 50%;
        animation: lottie-fallback-spin 1s linear infinite;
      }
      .lottie-fallback-pulse {
        width: 72px;
        height: 72px;
        border-radius: 16px;
        background: linear-gradient(135deg, #60a5fa, #34d399);
        animation: lottie-fallback-pulse 1.4s ease-in-out infinite;
      }
      .lottie-fallback-bounce {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        background: #4f7cff;
        animation: lottie-fallback-bounce 0.9s ease-in-out infinite;
      }
      .lottie-fallback-empty {
        width: 78px;
        height: 78px;
        border-radius: 14px;
        border: 2px dashed #93c5fd;
        position: relative;
        animation: lottie-fallback-float 1.6s ease-in-out infinite;
      }
      .lottie-fallback-empty::after {
        content: "";
        position: absolute;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #60a5fa;
        right: -8px;
        top: -8px;
      }
      .lottie-fallback-guide {
        display: flex;
        gap: 8px;
      }
      .lottie-fallback-guide span {
        width: 28px;
        height: 10px;
        border-radius: 999px;
        background: #60a5fa;
        transform-origin: left center;
        animation: lottie-fallback-guide 1.2s ease-in-out infinite;
      }
      .lottie-fallback-guide span:nth-child(2) { animation-delay: .2s; }
      .lottie-fallback-guide span:nth-child(3) { animation-delay: .4s; }
      .lottie-status {
        margin: 0;
        font-size: 12px;
        color: #6b7280;
      }
    </style>
    <div id="${id}" style="width:160px;height:160px;display:flex;align-items:center;justify-content:center;">
      ${fallbackHtml}
    </div>
    ${extra}
  </div>
  ${LOTTIE_CDN}
`;

export const lottieDemos = {
  基本加载动画: `
    ${lottieBlock("lottie-loading", "lottie-loading-status", '<div class="lottie-fallback"></div>', '<p style="margin:0;color:#6b7280;">加载中（来源：loading.json）</p>')}
    <script>
      var status = document.getElementById('lottie-loading-status');
      window.__loadLottie(function (lib, ok) {
        if (!ok) return;
        var target = document.getElementById('lottie-loading');
        target.innerHTML = '';
        var anim = lib.loadAnimation({
          container: target,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          animationData: ${JSON.stringify(loadingJson)},
          rendererSettings: { preserveAspectRatio: 'xMidYMid meet' }
        });
        anim.addEventListener('DOMLoaded', function () {
          var maxFrame = Math.max(1, Math.floor(anim.totalFrames) - 1);
          var fps = Math.max(12, Math.floor(anim.frameRate || 30));
          var frame = 0;
          anim.goToAndStop(0, true);
          setInterval(function () {
            frame = (frame + 1) % maxFrame;
            anim.goToAndStop(frame, true);
          }, Math.floor(1000 / fps));
        });
        if (status) status.textContent = '状态：Lottie 已加载（loading.json）';
      });
    </script>
  `,
  空状态循环插画: `
    ${lottieBlock("lottie-empty", "lottie-empty-status", '<div class="lottie-fallback-empty"></div>', '<p style="margin:0;color:#6b7280;">暂无内容</p>')}
    <script>
      var status = document.getElementById('lottie-empty-status');
      window.__loadLottie(function (lib, ok) {
        if (!ok) return;
        var target = document.getElementById('lottie-empty');
        target.innerHTML = '';
        var anim = lib.loadAnimation({ container: target, renderer: 'svg', loop: true, autoplay: true, animationData: ${JSON.stringify(EMPTY_DATA)} });
        anim.setSpeed(0.65);
        anim.setDirection(-1);
        if (status) status.textContent = '状态：Lottie 已加载';
      });
    </script>
  `,
  成功状态插画: `
    ${lottieBlock("lottie-success", "lottie-success-status", '<div class="lottie-fallback-bounce"></div>', '<p style="margin:0;color:#6b7280;">提交成功</p>')}
    <script>
      var status = document.getElementById('lottie-success-status');
      window.__loadLottie(function (lib, ok) {
        if (!ok) return;
        var target = document.getElementById('lottie-success');
        target.innerHTML = '';
        var anim = lib.loadAnimation({ container: target, renderer: 'svg', loop: true, autoplay: true, animationData: ${JSON.stringify(SUCCESS_DATA)} });
        anim.setSpeed(0.8);
        if (status) status.textContent = '状态：Lottie 已加载';
      });
    </script>
  `,
  品牌呼吸动效: `
    ${lottieBlock("lottie-brand", "lottie-brand-status", '<div class="lottie-fallback-pulse"></div>', '<p style="margin:0;color:#6b7280;letter-spacing:2px;font-weight:600;">BRAND</p>')}
    <script>
      var status = document.getElementById('lottie-brand-status');
      window.__loadLottie(function (lib, ok) {
        if (!ok) return;
        var target = document.getElementById('lottie-brand');
        target.innerHTML = '';
        var anim = lib.loadAnimation({ container: target, renderer: 'svg', loop: true, autoplay: true, animationData: ${JSON.stringify(BRAND_DATA)} });
        anim.setSpeed(0.45);
        anim.setDirection(-1);
        if (status) status.textContent = '状态：Lottie 已加载';
      });
    </script>
  `,
  引导页轮播插画: `
    ${lottieBlock("lottie-guide", "lottie-guide-status", '<div class="lottie-fallback-guide"><span></span><span></span><span></span></div>', '<p style="margin:0;color:#6b7280;">自动轮播中</p>')}
    <script>
      var status = document.getElementById('lottie-guide-status');
      window.__loadLottie(function (lib, ok) {
        if (!ok) return;
        var target = document.getElementById('lottie-guide');
        target.innerHTML = '';
        var anim = lib.loadAnimation({ container: target, renderer: 'svg', loop: false, autoplay: false, animationData: ${JSON.stringify(GUIDE_DATA)} });
        var seg = [[0,20],[20,40],[40,59]];
        var i = 0;
        anim.playSegments(seg[i], true);
        setInterval(function () {
          i = (i + 1) % seg.length;
          anim.playSegments(seg[i], true);
        }, 1800);
        if (status) status.textContent = '状态：Lottie 已加载';
      });
    </script>
  `,
};
