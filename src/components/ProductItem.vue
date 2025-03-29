<template>
    <div class="product-item">
        <el-row :gutter="40">
            <el-col :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
                <div class="product-image">
                    <img :src="product.image" :alt="product.name">
                </div>
            </el-col>
            <el-col :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
                <div class="product-info">
                    <h2>{{ product.name }}</h2>
                    <p class="description">{{ product.description }}</p>
                    <div class="download-section">
                        <template v-if="!disable">
                            <slot name="download">
                                <template v-if="product.playStoreLink">
                                    <a :href="product.playStoreLink">
                                        <img alt="下载应用，请到 Google Play" style="height: 80px;"
                                            src="/images/google-play.png" />
                                    </a>
                                </template>
                                <template v-else>
                                    <p>目前已经停止开发</p>
                                </template>
                            </slot>
                        </template>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
const props = defineProps({
    product: {
        type: Object,
        required: true
    },
    disable: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped>
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
</style>