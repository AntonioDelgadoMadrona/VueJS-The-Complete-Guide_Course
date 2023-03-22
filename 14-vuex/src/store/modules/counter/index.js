import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

export default {
  // The namespaced property is used to avoid naming conflicts between modules.
  namespaced: true,
  // The state is a function so that we can create a new state for each module.
  state() {
    return {
      counter: 0
    };
  },
  // The mutations are the functions that we use to change the state.
  mutations: counterMutations,
  // The actions are the functions that we use to call the mutations.
  actions: counterActions,
  // The getters are the functions that we use to get the state.
  getters: counterGetters
};
