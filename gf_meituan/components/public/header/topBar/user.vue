<template>
  <div class="user">
    <template v-if="user">
      欢迎您,
      <span class="username">{{ user }}</span>
    </template>
    <template v-else>
      <nuxt-link tag="div" to="/login" class="login">立即登录</nuxt-link>
      <nuxt-link tag="div" to="/register" class="register">注册</nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: ""
    };
  }
};
</script>

<style lang="less" scoped>
@mColor: #28bfac;
.user {
  display: flex;
  margin-left: 28px;
  .username {
    color: @mColor;
  }
  .login {
    color: @mColor;
    cursor: pointer;
  }
  .register{
      margin-left: 10px;
      cursor: pointer;
  }
}
</style>
