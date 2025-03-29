<template>
  <el-container class="app-container">
    <el-header>
      <nav class="nav-menu">
        <router-link to="/">首页</router-link>
        <router-link to="/product">产品</router-link>
        <router-link to="/license">许可证</router-link>
        <router-link to="/about">关于</router-link>
      </nav>
    </el-header>

    <el-main>
      <router-view></router-view>
    </el-main>

    <el-footer height="120px">
      <p>&copy; 2025 酱油工作室. All rights reserved.</p>
      <p>
        <a href="https://beian.miit.gov.cn/" target="_blank" class="beian-link">湘ICP备2025109058号-1</a>
      </p>
    </el-footer>
  </el-container>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
}

.nav-menu {
  display: flex;
  gap: 64px;
  justify-content: center;
  padding: 1rem;
}

.nav-menu a {
  color: #333;
  text-decoration: none;
  font-size: 20px;
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
  background-color: #f5f7fa;
}

.el-main {
  padding: 0px;
}

.beian-link {
  color: #666;
  text-decoration: none;
  margin-left: 10px;
}

.beian-link:hover {
  color: #409EFF;
}
</style>
