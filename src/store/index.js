import Vue from "vue";
import Vuex from "vuex";
import _ from 'lodash';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import moduleA from './modules/moduleA';
import { Map } from 'immutable';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    addressArr: ['From action', '湖州师范学院'],
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
  getters,
  mutations,
  actions,
  modules: {
    moduleA
  },
});


