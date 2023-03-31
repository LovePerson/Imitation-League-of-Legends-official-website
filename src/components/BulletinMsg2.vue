<template>
  <div class="BulletinMsg">
    <h2>北极星2022皮肤与通行证已上线</h2>
    <div class="message">
      <ul>
        <li class="clearfix">
          <p class="fl">
            <span>公告</span>
          </p>
          <p class="fl">2022年12月15日 不停机更新公告</p>
          <p class="fr">12-15</p>
        </li>
        <li class="clearfix">
          <p class="fl">
            <span>公告</span>
          </p>
          <p class="fl">峡谷之巅2022下半赛季奖励公告</p>
          <p class="fr">12-15</p>
        </li>
        <li class="clearfix">
          <p class="fl">
            <span>公告</span>
          </p>
          <p class="fl">12.23版本更新公告: 极地大乱斗更新，排位选角顺序..</p>
          <p class="fr">12-15</p>
        </li>
        <li class="clearfix">
          <p class="fl">
            <span>公告</span>
          </p>
          <p class="fl">12.23云顶之弈版本更新公告</p>
          <p class="fr">12-14</p>
        </li>
        <li class="clearfix">
          <p class="fl">
            <span>新闻</span>
          </p>
          <p class="fl">云顶之弈《怪兽来袭!》系列道具 限时销售公告</p>
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