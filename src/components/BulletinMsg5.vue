<template>
  <div class="BulletinMsg">
    <h2>乐芙兰VS斯维因:谋略对决,极...</h2>
    <div class="message">
      <ul>
        <li class="clearfix">
          <p class="fl">
            <span>视频</span>
          </p>
          <p class="fl">木! 瓜! 星!灵! 你是我的北极星</p>
          <p class="fr">12-16</p>
        </li>
        <li class="clearfix">
          <p class="fl">
            <span>娱乐</span>
          </p>
          <p class="fl">《英雄联盟》世界观中，哪个英雄的背景故事最为悲惨</p>
          <p class="fr">12-15</p>
        </li>
        <li class="clearfix">
          <p class="fl">
            <span>视频</span>
          </p>
          <p class="fl">剑魔佐兰妮对战!佐兰妮吃掉天使母亲?</p>
          <p class="fr">12-15</p>
        </li>
        <li class="clearfix">
          <p class="fl">
            <span>视频</span>
          </p>
          <p class="fl">当太空律动的音乐响起! 作者: 园长米..</p>
          <p class="fr">12-14</p>
        </li>
        <li class="clearfix">
          <p class="fl">
            <span>娱乐</span>
          </p>
          <p class="fl">太空律动同人头像</p>
          <p class="fr">12-14</p>
        </li>
        <li class="clearfix">
          <p class="fl">
            <span>娱乐</span>
          </p>
          <p class="fl">新英雄奎委提致敬彩蛋!</p>
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