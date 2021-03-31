import { createStore } from 'vuex';
import state from './states';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

import Auth from './Auth/index';

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {
    Auth
  }
})
