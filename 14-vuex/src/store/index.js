import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import counterModule from './modules/counter/index.js';

// The store is a central place to store all the data of our application.
const store = createStore({
  modules: {
    numbers: counterModule
  },
  // The state is the data that we want to store.
  state() {
    return {
      isLoggedIn: false
    };
  },
  // The mutations are the functions that we use to change the state.
  mutations: rootMutations,
  // The actions are the functions that we use to call the mutations.
  actions: rootActions,
  // The getters are the functions that we use to get the state.
  getters: rootGetters
});

export default store;