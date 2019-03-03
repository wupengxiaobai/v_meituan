<template>
  <el-container>
    <el-header class="el-header">
      <my-header></my-header>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>


<script>
import myHeader from "../components/public/header/Header.vue";
export default {
  components: {
    myHeader
  }
};
</script>


<style lang="less" scoped>
.el-header {
  height: auto!important;
}
</style>

