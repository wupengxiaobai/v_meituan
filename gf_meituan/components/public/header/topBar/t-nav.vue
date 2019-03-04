<template>
  <div class="nav">
    <ul class="n-list">
      <li>
        <nuxt-link tag="div" to="/my">我的美团</nuxt-link>
        <dl>
          <dd>
            <nuxt-link tag="div" to="/order">我的收藏</nuxt-link>
          </dd>
          <dd>
            <nuxt-link tag="div" to="/order">我的订单</nuxt-link>
          </dd>
          <dd>
            <nuxt-link tag="div" to="/order">抵用券</nuxt-link>
          </dd>
          <dd>
            <nuxt-link tag="div" to="/order">账户设置</nuxt-link>
          </dd>
        </dl>
      </li>
      <li>
        <nuxt-link tag="div" to="/app">手机App</nuxt-link>
      </li>
      <li>商家中心
        <dl>
          <dd>登录商家中心</dd>
          <dd>美团智能收银</dd>
          <dd>我想合作</dd>
          <dd>手机免费开店</dd>
          <dd>餐饮代理商招募</dd>
          <dd>商家申请开票</dd>
          <dd>免费合作参与美团</dd>
        </dl>
      </li>
      <li>网站导航
        <div class="websitnav">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>国际机票</dd>
            <dd>飞机票</dd>
            <dd>火车票</dd>
            <dd>公交票</dd>
            <dd>青果民宿</dd>
            <dd>青果民宿</dd>
            <dd>青果民宿</dd>
            <dd>国际机票</dd>
            <dd>飞机票</dd>
            <dd>火车票</dd>
            <dd>公交票</dd>
            <dd>青果民宿</dd>
            <dd>青果民宿</dd>
            <dd>青果民宿</dd>
            <dd>国际机票</dd>
            <dd>飞机票</dd>
            <dd>火车票</dd>
            <dd>公交票</dd>
          </dl>
          <dl class="eating">
            <dt>吃美食</dt>
            <dd>烤鱼</dd>
            <dd>特色小吃</dd>
            <dd>烤鱼</dd>
            <dd>特色小吃</dd>
            <dd>烤鱼</dd>
            <dd>特色小吃</dd>
            <dd>烤鱼</dd>
            <dd>特色小吃</dd>
            <dd>烤鱼</dd>
            <dd>特色小吃</dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd>热映电影</dd>
            <dd>热门影院</dd>
            <dd>热门movie</dd>
            <dd>热门movie</dd>
            <dd>热门movie</dd>
            <dd>热门movie</dd>
            <dd>热门movie</dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd>
              <nuxt-link to="/app">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" alt>
              </nuxt-link>
              <nuxt-link to="/app">
                <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" alt>
              </nuxt-link>
              <nuxt-link to="/app">
                <img src="//s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png" alt>
              </nuxt-link>
              <nuxt-link to="/app">
                <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png" alt>
              </nuxt-link>
              <nuxt-link to="/app">
                <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png" alt>
              </nuxt-link>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showList: false
    };
  }
};
</script>

<style lang="less" scoped>
@mColor: #28bfac;
.nav {
  align-self: flex-end;
  float: right;
  .n-list {
    width: 400px;
    display: flex;
    li {
      position: relative;
      width: 96px;
      text-align: center;
      cursor: pointer;
      box-sizing: border-box;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      & > dl {
        display: none;
        color: #9f9999;
        & > dd {
          &:hover {
            color: @mColor;
          }
        }
      }
      &:hover {
        color: @mColor;
        background: #fff;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
        box-shadow: 0 0 2px 1px #ddd;
        & > dl {
          display: block;
        }
      }
      &:nth-of-type(2) {
        &:hover {
          border: 0;
          background: transparent;
          box-shadow: none;
        }
      }
      &:nth-of-type(3) {
        border-radius: 0;
        dl{
            background: #fff;
        }
        &:hover {
          &::after {
            position: absolute;
            right: 0;
            bottom: -2px;
            content: "";
            height: 5px;
            background: #fff;
            width: 100%;
          }
        }
        dl {
          position: absolute;
          right: -1px;
          width: 120px;
          border: 1px solid #ddd;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          border-top-left-radius: 5px;
          box-shadow: 0 0 2px 1px #ddd;
          box-sizing: border-box;
        }
      }
      &:nth-of-type(4) {
        cursor: inherit;
        border-radius: 0;
        &:hover {
          .websitnav {
            display: flex;
          }
          &::after {
            position: absolute;
            right: 0;
            bottom: -2px;
            content: "";
            height: 5px;
            background: #fff;
            width: 100%;
          }
        }
        .websitnav {
          display: none;
          justify-content: space-around;
          position: absolute;
          right: -1px;
          width: 1200px;
          background: #fff;
          border: 1px solid #ddd;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          border-top-left-radius: 5px;
          box-shadow: 0 0 2px 1px #ddd;
          box-sizing: border-box;
          dl {
            line-height: 25px;
            dt {
              color: @mColor;
              margin: 25px 0 20px;
              width: 100%;
              font-size: 15px;
            }
            dd {
              display: inline-block;
              line-height: 25px;
              height: 25px;
              color: #9f9999;
              cursor: pointer;
              &:hover {
                color: @mColor;
              }
              &:last-of-type {
                margin-bottom: 20px;
              }
            }
          }
          .hotel {
            width: 285px;
            dd {
              width: 25%;
            }
          }
          .eating {
            width: 180px;
            dd {
              width: 35%;
            }
          }
          .movie {
            width: 150px;
            dd {
              width: 100%;
            }
          }
          .app {
            width: 500px;
            dd {
              display: flex;
              justify-content: space-around;
              a {
                width: 75px;
                height: 75px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
