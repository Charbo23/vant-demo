import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //保存状态
    test: 'Testing from Vuex',
    navTitle: '标题',
    rate: 0,
    limit: 5
  },
  mutations: {
    increaseRate(state) {
      state.rate = state.rate + 1 >= state.limit ? state.limit : state.rate + 1;
    },
    decreaseRate(state) {
      state.rate = state.rate - 1 <= 0 ? 0 : state.rate - 1;
    },
    updateNavTitle(state, { navTitle }) {
      state.navTitle = navTitle;
    }
  },
  getters: {},
  actions: {},
  modules: {},
});
