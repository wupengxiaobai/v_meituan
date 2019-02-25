<template>
  <div class="hello">
    <Hello :msg="msg" @getSonMessage="getSonMessage">
      <h2 slot="a">slotA的内容</h2>
      <h3 slot="b">slotB的内容</h3>
    </Hello>

    <!-- 测试vuex组件 -->
    <!-- <Avuex></Avuex> -->

    <!-- 测试模块vuex -->
    <pageA></pageA>
    <pageB></pageB>
  </div>
</template>

<script>
// import Avuex from "./vuexx/a";
import pageA from "./page/pageA"
import pageB from "./page/pageB"

import Hello from "./hello";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "helloworld 的 msg"
    };
  },
  methods: {
    getSonMessage(data) {
      alert(data);
    }
  },
  components: {
    Hello,
    pageA,
    pageB
    // Avuex
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
