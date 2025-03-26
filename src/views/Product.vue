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
        <el-col :span="24" v-for="product in products" :key="product.name">
          <ProductItem :product="product" :disable="product.disable">
            <template v-if="!product.disable" #download>
              <a v-if="product.playStoreLink" :href="product.playStoreLink">
                <img alt="下载应用，请到 Google Play" style="height: 80px;" src="/images/google-play.png" />
              </a>
            </template>
          </ProductItem>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductItem from '../components/ProductItem.vue'

const products = ref([
  {
    name: 'WhatAnime - 以图搜番',
    description: '如果你在网络上看到一张酷似二次元番剧的插图，并且相当的感兴趣，你可以保存起来，使用WhatAnime找到它的出处。',
    image: '/images/what-anime.jpg',
    playStoreLink: 'https://play.google.com/store/apps/details?id=pw.janyo.whatanime&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
  },
  {
    name: 'JanYo Share - 更好的分享应用',
    description: '想要将应用分享给朋友但是复制出来是base.apk？自己懒得命名？通过社交软件分享APP，过一段时间群文件全部是base.apk？每一次清理群文件都很麻烦？现在，通过JanYo Share，体验一键式操作。',
    image: '/images/janyo-share.jpg',
    disable: true
  }
])
</script>

<style scoped>
.product {
  min-height: 100vh;
}

.banner-section {
  height: 300px;
  background-image: url('/images/nav_product.jpg');
  background-size: cover;
  background-position: center;
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