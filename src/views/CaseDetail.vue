<template>
  <div class="case-detail">
    <div v-if="caseItem && selectedEffect" class="detail-content">
      <!-- 面包屑导航 -->
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>{{ caseItem.title }}</el-breadcrumb-item>
          <el-breadcrumb-item>{{ selectedEffect.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      
      <!-- 动画演示区域 -->
      <div class="effect-demo">
        <iframe v-if="caseItem.category === 'canvas' || caseItem.category === 'threejs' || caseItem.category === 'interactive' || caseItem.category === 'gsap'" class="demo-content" :srcdoc="getDemoHTML(selectedEffect.name, caseItem.category)" style="width: 100%; height: 400px; border: none; border-radius: 8px;"></iframe>
        <div v-else-if="caseItem.category === 'lottie'" class="demo-content lottie-inline-demo">
          <div ref="lottieContainerRef" class="lottie-container"></div>
        </div>
        <div v-else class="demo-content" v-html="getDemoHTML(selectedEffect.name, caseItem.category)"></div>
      </div>
      
      <!-- 代码区域 -->
      <div class="code-section">
        <div class="code-header" @click="toggleCode">
          <span class="code-language">代码</span>
          <span class="code-toggle">{{ codeVisible ? '收起' : '展开' }}</span>
        </div>
        <pre v-if="codeVisible"><code>{{ selectedEffect.code }}</code></pre>
      </div>
    </div>
    <div v-else class="empty">
      <p>加载中...</p>
      <button class="el-button el-button--primary" @click="goBack">返回列表</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed, nextTick, onBeforeUnmount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { caseData } from '../data/caseList'
import { getDemoHTML } from '../data/demos/demoData'
import lottie from 'lottie-web'
import loadingJson from '../data/json/loading.json'

const router = useRouter()
const route = useRoute()
const caseItem = ref(null)
const codeVisible = ref(false)
const selectedEffectIndex = ref(0)
const lottieContainerRef = ref(null)
let lottieInstance = null

onMounted(() => {
  loadCaseDetail()
})

// 监听路由参数变化
watch(() => route.params.id, () => {
  loadCaseDetail()
})

watch(() => route.query.effect, () => {
  loadCaseDetail()
})

// 加载案例详情
const loadCaseDetail = async () => {
  try {
    const id = Number(route.params.id)
    caseItem.value = caseData.find((item) => item.id === id)
    
    // 获取效果索引
    if (route.query.effect) {
      selectedEffectIndex.value = Number(route.query.effect)
    } else {
      selectedEffectIndex.value = 0
    }
    await nextTick()
    mountLottieIfNeeded()
  } catch (error) {
    console.error('加载案例详情失败:', error)
  }
}

const destroyLottie = () => {
  if (lottieInstance) {
    lottieInstance.destroy()
    lottieInstance = null
  }
}

const mountLottieIfNeeded = () => {
  destroyLottie()
  if (!caseItem.value || caseItem.value.category !== 'lottie' || !lottieContainerRef.value) return
  lottieContainerRef.value.innerHTML = ''
  lottieInstance = lottie.loadAnimation({
    container: lottieContainerRef.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: loadingJson,
    rendererSettings: { preserveAspectRatio: 'xMidYMid meet' },
  })
}

// 选中的效果
const selectedEffect = computed(() => {
  if (caseItem.value && caseItem.value.effects) {
    return caseItem.value.effects[selectedEffectIndex.value] || caseItem.value.effects[0]
  }
  return null
})

// 切换代码块显示/隐藏
const toggleCode = () => {
  codeVisible.value = !codeVisible.value
}

// 返回列表
const goBack = () => {
  router.push('/')
}

watch(selectedEffectIndex, async () => {
  await nextTick()
  mountLottieIfNeeded()
})

onBeforeUnmount(() => {
  destroyLottie()
})
</script>

<style lang="scss" scoped>
.detail-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}


.el-breadcrumb {
  font-size: 14px;
}

.effect-demo {
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  
  .demo-content {
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
  }
}

.lottie-inline-demo {
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.lottie-container {
  width: 260px;
  height: 260px;
}

.lottie-tip {
  margin: 0;
  color: #6b7280;
  font-size: 14px;
}

.code-section {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.code-header {
  background-color: #f0f2f5;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #e6e8eb;
  }
  
  .code-language {
    font-size: 14px;
    color: #666;
    font-family: 'Courier New', Courier, monospace;
  }
  
  .code-toggle {
    font-size: 14px;
    color: #409eff;
    font-weight: 500;
  }
}

pre {
  background-color: #f5f5f5;
  padding: 24px;
  margin: 0;
  overflow-x: auto;
  
  code {
    background-color: transparent;
    padding: 0;
    font-size: 14px;
    font-family: 'Courier New', Courier, monospace;
    color: #333;
  }
}

.empty {
  text-align: center;
  padding: 100px 0;
  button {
    margin-top: 16px;
  }
}
</style>