export default {
  namespaced: true,
  state: {
    token: ''
  },
  getters: {
    getToken (state) {
      return state.token;
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token;
    }
  },
  actions: {
    handleSetToken (context, token) {
      context.commit('setToken', token);
    }
  }
}