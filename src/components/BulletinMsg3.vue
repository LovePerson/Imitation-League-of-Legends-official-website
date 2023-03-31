<template>
  <div class="BulletinMsg">
    <h2>TOP5: Garvey傲岸雄姿勇者铸荣耀</h2>
    <div class="message">
      <ul>
        <li class="clearfix">
          <p class="fl">
            <span>赛事</span>
          </p>
          <p class="fl">2022德玛西亚杯单败淘汉赛16进4赛程及参赛名单</p>
          <p class="fr">12-16</p>
        </li>
        <li class="clearfix">
          <p class="fl">
            <span>赛事</span>
          </p>
          <p class="fl">纪录片《此志无双》一全球总决赛篇，今晚20点播出!</p>
          <p class="fr">12-15</p>
        </li>
        <li class="clearfix">
          <p class="fl">
            <span>赛事</span>
          </p>
          <p class="fl">2022LPL年度选手纪录片《此志无双》一全球总决赛篇...</p>
          <p class="fr">12-15</p>
        </li>
        <li class="clearfix">
          <p class="fl">
            <span>赛事</span>
          </p>
          <p class="fl">2022德玛西亚杯瑞士轮参赛队伍及成员名单</p>
          <p class="fr">12-14</p>
        </li>
        <li class="clearfix">
          <p class="fl">
            <span>赛事</span>
          </p>
          <p class="fl">奇迹诞生，2022德玛西亚杯12月14日开赛!</p>
          <p class="fr">12-14</p>
        </li>
        <li class="clearfix">
          <p class="fl">
            <span>赛事</span>
          </p>
          <p class="fl">全明星TOP5: GALA神恩激荡纵情舞游刃</p>
          <p class="fr">12-12</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.BulletinMsg {
  h2 {
    width: 100%;
    text-align: center;
    color: #0da0b4;
    font: 700 24px/60px "微软雅黑";
  }
  h2:hover {
    color: #c7af8c;
    cursor: pointer;
  }
  .message {
    ul {
      li {
        border-top: 1px solid #e1e3e3;
        font: 14px/38px "微软雅黑";
        p:nth-child(1) {
          span {
            display: block;
            width: 30px;
            height: 20px;
            border: 1px solid #c7af8c;
            color: #c7af8c;
            text-align: center;
            font: 12px/20px "微软雅黑";
            margin: 8px 20px 0 0;
          }
        }
        p:nth-child(2):hover {
          color: #c7af8c;
          cursor: pointer;
        }
      }
    }
  }
}
</style>