# Animation Case System

前端动效案例库（Vue 3 + Vite），当前按 `CSS3 / SVG / Canvas / GSAP` 维护案例与演示。

## 开发命令

- 安装依赖：`npm install`
- 本地启动：`npm run dev`
- 生产构建：`npm run build`

## 当前数据结构

- 动画数据：`src/data/animations/*.js`
- 演示数据：`src/data/demos/*Demos.js`
- 数据聚合：`src/data/caseList.js`
- 菜单构建：`src/views/CaseList.vue`

`caseList` 中每个案例对象结构：

- `id`：数字 ID
- `title`：案例标题（用于组织案例）
- `category`：分类（`css3 | svg | canvas | gsap`）
- `cover`：封面图 URL
- `description`：案例说明
- `effects`：效果列表（`name + code`）

## 菜单说明（当前实现）

菜单为 3 级结构：

1. 分类（CSS3 / SVG / Canvas / GSAP）
2. 效果分组（根据效果名自动归类）
3. 具体效果

点击第 3 级效果会进入详情页并定位到对应效果。

## 录入新案例

1. 在对应 `src/data/animations/*.js` 增加 `effects` 条目。
2. 在对应 `src/data/demos/*Demos.js` 增加同名 demo（键名必须与效果名完全一致）。
3. 本地运行后在菜单中检查分组是否符合预期。

参考模板：`src/data/templates/animationCaseTemplate.js`  
详细规范：`docs/animation-library-template.md`
