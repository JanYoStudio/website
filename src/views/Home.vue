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

.hero {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 8px;
  margin-bottom: 40px;
}

.hero h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #2c3e50;
}

.hero p {
  font-size: 1.2em;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.feature-card {
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

@media screen and (max-width: 768px) {
  .hero {
    padding: 40px 15px;
  }

  .hero h1 {
    font-size: 2em;
  }

  .hero p {
    font-size: 1em;
  }

  .features {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .feature-card {
    padding: 20px;
  }
}
</style>