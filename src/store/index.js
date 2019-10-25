import Vue from "vue";
import Vuex from "vuex";
import _ from 'lodash';
import { Map, t } from 'immutable';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test: 'Testing from Vuex',
    navTitle: '标题',
    rate: 0,
    limit: 5,
    userList: [],
    info: Map({
      name: 'Charbo',
      age: '21'
    })
  },
  mutations: {
    changeRate(state, { diff, value, type } = {}) {
      diff && (diff = _.toNumber(diff));
      value && (value = _.toNumber(value));
      const temp = !isNaN(value) ? value : state.rate + (!isNaN(diff) ? diff : 0);
      state.rate = _.clamp(temp, 0, state.limit);
    },
    updateNavTitle(state, { navTitle } = {}) {
      state.navTitle = navTitle;
    },
    setUserList(state, userList) {
      state.userList = userList;
    },
    updateInfo(state) {
      // console.log(state.info);
      state.info = state.info.set('address', '湖州师范学院').delete('name');
    }
  },
  getters: {
    getFullTitle() {
      return (title) => title ? title + " - Vant Demo" : 'Vant Demo';
    },
    getUserListByRange(state) {
      return (start, end) => _.slice(state.userList, start, end);
    },
    getUserListLength(state, getters) {
      return (start, end) => getters.getUserListByRange(start, end).length;
    },
    getInfoText(state) {
      // return state.info.toJS();
      return JSON.stringify(state.info);
    }
  },
  actions: {},
  modules: {},
});
