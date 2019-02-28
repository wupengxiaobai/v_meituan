<template>
  <section class="container">
    <p>
      <nuxt-link to="/hello">go hello</nuxt-link>
    </p>
    <ul>
      <li v-for="item in $store.state.city.list" :key="item">{{ item }}</li>--------------------------------------------
      <li v-for="item in $store.state.navbar.navbar" :key="item">{{ item }}</li>
    </ul>
    
    <ul>
      <li v-for="item in $store.state.city.list" :key="item">{{ item }}</li>--------------------------------------------
      <li v-for="item in $store.state.navbar.navbar" :key="item">{{ item }}</li>
    </ul>
    
    <ul>
      <li v-for="item in $store.state.city.list" :key="item">{{ item }}</li>--------------------------------------------
      <li v-for="item in $store.state.navbar.navbar" :key="item">{{ item }}</li>
    </ul>
    
    <!-- <ul>
      <li v-for="item in $store.state.city.list" :key="item">{{ item }}</li>--------------------------------------------
      <li v-for="item in $store.state.navbar.navbar" :key="item">{{ item }}</li>
    </ul>
    
    <ul>
      <li v-for="item in $store.state.city.list" :key="item">{{ item }}</li>--------------------------------------------
      <li v-for="item in $store.state.navbar.navbar" :key="item">{{ item }}</li>
    </ul>
    
    <ul>
      <li v-for="item in $store.state.city.list" :key="item">{{ item }}</li>--------------------------------------------
      <li v-for="item in $store.state.navbar.navbar" :key="item">{{ item }}</li>
    </ul>
    
    <ul>
      <li v-for="item in $store.state.city.list" :key="item">{{ item }}</li>--------------------------------------------
      <li v-for="item in $store.state.navbar.navbar" :key="item">{{ item }}</li>
    </ul> -->
  </section>
</template>

<script>
import axios from "axios";

export default {
  layout: "my-footer",
  data() {
    return {
      lists: []
    };
  },
  components: {},
  //  请求数据, 源代码上不会展示数据
  async mounted() {
    let self = this;
    let { status, data } = await axios.get("/city/getList");
    if (status === 200) {
      self.lists = data;
    }
  },
  //    SSR 如何实现服务端渲染？ 以下代码可以在源码中找到 北京or天津
  async asyncData() {
    let { status, data } = await axios.get(
      "http://localhost:3000/city/getList"
    );
    if (status === 200) {
      return {
        list: data
      };
    }
  }
  //    fetch 主要用来处理 vuex 数据
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
