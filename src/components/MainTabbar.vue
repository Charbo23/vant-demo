<template>
  <van-tabbar route >
    <van-tabbar-item replace to="/home" icon="wap-home-o">
      首页
      <template #icon="{active}">
        <van-icon :name="active?'wap-home':'wap-home-o'" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/about" icon="info-o">
      关于
      <template #icon="{active}">
        <van-icon :name="active?'info':'info-o'" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "MainTabbar"
};
</script>

<style>
</style>