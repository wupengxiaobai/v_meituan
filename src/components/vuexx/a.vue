<template>
  <div class="a">
    <!-- {{ $store.state.count }} -->
    <!-- 通过 mapState 映射机制后, 直接使用 this.数据 对vuex的state下的数据进行访问 -->
    <!-- {{ count }} -->
    <!-- 通过 mapMutations 映射机制后, 直接使用 this.方法 访问vuex中的方法 -->
    <!-- <button @click="increment(3)">加三操作</button>
    <button @click="$store.commit('decrement', 2)">减二操作</button> -->
  </div>
</template>

<script>
// import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    //  链接vuex的mutations关系
    // ...mapMutations(["increment"])
  },
  computed: {
    // 链接vuex和vue实例
    // ...mapState(["count"])
  }
};
</script>

<style lang="" scoped>
</style>
