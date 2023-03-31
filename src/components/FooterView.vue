<template>
  <div class="FooterView">
    <div class="footer inner clearfix">
      <div class="fl left clearfix">
        <p class="fl"></p>
        <p class="fl"></p>
      </div>
      <ul class="fr right">
        <li>
          腾讯互动娱乐|服务条款|隐私保护指引儿童隐私保护指引 腾游戏招聘
          腾讯游戏客服 游戏列表广告服务及商务合作
        </li>
        <li>腾讯公司版权所有 网络游戏行业防沉迷自律公约</li>
        <li>COPYRIGHT &copy; 1998 - 2022 TENCENT. ALL RIGHTS RESERVED.</li>
        <li>COPYRIGHT &copy; 2012 Riot Games,Inc. ALL RIGHTS RESERVED.</li>
        <li>
          本网络游戏适合16+岁的用户使用;为了您的健康，请合理控制游戏时间。
        </li>
        <li>
          <img
            src="https://game.gtimg.cn/images/js/2018foot/logo/gswj.png"
            alt=""
          />
          工商网监电子标识|粤网文[2020]13396-195号 () 网出证 () 字第054号
        </li>
        <li>
          出准文号:新出南字20111310号 文网进字20111004号1 出物号:SBN
          978-7-89989-145-2全国文化市场统一举报电话: 12318
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.FooterView {
  width: 100%;
  height: 250px;
  background: #e3e2e2;
  .footer {
    padding: 50px 0 0 0;
    box-sizing: border-box;
    .left {
      margin: 60px 100px;
      p:nth-child(1) {
        margin: 0 45px 0 0;
        width: 189px;
        height: 34px;
        background: url("https://game.gtimg.cn/images/lol/v3/topfoot-spr.png")
          no-repeat;
        background-position: -218px 0px;
      }
      p:nth-child(2) {
        width: 98px;
        height: 28px;
        background: url("https://game.gtimg.cn/images/lol/v3/logo-rigo.png")
          no-repeat;
        background-position: 0px 0px;
      }
    }
    .right {
      li {
        color: #d6b589;
        font: 14px/22px "微软雅黑";
      }
    }
  }
}
</style>