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
  
  // 按分类分组
  const groupedData = {}
  caseData.forEach(item => {
    if (!groupedData[item.category]) {
      groupedData[item.category] = []
    }
    groupedData[item.category].push(item)
  })
  
  // 构建树形结构
  animationCategories.forEach(category => {
    if (category.id === 'all') return
    
    const categoryNode = {
      id: category.id,
      name: category.name,
      children: groupedData[category.id]?.map(item => ({
        id: item.id,
        name: item.title,
        children: item.effects.map((effect, index) => ({
          id: `${item.id}-effect-${index}`,
          name: effect.name,
          effect: effect,
          parentId: item.id
        }))
      })) || []
    }
    
    tree.push(categoryNode)
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