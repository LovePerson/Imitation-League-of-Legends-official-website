<template>
  <div class="HotActivity inner">
    <div class="HotActivity-top clearfix">
      <!-- 热门活动 -->
      <div class="fl left">
        <div class="title clearfix">
          <h2 class="fl">热门活动</h2>
          <div class="fl clearfix caption">
            <button
              class="fl"
              v-for="item in currentList"
              :key="item.id"
              @mouseenter="current = item.msg"
              :class="current == item.msg ? 'active' : ''"
            >
              {{ item.title }}
            </button>
            <p class="fl">更多--></p>
          </div>
        </div>
        <components :is="current" />
      </div>
      <!-- 下载游戏 -->
      <div class="fr right">
        <div class="right-top">
          <ul class="clearfix">
            <li class="fl">
              <h2>下载游戏</h2>
              <p>DOWNLOAD THE GAME</p>
            </li>
            <li class="fr">
              <p>新手必备</p>
              <p>领取中心</p>
            </li>
          </ul>
        </div>
        <div class="right-bottm">
          <ul class="clearfix">
            <li class="fl">在线客服</li>
            <li class="fl">秩序殿堂</li>
            <li class="fl">游戏资料</li>
            <li class="fl">峡谷之巅</li>
          </ul>
          <ul class="clearfix">
            <li class="fl">云顶之奔</li>
            <li class="fl">攻略中心</li>
            <li class="fl">LOL宇宙</li>
            <li class="fl">微信绑定</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 零散图片 -->
    <div class="HotActivity-bottom clearfix">
      <div class="fl left">
        <ul class="clearfix">
          <li class="fl">
            <p>英雄更新</p>
            <div>
              <h3>纳祖芒荣耀 奎桑提</h3>
              <p>全新上单坦克英雄上线轻视我的人，今天就会吃到教训</p>
            </div>
          </li>
          <li class="fl">
            <p>新皮肤</p>
            <div>
              <h3>北极星</h3>
              <p>冰雪节限定北极星系列皮肤上线</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="fr right">
        <ul class="clearfix">
          <li class="fl">
            <img
              src="https://img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_baf0292423a934346c678e0c5298d6fe/0"
              alt=""
            />
            <img
              src="https://img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_a363944cdcae09cf08ea4be8a6bb3948/0"
              alt=""
            />
          </li>
          <li class="fr">
            <img
              src="https://img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_c218eab6d7d6e52809a8e3f294dc5b35/0"
              alt=""
            />
            <p>周免--></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 导入组件
import ActivityMsg1 from "./ActivityMsg1";
import ActivityMsg2 from "./ActivityMsg2";
import ActivityMsg3 from "./ActivityMsg3";
export default {
  // 注册组件
  components: {
    ActivityMsg1,
    ActivityMsg2,
    ActivityMsg3,
  },
  data() {
    return {
      // 记录热门活动显示的组件
      current: "ActivityMsg1",
      // 热门活动数据
      currentList: [
        {
          id: 0,
          msg: "ActivityMsg1",
          title: "正在进行",
        },
        {
          id: 1,
          msg: "ActivityMsg2",
          title: "商城特惠",
        },
        {
          id: 2,
          msg: "ActivityMsg3",
          title: "长期活动",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.HotActivity-top {
  .left {
    .title {
      h2 {
        width: 150px;
        text-align: center;
        font: 550 28px/36px "微软雅黑";
        border-left: 5px solid #1da6ba;
      }
      .caption {
        border-bottom: 1px solid #e1e3e3;
        button {
          cursor: pointer;
          border: none;
          background: none;
          width: 120px;
          letter-spacing: 3px;
          text-align: center;
          color: #676767;
          font: 700 18px/36px "微软雅黑";
        }
        p {
          color: #8caaae;
          font: 14px/36px "微软雅黑";
          margin-left: 250px;
        }
        .active {
          border-bottom: 3px solid #1da6ba;
          color: #1da6ba;
        }
      }
    }
  }
  .right {
    width: 460px;
    .right-top {
      ul {
        text-align: center;
        color: white;
        li:nth-child(1) {
          width: 350px;
          height: 200px;
          background: #30aecd;

          h2 {
            margin-top: 70px;
            font: 700 42px/1 "微软雅黑";
            letter-spacing: 3px;
          }
          p {
            font: 14px/25px "微软雅黑";
          }
        }
        li:nth-child(2) {
          p:nth-child(1) {
            margin: 0 0 20px 0;
          }
          p {
            width: 100px;
            height: 90px;
            background: #30aecd;
            font: 550 14px/90px "微软雅黑";
          }
        }
      }
    }
    .right-bottm {
      ul {
        margin: 18px 0;
        text-align: center;
        font: 12px/50px "微软雅黑";
        color: #8aa4a1;
        li {
          width: 100px;
          height: 50px;
          background: white;
          margin: 0 20px 0 0;
        }
        li:nth-last-child(1) {
          margin-right: 0px;
        }
        li:hover {
          cursor: pointer;
          color: #8cced8;
          // 盒子阴影
          box-shadow: 1px 1px 10px 1px black;
        }
      }
      ul:nth-child(2) {
        margin-bottom: 0px;
      }
    }
  }
}
.HotActivity-bottom {
  margin: 40px 0 50px 0;
  .left {
    ul {
      li {
        width: 402px;
        height: 254px;
        box-sizing: border-box;
        > p {
          margin: 10px 0 0 10px;
          width: 80px;
          height: 36px;
          text-align: center;
          font: 12px/36px "微软雅黑";
          background: rgba(0, 0, 0, 0.2);
          letter-spacing: 2px;
          color: #a69e7a;
        }
        > div {
          height: 52px;
          padding: 0 0 0 10px;
          margin: 155px 0 0 0;
          background: rgba(0, 0, 0, 0.2);
          h3 {
            font-weight: 700;
            color: #b7a274;
          }
          p {
            color: white;
          }
        }
      }
      li:nth-child(1) {
        margin: 0 14px 0 0;
        background: url("https://img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_40abe69773010ef7a775e5ce7d12f891/0")
          no-repeat;
      }
      li:nth-child(2) {
        background: url("https://img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_5292cf010d034e64004cacdbae3cc8a3/0")
          no-repeat;
      }
    }
  }
  .right {
    ul {
      li:nth-child(1) {
        img {
          display: block;
          width: 200px;
          height: 115px;
        }
        img:nth-child(1) {
          margin-bottom: 22px;
        }
      }
      li:nth-child(2) {
        img {
          margin: 0 0 15px 15px;
        }
        p {
          margin-left: 15px;
          width: 242px;
          height: 57px;
          background: #bba179;
          text-align: center;
          font: 16px/57px "微软雅黑";
          color: white;
          letter-spacing: 5px;
        }
      }
    }
  }
}
</style>