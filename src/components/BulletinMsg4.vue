<template>
  <div class="BulletinMsg">
    <h2>进可攻退可守!新版本上单大树玩法思路</h2>
    <div class="message">
      <ul>
        <li class="clearfix">
          <p class="fl">
            <span>公告</span>
          </p>
          <p class="fl">12.23韩服套路总结，千变者皎月，九头蛇泽丽</p>
          <p class="fr">12-16</p>
        </li>
        <li class="clearfix">
          <p class="fl">
            <span>视频</span>
          </p>
          <p class="fl">12.23版本强势英雄推荐，为新赛季冲分做准备</p>
          <p class="fr">12-15</p>
        </li>
        <li class="clearfix">
          <p class="fl">
            <span>公告</span>
          </p>
          <p class="fl">队友的守护神! 上单慎全方位教学</p>
          <p class="fr">12-15</p>
        </li>
        <li class="clearfix">
          <p class="fl">
            <span>视频</span>
          </p>
          <p class="fl">12.23乱斗改动解析及环境预测</p>
          <p class="fr">12-14</p>
        </li>
        <li class="clearfix">
          <p class="fl">
            <span>新闻</span>
          </p>
          <p class="fl">12.23版本研究所，坦克英雄集体加强! 四位英雄大规.</p>
          <p class="fr">12-14</p>
        </li>
        <li class="clearfix">
          <p class="fl">
            <span>新闻</span>
          </p>
          <p class="fl">LPL年度最佳阵容精选皮肤限时折扣活动预告</p>
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