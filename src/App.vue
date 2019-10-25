<template>
  <div id="app">
    <van-nav-bar :title="$store.state.navTitle"></van-nav-bar>
    <div class="main-content">
      <!-- <transition name="fade" mode="out-in"> -->
      <keep-alive include="About,Home">
        <router-view />
      </keep-alive>
      <!-- </transition> -->
    </div>
    <main-tabbar />
  </div>
</template>
<script>
import MainTabbar from "@/components/MainTabbar.vue";

export default {
  name: "App",
  components: {
    MainTabbar
  }
};
</script>
<style lang="scss">
body {
  // 加入动画需禁止横向滚动条
  overflow-x: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.ri {
    display: inline-block;
    min-width: 1em;
    font-size: 1.3em;
    line-height: inherit;
    vertical-align: top;
 }
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.main-content {
  padding: 10px 0 60px;
}
.van-tabbar-item {
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter {
  transform: translateX(50px);
}
.fade-leave-to {
  transform: translateX(-50px);
}
</style>
