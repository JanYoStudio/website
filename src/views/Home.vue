<template>
  <div class="home">
    <HomeCarousel />
    <HomeTimeline />
    <HomeTeam />
  </div>
</template>

<script setup>
import HomeCarousel from '../components/HomeCarousel.vue'
import HomeTimeline from '../components/HomeTimeline.vue'
import HomeTeam from '../components/HomeTeam.vue'
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>