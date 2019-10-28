import * as types from './mutation-types';

const actions = {
  setRateAction({ commit }, payload) {
    commit(types.SET_RATE, payload);
  },
  setInfoAction({ commit, state }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit(types.SET_INFO, { address: state.addressArr[state.addressIndex] });
        commit(types.SET_ADDRESS_INDEX);
        resolve('done');
      }, 1000);
    })
  },
  setNavTitleAction({ commit }, payload) {
    commit(types.SET_NAV_TITLE, payload);
  }
}
export default actions;