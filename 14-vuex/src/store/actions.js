// This file contains all the actions that can be called from the components
// To call the mutations, we use the context.commit() method.
export default {
  login(context) {
    context.commit('setAuth', { isAuth: true });
  },
  logout(context) {
    context.commit('setAuth', { isAuth: false });
  }
};
