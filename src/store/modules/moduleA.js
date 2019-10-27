const moduleA = {
  //命名空间影响除state外的属性（state本身已经区分命名空间），使得他们需要以路径方式访问
  namespaced: true,
  state: {
    maTitle: 'Title From ModuleA'
  },
  mutations: {

  },
  getters: {

  },
  actions: {

  }
}
export default moduleA;