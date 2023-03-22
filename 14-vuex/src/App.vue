<template>
  <BaseContainer title="Vuex" v-if="isAuth">
    <TheCounter></TheCounter>
    <FavoriteValue></FavoriteValue>
    <button @click="addOne">Add 10</button>
    <ChangeCounter></ChangeCounter>
  </BaseContainer>
  <BaseContainer title="Auth">
    <UserAuth></UserAuth>
  </BaseContainer>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
  methods: {
    addOne() {
      // This is for access to the store in the actions file
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10,
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>