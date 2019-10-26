<template>
  <div class="test">
    <h2 :class="$style['text-zone']" @click="startAnime">{{test}}</h2>
    <div :class="$style['test-zone']">
      {{getInfoText}}
      <van-button type="info" size="small" icon="replay" @click="onClickUpdate">Update</van-button>
    </div>
    <div :class="$style['test-zone']">
      <h3>Rate: {{rate}}</h3>
      <rate />
    </div>
    <div :class="$style['test-zone']">
      <van-button :loading="isLoading" type="info" loading-text="加载中..." @click="onClickLoad">点击加载</van-button>
    </div>
    <div :class="$style['test-zone']">
      <van-button @click="onClickShow">
        <van-icon name="description" :dot="hasDot" class="btn-icon" />
        <span>查看用户列表</span>
      </van-button>
    </div>
    <van-dialog v-model="isShow" title="标题" show-cancel-button>
      <van-list>
        <h4 v-if="userListLength===0">暂无信息</h4>
        <van-cell
          v-else
          v-for="item in userList"
          :key="item.id"
          :title="`${item.id}. ${item.name}`"
        ></van-cell>
      </van-list>
    </van-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState, mapActions } from "vuex";
import Rate from "@/components/Rate.vue";
import axios from "axios";
import anime from "animejs";

export default {
  name: "Test",
  components: {
    Rate
  },
  data() {
    return {
      isLoading: false,
      isShow: false,
      hasDot: false
    };
  },
  computed: {
    ...mapGetters(["getUserListByRange", "getUserListLength", "getInfoText"]),
    ...mapState(["test", "info", "rate"]),
    userList() {
      return this.getUserListByRange(0, 6);
    },
    userListLength() {
      return this.getUserListLength(0, 6);
    }
  },
  methods: {
    ...mapMutations(["setUserList", "updateInfo"]),
    ...mapActions(["updateInfoAction"]),
    startAnime() {
      anime({
        targets: `h2.${this.$style["text-zone"]}`,
        scale: 1.6,
        duration: 800,
        direction: "alternate"
        //  delay:300,
        //  loop:true
      }).finished.then(() => {});
    },
    async onClickUpdate() {
      this.$toast.loading({ message: "加载中...", forbidClick: true });
      const res = await this.updateInfoAction();
      this.$toast.success(res);
    },
    onClickShow() {
      this.isShow = true;
      this.hasDot = false;
    },
    async onClickLoad() {
      this.isLoading = true;
      const userList = await this.getUsers();
      this.setUserList(userList);
      this.isLoading = false;
      this.hasDot = true;
    },
    async getUsers() {
      const { data: userList } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      this.$notify({
        type: "success",
        message: `${userList.length} infos retrived`
      });
      return userList;
    }
  }
};
</script>

<style lang="scss" module>
.text-zone {
  cursor: pointer;
}
.test-zone {
  & + & {
    margin-top: 20px;
  }
}
</style>