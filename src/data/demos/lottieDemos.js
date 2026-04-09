// Lottie 动画演示数据（键名须与 src/data/animations/lottie.js 中 effects[].name 完全一致）
const LOTTIE_CDN =
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js"></script>';

export const lottieDemos = {
  基本加载动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 384px; background: #f5f5f5; border-radius: 8px;">
      <div id="lottie-container" style="width: 120px; height: 120px;"></div>
    </div>
    ${LOTTIE_CDN}
    <script>
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
            "it": [{
              "d": 1,
              "ty": "el",
              "s": {"a": 0, "k": [40, 40], "ix": 2},
              "p": {"a": 0, "k": [0, 0], "ix": 3},
              "nm": "Ellipse Path 1",
              "mn": "ADBE Vector Shape - Ellipse",
              "hd": false
            }, {
              "ty": "st",
              "c": {"a": 0, "k": [0.2, 0.6, 0.9, 1], "ix": 3},
              "o": {"a": 0, "k": 100, "ix": 4},
              "w": {"a": 0, "k": 6, "ix": 5},
              "lc": 2,
              "lj": 1,
              "ml": 4,
              "bm": 0,
              "nm": "Stroke 1",
              "mn": "ADBE Vector Graphic - Stroke",
              "hd": false
            }, {
              "ty": "tr",
              "p": {"a": 0, "k": [0, 0], "ix": 2},
              "a": {"a": 0, "k": [0, 0], "ix": 1},
              "s": {"a": 0, "k": [100, 100], "ix": 3},
              "r": {"a": 0, "k": 0, "ix": 6},
              "o": {"a": 0, "k": 100, "ix": 7},
              "sk": {"a": 0, "k": 0, "ix": 4},
              "sa": {"a": 0, "k": 0, "ix": 5},
              "nm": "Transform"
            }],
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
      
      lottie.loadAnimation({
        container: document.getElementById('lottie-container'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: loadingAnimation
      });
    </script>
  `,
  按钮交互动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 384px; background: #f5f5f5; border-radius: 8px;">
      <button id="lottie-button" type="button" style="display: inline-flex; align-items: center; gap: 10px; padding: 12px 22px; background-color: #3498db; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 15px;">
        <span id="button-animation" style="display: inline-block; width: 28px; height: 28px;"></span>
        点击播放
      </button>
    </div>
    ${LOTTIE_CDN}
    <script>
      // 内联按钮动画
      const buttonAnimation = {
        "v": "5.7.6",
        "fr": 25,
        "ip": 0,
        "op": 30,
        "w": 50,
        "h": 50,
        "nm": "Button",
        "ddd": 0,
        "assets": [],
        "layers": [{
          "ddd": 0,
          "ind": 1,
          "ty": 4,
          "nm": "Check",
          "sr": 1,
          "ks": {
            "o": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0]}, {"t": 10, "s": [100]}], "ix": 11},
            "r": {"a": 0, "k": 0, "ix": 10},
            "p": {"a": 0, "k": [25, 25, 0], "ix": 2},
            "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
            "s": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0, 0, 100]}, {"t": 15, "s": [100, 100, 100]}], "ix": 6}
          },
          "ao": 0,
          "shapes": [{
            "ty": "gr",
            "it": [{
              "d": 1,
              "ty": "sh",
              "ks": {
                "a": 0,
                "k": {
                  "i": [[0, 0], [0, 0], [0, 0]],
                  "o": [[0, 0], [0, 0], [0, 0]],
                  "v": [[10, 25], [20, 35], [40, 15]],
                  "c": false
                },
                "ix": 2
              },
              "nm": "Path 1",
              "mn": "ADBE Vector Shape - Rect",
              "hd": false
            }, {
              "ty": "st",
              "c": {"a": 0, "k": [0, 0.8, 0.3, 1], "ix": 3},
              "o": {"a": 0, "k": 100, "ix": 4},
              "w": {"a": 0, "k": 6, "ix": 5},
              "lc": 2,
              "lj": 1,
              "ml": 4,
              "bm": 0,
              "nm": "Stroke 1",
              "mn": "ADBE Vector Graphic - Stroke",
              "hd": false
            }, {
              "ty": "tr",
              "p": {"a": 0, "k": [0, 0], "ix": 2},
              "a": {"a": 0, "k": [0, 0], "ix": 1},
              "s": {"a": 0, "k": [100, 100], "ix": 3},
              "r": {"a": 0, "k": 0, "ix": 6},
              "o": {"a": 0, "k": 100, "ix": 7},
              "sk": {"a": 0, "k": 0, "ix": 4},
              "sa": {"a": 0, "k": 0, "ix": 5},
              "nm": "Transform"
            }],
            "nm": "Check",
            "np": 3,
            "cix": 2,
            "bm": 0,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
          }],
          "ip": 0,
          "op": 30,
          "st": 0,
          "bm": 0
        }],
        "markers": []
      };
      
      const animation = lottie.loadAnimation({
        container: document.getElementById('button-animation'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: buttonAnimation
      });
      document.getElementById('lottie-button').addEventListener('click', function () {
        animation.stop();
        animation.playSegments([0, 30], true);
      });
    </script>
  `,
  页面过渡动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 384px; background: #f5f5f5; border-radius: 8px;">
      <div id="transition-animation" style="width: 220px; height: 220px;"></div>
    </div>
    ${LOTTIE_CDN}
    <script>
      // 内联页面过渡动画
      const transitionAnimation = {
        "v": "5.7.6",
        "fr": 25,
        "ip": 0,
        "op": 60,
        "w": 200,
        "h": 200,
        "nm": "Transition",
        "ddd": 0,
        "assets": [],
        "layers": [{
          "ddd": 0,
          "ind": 1,
          "ty": 4,
          "nm": "Circle",
          "sr": 1,
          "ks": {
            "o": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0]}, {"t": 15, "s": [100]}, {"t": 45, "s": [100]}, {"t": 60, "s": [0]}], "ix": 11},
            "r": {"a": 0, "k": 0, "ix": 10},
            "p": {"a": 0, "k": [100, 100, 0], "ix": 2},
            "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
            "s": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0, 0, 100]}, {"t": 30, "s": [200, 200, 100]}, {"t": 60, "s": [400, 400, 100]}], "ix": 6}
          },
          "ao": 0,
          "shapes": [{
            "ty": "gr",
            "it": [{"d": 1, "ty": "el", "s": {"a": 0, "k": [50, 50], "ix": 2}, "p": {"a": 0, "k": [0, 0], "ix": 3}, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false}, {"ty": "st", "c": {"a": 0, "k": [0.2, 0.6, 0.9, 1], "ix": 3}, "o": {"a": 0, "k": 100, "ix": 4}, "w": {"a": 0, "k": 4, "ix": 5}, "lc": 2, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false}, {"ty": "tr", "p": {"a": 0, "k": [0, 0], "ix": 2}, "a": {"a": 0, "k": [0, 0], "ix": 1}, "s": {"a": 0, "k": [100, 100], "ix": 3}, "r": {"a": 0, "k": 0, "ix": 6}, "o": {"a": 0, "k": 100, "ix": 7}, "sk": {"a": 0, "k": 0, "ix": 4}, "sa": {"a": 0, "k": 0, "ix": 5}, "nm": "Transform"}], "nm": "Ellipse 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false}
          ],
          "ip": 0,
          "op": 60,
          "st": 0,
          "bm": 0
        }],
        "markers": []
      };
      
      lottie.loadAnimation({
        container: document.getElementById('transition-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: transitionAnimation
      });
    </script>
  `,
  数据可视化动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 384px; background: #f5f5f5; border-radius: 8px;">
      <div id="data-animation" style="width: 300px; height: 200px;"></div>
    </div>
    ${LOTTIE_CDN}
    <script>
      // 内联数据可视化动画
      const dataAnimation = {
        "v": "5.7.6",
        "fr": 25,
        "ip": 0,
        "op": 50,
        "w": 300,
        "h": 200,
        "nm": "Data Visualization",
        "ddd": 0,
        "assets": [],
        "layers": [
          {
            "ddd": 0,
            "ind": 1,
            "ty": 4,
            "nm": "Bar 1",
            "sr": 1,
            "ks": {
              "o": {"a": 0, "k": 100, "ix": 11},
              "r": {"a": 0, "k": 0, "ix": 10},
              "p": {"a": 0, "k": [60, 150, 0], "ix": 2},
              "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
              "s": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [100, 0, 100]}, {"t": 25, "s": [100, 100, 100]}], "ix": 6}
            },
            "ao": 0,
            "shapes": [{
              "ty": "gr",
              "it": [
                {"d": 1, "ty": "rc", "s": {"a": 0, "k": [30, 100], "ix": 2}, "p": {"a": 0, "k": [0, 0], "ix": 3}, "r": {"a": 0, "k": 4, "ix": 4}, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false},
                {"ty": "fl", "c": {"a": 0, "k": [0.2, 0.6, 0.9, 1], "ix": 4}, "o": {"a": 0, "k": 100, "ix": 5}, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false},
                {"ty": "tr", "p": {"a": 0, "k": [0, 0], "ix": 2}, "a": {"a": 0, "k": [0, 0], "ix": 1}, "s": {"a": 0, "k": [100, 100], "ix": 3}, "r": {"a": 0, "k": 0, "ix": 6}, "o": {"a": 0, "k": 100, "ix": 7}, "sk": {"a": 0, "k": 0, "ix": 4}, "sa": {"a": 0, "k": 0, "ix": 5}, "nm": "Transform"}
              ],
              "nm": "Rectangle 1",
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
          },
          {
            "ddd": 0,
            "ind": 2,
            "ty": 4,
            "nm": "Bar 2",
            "sr": 1,
            "ks": {
              "o": {"a": 0, "k": 100, "ix": 11},
              "r": {"a": 0, "k": 0, "ix": 10},
              "p": {"a": 0, "k": [120, 150, 0], "ix": 2},
              "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
              "s": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 5, "s": [100, 0, 100]}, {"t": 30, "s": [100, 150, 100]}], "ix": 6}
            },
            "ao": 0,
            "shapes": [{
              "ty": "gr",
              "it": [
                {"d": 1, "ty": "rc", "s": {"a": 0, "k": [30, 100], "ix": 2}, "p": {"a": 0, "k": [0, 0], "ix": 3}, "r": {"a": 0, "k": 4, "ix": 4}, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false},
                {"ty": "fl", "c": {"a": 0, "k": [0.9, 0.6, 0.2, 1], "ix": 4}, "o": {"a": 0, "k": 100, "ix": 5}, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false},
                {"ty": "tr", "p": {"a": 0, "k": [0, 0], "ix": 2}, "a": {"a": 0, "k": [0, 0], "ix": 1}, "s": {"a": 0, "k": [100, 100], "ix": 3}, "r": {"a": 0, "k": 0, "ix": 6}, "o": {"a": 0, "k": 100, "ix": 7}, "sk": {"a": 0, "k": 0, "ix": 4}, "sa": {"a": 0, "k": 0, "ix": 5}, "nm": "Transform"}
              ],
              "nm": "Rectangle 1",
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
          },
          {
            "ddd": 0,
            "ind": 3,
            "ty": 4,
            "nm": "Bar 3",
            "sr": 1,
            "ks": {
              "o": {"a": 0, "k": 100, "ix": 11},
              "r": {"a": 0, "k": 0, "ix": 10},
              "p": {"a": 0, "k": [180, 150, 0], "ix": 2},
              "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
              "s": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 10, "s": [100, 0, 100]}, {"t": 35, "s": [100, 70, 100]}], "ix": 6}
            },
            "ao": 0,
            "shapes": [{
              "ty": "gr",
              "it": [
                {"d": 1, "ty": "rc", "s": {"a": 0, "k": [30, 100], "ix": 2}, "p": {"a": 0, "k": [0, 0], "ix": 3}, "r": {"a": 0, "k": 4, "ix": 4}, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false},
                {"ty": "fl", "c": {"a": 0, "k": [0.2, 0.8, 0.3, 1], "ix": 4}, "o": {"a": 0, "k": 100, "ix": 5}, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false},
                {"ty": "tr", "p": {"a": 0, "k": [0, 0], "ix": 2}, "a": {"a": 0, "k": [0, 0], "ix": 1}, "s": {"a": 0, "k": [100, 100], "ix": 3}, "r": {"a": 0, "k": 0, "ix": 6}, "o": {"a": 0, "k": 100, "ix": 7}, "sk": {"a": 0, "k": 0, "ix": 4}, "sa": {"a": 0, "k": 0, "ix": 5}, "nm": "Transform"}
              ],
              "nm": "Rectangle 1",
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
          },
          {
            "ddd": 0,
            "ind": 4,
            "ty": 4,
            "nm": "Bar 4",
            "sr": 1,
            "ks": {
              "o": {"a": 0, "k": 100, "ix": 11},
              "r": {"a": 0, "k": 0, "ix": 10},
              "p": {"a": 0, "k": [240, 150, 0], "ix": 2},
              "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
              "s": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 15, "s": [100, 0, 100]}, {"t": 40, "s": [100, 120, 100]}], "ix": 6}
            },
            "ao": 0,
            "shapes": [{
              "ty": "gr",
              "it": [
                {"d": 1, "ty": "rc", "s": {"a": 0, "k": [30, 100], "ix": 2}, "p": {"a": 0, "k": [0, 0], "ix": 3}, "r": {"a": 0, "k": 4, "ix": 4}, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false},
                {"ty": "fl", "c": {"a": 0, "k": [0.8, 0.2, 0.4, 1], "ix": 4}, "o": {"a": 0, "k": 100, "ix": 5}, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false},
                {"ty": "tr", "p": {"a": 0, "k": [0, 0], "ix": 2}, "a": {"a": 0, "k": [0, 0], "ix": 1}, "s": {"a": 0, "k": [100, 100], "ix": 3}, "r": {"a": 0, "k": 0, "ix": 6}, "o": {"a": 0, "k": 100, "ix": 7}, "sk": {"a": 0, "k": 0, "ix": 4}, "sa": {"a": 0, "k": 0, "ix": 5}, "nm": "Transform"}
              ],
              "nm": "Rectangle 1",
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
          }
        ],
        "markers": []
      };
      
      lottie.loadAnimation({
        container: document.getElementById('data-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: dataAnimation
      });
    </script>
  `,
  图标动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 384px; background: #f5f5f5; border-radius: 8px;">
      <div id="icon-animation" style="width: 160px; height: 160px;"></div>
    </div>
    ${LOTTIE_CDN}
    <script>
      // 内联图标动画
      const iconAnimation = {
        "v": "5.7.6",
        "fr": 25,
        "ip": 0,
        "op": 40,
        "w": 100,
        "h": 100,
        "nm": "Icon",
        "ddd": 0,
        "assets": [],
        "layers": [{
          "ddd": 0,
          "ind": 1,
          "ty": 4,
          "nm": "Checkmark",
          "sr": 1,
          "ks": {
            "o": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0]}, {"t": 10, "s": [100]}], "ix": 11},
            "r": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0]}, {"t": 20, "s": [360]}], "ix": 10},
            "p": {"a": 0, "k": [50, 50, 0], "ix": 2},
            "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
            "s": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0, 0, 100]}, {"t": 15, "s": [100, 100, 100]}], "ix": 6}
          },
          "ao": 0,
          "shapes": [{
            "ty": "gr",
            "it": [
              {"d": 1, "ty": "sh", "ks": {"a": 0, "k": {"i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[20, 50], [40, 70], [80, 30]], "c": false}, "ix": 2}, "nm": "Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false},
              {"ty": "st", "c": {"a": 0, "k": [0, 0.8, 0.3, 1], "ix": 3}, "o": {"a": 0, "k": 100, "ix": 4}, "w": {"a": 0, "k": 8, "ix": 5}, "lc": 2, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false},
              {"ty": "tr", "p": {"a": 0, "k": [0, 0], "ix": 2}, "a": {"a": 0, "k": [0, 0], "ix": 1}, "s": {"a": 0, "k": [100, 100], "ix": 3}, "r": {"a": 0, "k": 0, "ix": 6}, "o": {"a": 0, "k": 100, "ix": 7}, "sk": {"a": 0, "k": 0, "ix": 4}, "sa": {"a": 0, "k": 0, "ix": 5}, "nm": "Transform"}
            ],
            "nm": "Checkmark",
            "np": 3,
            "cix": 2,
            "bm": 0,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
          }],
          "ip": 0,
          "op": 40,
          "st": 0,
          "bm": 0
        }],
        "markers": []
      };
      
      lottie.loadAnimation({
        container: document.getElementById('icon-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: iconAnimation
      });
    </script>
  `,
  交互式角色动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 384px; background: #f5f5f5; border-radius: 8px;">
      <div id="character-animation" style="width: 220px; height: 220px; transition: transform 0.12s ease-out;"></div>
    </div>
    ${LOTTIE_CDN}
    <script>
      // 内联交互式角色动画
      const characterAnimation = {
        "v": "5.7.6",
        "fr": 25,
        "ip": 0,
        "op": 40,
        "w": 150,
        "h": 150,
        "nm": "Character",
        "ddd": 0,
        "assets": [],
        "layers": [{
          "ddd": 0,
          "ind": 1,
          "ty": 4,
          "nm": "Head",
          "sr": 1,
          "ks": {
            "o": {"a": 0, "k": 100, "ix": 11},
            "r": {"a": 0, "k": 0, "ix": 10},
            "p": {"a": 0, "k": [75, 75, 0], "ix": 2},
            "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
            "s": {"a": 0, "k": [100, 100, 100], "ix": 6}
          },
          "ao": 0,
          "shapes": [{
            "ty": "gr",
            "it": [
              {"d": 1, "ty": "el", "s": {"a": 0, "k": [60, 60], "ix": 2}, "p": {"a": 0, "k": [0, 0], "ix": 3}, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false},
              {"ty": "fl", "c": {"a": 0, "k": [0.9, 0.7, 0.5, 1], "ix": 4}, "o": {"a": 0, "k": 100, "ix": 5}, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false},
              {"ty": "tr", "p": {"a": 0, "k": [0, 0], "ix": 2}, "a": {"a": 0, "k": [0, 0], "ix": 1}, "s": {"a": 0, "k": [100, 100], "ix": 3}, "r": {"a": 0, "k": 0, "ix": 6}, "o": {"a": 0, "k": 100, "ix": 7}, "sk": {"a": 0, "k": 0, "ix": 4}, "sa": {"a": 0, "k": 0, "ix": 5}, "nm": "Transform"}
            ],
            "nm": "Ellipse 1",
            "np": 3,
            "cix": 2,
            "bm": 0,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
          }, {
            "ty": "gr",
            "it": [
              {"d": 1, "ty": "el", "s": {"a": 0, "k": [10, 10], "ix": 2}, "p": {"a": 0, "k": [-20, -10], "ix": 3}, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false},
              {"ty": "fl", "c": {"a": 0, "k": [0, 0, 0, 1], "ix": 4}, "o": {"a": 0, "k": 100, "ix": 5}, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false},
              {"ty": "tr", "p": {"a": 0, "k": [0, 0], "ix": 2}, "a": {"a": 0, "k": [0, 0], "ix": 1}, "s": {"a": 0, "k": [100, 100], "ix": 3}, "r": {"a": 0, "k": 0, "ix": 6}, "o": {"a": 0, "k": 100, "ix": 7}, "sk": {"a": 0, "k": 0, "ix": 4}, "sa": {"a": 0, "k": 0, "ix": 5}, "nm": "Transform"}
            ],
            "nm": "Eye 1",
            "np": 3,
            "cix": 2,
            "bm": 0,
            "ix": 2,
            "mn": "ADBE Vector Group",
            "hd": false
          }, {
            "ty": "gr",
            "it": [
              {"d": 1, "ty": "el", "s": {"a": 0, "k": [10, 10], "ix": 2}, "p": {"a": 0, "k": [20, -10], "ix": 3}, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false},
              {"ty": "fl", "c": {"a": 0, "k": [0, 0, 0, 1], "ix": 4}, "o": {"a": 0, "k": 100, "ix": 5}, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false},
              {"ty": "tr", "p": {"a": 0, "k": [0, 0], "ix": 2}, "a": {"a": 0, "k": [0, 0], "ix": 1}, "s": {"a": 0, "k": [100, 100], "ix": 3}, "r": {"a": 0, "k": 0, "ix": 6}, "o": {"a": 0, "k": 100, "ix": 7}, "sk": {"a": 0, "k": 0, "ix": 4}, "sa": {"a": 0, "k": 0, "ix": 5}, "nm": "Transform"}
            ],
            "nm": "Eye 2",
            "np": 3,
            "cix": 2,
            "bm": 0,
            "ix": 3,
            "mn": "ADBE Vector Group",
            "hd": false
          }, {
            "ty": "gr",
            "it": [
              {"d": 1, "ty": "el", "s": {"a": 0, "k": [20, 10], "ix": 2}, "p": {"a": 0, "k": [0, 15], "ix": 3}, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false},
              {"ty": "fl", "c": {"a": 0, "k": [0.8, 0.3, 0.3, 1], "ix": 4}, "o": {"a": 0, "k": 100, "ix": 5}, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false},
              {"ty": "tr", "p": {"a": 0, "k": [0, 0], "ix": 2}, "a": {"a": 0, "k": [0, 0], "ix": 1}, "s": {"a": 0, "k": [100, 100], "ix": 3}, "r": {"a": 0, "k": 0, "ix": 6}, "o": {"a": 0, "k": 100, "ix": 7}, "sk": {"a": 0, "k": 0, "ix": 4}, "sa": {"a": 0, "k": 0, "ix": 5}, "nm": "Transform"}
            ],
            "nm": "Mouth",
            "np": 3,
            "cix": 2,
            "bm": 0,
            "ix": 4,
            "mn": "ADBE Vector Group",
            "hd": false
          }],
          "ip": 0,
          "op": 40,
          "st": 0,
          "bm": 0
        }],
        "markers": []
      };
      
      lottie.loadAnimation({
        container: document.getElementById('character-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: characterAnimation
      });
      document.addEventListener('mousemove', function (e) {
        var el = document.getElementById('character-animation');
        if (!el) return;
        var rect = el.getBoundingClientRect();
        var cx = rect.left + rect.width / 2;
        var cy = rect.top + rect.height / 2;
        var rotationX = ((e.clientY - cy) / rect.height) * 20;
        var rotationY = ((e.clientX - cx) / rect.width) * 20;
        el.style.transform = 'perspective(1000px) rotateX(' + (-rotationX) + 'deg) rotateY(' + rotationY + 'deg)';
      });
    </script>
  `,
  动态数据驱动动画: `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 384px; background: #f5f5f5; border-radius: 8px; gap: 14px; padding: 16px; box-sizing: border-box;">
      <div id="data-driven-animation" style="width: 200px; height: 200px;"></div>
      <p style="margin: 0; font-size: 14px; color: #444;">拖动滑块模拟数值变化，驱动播放速度（setSpeed）</p>
      <input type="range" id="data-driven-speed" min="0.25" max="2.5" step="0.05" value="1" style="width: 260px;">
      <span id="data-driven-label" style="font-size: 13px; color: #666;">速度 1.00×</span>
    </div>
    ${LOTTIE_CDN}
    <script>
      // 内联动态数据驱动动画
      const dataDrivenAnimation = {
        "v": "5.7.6",
        "fr": 25,
        "ip": 0,
        "op": 50,
        "w": 100,
        "h": 100,
        "nm": "Data Driven",
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
            "s": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [50, 50, 100]}, {"t": 25, "s": [150, 150, 100]}, {"t": 50, "s": [50, 50, 100]}], "ix": 6}
          },
          "ao": 0,
          "shapes": [{
            "ty": "gr",
            "it": [
              {"d": 1, "ty": "el", "s": {"a": 0, "k": [40, 40], "ix": 2}, "p": {"a": 0, "k": [0, 0], "ix": 3}, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false},
              {"ty": "fl", "c": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0.2, 0.6, 0.9, 1]}, {"t": 25, "s": [0.9, 0.6, 0.2, 1]}, {"t": 50, "s": [0.2, 0.6, 0.9, 1]}], "ix": 4}, "o": {"a": 0, "k": 100, "ix": 5}, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false},
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
      
      var dataAnim = lottie.loadAnimation({
        container: document.getElementById('data-driven-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: dataDrivenAnimation
      });
      var slider = document.getElementById('data-driven-speed');
      var label = document.getElementById('data-driven-label');
      function syncSpeed() {
        var v = parseFloat(slider.value);
        dataAnim.setSpeed(v);
        label.textContent = '速度 ' + v.toFixed(2) + '×';
      }
      dataAnim.addEventListener('DOMLoaded', syncSpeed);
      slider.addEventListener('input', syncSpeed);
    </script>
  `,
  多动画序列: `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 384px; background: #f5f5f5; border-radius: 8px; gap: 20px;">
      <div id="sequence-animation" style="width: 200px; height: 200px;"></div>
      <button type="button" id="play-sequence" style="padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 6px; cursor: pointer;">播放片段</button>
    </div>
    ${LOTTIE_CDN}
    <script>
      // 内联多动画序列
      const sequenceAnimationData = {
        "v": "5.7.6",
        "fr": 25,
        "ip": 0,
        "op": 60,
        "w": 100,
        "h": 100,
        "nm": "Sequence",
        "ddd": 0,
        "assets": [],
        "layers": [{
          "ddd": 0,
          "ind": 1,
          "ty": 4,
          "nm": "Square",
          "sr": 1,
          "ks": {
            "o": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0]}, {"t": 10, "s": [100]}, {"t": 50, "s": [100]}, {"t": 60, "s": [0]}], "ix": 11},
            "r": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0]}, {"t": 30, "s": [180]}, {"t": 60, "s": [360]}], "ix": 10},
            "p": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [25, 25, 0]}, {"t": 30, "s": [75, 75, 0]}, {"t": 60, "s": [25, 25, 0]}], "ix": 2},
            "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
            "s": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [50, 50, 100]}, {"t": 15, "s": [100, 100, 100]}, {"t": 45, "s": [100, 100, 100]}, {"t": 60, "s": [50, 50, 100]}], "ix": 6}
          },
          "ao": 0,
          "shapes": [{
            "ty": "gr",
            "it": [
              {"d": 1, "ty": "rc", "s": {"a": 0, "k": [40, 40], "ix": 2}, "p": {"a": 0, "k": [0, 0], "ix": 3}, "r": {"a": 0, "k": 4, "ix": 4}, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false},
              {"ty": "fl", "c": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0.2, 0.6, 0.9, 1]}, {"t": 30, "s": [0.9, 0.6, 0.2, 1]}, {"t": 60, "s": [0.2, 0.6, 0.9, 1]}], "ix": 4}, "o": {"a": 0, "k": 100, "ix": 5}, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false},
              {"ty": "tr", "p": {"a": 0, "k": [0, 0], "ix": 2}, "a": {"a": 0, "k": [0, 0], "ix": 1}, "s": {"a": 0, "k": [100, 100], "ix": 3}, "r": {"a": 0, "k": 0, "ix": 6}, "o": {"a": 0, "k": 100, "ix": 7}, "sk": {"a": 0, "k": 0, "ix": 4}, "sa": {"a": 0, "k": 0, "ix": 5}, "nm": "Transform"}
            ],
            "nm": "Rectangle 1",
            "np": 3,
            "cix": 2,
            "bm": 0,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
          }],
          "ip": 0,
          "op": 60,
          "st": 0,
          "bm": 0
        }],
        "markers": []
      };
      
      var sequenceAnimation = lottie.loadAnimation({
        container: document.getElementById('sequence-animation'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: sequenceAnimationData
      });
      document.getElementById('play-sequence').addEventListener('click', function () {
        sequenceAnimation.stop();
        sequenceAnimation.playSegments([0, 60], true);
      });
    </script>
  `,
  响应式动画: `
    <div style="display: flex; align-items: center; justify-content: center; height: 384px; background: #f5f5f5; border-radius: 8px; padding: 16px; box-sizing: border-box;">
      <div id="responsive-animation" style="width: 100%; max-width: 320px; height: 200px;"></div>
    </div>
    ${LOTTIE_CDN}
    <script>
      // 内联响应式动画
      const responsiveAnimationData = {
        "v": "5.7.6",
        "fr": 25,
        "ip": 0,
        "op": 50,
        "w": 300,
        "h": 200,
        "nm": "Responsive",
        "ddd": 0,
        "assets": [],
        "layers": [{
          "ddd": 0,
          "ind": 1,
          "ty": 4,
          "nm": "Wave",
          "sr": 1,
          "ks": {
            "o": {"a": 0, "k": 100, "ix": 11},
            "r": {"a": 0, "k": 0, "ix": 10},
            "p": {"a": 0, "k": [150, 100, 0], "ix": 2},
            "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
            "s": {"a": 0, "k": [100, 100, 100], "ix": 6}
          },
          "ao": 0,
          "shapes": [{
            "ty": "gr",
            "it": [
              {"d": 1, "ty": "sh", "ks": {"a": 1, "k": [{"i": {"x": [[0, 0.833], [0, 0.833], [0, 0.833], [0, 0.833], [0, 0.833], [0, 0.833], [0, 0.833], [0, 0.833], [0, 0.833], [0, 0.833]]}, "o": {"x": [[0, 0.167], [0, 0.167], [0, 0.167], [0, 0.167], [0, 0.167], [0, 0.167], [0, 0.167], [0, 0.167], [0, 0.167], [0, 0.167]]}, "t": 0, "s": {"i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[0, 100], [30, 50], [60, 150], [90, 50], [120, 150], [150, 50], [180, 150], [210, 50], [240, 150], [300, 100]], "c": false}}, "t": 50, "s": {"i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[0, 100], [30, 150], [60, 50], [90, 150], [120, 50], [150, 150], [180, 50], [210, 150], [240, 50], [300, 100]], "c": false}}], "ix": 2}, "nm": "Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false},
              {"ty": "fl", "c": {"a": 0, "k": [0.2, 0.6, 0.9, 1], "ix": 4}, "o": {"a": 0, "k": 100, "ix": 5}, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false},
              {"ty": "tr", "p": {"a": 0, "k": [0, 0], "ix": 2}, "a": {"a": 0, "k": [0, 0], "ix": 1}, "s": {"a": 0, "k": [100, 100], "ix": 3}, "r": {"a": 0, "k": 0, "ix": 6}, "o": {"a": 0, "k": 100, "ix": 7}, "sk": {"a": 0, "k": 0, "ix": 4}, "sa": {"a": 0, "k": 0, "ix": 5}, "nm": "Transform"}
            ],
            "nm": "Wave",
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
      
      var responsiveAnimation = lottie.loadAnimation({
        container: document.getElementById('responsive-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: responsiveAnimationData
      });
      function resizeAnimation() {
        responsiveAnimation.resize();
      }
      window.addEventListener('resize', resizeAnimation);
      responsiveAnimation.addEventListener('DOMLoaded', resizeAnimation);
    </script>
  `,
  自定义控制动画: `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 384px; background: #f5f5f5; border-radius: 8px; gap: 16px; padding: 16px; box-sizing: border-box;">
      <div id="custom-animation" style="width: 200px; height: 200px;"></div>
      <input type="range" id="animation-progress" min="0" max="1" step="0.01" value="0" style="width: 260px;">
      <div style="display: flex; gap: 10px;">
        <button type="button" id="play-custom" style="padding: 8px 16px; background: #27ae60; color: white; border: none; border-radius: 6px; cursor: pointer;">播放</button>
        <button type="button" id="pause-custom" style="padding: 8px 16px; background: #f39c12; color: white; border: none; border-radius: 6px; cursor: pointer;">暂停</button>
      </div>
    </div>
    ${LOTTIE_CDN}
    <script>
      // 内联自定义控制动画
      const customAnimationData = {
        "v": "5.7.6",
        "fr": 25,
        "ip": 0,
        "op": 60,
        "w": 100,
        "h": 100,
        "nm": "Custom Control",
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
            "r": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0]}, {"t": 60, "s": [360]}], "ix": 10},
            "p": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [50, 20, 0]}, {"t": 20, "s": [80, 50, 0]}, {"t": 40, "s": [50, 80, 0]}, {"t": 60, "s": [20, 50, 0]}], "ix": 2},
            "a": {"a": 0, "k": [0, 0, 0], "ix": 1},
            "s": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [50, 50, 100]}, {"t": 30, "s": [150, 150, 100]}, {"t": 60, "s": [50, 50, 100]}], "ix": 6}
          },
          "ao": 0,
          "shapes": [{
            "ty": "gr",
            "it": [
              {"d": 1, "ty": "el", "s": {"a": 0, "k": [30, 30], "ix": 2}, "p": {"a": 0, "k": [0, 0], "ix": 3}, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false},
              {"ty": "fl", "c": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0.2, 0.6, 0.9, 1]}, {"t": 20, "s": [0.9, 0.6, 0.2, 1]}, {"t": 40, "s": [0.2, 0.8, 0.3, 1]}, {"t": 60, "s": [0.8, 0.2, 0.4, 1]}], "ix": 4}, "o": {"a": 0, "k": 100, "ix": 5}, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false},
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
          "op": 60,
          "st": 0,
          "bm": 0
        }],
        "markers": []
      };
      
      var customAnimation = lottie.loadAnimation({
        container: document.getElementById('custom-animation'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: customAnimationData
      });
      customAnimation.addEventListener('DOMLoaded', function () {
        var progressEl = document.getElementById('animation-progress');
        progressEl.addEventListener('input', function () {
          var progress = parseFloat(this.value);
          var totalFrames = customAnimation.totalFrames;
          if (totalFrames > 0) {
            customAnimation.goToAndStop(progress * (totalFrames - 1), true);
          }
        });
        document.getElementById('play-custom').addEventListener('click', function () {
          customAnimation.play();
        });
        document.getElementById('pause-custom').addEventListener('click', function () {
          customAnimation.pause();
        });
      });
    </script>
  `,
};
