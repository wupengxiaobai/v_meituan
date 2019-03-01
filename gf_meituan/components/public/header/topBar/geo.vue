<template>
  <div class="m-geo">
    <i class="el-icon-location"></i>浙江省
    <nuxt-link tag="el-button" class="changeCity" to="/changeCity">切换城市</nuxt-link>
    <span> [</span>
    <span> 北京</span>
    <span> 杭州</span>
    <span> 上海</span>
    <span> ]</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@mColor: #28bfac;
.m-geo {
  .changeCity {
    font-size: 12px;
    padding: 2px 5px;
    background: transparent;
    border-color: #ddd;
    &:hover {
      color: @mColor;
    }
  } // color: @mColor;
}
</style>
