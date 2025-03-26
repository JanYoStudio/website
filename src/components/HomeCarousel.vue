<template>
    <el-carousel height="600px">
        <el-carousel-item v-for="item in carouselItems" :key="item.id">
            <img :src="item.image" class="carousel-image">
        </el-carousel-item>
    </el-carousel>
</template>

<script setup>
import { ref } from 'vue'

const carouselItems = ref([
    {
        id: 1,
        image: '/images/ban1.jpg'
    },
    {
        id: 2,
        image: '/images/ban2.jpg'
    }
])
</script>

<style scoped>
.carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>