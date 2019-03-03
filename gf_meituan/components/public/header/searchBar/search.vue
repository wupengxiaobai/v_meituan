<template>
  <div class="search">
    <div class="searchInp">
      <input
        type="text"
        @focus="onFocus"
        @blur="onBlur"
        @input="searchInpChange"
        v-model="inputVal"
        placeholder="搜索商家或地点"
      >
      <span class="el-icon-search"></span>
      <!-- 搜索 -->
      <div v-show="focus" class="searchList">
        <dl v-show="inpnotHasCount" class="recomend">
          <dt>热门搜索</dt>
          <dd>
            <span>
              <nuxt-link tag="span" to="/hot">北京</nuxt-link>
            </span>
            <span>
              <nuxt-link tag="span" to="/hot">上海</nuxt-link>
            </span>
            <span>
              <nuxt-link tag="span" to="/hot">广州</nuxt-link>
            </span>
            <span>
              <nuxt-link tag="span" to="/hot">杭州</nuxt-link>
            </span>
            <span>
              <nuxt-link tag="span" to="/hot">前端NB</nuxt-link>
            </span>
          </dd>
        </dl>
        <dl v-show="inpHasCont" class="keywordL">
          <dd>
            <nuxt-link tag="span" to="/huoguo">火锅</nuxt-link>
          </dd>
          <dd>
            <nuxt-link tag="span" to="/huoguo">火锅</nuxt-link>
          </dd>
          <dd>
            <nuxt-link tag="span" to="/huoguo">火锅</nuxt-link>
          </dd>
          <dd>
            <nuxt-link tag="span" to="/huoguo">火锅</nuxt-link>
          </dd>
          <dd>
            <nuxt-link tag="span" to="/huoguo">火锅</nuxt-link>
          </dd>
        </dl>
      </div>
    </div>

    <div class="underText">
      <span>长鹿旅游休博园</span>
      <span>盈香生态园</span>
      <span>中影星美国际影城</span>
      <span>中央电视台</span>
      <span>南海影视城</span>
      <span>西樵山国艺影视城</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      focus: false, //  搜索框是否聚焦
      inputVal: ""
    };
  },
  methods: {
    onFocus() {
      this.focus = true;
    },
    onBlur() {
      //  防止失去焦点立即出发, 影响跳转
      setTimeout(() => {
        this.focus = false;
      }, 200);
    },
    searchInpChange() {
      console.log(this.inputVal);
    }
  },
  computed: {
    inpHasCont() {
      return this.focus && this.inputVal;
    },
    inpnotHasCount() {
      return this.focus && !this.inputVal;
    }
  }
};
</script>

<style lang="less" scoped>
@mColor: #28bfac;
@mmColor: #9f9999;
.search {
  margin-left: 170px;
  width: 552px;
  .searchInp {
    position: relative;
    display: flex;
    margin-bottom: 5px;
    height: 42px;
    border: 1px solid @mColor;
    border-radius: 5px;
    box-sizing: border-box;
    input {
      flex: 0 0 462px;
      width: 462px;
      padding: 10px;
      height: 100%;
      font-size: 15px;
      background: transparent;
      border: 0;
      box-sizing: border-box;
    }
    & > span {
      flex: 1;
      text-align: center;
      line-height: 42px;
      font-size: 15px;
      font-weight: bold;
      background: @mColor;
      color: #fff;
    }
    .searchList {
      padding: 10px;
      position: absolute;
      top: 41px;
      left: 0;
      width: 462px;
      font-size: 12px;
      color: @mmColor;
      background: #fff;
      border: 1px solid #ddd;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      .recomend,
      .keywordL {
        dt {
          font-weight: bold;
          margin-bottom: 10px;
        }
        dd {
          cursor: pointer;
          margin-right: 5px;
          span {
            &:hover {
              cursor: pointer;
              color: @mColor;
            }
          }
        }
      }
    }
  }
  .underText {
    font-size: 12px;
    color: @mmColor;
    span {
      margin-right: 5px;
      cursor: pointer;
      &:hover {
        color: @mColor;
      }
    }
  }
}
</style>
