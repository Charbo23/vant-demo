<template>
  <div class="axios">
    <h2>Axios Testing Zone</h2>
    <div :class="$style['test-zone']">
      <van-button
        :loading="isLoading1"
        loading-text="加载中"
        type="info"
        icon="play-circle-o"
        @click="onClickRequest1"
      >发送普通GET请求</van-button>
    </div>
    <div :class="$style['test-zone']">
      <van-button
        :loading="isLoading2"
        loading-text="加载中"
        type="info"
        icon="play-circle-o"
        @click="onClickRequest2"
      >发送并发请求</van-button>
    </div>
  </div>
</template>

<script>
import request, { createRequest, requestAll } from "@/network/request";

export default {
  name: "Axios",
  data() {
    return {
      isLoading1: false,
      isLoading2: false
    };
  },
  methods: {
    async onClickRequest1() {
      this.isLoading1 = true;
      try {
        const { data } = await request.get("/posts");
        this.isLoading1 = false;
        this.$notify({
          type: "success",
          message: `${data.length} infos retrieved`
        });
      } catch (error) {
        throw error;
      }
    },
    async onClickRequest2() {
      this.isLoading2 = true;
      const resArr = await requestAll([
        request({
          method: "GET",
          url: "/posts",
          params: { userId: 1 }
        }),
        request({
          method: "GET",
          url: "/albums",
          params: { userId: 2 }
        })
      ]);
      this.isLoading2 = false;
      const dataTotal = resArr.reduce((total, item) => {
        return total + item.data.length;
      }, 0);
      this.$notify({
        type: "success",
        message: `${dataTotal} infos retrieved`
      });
      // const [res1, res2] = resArr;
      // console.log(res1.data.length + res2.data.length);
    }
  }
};
</script>
<style lang="scss" module>
.test-zone {
  & + & {
    margin-top: 20px;
  }
}
</style>