const getters = {
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
}
export default getters;