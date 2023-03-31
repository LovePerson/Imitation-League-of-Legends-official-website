<template>
  <!-- 头部-->
  <div class="header">
    <div class="nav inner clearfix">
      <!-- 官网导航 -->
      <div class="left fl clearfix">
        <img
          class="fl"
          src="https://game.gtimg.cn/images/lol/v3/logo-public.png"
          alt=""
        />
        <ul class="fl clearfix">
          <li class="fl">
            <a @mouseenter="mouseenter" href="JavaScript::">
              <span>游戏资料</span>
              <span>GAME INFO</span>
            </a>
          </li>
          <li class="fl">
            <a @mouseenter="mouseenter" href="JavaScript::">
              <span>商城/合作</span>
              <span>STORE</span>
            </a>
          </li>
          <li class="fl">
            <a @mouseenter="mouseenter" href="JavaScript::">
              <span>社区互动</span>
              <span>COMMUNITY</span>
            </a>
          </li>
          <li class="fl">
            <a @mouseenter="mouseenter" href="JavaScript::">
              <span>赛事官网</span>
              <span>ESPORTS</span>
            </a>
          </li>
          <li class="fl">
            <a @mouseenter="mouseenter" href="JavaScript::">
              <span>自助系统</span>
              <span>SYSTEM</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- 玩家信息登录 -->
      <div class="right fr clearfix">
        <p class="fl">搜索</p>
        <p class="fl">搜索</p>
        <div class="fl message clearfix">
          <div class="fl">
            <img
              src="https://game.gtimg.cn/images/lol/v2/personal/avatar/default.png"
              alt=""
            />
          </div>
          <p class="fl">亲爱的召唤师,欢迎<span>登录</span></p>
        </div>
      </div>
    </div>
    <!-- 查看详情 -->
    <div class="particulars inner clearfix">
      <a class="fl"></a>
      <ul class="fr clearfix">
        <li class="fl">当前游戏版本:</li>
        <li class="fl">Ver 12.23</li>
        <li class="fl">版本详情</li>
      </ul>
    </div>
    <!-- 官网子导航 -->
    <div class="headNavSub" ref="RefNavSub" @click="mouseout">
      <ul class="clearfix">
        <li class="fl">
          <a href="javascript::"> 游戏下载 </a>
          <a href="javascript::"> 新手指引 </a>
          <a href="javascript::"> 资料库 </a>
          <a href="javascript::"> 云顶之弈 </a>
          <a href="javascript::"> 攻略中心 </a>
          <a href="javascript::"> 开发者基地 </a>
          <a href="javascript::"> 海克斯战利品库</a>
          <a href="javascript::"> 英雄联盟宇宙 </a>
        </li>
        <li class="fl">
          <a href="javascript::"> 点券充值 </a>
          <a href="javascript::"> 道聚城 </a>
          <a href="javascript::"> 周边商城 </a>
          <a href="javascript::"> LOL桌游 </a>
          <a href="javascript::"> 网吧特权 </a>
          <a href="javascript::"> 电竞小说 </a>
          <a href="javascript::"> 海克斯战利品库</a>
          <a href="javascript::"> 英雄联盟宇宙 </a>
        </li>
        <li class="fl">
          <a href="javascript::"> 视频中心 </a>
          <a href="javascript::"> 官方微信 </a>
          <a href="javascript::"> 官方微博 </a>
          <a href="javascript::"> 玩家创作馆 </a>
          <a href="javascript::"> 玩家服务 </a>
          <a href="javascript::"> LOL组队专区 </a>
          <a href="javascript::"> 作者入驻计划 </a>
          <a href="javascript::"> 英雄联盟素材库 </a>
        </li>
        <li class="fl">
          <a href="javascript::"> 德玛西亚杯 </a>
          <a href="javascript::"> 全球总决赛 </a>
          <a href="javascript::"> 季中冠军赛 </a>
          <a href="javascript::"> LPL职业联赛 </a>
          <a href="javascript::"> LDL发展联赛 </a>
          <a href="javascript::"> 城市英雄争霸赛 </a>
          <a href="javascript::"> 全国高校联赛 </a>
          <a href="javascript::"> 云顶之弈公开赛 </a>
        </li>
        <li class="fl">
          <a href="javascript::"> 图标自助领取 </a>
          <a href="javascript::"> 转区系统 </a>
          <a href="javascript::"> 封号查询 </a>
          <a href="javascript::"> 账号注销 </a>
          <a href="javascript::"> 信誉分系统 </a>
          <a href="javascript::"> 服务器状态查询 </a>
          <a href="javascript::"> 秩序殿堂 </a>
          <a href="javascript::"> 峡谷之巅 </a>
        </li>
      </ul>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  methods: {
    // 鼠标移入显示子菜单
    mouseenter() {
      this.$refs.RefNavSub.style.display = "block";
    },
    // 鼠标点击隐藏子菜单
    mouseout() {
      this.$refs.RefNavSub.style.display = "none";
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  position: relative;
  width: 100%;
  height: 360px;
  background: url("https://img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_39a31529cea7ee5251e7d082bc2610f2/0")
    no-repeat center;
  background-size: 125% 100%;
  .nav {
    position: absolute;
    top: 0;
    left: 100px;
    margin-top: 10px;
    z-index: 2;
  }
  //  官网导航
  .left {
    width: 900px;
    img {
      width: 167px;
      height: 60px;
      margin-right: 15px;
    }
    ul {
      li {
        margin-top: 12px;
        width: 135px;
        height: 40px;
        text-align: center;

        a {
          span {
            display: block;
            letter-spacing: 1px;
          }
          span:nth-child(1) {
            color: white;
            font: 18px/1 "微软雅黑";
          }
          span:nth-child(2) {
            margin-top: 5px;
            color: #999699;
            font: 11px/1 "微软雅黑";
          }
        }
      }
    }
  }
  // 玩家信息登录
  .right {
    p:nth-child(1),
    p:nth-child(2) {
      width: 50px;
      line-height: 30px;
      margin-top: 10px;
      color: white;
    }
    .message {
      > div {
        width: 50px;
        height: 50px;
        border: 2px solid #bbae85;
        border-radius: 50%;
        text-align: center;
        margin-right: 10px;
        img {
          border-radius: 50%;
          width: 45px;
          height: 45px;
          margin-top: 4px;
        }
      }
      p {
        width: 180px;
        span {
          color: #e5dabc;
        }
      }
    }
  }
  //  官网导航子元素
  .headNavSub {
    display: none;
    position: relative;
    width: 100%;
    height: 360px;
    background: url("https://game.gtimg.cn/images/lol/v3/dark60-bg-repeat.png")
      repeat;
    ul {
      position: absolute;
      top: 70px;
      left: 270px;
      z-index: 99;
    }

    li {
      text-align: center;
      z-index: 99;
      a {
        display: block;
        color: white;
        width: 138px;
        font: 14px/30px "微软雅黑";
      }
      a:hover {
        color: #e3af68;
      }
    }
  }
  //  遮罩层
  .mask {
    width: 100%;
    height: 131px;
    position: absolute;
    left: 0;
    top: -10px;
    background: url("https://game.gtimg.cn/images/lol/v3/dark-jianbian-repeatx-0.png")
      repeat center top;
    z-index: 1;
  }
  // 查看详情
  .particulars {
    position: absolute;
    bottom: 35px;
    left: 100px;
    a {
      cursor: pointer;
      display: block;
      width: 160px;
      height: 40px;
      background-image: url(//game.gtimg.cn/images/lol/v3/topfoot-spr.png);
      background-size: 405px 178px;
      background-repeat: no-repeat;
      background-position: -216px -39px;
      margin-left: 600px;
    }

    ul {
      margin-top: 15px;
      line-height: 22px;
      li:nth-of-type(1) {
        color: #8a878a;
      }

      li:nth-of-type(2) {
        font-size: 12px;
        color: #f5d185;
        margin: 0 12px;
      }
      li:nth-of-type(3) {
        border: 1px solid #83632a;
        background: #0d0612;
        width: 70px;
        height: 22px;
        text-align: center;
        color: #83632a;
        font: 12px/22px "微软雅黑";
      }
    }
  }
}
</style>