<template>
  <div class="rate">
    <van-rate
      :count="limit"
      size="2rem"
      v-model="rate"
      allow-half
      void-icon="star"
      void-color="#eee"
    />
    <div :class="$style['btn-group']">
      <van-button :class="$style['van-button']" type="info" @click="onClickAdd">
        <i class="btn-icon ri-add-line"></i>
      </van-button>
      <van-button :class="$style['van-button']" type="info" @click="onClickSubtract">
        <i class="btn-icon ri-subtract-line"></i>
      </van-button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  name: "Rate",
  data() {
    return {};
  },
  computed: {
    ...mapState({ limit: "limit", vuex_rate: "rate" }),
    rate: {
      get() {
        return this.vuex_rate;
      },
      set(value) {
        this.setRateAction({ value });
      }
    }
  },
  methods: {
    ...mapActions(["setRateAction"]),
    onClickAdd() {
      this.setRateAction({ diff: 1 });
    },
    onClickSubtract() {
      this.setRateAction({ diff: -1 });
    }
  }
};
</script>

<style lang="scss" module>
.btn-group {
  margin-top: 10px;
  .van-button + .van-button {
    margin-left: 20px;
  }
}
</style>