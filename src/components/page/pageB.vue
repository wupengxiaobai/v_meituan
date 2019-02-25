<template>
  <div class="pageA">
    <h1>这里是pageB组件</h1>
    <div>moduleB ---- {{ $store.state.vuexB.count }}</div>
    <div>mapState ---- {{ count }}</div>
    <button @click="increment">增加2</button>
    <button @click="decrement">减少2</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations("vuexB", ["decrement", "increment"])
  },
  computed: {
    ...mapState("vuexB", ["count"])
  }
};
</script>

<style lang="" scoped>
</style>
