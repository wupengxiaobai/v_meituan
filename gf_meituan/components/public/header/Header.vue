<template>
  <div class="header">
    <!-- 顶部栏 -->
    <top-bar></top-bar>
    <!-- 搜索栏 -->
    <search-bar></search-bar>
  </div>
</template>

<script>
import topBar from "./topBar/TopBar.vue";
import searchBar from "./searchBar/SearchBar.vue";
export default {
  components: {
    topBar,
    searchBar
  }
};
</script>

<style lang="less">
.header {
  margin: 0 -20px;
}
</style>
