<template>
  <div id="app">
    <div class="main-content">
      <div id="nav"></div>
      <router-view />
    </div>
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="wap-home-o">
        首页
        <template #icon="{active}"><van-icon :name="active?'wap-home':'wap-home-o'" /></template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/about" icon="info-o">
      关于
       <template #icon="{active}"><van-icon :name="active?'info':'info-o'" /></template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
  padding-bottom: 50px;
}
.van-tabbar-item {
  cursor: pointer;
}
</style>
