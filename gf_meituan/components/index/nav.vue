<template>
  <div class="container">
    <div class="nav">
      <nuxt-link to="waimai">美团外卖</nuxt-link>
      <nuxt-link to="movies">猫眼电影</nuxt-link>
      <nuxt-link to="hotel">美团酒店</nuxt-link>
      <nuxt-link to="home">名宿/公寓</nuxt-link>
      <nuxt-link to="merchant">商家入驻</nuxt-link>
      <nuxt-link to="gonyi">美团公益</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>


<style lang="less" scoped>
.nav {
  margin: 20px auto 0;
  width: 640px;
  height: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    &:nth-of-type(1):hover {
      color: #fbc700;
    }
    &:nth-of-type(2):hover {
      color: #ed1e24;
    }
    &:nth-of-type(3):hover {
      color: #f04d4e;
    }
    &:nth-of-type(4):hover {
      color: #fdc411;
    }
    &:nth-of-type(5):hover {
      color: #31bbac;
    }
    &:nth-of-type(6):hover {
      color: #f04d4e;
    }
  }
}
</style>
