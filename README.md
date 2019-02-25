# 高仿美团

## Vue基础

- 模板语法 
  + {{}} / v-text     文本
  + v-html            原始html

- `props`  传参的入口
  ```js
  props: {
    dadMsg: String,
  }
  ```

- `v-bind` 特性 
  ```html
  <span :id="spanId"></span>
  ```

- 表达式
  ```js
  //  运算
  {{ num + 1 }}
  //  三元
  {{ ok? 'true' : 'false' }}
  //  使用函数
  {{ msg.toString().reserve().split("").join("-") }}
  ```

- `v-if` `v-show` 指令
  ```html
  <!-- v-if -->
  <span v-if="show">show为真显示</span>
  <span v-else>show为假显示</span>
  <!-- v-show -->
  <span v-show="show">show为真显示</span>
  ```

- 自定义指令
  ```js
  Vue.directive('指令名', {
    bind: function(el, binding) { //  只调用一次, 可以进行一次性地初始化设置
      //  el -> 指令绑定的当前元素, 可直接进行 DOM 操作
      //  binding  -> 一个对象, 包含着当前元素的一些属性 
      //     --> name 指令名称
      //     --> value 指令绑定的值 ...
      //  示例: 设置元素内容 "翻倍" 显示
      el.textContent = Math.pow(binding.value, 2)
    },
    inserted: function(el, binding){
      //  被绑定元素插入父节点时调用
    },
    update: function(){
      //  变化时触发
    }
  })
  ```

- 修饰符
  ```html
  <!-- prevent 阻止默认 -->
  <!-- stop    组织冒泡 -->
  <form v-on:submit.prevent="onSubmit">...</form>
  ```

- 计算属性: 具有依赖关系的数据监听
  ```html
  <!-- 
    computed: {
      reversedMessage:function(){
        return this.message + 1
      }
    }
   -->
  <div id="example">
    <p>Origin message: {{ message }}</p>
    <p>Computed message: {{ reversedMessage }}</p>
  </div>
  ```

- 类与样式
  + 对象语法 适合较多的 class 名或 动态的 class
  + 数组语法  适合较少的 class 名
  ```html
  <span v-bind:class="{'active': boolean }">span</span>
  ```

- `v-for` 循环
  ```html
  <li v-for="(item, index) in lists" :key="index">{{item.name}}</li>
  
  <!-- 分组用法: 在数据中没有, 想给数据作特殊的处理, 如隔行操作 -->
  <template v-for="item in lists">
    <li :key="item+1">hello</li>
    <li :key="item">{{ item }}</li>
  </template>
  ```

- 组件 component
  + props     组件的参数传递
  + slot      插槽
  + 自定义事件 父子组件的通信方式

  深入组件
  ```js
  var sonComponent = {
    props:['dadData'],
    template: `<div>
                  <slot name="a"></slot>
                  {{ dadData }}
                  <button @click="sendMessageToDad">send</button>
                  <slot name="b"></slot>
              <div>`,
    data(){
      return {
        childData: '子组件的data'
      }
    },
    methods: {
      sendMessageToDad() {
        this.$emit('getChild', this.childData)
      }
    }
  }
  
  new Vue({
    el: '#app',
    template: `<div id="app">
                  <sonComponent :dadData="msg" @getChild="getChildData">
                    <h1 slot="a">slotA我要加东西</h1>
                    <h1 slot="b">slotB我要加东西</h1>
                  </sonComponent>
              </div>`,
    data: {
      msg: '父组件数据'
    },
    methods: {
      getChildData(data) {
        console.log(data)
      } 
    },
    components: {
      sonComponent
    }
  })
  
  ```

- vue-router  `npm install vue-router -D`
  ```js
  //  1. 引入
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  //  2. 使用
  Vue.use(VueRouter)
  //  3. 路由配置
  const routes = [{
    path: '/pagea',
    component: pageA
  },{
    path: '/pageb',
    component: pageB
  }]
  const router = new VueRouter({
    routes: routes
  })
  //  4. 挂载路由
  new Vue({
    el: '#app',
    router
  })
  ```
  ```html
  <!-- 路由导航 -->
  <router-link to="/pagea">showpageA组件</router-link>
  <router-link to="/pageb">showpageB组件</router-link>
  <!-- 路由视图 -->
  <router-view></router-view>
  ```

