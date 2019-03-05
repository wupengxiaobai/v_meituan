<template>
  <div class="container">
    <div class="content">
      <dl>
        <dt>用户帮助</dt>
        <dd>申请退款</dd>
        <dd>查看美团券密码</dd>
        <dd>常见问题</dd>
        <dd>用户协议</dd>
        <dd>隐私政策</dd>
        <dd>反诈骗公告</dd>
      </dl>
      <dl>
        <dt>美团服务</dt>
        <dd>美团外卖</dd>
        <dd>美团酒店</dd>
        <dd>猫眼电影</dd>
        <dd>美团配送</dd>
        <dd>美团云</dd>
        <dd>大众点评</dd>
        <dd>榛果民宿</dd>
        <dd>无人配送</dd>
      </dl>
      <dl>
        <dt>商家合作</dt>
        <dd>美食商家入驻(非外卖)</dd>
        <dd>美团外卖开店申请</dd>
        <dd>美团收银官网</dd>
        <dd>外卖配送加盟申请</dd>
        <dd>美团点评餐饮学院</dd>
        <dd>酒店商家入驻</dd>
        <dd>境内度假商家入驻</dd>
        <dd>综合商家入驻</dd>
        <dd>榛果民宿房东商家入驻</dd>
        <dd>商家开票申请</dd>
        <dd>美团点评智能收银机</dd>
        <dd>聚宝盆餐饮开放平台</dd>
        <dd>美团智能支付</dd>
        <dd>免费使用美团排队</dd>
        <dd>快驴进货商家合作</dd>
        <dd>美团闪购商家入驻</dd>
      </dl>
      <dl>
        <dt>代理商加盟</dt>
        <dd>到店餐饮代理商招募</dd>
        <dd>非餐饮代理商招募</dd>
        <dd>美团联盟</dd>
        <dd>美团收银招募线上分销商</dd>
        <dd>美团点评5S服务商招募</dd>
      </dl>
      <dl>
        <dt>行业规范</dt>
        <dd>美团点评餐饮安全管理办法</dd>
      </dl>
      <dl>
        <dt>廉正举报</dt>
        <dd>廉政邮箱</dd>
      </dl>
      <dl>
        <dt>关注美团</dt>
        <dd>美团新浪微博</dd>
      </dl>
      <dl>
        <dt>公司信息</dt>
        <dd>关于我们</dd>
        <dd>投资者关系</dd>
        <dd>加入我们</dd>
        <dd>法律声明</dd>
        <dd>价格说明</dd>
        <dd>美团网平台点评规则</dd>
        <dd>美团点评团购用户服务条款</dd>
        <dd>商户诚信公约及管理办法</dd>
      </dl>
      <dl>
        <dt>消费者服务热线</dt>
        <dd>外卖消费者：10109777</dd>
        <dd>猫眼消费者：10105335</dd>
        <dd>其他消费者：10107888</dd>
      </dl>
      <dl>
        <dt>商家服务热线</dt>
        <dd>外卖&餐饮商家：10105557</dd>
        <dd>休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等</dd>
        <dd>商家：10100107</dd>
      </dl>
      <dl>
        <dt>投诉举报热线</dt>
        <dd>违法和不良信息举报电话：4006018900</dd>
        <dd>举报邮箱：tousujubao@meituan.com</dd>
      </dl>
      <dl>
        <dt>商家自助入驻美团入口</dt>
      </dl>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="less" scoped>
@mColor: #28bfac;
@mmColor: #9f9999;
.container {
  .content {
    padding: 40px 45px;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    height: 432px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    color: @mmColor;
    dl {
      width: 220px;
      padding-bottom: 20px;
      line-height: 2;
      dt {
        font-size: 14px;
        font-weight: 500;
        color: #666;
      }
      dd {
        font-size: 12px;
        cursor: pointer;
        &:hover {
          color: @mColor;
        }
      }
    }
  }
}
</style>

