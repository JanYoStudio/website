<template>
  <div class="about">
    <!-- Banner部分 -->
    <div class="banner-section">
      <div class="banner-content">
        <h1>关于我们</h1>
        <p class="en">About Us</p>
      </div>
    </div>

    <!-- 工作室成员部分 -->
    <div class="team-section">
      <h2>工作室成员</h2>
      <el-row :gutter="20">
        <el-col :span="8" v-for="member in teamMembers" :key="member.name">
          <el-card class="team-card">
            <el-avatar :size="120" :src="member.avatar" />
            <h3>{{ member.name }}</h3>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!-- 工作室介绍部分 -->
    <div class="intro-section">
      <h2>酱油工作室</h2>
      <div class="intro-content">
        <p>「JanYo Studio」工作室成立于2014年11月，汇聚多方技术人才，以兴趣作前进的动力；以创新作前进的目标。我们致力推动科技与时代的融合，在最好的时代，汇聚当下最优的资源，献上最好的科技体验。</p>
        <p>「JanYo Studio」工作室专业从事Android应用程序开发，目前已有多个成功案例，均可在官网浏览并下载。往后将会有更多的惊喜等待着我们去发掘。</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const teamMembers = ref([
  {
    name: 'Dick Light',
    avatar: '/images/dl.jpeg'
  },
  {
    name: 'liuyuhong',
    avatar: '/images/lyh.jpeg'
  },
  {
    name: '艾佳琛',
    avatar: '/images/cg.jpeg'
  },
  {
    name: 'Mystery0',
    avatar: '/images/my.jpeg'
  },
  {
    name: 'Gsoy',
    avatar: '/images/gs.jpeg'
  }
])
</script>

<style scoped>
.about {
  min-height: 100vh;
}

.banner-section {
  height: 300px;
  background: linear-gradient(135deg, #409EFF 0%, #36cfc9 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  margin-bottom: 60px;
}

.banner-content h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
}

.banner-content .en {
  font-size: 1.2em;
  opacity: 0.8;
}

.team-section {
  padding: 60px 0;
  text-align: center;
}

.team-section h2 {
  margin-bottom: 40px;
  color: #333;
}

.team-card {
  text-align: center;
  margin-bottom: 20px;
}

.team-card h3 {
  margin-top: 15px;
  color: #333;
}

.intro-section {
  padding: 60px 0;
  background-color: #f5f7fa;
  text-align: center;
}

.intro-section h2 {
  margin-bottom: 40px;
  color: #333;
}

.intro-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.intro-content p {
  margin-bottom: 20px;
  line-height: 1.8;
  color: #666;
}
</style> 