<template>
  <el-container class="app-container">
    <el-header>
      <NavBar />
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

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.el-header {
  padding: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.el-footer {
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
}

.el-main {
  flex: 1;
  padding: 80px 20px 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.footer-content {
  text-align: center;
  color: #666;
  font-size: 14px;
}

.beian-link {
  color: #666;
  text-decoration: none;
  margin-left: 10px;
}

.beian-link:hover {
  color: #409EFF;
}

@media screen and (max-width: 768px) {
  .el-main {
    padding: 60px 10px 10px;
  }

  .el-footer {
    padding: 15px;
  }

  .footer-content {
    font-size: 12px;
  }
}
</style>
