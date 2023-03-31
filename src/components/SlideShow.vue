<template>
  <div class="slideshow inner clearfix">
    <!-- 轮播图 -->
    <div class="slideshow-Photo fl">
      <!-- 轮播图列表 -->
      <!-- 注册移入事件 停止定时器  mouseenter -->
      <!-- 注册移出事件 开启定时器  mouseout -->
      <div
        class="imgPhoto clearfix"
        @mouseenter="mouseenter"
        @mouseout="mouseout"
      >
        <img :src="imgList[count]" alt="" />
      </div>
      <!-- 轮播图文字 -->
      <ul class="imgTitleList clearfix">
        <!-- 设置ref属性 -->
        <!-- 注册移入事件 停止定时器  显示图片 mouseenter  传入imgTitleList的id Titletap-->
        <!-- 注册移出事件 开启定时器  mouseout -->
        <li
          @mouseenter="Titletap(item.id)"
          @mouseout="mouseout"
          ref="RefimgTitle"
          class="fl"
          v-for="item in imgTitleList"
          :key="item.id"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
    <!-- 公告栏 -->
    <div class="bulletin fr">
      <!-- 公告标题 -->
      <div class="bulletin-Button">
        <!-- 注册滑入事件显示对应的组件 -->
        <button
          v-for="item in currentList"
          :key="item.id"
          @mouseenter="current = item.msg"
          :class="current == item.msg ? 'active' : ''"
        >
          {{ item.title }}
        </button>
      </div>
      <!-- components动态组件 动态在视图中帮我们调用一个自定义组件 -->
      <components :is="current" />
      <!-- 更多信息 -->
      <div class="more">
        <p>阅读更多<span>最新资讯</span>-></p>
      </div>
    </div>
  </div>
</template>

<script>
// 导入组件
import BulletinMsg1 from "./BulletinMsg1";
import BulletinMsg2 from "./BulletinMsg2";
import BulletinMsg3 from "./BulletinMsg3";
import BulletinMsg4 from "./BulletinMsg4";
import BulletinMsg5 from "./BulletinMsg5";
export default {
  // 注册组件
  components: {
    BulletinMsg1,
    BulletinMsg2,
    BulletinMsg3,
    BulletinMsg4,
    BulletinMsg5,
  },
  // 生命周期钩子函数 mounted 表示已经页面已经创建完成，元素节点可以挂载，可以读取data中的数据
  mounted() {
    this.slideshow();
  },
  data() {
    return {
      // 记录公告栏显示的组件
      current: "BulletinMsg1",
      // 公告栏数据
      currentList: [
        {
          id: 0,
          msg: "BulletinMsg1",
          title: "综合",
        },
        {
          id: 1,
          msg: "BulletinMsg2",
          title: "公告",
        },
        {
          id: 2,
          msg: "BulletinMsg3",
          title: "赛事",
        },
        {
          id: 3,
          msg: "BulletinMsg4",
          title: "攻略",
        },
        {
          id: 4,
          msg: "BulletinMsg5",
          title: "社区",
        },
      ],
      // 记录当前显示的图片和文字样式
      count: 0,
      // timer 记录定时器ID
      timer: "",
      imgList: [
        "https://ossweb-img.qq.com/upload/adw/image/977/20221209/f2e1bb9c9effb87940b0cf9f1fd6e890.jpeg",
        "https://ossweb-img.qq.com/upload/adw/image/977/20221208/c5cbac44b13190d684d4bd38cfc2b0e5.jpeg",
        "https://ossweb-img.qq.com/upload/adw/image/977/20221209/cc524eea284d1267b9223e8a1c9a88f3.jpeg",
        "https://ossweb-img.qq.com/upload/adw/image/977/20221208/ec7f251f8bbed32ae0034e98b62820d0.jpeg",
        "https://ossweb-img.qq.com/upload/adw/image/977/20221213/03e2d9ed2ac058c35de93c6ff0ed76d3.jpeg",
      ],
      imgTitleList: [
        {
          id: 0,
          title: "北极星系列皮肤上线",
        },
        {
          id: 1,
          title: "星之守护者 小小拉克丝",
        },
        {
          id: 2,
          title: "2022北极星 通行证",
        },
        {
          id: 3,
          title: "第8赛季 怪兽来袭",
        },
        {
          id: 4,
          title: "S8群星依旧棋盘",
        },
      ],
    };
  },
  methods: {
    // 轮播图切换
    slideshow() {
      // 初始化文字的active样式
      this.$refs.RefimgTitle[this.count].setAttribute("class", "active fl");
      // 开启定时器
      this.timer = setInterval(() => {
        // 数据每次自加1
        this.count++;
        if (this.count >= 5) {
          this.count = 0;
        }
        // 判断是否可以获得RefimgTitle的class属性
        if (this.$refs.RefimgTitle[this.count].getAttribute("class")) {
          // 清除文字的active样式
          this.$refs.RefimgTitle.forEach((item) => {
            item.setAttribute("class", "fl");
          });
          // 添加文字的active样式
          this.$refs.RefimgTitle[this.count].setAttribute("class", "active fl");
        }
      }, 1500);
    },
    // 鼠标移入停止定时器
    mouseenter() {
      clearInterval(this.timer);
    },
    // 鼠标移出开启定时器
    mouseout() {
      // 重新调用轮播图函数
      this.slideshow();
    },
    // 鼠标移入文字切换图片
    Titletap(index) {
      clearInterval(this.timer);
      // 显示点击的图片下标
      this.count = index;
      // 判断是否可以获得RefimgTitle的class属性
      if (this.$refs.RefimgTitle[this.count].getAttribute("class")) {
        // 清除文字的active样式
        this.$refs.RefimgTitle.forEach((item) => {
          item.setAttribute("class", "fl");
        });
        // 添加文字的active样式
        this.$refs.RefimgTitle[index].setAttribute("class", "active fl");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.slideshow {
  margin: 30px auto;
  // 轮播图
  .slideshow-Photo {
    // 轮播图列表
    .imgPhoto {
      width: 820px;
      height: 340px;
    }
    // 轮播图文字
    .imgTitleList {
      li {
        cursor: pointer;
        width: 164px;
        height: 40px;
        font: 14px/40px "微软雅黑";
        text-align: center;
        background: #e3e2e2;
      }
      li.active {
        border-bottom: 1px solid #cea861;
        color: #cea861;
        background: white;
      }
    }
  }
  // 公告栏
  .bulletin {
    width: 460px;
    height: 340px;
    .bulletin-Button {
      button {
        cursor: pointer;
        border: none;
        background: none;
        width: calc(460px / 5);
        letter-spacing: 5px;
        text-align: center;
        color: #676767;
        font: 700 18px/30px "微软雅黑";
      }
      .active {
        border-bottom: 3px solid #1da6ba;
        color: #1da6ba;
      }
    }
    .more {
      margin-top: 10px;
      width: 100%;
      height: 42px;
      background: #e3e2e2;
      text-align: center;
      line-height: 42px;
      span {
        color: #88b0c1;
        font-size: 12px;
        margin: 0 5px;
      }
    }
  }
}
</style>