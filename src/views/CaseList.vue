<template>
  <div class="case-list">
    <div class="header">
      <h2 class="title">动画案例库</h2>
    </div>

    <!-- 树形菜单 -->
    <div class="tree-menu">
      <el-tree
        :data="treeData"
        node-key="id"
        :props="treeProps"
        @node-click="handleNodeClick"
        default-expand-all
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { caseData, animationCategories } from '../data/caseList'

const router = useRouter()

// 树形数据结构
const treeData = ref([])

// 树形菜单配置
const treeProps = {
  children: 'children',
  label: 'name'
}

// 构建树形数据
const buildTreeData = () => {
  const tree = []
  const groupedByCategory = {}
  caseData.forEach(item => {
    if (!groupedByCategory[item.category]) groupedByCategory[item.category] = []
    groupedByCategory[item.category].push(item)
  })

  const getEffectGroup = (categoryId, effectName) => {
    const name = effectName.toLowerCase()
    if (categoryId === 'css3') {
      if (name.includes('hover') || name.includes('按钮') || name.includes('翻转')) return '交互反馈'
      if (name.includes('入') || name.includes('滑动') || name.includes('渐')) return '入场过渡'
      if (name.includes('滤镜') || name.includes('模糊') || name.includes('灰度')) return '视觉处理'
      if (name.includes('旋转') || name.includes('缩放') || name.includes('变换') || name.includes('关键帧')) return '变换与关键帧'
      return '其他效果'
    }

    if (categoryId === 'svg') {
      if (name.includes('路径') || name.includes('描边') || name.includes('logo')) return '路径与线稿'
      if (name.includes('加载') || name.includes('进度')) return '加载与进度'
      if (name.includes('滤镜') || name.includes('阴影')) return '滤镜与特效'
      if (name.includes('变形') || name.includes('变换')) return '变形动画'
      return '其他效果'
    }

    if (categoryId === 'canvas') {
      if (name.includes('粒子') || name.includes('鼠标') || name.includes('拖尾')) return '粒子与交互'
      if (name.includes('图') || name.includes('波形') || name.includes('数据') || name.includes('柱状')) return '数据可视化'
      if (name.includes('碰撞') || name.includes('弹跳') || name.includes('物理')) return '物理运动'
      if (name.includes('3d')) return '三维与空间'
      return '基础运动'
    }

    if (categoryId === 'gsap') {
      if (name.includes('时间线') || name.includes('hero')) return '时间轴编排'
      if (name.includes('滚动') || name.includes('章节')) return '滚动叙事'
      if (name.includes('stagger') || name.includes('路径') || name.includes('缓动')) return '控制与技巧'
      return '基础属性'
    }

    if (categoryId === 'lottie') {
      if (name.includes('加载') || name.includes('空状态')) return '加载与状态'
      if (name.includes('按钮') || name.includes('交互') || name.includes('控制')) return '交互反馈'
      if (name.includes('响应式') || name.includes('数据') || name.includes('序列')) return '编排与适配'
      return '基础播放'
    }

    return '其他效果'
  }

  const groupOrder = {
    css3: ['交互反馈', '入场过渡', '变换与关键帧', '视觉处理', '其他效果'],
    svg: ['路径与线稿', '加载与进度', '变形动画', '滤镜与特效', '其他效果'],
    canvas: ['粒子与交互', '数据可视化', '物理运动', '三维与空间', '基础运动', '其他效果'],
    gsap: ['时间轴编排', '滚动叙事', '控制与技巧', '基础属性', '其他效果'],
    lottie: ['加载与状态', '交互反馈', '编排与适配', '基础播放', '其他效果']
  }

  animationCategories.forEach(category => {
    if (category.id === 'all') return
    const items = groupedByCategory[category.id] || []
    const groups = {}
    items.forEach(item => {
      item.effects.forEach((effect, index) => {
        const groupName = getEffectGroup(category.id, effect.name)
        if (!groups[groupName]) groups[groupName] = []
        groups[groupName].push({
          id: `${item.id}-effect-${index}`,
          name: effect.name,
          effect,
          parentId: item.id
        })
      })
    })

    const orderedGroupNames = groupOrder[category.id] || Object.keys(groups)
    const children = orderedGroupNames
      .filter((groupName) => (groups[groupName] || []).length > 0)
      .map((groupName) => ({
        id: `${category.id}-${groupName}`,
        name: groupName,
        children: groups[groupName]
      }))

    if (children.length > 0) {
      tree.push({
        id: category.id,
        name: category.name,
        children
      })
    }
  })

  return tree
}

// 处理节点点击
const handleNodeClick = (data) => {
  // 如果是效果节点，跳转到详情页并传递效果索引
  if (data.effect && data.parentId) {
    const effectIndex = data.id.split('-').pop()
    router.push(`/detail/${data.parentId}?effect=${effectIndex}`)
  }
  // 如果是动画类别节点，跳转到详情页
  else if (data.id && !data.children) {
    router.push(`/detail/${data.id}`)
  }
}

onMounted(() => {
  treeData.value = buildTreeData()
})
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  padding: 16px;
  background: #fff;
  z-index: 10;
  .title {
    font-size: 18px;
    color: #333;
  }
}

.tree-menu {
  padding: 0 16px 16px;
  .el-tree {
    background: transparent;
    .el-tree-node {
      margin: 4px 0;
      .el-tree-node__content {
        height: 36px;
        line-height: 36px;
        border-radius: 4px;
        &:hover {
          background-color: #ecf5ff;
        }
      }
    }
    .el-tree-node.is-current > .el-tree-node__content {
      background-color: #ecf5ff;
      color: #409eff;
    }
  }
}
</style>