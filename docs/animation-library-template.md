# 动效库模板（当前项目版）

## 1. 适用范围

本文档对应当前仓库实际实现，当前使用分类为：

- `css3`
- `svg`
- `canvas`
- `gsap`

## 2. 目录结构（当前）

```text
src/
  data/
    animations/
      css3.js
      svg.js
      canvas.js
      gsap.js
    demos/
      css3Demos.js
      svgDemos.js
      canvasDemos.js
      gsapDemos.js
    caseList.js
    templates/
      animationCaseTemplate.js
src/
  views/
    CaseList.vue
```

## 3. 数据结构规范

动画案例对象（`src/data/animations/*.js`）：

- `id: number`
- `title: string`
- `category: "css3" | "svg" | "canvas" | "gsap"`
- `cover: string`
- `description: string`
- `effects: Array<{ name: string; code: string; meta?: object }>`

演示对象（`src/data/demos/*Demos.js`）：

- 以效果名作为 key
- value 为 HTML 字符串（可内联 style/script）
- key 必须与 `effects[].name` 完全一致

## 4. 菜单与分组规则（当前）

菜单是 3 级：

1. 分类
2. 效果分组（由 `CaseList.vue` 按效果名关键词归类）
3. 具体效果

分组逻辑集中在 `src/views/CaseList.vue` 的 `getEffectGroup()`，新增效果后建议检查是否分到预期分组。

## 5. 录入流程

1. 在对应 `src/data/animations/*.js` 里新增效果（`name + code`）。
2. 在对应 `src/data/demos/*Demos.js` 里新增同名 demo。
3. 运行 `npm run dev`，在菜单中验证分组与效果语义。
4. 如果分组不合理，调整 `CaseList.vue` 的关键词规则。

## 6. 质量检查清单

- **命名一致**：`effects[].name` 与 demo key 完全一致。
- **语义一致**：效果名、代码片段、演示行为一致。
- **可运行性**：demo 在详情页可执行，无控制台错误。
- **性能**：优先 `transform/opacity`，Canvas 控制粒子/循环规模。
- **可维护性**：避免同名不同实现；避免重复案例。
