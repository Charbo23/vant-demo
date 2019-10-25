<template>
  <div class="rate">
    <van-rate
      :count="$store.state.limit"
      size="2rem"
      v-model="$store.state.rate"
      allow-half
      void-icon="star"
      void-color="#eee"
    />
    <div :class="$style['btn-group']">
      <van-button type="info" @click="onClickAdd">
        <i class="ri ri-add-line"></i>
      </van-button>
      <van-button type="info" @click="onClickSubtract">
        <i class="ri ri-subtract-line"></i>
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rate",
  data() {
    return {};
  },
  methods: {
    onClickAdd() {
      this.$store.commit("increaseRate");
    },
    onClickSubtract() {
      this.$store.commit("decreaseRate");
    }
  }
};
</script>

<style lang="scss" module>
.btn-group {
  margin-top: 10px;
}
:global(.van-button) {
  & + & {
    margin-left: 10px;
  }
}
</style>