<template>
  <div class="hello">
    <h1>这里是hello组件的h1</h1>
    <slot name="b"></slot>
    <button @click="$emit('getSonMessage',sonMsg)">send</button>
    <div>{{ msg }}</div>
    <slot name="a"></slot>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
    default: "默认文字"
  },
  data() {
    return {
      sonMsg: "hello 的 msg"
    };
  }
};
</script>

<style lang="" scoped>

</style>
