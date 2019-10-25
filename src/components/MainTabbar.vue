<template>
  <van-tabbar route >
    <van-tabbar-item replace to="/home">
      首页
      <template #icon="{active}">
        <van-icon :name="active?'wap-home':'wap-home-o'" />
      </template>
    </van-tabbar-item>
     <van-tabbar-item replace to="/test">
      测试
      <template #icon="{active}">
        <van-icon :name="active?'clock':'clock-o'" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/about">
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