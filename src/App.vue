<template>
  <div id="app">
    <van-nav-bar :title="navTitle"></van-nav-bar>
    <!-- <van-nav-bar :title="getFullTitle(navTitle)"></van-nav-bar> -->
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
import { mapState,mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    MainTabbar
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['getFullTitle']),
    ...mapState(['navTitle'])
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
.btn-icon {
  display: inline-block;
  min-width: 1em;
  font-size: 1.2em;
  line-height: inherit;
  vertical-align: middle;
  padding-bottom: 0.2em;
  & + span {
    display: inline-block;
    margin-left: 5px;
  }
  &.van-icon {
    font-size: 16.8px;
  }
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