- vuex
  + State	    仓库
  + Mutations  定义方法用来修改仓库数据
  + Actions       触发定义的方法执行操作

  **基础使用**
  ```js
  //  基础定义 store.js
  
  import Vue from 'vue'
  import Vuex from 'vuex'
  Vue.use(Vuex)
  //  保存共享数据的state
  const state = {
    count: 1
  }
  //  mutations 执行共享数据的修改操作
  const mutations = {
    increment: ({ state, params }) => {
      state.count += params
    },
    decrement: ({ state }) => {
      state.count --
    }
  }
  //  actions 监听组件派发行为, 命令 mutations 执行对共享数据的操作
  const actions = {
    //  actions 中第二个参数即是组件中传递来的参数
    increment: ({ commit }, parmas) => {
      commit('increment', parmas)
    },
    decrement: ({ commit }) => {
      commit('decrement')
    }
  }
  //  导出全模块
  export default new Vuex.Store({
    state,
    mutations,
    actions
  })
  
  
  //  挂载store到vue实例 main.js
  import store from './store.js'
  new Vue({
    render: h => h(App),
    store
  }).$mount('#app')
  ```

  ```html
  <!-- 基础使用: 访问共享数据 $store.state.count 访问方法 $store.commit('increment', params)
    mapState 
    mapMutations
   -->
  <template>
    <div>
      <!-- 访问vuex中的count -->
      {{ $store.state.count }}  
      <!-- state产生关联后直接通过 this.数据 对state下的数据进行访问 -->
      {{ count }}
      <!-- mutations产生关联后, 直接通过 this.方法 对mutations下的方法进行操作 -->
      <button @click="increment(2)">增一操作</button>
      <!-- commit第一个参数是执行的方法, 第二个参数是传递的参数 -->
      <button @click="$store.commit('decrement')">减二操作</button>
    </div>
  <template>
  
  <script>
  improt { mapState, mapMutations } from 'vuex' 
  // 引入 state,mutations 映射机制, 让vuex和vue实例产生关联, 既可在模块中使用 this.数据/方法 进行vuex的访问
  export default {
    data(){
      return {}
    },
    methods: {
      ...mapMutations(['increment'])  //让mutations和vue实例产生关联
    },
    computed: {
      ...mapState(['count'])  //让state和vue实例产生关联 
    }
  }
  </script>
  ```
  **高阶操作**: 模块

  ```js 
  //  stores/modules/a||b.js 
  //  定义vuex a模块
  //  定义vuex b模块
  const state = {
    count: 0
  }
  const mutations = {
    increment: (state) => {
      state.count++
    },
    decrement: (state) => {
      state.count--
    }
  }
  const actions = {
    increment: ({ commit }) => {
      commit('increment')
    },
    decrement: ({ commit }) => {
      commit('decrement')
    }
  }
  export default {
    namespaced: true,	//	开启命名空间
    state,
    mutations,
    actions
  }
  
  
  //  stores/index.js 导出模块
  import Vue from 'vuex'
  import Vuex from 'vuex'
  import vuexa from './modules/a'
  import vuexb from './modules/b'
  Vue.use(Vuex)
  export default new Vuex.Store({
    modules: {
      vuexa,
      vuexb
    }
  })
  
  
  //  main.js 挂载store
  import store from './stores/index.js'
  new Vue({
    render: h => h(App),
    router,
    store
  }).$mount('#app')
  ```
  ```html
  <!-- 基本使用 -->
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
      //  挂载方式如下
      ...mapMutations("vuexA", ["increment", "decrement"])
    },
    computed: {
      ...mapState("vuexA", ["count"])
    }
  };
  </script>
  ```

## Koa2 基础



## 环境搭建

- 脚手架版本 3.0.1  `npm install @vue-cli@3.0.1`
- 课程vue版本 2.5(我的版本3.0.1)

- 使用cli创建vue项目 `npm create project_mt`
- 启动项目  `npm run serve`
