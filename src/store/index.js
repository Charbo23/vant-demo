import Vue from "vue";
import Vuex from "vuex";
import _ from 'lodash';
import { Map } from 'immutable';
import { CHANGE_RATE } from './mutation-types';
Vue.use(Vuex);
const addressArr = ['From action', '湖州师范学院'];

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
    }),
    addressIndex: 0
  },
  mutations: {
    [CHANGE_RATE](state, { diff, value } = {}) {
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
    updateInfo(state, { address } = {}) {
      state.info = state.info
        .set('address', address || '湖州师范学院')
        .delete('name');
    },
    switchAddressIndex(state) {
      state.addressIndex = (state.addressIndex + 1) % addressArr.length;
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
  actions: {
    updateInfoAction({ commit, state }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('updateInfo', { address: addressArr[state.addressIndex] });
          commit('switchAddressIndex')
          resolve('done')
        }, 1000);
      })
    }
  },
  modules: {},
});
