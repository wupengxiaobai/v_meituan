<template>
  <div class="nav">
    <ul class="list">
      <li>我的美团</li>
      <li>手机App</li>
      <li>商家中心</li>
      <li>网站导航</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@mColor: #28bfac;
.nav {
  align-self: flex-end;
  float: right;
  .list {
    width: 400px;
    display: flex;
    li {
      width: 96px;
      text-align: center;
      cursor: pointer;
      box-sizing: border-box;
      &:hover {
        color: @mColor;
        background: #fff;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
        box-shadow: 0 0 2px 1px #ddd;
      }
      &:nth-of-type(2) {
        &:hover {
          border: 0;
          background: transparent;
          box-shadow: none;
        }
      }
    }
  }
}
</style>
