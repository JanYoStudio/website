<template>
    <div class="timeline-section">
        <h2 class="section-title">重要时间线</h2>
        <el-timeline>
            <el-timeline-item v-for="(item, index) in timelineItems" :key="index" :timestamp="item.date" center
                placement="top" :type="index === 0 ? 'primary' : ''" :hollow="index === 0">
                <el-card body-style="padding: 10px;">
                    <p v-html="item.content"></p>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script setup>
import { ref } from 'vue'

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
</script>

<style scoped>
.timeline-section {
    max-width: 960px;
    margin: 0 auto;
}

.section-title {
    margin-bottom: 40px;
    color: #333;
}

:deep(.el-timeline-item__timestamp) {
    color: #000000;
    font-size: 18px;
    text-align: left;
    padding-left: 0;
}

:deep(.el-timeline-item__content) {
    font-size: 16px;
    text-align: left;
    padding-left: 0;
    padding-right: 0;
    padding-top: 2px;
    padding-bottom: 2px;
}
</style>