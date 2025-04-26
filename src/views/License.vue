<template>
  <div class="license">
    <div class="license-content">
      <h1>"JanYo Studio" 授权解决方案（草案）</h1>
      <p class="notice"><strong>为避免在其它非"JanYo Studio"通过书面授权认可的平台引发的授权 风险/争议，特拟此案。</strong></p>

      <div class="license-text">
        <p>"JanYo Studio"(以下简称"工作室")发布的产品缺省使用"GPL（GNU General Public
          License）"授权协议。工作室将在产品内部标识产品源程序及其附属品，使得任何人可以自由获取、阅读、传播，以及基于源代码重新构建它的二进制版本并发行该副本。</p>

        <p>工作室希望使用者在自由使用我们的产品时，尊重工作室的劳动成果，承认工作室的知识产权。</p>

        <p>工作室保证产品的自由使用、传播、阅读不受限，使用者应保障工作室的合法权益：</p>

        <ul>
          <li>针对开源资料，禁止删改原作者注明的版权、授权方式 等信息。</li>
          <li>源代码允许自由使用、添加至自己的项目，但必须注明来源，以及源的授权协议。</li>
          <li>在从事盈利、商用活动中，针对产品的传播复制需注明来源，以及源的授权协议。</li>
        </ul>

        <p class="contact"><strong>针对产品授权、答疑可电邮至工作室官方电子邮箱 : mystery0dyl520@gmail.com</strong></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.license {
  min-height: 100vh;
}

.license-content {
  margin: 0 auto;
  padding: 40px;
  max-width: 960px;
}

.license-content h1 {
  color: #333;
  text-align: center;
}

.notice {
  font-style: italic;
  color: #666;
  margin-bottom: 36px;
  text-align: center;
}

.license-text {
  color: #333;
  max-width: 720px;
  text-align: left;
  margin: 0 auto;
}

.contact {
  margin-top: 30px;
  text-align: center;
  color: #409EFF;
}

@media screen and (max-width: 768px) {
  .license-content h1 {
    color: #333;
    text-align: center;
    font-size: large;
  }

  .notice {
    font-style: italic;
    color: #666;
    margin-bottom: 36px;
    text-align: center;
    font-size: medium;
  }

  .license-text {
    color: #333;
    max-width: 720px;
    text-align: left;
    margin: 0 auto;
    font-size: small;
  }
}
</style>