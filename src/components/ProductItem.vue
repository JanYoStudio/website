<template>
    <div class="product-item">
        <el-row :gutter="40">
            <el-col :span="12">
                <div class="product-image">
                    <img :src="product.image" :alt="product.name">
                </div>
            </el-col>
            <el-col :span="12">
                <div class="product-info">
                    <h2><a :href="product.link">{{ product.name }}</a></h2>
                    <p class="description">{{ product.description }}</p>
                    <div class="download-section">
                        <template v-if="!disable">
                            <slot name="download">
                            </slot>
                        </template>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

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