<template>
  <div class="topBar">
    <div class="container">
      <div class="left">
        <!-- 城市服务 -->
        <geo/>
        <!-- 用户操作 -->
        <user/>
      </div>
      <!-- 右侧导航 -->
      <tnav/>
    </div>
  </div>
</template>

<script>
import geo from "./geo.vue";
import user from "./user.vue";
import tnav from "./t-nav.vue";
export default {
  components: {
    geo,
    user,
    tnav
  }
};
</script>

<style lang="less" scoped>
.topBar {
  position: relative;
  z-index: 1;
  width: 100%;
  line-height: 40px;
  height: 40px;
  color: #9f9999;
  font-size: 12px;
  background: #f8f8f8;
  .container {
    display: flex;
    justify-content: space-between;
    .left {
      width: 400px;  
      display: flex;
    }
  }
}
</style>
