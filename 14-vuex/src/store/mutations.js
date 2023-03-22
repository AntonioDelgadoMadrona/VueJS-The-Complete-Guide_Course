// This file is used to define the mutations for the store
// The mutations are the functions that we use to change the state.
export default {
  setAuth(state, payload) {
    state.isLoggedIn = payload.isAuth;
  }
};
