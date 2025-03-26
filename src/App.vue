<script setup>
// 组件逻辑
</script>

<template>
  <el-container class="app-container">
    <el-header>
      <nav class="nav-menu">
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于我们</router-link>
        <router-link to="/product">产品</router-link>
        <router-link to="/license">许可证</router-link>
      </nav>
    </el-header>
    
    <el-main>
      <router-view></router-view>
    </el-main>
    
    <el-footer>
      <p>&copy; 2024 您的公司名称. All rights reserved.</p>
    </el-footer>
  </el-container>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
}

.nav-menu {
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 1rem;
}

.nav-menu a {
  color: #333;
  text-decoration: none;
  font-size: 16px;
}

.nav-menu a:hover {
  color: #409EFF;
}

.el-header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.el-footer {
  text-align: center;
  padding: 20px;
  background-color: #f5f7fa;
}
</style>
