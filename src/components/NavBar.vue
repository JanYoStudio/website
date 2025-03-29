<template>
    <nav class="nav-menu">
        <div class="nav-brand">
            <router-link to="/" class="logo">
                <img src="/images/logo.svg" alt="酱油工作室" />
            </router-link>
        </div>

        <!-- 移动端菜单按钮 -->
        <el-button class="mobile-menu-btn" @click="showMobileMenu = !showMobileMenu">
            <el-icon>
                <Menu />
            </el-icon>
        </el-button>

        <!-- 桌面端导航 -->
        <div class="desktop-menu">
            <el-tabs v-model="activeTab" @tab-click="handleTabClick">
                <el-tab-pane name="home" label="首页" />
                <el-tab-pane name="product" label="产品" />
                <el-tab-pane name="license" label="许可证" />
                <el-tab-pane name="about" label="关于" />
            </el-tabs>
        </div>

        <!-- 移动端导航 -->
        <el-drawer v-model="showMobileMenu" direction="rtl" size="80%" :with-header="false" class="mobile-drawer">
            <div class="mobile-menu">
                <el-tabs v-model="activeTab" @tab-click="handleTabClick" class="mobile-tabs">
                    <el-tab-pane name="home" label="首页" />
                    <el-tab-pane name="product" label="产品" />
                    <el-tab-pane name="license" label="许可证" />
                    <el-tab-pane name="about" label="关于" />
                </el-tabs>
            </div>
        </el-drawer>
    </nav>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Menu } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const showMobileMenu = ref(false)
const activeTab = ref('home')

// 根据当前路由设置激活的标签
const setActiveTab = () => {
    const path = route.path
    if (path === '/') activeTab.value = 'home'
    else if (path === '/product') activeTab.value = 'product'
    else if (path === '/license') activeTab.value = 'license'
    else if (path === '/about') activeTab.value = 'about'
}

// 监听路由变化
watch(() => route.path, setActiveTab, { immediate: true })

// 处理标签点击
const handleTabClick = (tab) => {
    const path = '/' + (tab.props.name === 'home' ? '' : tab.props.name)
    router.push(path)
    showMobileMenu.value = false
}
</script>

<style scoped>
.nav-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.nav-brand {
    display: flex;
    align-items: center;
    height: var(--el-header-height);
}

.logo {
    display: flex;
    align-items: center;
    text-decoration: none;
}

.logo img {
    height: 40px;
    width: auto;
}

.desktop-menu {
    display: flex;
    align-items: center;
}

.desktop-menu :deep(.el-tabs__header) {
    margin: 0px;
}

.desktop-menu :deep(.el-tabs) {
    --el-tabs-header-height: 40px;
}

.desktop-menu :deep(.el-tabs__nav-wrap::after) {
    display: none;
}

.desktop-menu :deep(.el-tabs__item) {
    font-size: 16px;
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
}

.mobile-menu-btn {
    display: none;
    font-size: 24px;
    padding: 8px;
    height: calc(var(--el-header-height) - 16px);
}

.mobile-drawer {
    display: none;
}

.mobile-menu {
    padding: 20px;
}

.mobile-tabs {
    --el-tabs-header-height: auto;
}

.mobile-tabs :deep(.el-tabs__nav-wrap) {
    flex-direction: column;
}

.mobile-tabs :deep(.el-tabs__item) {
    font-size: 18px;
    padding: 15px 0;
    height: auto;
    line-height: 1.5;
}

.mobile-tabs :deep(.el-tabs__nav-wrap::after) {
    display: none;
}

.mobile-tabs :deep(.el-tabs__nav) {
    gap: 10px;
}

@media screen and (max-width: 768px) {
    .desktop-menu {
        display: none;
    }

    .mobile-menu-btn {
        display: block;
    }

    .mobile-drawer {
        display: block;
    }

    .nav-menu {
        padding: 0 10px;
    }

    .logo img {
        height: 32px;
    }
}
</style>