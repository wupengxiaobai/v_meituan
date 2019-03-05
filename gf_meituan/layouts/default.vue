<template>
  <el-container>
    <el-header class="el-header">
      <my-header></my-header>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer>
        <my-footer></my-footer>
    </el-footer>
  </el-container>
</template>


<script>
import myHeader from "../components/public/header/Header.vue";
import myFooter from "../components/public/footer/footer.vue"
export default {
  components: {
    myHeader,
    myFooter
  }
};
</script>


<style lang="less" scoped>
.el-header {
  height: auto !important;
}
.el-main {
  overflow: inherit;
  padding: 10px 20px;
  background: #f8f8f8;
}
.el-footer{
  height: auto !important;
  background: #f8f8f8;
}
</style>

