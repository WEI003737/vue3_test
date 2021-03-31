export default {
  msg (state) {
    return `${state.msg} => 經過了getters`;
  },
  isLoading (satate) {
    return state.isLoading;
  }
}