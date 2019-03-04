<template>
  <div class="banner">
    <div class="top">
      <div class="swiper">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="(item,index) in slider" :key="index" class="swiper-item">
            <img :src="item.imgSrc" alt>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="life">
        <img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt>
      </div>
      <div class="user">
        <div class="avatar">
          <img src="https://s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt>
        </div>
        <div class="name">Hi, 你好</div>
        <div class="login">
          <button type="button" class="el-button el-button--default is-round">
            <span>注册</span>
          </button>
        </div>
        <div class="register">
          <button type="button" class="el-button el-button--default is-round">
            <span>登录</span>
          </button>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <div class="hotel">
          <img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" alt>
        </div>
        <div class="middle">
          <img src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" alt>
        </div>
      </div>
      <div class="friendly">
        <img src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt>
      </div>
      <div class="download">
        <img src="http://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt>
        <div>美团APP手机版</div>
        <div>
          <span>1元起</span>
          <span>吃喝玩乐</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slider: [
        {
          imgSrc:
            "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg"
        },
        {
          imgSrc:
            "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg"
        },
        {
          imgSrc:
            "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png"
        },
        {
          imgSrc:
            "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.swiper /deep/ .el-carousel__container {
  height: 240px !important;
}
.banner {
  margin-left: 10px;
  flex: 1px;
  .top {
    display: flex;
    justify-content: space-between;
    height: 240px;
    .swiper {
      z-index: 0;
      width: 550px;
      height: 240px;
      .swiper-item {
        height: 240px;
        img {
          width: 100%;
          height: 240px;
        }
      }
    }
    .life {
      width: 150px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .user {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 20px 0;
      align-items: center;
      width: 230px;
      background: #fff;
      .avatar {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .login,
      .register {
        & > button {
          width: 112px;
        }
      }
    }
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    height: 165px;
    padding-top: 10px;
    div {
      img {
        width: 100%;
      }
    }
    .left {
      width: 550px;
      display: flex;
      justify-content: space-between;
      .hotel {
        width: 270px;
      }
      .middle {
        width: 270px;
      }
    }
    .friendly {
      width: 150px;
    }
    .download {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 230px;
      background: #fff;
      img {
        width: 95px;
        height: 95px;
      }
    }
  }
}
</style>
