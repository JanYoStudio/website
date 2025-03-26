<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-carousel height="500px">
          <el-carousel-item v-for="item in carouselItems" :key="item.id">
            <img :src="item.image" :alt="item.title" class="carousel-image">
            <div class="carousel-content">
              <h2>{{ item.title }}</h2>
              <p>{{ item.description }}</p>
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>

    <div class="timeline-section">
      <el-timeline>
        <el-timeline-item
          v-for="(item, index) in timelineItems"
          :key="index"
          :timestamp="item.date"
          placement="top"
        >
          <el-card class="timeline-card">
            <p v-html="item.content"></p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>

    <div class="team-section">
      <h2 class="section-title">The Team</h2>
      <el-row :gutter="20">
        <el-col :span="6" v-for="member in teamMembers" :key="member.name">
          <el-card class="team-card">
            <el-avatar :size="120" :src="member.avatar" />
            <h3>{{ member.name }}</h3>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const carouselItems = ref([
  {
    id: 1,
    title: 'JanYo Studio',
    description: '创新科技，引领未来',
    image: '/images/banner1.jpg'
  },
  {
    id: 2,
    title: '我们的产品',
    description: '优质服务，值得信赖',
    image: '/images/banner2.jpg'
  }
])

const timelineItems = ref([
  {
    date: '2014年11月',
    content: 'JanYo Studio 成立，取名 "酱油工作室" 。'
  },
  {
    date: '2017年5月11日',
    content: 'liuyuhong 提出开发 JY Share Android客户端，旨在解决QQ中安装包分享问题。'
  },
  {
    date: '2017年5月29日',
    content: 'Mystery0 重构 JY Share demo代码，正式开始开发。'
  },
  {
    date: '2017年6月22日',
    content: 'JY Share 上架 Google Play。'
  },
  {
    date: '2017年8月',
    content: 'liuyuhong 提出开发 WhatAnime （原为 WhatAnime.ga ，现为 <a href="https://trace.moe">Trace.moe</a> ）的Android客户端。'
  },
  {
    date: '2017年8月17日',
    content: 'WhatAnime push <a href="https://github.com/JanYoStudio/WhatAnime/commit/ac95397061f5b9a4f6dee84a33b31a6cd76186ef">第一次提交</a>到 <a href="https://github.com/JanYoStudio/WhatAnime">GitHub</a> 。'
  },
  {
    date: '2017年9月17日',
    content: 'WhatAnime 1.0 版本上架 <a href="https://play.google.com/store/apps/details?id=pw.janyo.whatanime">Google Play</a>。'
  },
  {
    date: '2017年10月27日',
    content: 'WhatAnime 在 <a href="https://play.google.com/store/apps/details?id=pw.janyo.whatanime">Google Play</a> 下载安装量超过 100。'
  },
  {
    date: '2017年12月22日',
    content: 'WhatAnime 在 <a href="https://play.google.com/store/apps/details?id=pw.janyo.whatanime">Google Play</a> 下载安装量超过 500。'
  },
  {
    date: '2018年1月16日',
    content: '因 JY Share 代码丢失，加上部分代码不合理，JY Share 停止开发，转而进行开发 JanYo Share (2.0)。'
  },
  {
    date: '2018年2月',
    content: 'JanYo Share上架 <a href="https://www.coolapk.com/apk/pw.janyo.janyoshare">酷安网</a> 。'
  },
  {
    date: '2018年3月15日',
    content: 'WhatAnime 在 <a href="https://play.google.com/store/apps/details?id=pw.janyo.whatanime">Google Play</a> 下载安装量超过 1000。'
  },
  {
    date: '2019年4月27日',
    content: 'JanYo Share 在 <a href="https://play.google.com/store/apps/details?id=pw.janyo.janyoshare">Google Play</a> 下载安装量超过 100。'
  },
  {
    date: '2019年5月25日',
    content: 'WhatAnime 在 <a href="https://play.google.com/store/apps/details?id=pw.janyo.whatanime">Google Play</a> 下载安装量超过 5000。'
  },
  {
    date: '2020年7月',
    content: 'WhatAnime 在 <a href="https://play.google.com/store/apps/details?id=pw.janyo.whatanime">Google Play</a> 下载安装量超过 10000。'
  },
  {
    date: '2020年9月8日',
    content: '因为实在没有空闲时间用于处理JanYo Share的更新，宣布JanYo Share停止开发。'
  }
])

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
.home {
  padding: 20px;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.timeline-section {
  padding: 60px 0;
  max-width: 800px;
  margin: 0 auto;
}

.timeline-card {
  margin-bottom: 20px;
}

.timeline-card :deep(p) {
  margin: 0;
  line-height: 1.6;
}

.timeline-card :deep(a) {
  color: #409EFF;
  text-decoration: none;
}

.team-section {
  padding: 60px 0;
  text-align: center;
}

.section-title {
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
</style> 