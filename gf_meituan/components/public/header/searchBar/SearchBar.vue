<template>
  <div class="container">
    <div class="main">
      <logo/>
      <search/>
    </div>
  </div>
</template>

<script>
import logo from "./logo.vue";
import search from "./search.vue";
export default {
  components: {
    logo,
    search
  }
};
</script>

<style lang="less" scoped>
.container {
  .main {
    margin-top: 30px;
    height: 100;
    display: flex;
    align-items: center;
  }
}
</style>
