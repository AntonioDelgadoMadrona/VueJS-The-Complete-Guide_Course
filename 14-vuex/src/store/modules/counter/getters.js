// This file is used to define getters for the counter module
// The getters are the functions that we use to get the state.
export default {
  testAuth(state) {
    return state.isLoggedIn;
  },
  finalCounter(state) {
    return state.counter * 3;
  },
  normalizedCounter(_, getters) {
    const finalCounter = getters.finalCounter;
    if (finalCounter < 0) {
      return 0;
    }
    if (finalCounter > 100) {
      return 100;
    }
    return finalCounter;
  }
};
