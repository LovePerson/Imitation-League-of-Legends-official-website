<template>
  <div>
    <!--导航头部 -->
    <NavHeader />
    <!-- 轮播图区域 -->
    <SlideShow />
    <!-- 热门活动区域 -->
    <HotActivity />
    <!-- 底部 -->
    <FooterView />
  </div>
</template>

<script>
// 导入导航头部组件
import NavHeader from "@/components/NavHeader";
// 导入轮播图区域
import SlideShow from "@/components/SlideShow";
// 导入热门活动区域
import HotActivity from "@/components/HotActivity";
// 导入底部
import FooterView from "@/components/FooterView";
export default {
  // 注册组件
  components: {
    NavHeader,
    SlideShow,
    HotActivity,
    FooterView,
  },
};
</script>

<style>
</style>