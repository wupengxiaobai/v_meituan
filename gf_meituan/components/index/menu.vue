<template>
  <div class="menu">
    <dl class="menu-wrapper">
      <dt>全部分类</dt>
      <dd
        @mouseenter="menuenter(item)"
        @mouseleave="menuleave"
        v-for="(item,index) in menu"
        :key="index"
      >
        <span>
          <i class="el-icon-goods"></i>
          {{item.name}}
        </span>
        <i class="el-icon-arrow-right"></i>
      </dd>
    </dl>
    <div
      @mouseenter="detailShow=true"
      @mouseleave="detailShow=false"
      v-show="detailShow"
      class="menu-detail"
    >
      <div v-for="(item,index) in currentSelectMenuItem.children" :key="index" class="menu-item">
        <div class="title">
          <span>{{ item.title }}</span>
          <span>更多</span>
        </div>
        <div class="cont">
          <span v-for="(subItem,subIndex) in item.sub" :key="subIndex">{{ subItem.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          type: "eating",
          name: "美食",
          children: [
            {
              title: "美食",
              sub: [
                {
                  yw: "djj",
                  name: "代金券"
                },
                {
                  yw: "tpyp",
                  name: "甜品饮品"
                },
                {
                  yw: "hg",
                  name: "火锅"
                },
                {
                  yw: "zzc",
                  name: "自助餐"
                },
                {
                  yw: "djj",
                  name: "代金券"
                },
                {
                  yw: "tpyp",
                  name: "甜品饮品"
                },
                {
                  yw: "hg",
                  name: "火锅"
                },
                {
                  yw: "zzc",
                  name: "自助餐"
                }
              ]
            }
          ]
        },
        {
          type: "waimai",
          name: "外卖",
          children: [
            {
              title: "外卖",
              sub: [
                {
                  yw: "wm",
                  name: "外卖"
                }
              ]
            }
          ]
        },
        {
          type: "hotel",
          name: "酒店",
          children: [
            {
              title: "酒店",
              sub: [
                {
                  yw: "jjx",
                  name: "经济型"
                }
              ]
            }
          ]
        },
        {
          type: "minsu",
          name: "倾国名宿",
          children: [
            {
              title: "倾国名宿"
            }
          ]
        },
        {
          type: "movies",
          name: "猫眼电影",
          children: [
            {
              title: "猫眼电影"
            }
          ]
        },
        {
          type: "piao",
          name: "机票/火车票",
          children: [
            {
              title: "机票/火车票"
            }
          ]
        },
        {
          type: "play",
          name: "休闲娱乐/KTV",
          children: [
            {
              title: "休闲娱乐",
              sub: [
                {
                  yw: "xx",
                  name: "休闲"
                },
                {
                  yw: "yl",
                  name: "娱乐"
                },
                {
                  yw: "dsz",
                  name: "第三者"
                }
              ]
            },
            {
              title: "KTV",
              sub: [
                {
                  yw: "lf",
                  name: "量贩KTV"
                },
                {
                  yw: "ktv",
                  name: "KTV"
                },
                {
                  yw: "yun",
                  name: "晕了, 不写了"
                }
              ]
            }
          ]
        },
        {
          type: "other",
          name: "就这样吧",
          children: [
            {
              title: "就这样吧"
            }
          ]
        },
        {
          type: "other",
          name: "就这样吧",
          children: [
            {
              title: "就这样吧"
            }
          ]
        },
        {
          type: "other",
          name: "就这样吧",
          children: [
            {
              title: "就这样吧"
            }
          ]
        },
        {
          type: "other",
          name: "就这样吧",
          children: [
            {
              title: "就这样吧"
            }
          ]
        },
        {
          type: "other",
          name: "就这样吧",
          children: [
            {
              title: "就这样吧"
            }
          ]
        },
        {
          type: "other",
          name: "就这样吧",
          children: [
            {
              title: "就这样吧"
            }
          ]
        },
        {
          type: "other",
          name: "就这样吧",
          children: [
            {
              title: "就这样吧"
            }
          ]
        }
      ],
      detailShow: false, //  菜单详情显示与否
      currentSelectMenuItem: ""
    };
  },
  methods: {
    //    菜单移入
    menuenter(item) {
      this.detailShow = true;
      this.currentSelectMenuItem = item;
    },
    //  菜单离开
    menuleave() {
      this.detailShow = false;
    }
  }
};
</script>


<style lang="less" scoped>
@mColor: #28bfac;
@mmColor: #9f9999;
.menu {
  position: relative;
  margin-top: -70px;
  flex: 0 0 230px;
  width: 230px;
  color: #fff;
  background: -webkit-linear-gradient(
    -90deg,
    rgba(2, 181, 157, 0.85) 2%,
    rgba(22, 146, 183, 0.85) 100%
  );
  .menu-wrapper {
    dt {
      padding-top: 15px;
      height: 50px;
      font-size: 16px;
      font-weight: 400;
      margin-left: 15px;
    }
    dd {
      padding: 2px 12px;
      height: 26px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }
  .menu-detail {
    position: absolute;
    bottom: 0;
    left: 230px;
    padding: 20px;
    width: 400px;
    height: 416px;
    color: @mmColor;
    background-color: #ffffff;
    overflow: hidden;
    z-index: 199;
    box-sizing: border-box;
    .menu-item {
      padding: 20px;
      .title {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid @mmColor;
        padding-bottom: 10px;
        margin-bottom: 20px;
        font-size: 16px;
      }
      .cont {
        span {
          color: @mmColor;
          margin: 0 5px;
          font-size: 12px;
          cursor: pointer;
          &:hover {
            color: @mColor;
          }
        }
      }
    }
  }
}
</style>
