<template>
  <div class="user">
    <template v-if="user">
      欢迎您,
      <span class="username">{{ user }}</span>
    </template>
    <template v-else>
      <nuxt-link to="/login" class="login">立即登录</nuxt-link>
      <span>注册</span>
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
  margin-left: 28px;
  .username {
    color: @mColor;
  }
  .login {
    color: @mColor;
  }
}
</style>
