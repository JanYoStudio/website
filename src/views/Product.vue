<template>
  <div class="product">
    <!-- Banner部分 -->
    <div class="banner-section">
      <div class="banner-content">
        <h1>我们的产品</h1>
        <p class="en">Our Products</p>
      </div>
    </div>

    <!-- 产品列表 -->
    <div class="product-list">
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="product-item">
            <el-row :gutter="40">
              <el-col :span="12">
                <div class="product-image">
                  <img src="/images/what-anime.jpg" alt="WhatAnime">
                </div>
              </el-col>
              <el-col :span="12">
                <div class="product-info">
                  <h2><a href="/wa/index.html">WhatAnime - 以图搜番</a></h2>
                  <p class="description">如果你在网络上看到一张酷似二次元番剧的插图，并且相当的感兴趣，你可以保存起来，使用WhatAnime找到它的出处。</p>
                  <div class="download-section">
                    <a href="https://play.google.com/store/apps/details?id=pw.janyo.whatanime&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                      <img alt="下载应用，请到 Google Play" style="height: 80px;" src="/images/google-play.png" />
                    </a>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>

          <el-divider />

          <div class="product-item">
            <el-row :gutter="40">
              <el-col :span="12">
                <div class="product-image">
                  <img src="/images/janyo-share.jpg" alt="JanYo Share">
                </div>
              </el-col>
              <el-col :span="12">
                <div class="product-info">
                  <h2><a href="/jys/index.html">JanYo Share - 更好的分享应用</a></h2>
                  <p class="description">想要将应用分享给朋友但是复制出来是base.apk？自己懒得命名？通过社交软件分享APP，过一段时间群文件全部是base.apk？每一次清理群文件都很麻烦？现在，通过JanYo Share，体验一键式操作。</p>
                  <div class="download-section">
                    <p>目前已经停止开发</p>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
// 组件逻辑
</script>

<style scoped>
.product {
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

.product-list {
  padding: 0 40px 60px;
}

.product-item {
  margin-bottom: 60px;
}

.product-image {
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-info {
  padding: 20px 0;
}

.product-info h2 {
  margin-bottom: 20px;
  color: #333;
}

.product-info h2 a {
  color: #409EFF;
  text-decoration: none;
}

.product-info h2 a:hover {
  text-decoration: underline;
}

.description {
  color: #666;
  line-height: 1.8;
  margin-bottom: 30px;
}

.download-section {
  margin-top: 20px;
}

.download-section p {
  color: #999;
  font-style: italic;
}

:deep(.el-divider) {
  margin: 40px 0;
}
</style> 