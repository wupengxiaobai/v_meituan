<template>
  <div class="header">
    <!-- 顶部栏 -->
    <top-bar></top-bar>
    <!-- 搜索栏 -->
    <search-bar></search-bar>
    <!-- 头部菜单 -->
    <top-nav/>
  </div>
</template>

<script>
import topBar from "./topBar/TopBar.vue";
import searchBar from "./searchBar/SearchBar.vue";
import topNav from "@/components/index/nav.vue";
export default {
  components: {
    topBar,
    searchBar,
    topNav
  }
};
</script>

<style lang="less">
.header {
  margin: 0 -20px;
  box-shadow: 0 2px 27px 0 rgba(0,0,0,.1);
}
</style>
