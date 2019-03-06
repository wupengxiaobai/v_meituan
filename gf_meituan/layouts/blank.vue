<template>
  <div class="blank">
    <header>
      <div class="auto">
        <div class="logo"></div>
        <div class="right">
          <span>已有账号?</span>
          <span>登录</span>
        </div>
      </div>
    </header>

    <nuxt/>

    <footer>
      <div class="auto">©meituan.com 京ICP证070791号 京公网安备11010502025545号</div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>


<style scope lang="less">
@mColor: #28bfac;
@mmColor: #9f9999;
.blank {
  header {
    padding: 10px 0;
    color: #666;
    border-bottom: 2px solid @mColor;
    box-sizing: border-box;
    .auto {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        width: 54px;
        height: 36px;
        background-position: -669px -748px;
        background-image: url("https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png");
      }
      .right {
        span {
          margin-right: 5px;
          &:nth-last-child(1) {
            padding: 3px 10px;
            background: @mColor;
            color: #fff;
          }
        }
      }
    }
  }
  footer {
    padding: 10px 0;
    text-align: center;
    font-size: 12px;
    color: @mmColor;
    border-top: 1px solid #eee;
  }
  .auto {
    margin: 0 auto;
    width: 1000px;
  }
}
</style>
