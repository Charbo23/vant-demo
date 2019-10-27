import * as types from './mutation-types';


const mutations = {
  [types.SET_RATE](state, { diff, value } = {}) {
    diff && (diff = _.toNumber(diff));
    value && (value = _.toNumber(value));
    const temp = !isNaN(value) ? value : state.rate + (!isNaN(diff) ? diff : 0);
    state.rate = _.clamp(temp, 0, state.limit);
  },
  [types.SET_NAV_TITLE](state, { navTitle } = {}) {
    state.navTitle = navTitle;
  },
  [types.SET_USER_LIST](state, userList) {
    state.userList = userList;
  },
  [types.SET_INFO](state, { address } = {}) {
    state.info = state.info
      .set('address', address || '湖州师范学院')
      .delete('name');
  },
  [types.SET_ADDRESS_INDEX](state) {
    state.addressIndex = (state.addressIndex + 1) % state.addressArr.length;
  }
}

export default mutations;