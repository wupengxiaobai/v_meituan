<template>
  <div class="s1">
    <div class="top">
      <span class="title">有格调</span>
      <ul class="nav-list">
        <li
          @mouseenter="changeSelect(item)"
          v-for="(item, index) in navs"
          :key="index"
        >{{ item.name }}</li>
      </ul>
    </div>
    <div class="content">
      <ul class="lists">
        <li class="item" v-for="item in 6" :key="item">
          <img
            src="https:////p0.meituan.net/msmerchant/237a70928464d9adec12d8ee360965ba32147.jpg@460w_260h_1e_1c"
            alt
          >
          <div class="info">
            <div class="title">必胜客（中海环宇城店）</div>
            <div class="desc">超级至尊比萨（普装铁盘）1份</div>
            <div class="price">
              <span>¥39</span>
              门市价
              <i>¥74</i>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {
          name: "全部"
        },
        {
          name: "约会聚餐"
        },
        {
          name: "丽人SPA"
        },
        {
          name: "电影演出"
        },
        {
          name: "品质出游"
        }
      ],
      contentList: []
    };
  },
  methods: {
    changeSelect(item) {
      //  根据item值重新请求渲染视图
      console.log(item.name);
    }
  }
};
</script>

<style lang="less" scoped>
@mColor: #28bfac;
@mmColor: #9f9999;
.s1 {
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  .top {
    display: flex;
    padding: 0 20px;
    line-height: 44px;
    height: 44px;
    color: #fff;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background-image: linear-gradient(
      to right,
      rgb(194, 176, 142) 3%,
      rgb(190, 164, 116) 100%
    );
    box-sizing: border-box;
    .title {
      font-size: 18px;
      font-weight: bold;
    }
    .nav-list {
      margin-left: 20px;
      font-size: 14px;
      display: flex;
      & > li {
        position: relative;
        text-align: center;
        padding: 0 10px;
        cursor: pointer;
        &::after {
          position: absolute;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 7px solid #fff;
          content: " ";
          display: none;
          width: 2px;
          height: 0;
          top: 37px;
          left: 0;
          right: 0;
          margin: auto;
        }
        &:hover {
          &::after {
            display: block;
          }
        }
      }
    }
  }
  .content {
    padding: 10px;
    background: #fff;
    .lists {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .item {
        padding: 10px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 33.3%;
        box-sizing: border-box;
        background: #fff;
        transition: background 0.5s;
        cursor: pointer;
        img {
          width: 100%;
        }
        .info {
          width: 100%;
          text-align: left;
          font-size: 13px;
          color: @mmColor;
          div {
            margin-top: 10px;
          }
          .title {
            color: #222;
            font-size: 18px;
          }
          .price {
            color: #be9e4d;
            span {
              font-size: 18px;
              margin-right: 5px;
            }
            i {
              font-style: normal;
              font-size: 14px;
              text-decoration: line-through;
            }
          }
        }
        &:hover {
          background: #f4f4f4;
        }
      }
    }
  }
}
</style>
