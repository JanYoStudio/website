<template>
    <div class="team-section">
        <h2 class="section-title">工作室成员</h2>
        <el-row :gutter="20">
            <el-col :xl="8" :lg="8" :md="12" :sm="12" :xs="24" v-for="member in teamMembers" :key="member.name">
                <el-card class="team-card" shadow="never">
                    <el-avatar :size="120" :src="member.avatar" />
                    <h3>{{ member.name }}</h3>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const teamMembers = ref([
    {
        name: 'Dick Light',
        avatar: '/team/dl.jpg'
    },
    {
        name: 'liuyuhong',
        avatar: '/team/lyh.jpg'
    },
    {
        name: '艾佳琛',
        avatar: '/team/cg.jpg'
    },
    {
        name: 'Mystery0',
        avatar: '/team/mys.png'
    },
    {
        name: 'Gsoy',
        avatar: '/team/gs.jpeg'
    }
])
</script>

<style scoped>
.team-section {
    max-width: 960px;
    margin: 0 auto;
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