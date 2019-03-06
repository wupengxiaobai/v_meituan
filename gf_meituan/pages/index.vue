<template>
  <div class="container">
    <section class="s1">
      <!-- 菜单 -->
      <my-menu/>
      <!-- 焦点区 -->
      <my-banner/>
    </section>

    <section class="s2">
      <!-- 焦点区域 -->
      <my-s></my-s>
    </section>

    <!-- 其他信息 -->
    <section class="sn">
      <!-- 其他信息 -->
      <last-info></last-info>
    </section>
  </div>
</template>

<script>
import myMenu from "@/components/index/menu.vue";
import myBanner from "@/components/index/banner.vue";
import myS from "@/components/index/s.vue";
import lastInfo from "@/components/index/lastinfo.vue";
export default {
  layout: "default",
  components: {
    myMenu,
    myBanner,
    myS,
    lastInfo
  }
};
</script>

<style scoped lang='less'>
.s1 {
  display: flex;
}
</style>
