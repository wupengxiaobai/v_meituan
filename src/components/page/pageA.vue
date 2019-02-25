<template>
  <div class="pageA">
    <h1>这里是pageA组件</h1>
    <div>moduleA ---- {{ $store.state.vuexA.count }}</div>
    <div>mapState ---- {{ count }}</div>
    <button @click="increment">增加1</button>
    <button @click="decrement">减少1</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations("vuexA", ["increment", "decrement"])
  },
  computed: {
    ...mapState("vuexA", ["count"])
  }
};
</script>

<style lang="" scoped>
</style>
