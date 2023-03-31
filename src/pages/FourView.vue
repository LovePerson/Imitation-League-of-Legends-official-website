<template>
  <div class="photo">
    <h1 ref="Refh1">访问地址不存在哦,即将为您跳转主页...</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push({ name: "home" });
    }, 3000);
  },
};
</script>

<style scoped>
.photo {
  overflow: hidden;
  width: 100%;
  height: 700px;
  background: url("@/assets/img/ss1.jpg") no-repeat;
  background-size: 100% 100%;
  text-align: center;
}
h1 {
  margin: 300px auto;
  color: white;
  font-weight: 700;
  letter-spacing: 5px;
}
</style>