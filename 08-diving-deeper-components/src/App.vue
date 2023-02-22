<template>
  <div>
    <!-- We have two ways to render components:
    Using the component tag with camelCase or kebab-case -->
    <!-- <TheHeader /> -->
    <the-header></the-header>

    <!-- <badge-list />
    <user-info :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role"></user-info>
    <course-goals #default="slotProps">
      <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps["another-prop"] }}</p>
    </course-goals> -->

    <!-- We have to ways for pass a function prop:
    One with v-bind and the other with @. -->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals>-->
    
    <!-- Keepalive is a component that will cache the component that is inside it.
    So if you amount the component again, it will not be destroyed and created again. -->
    <keep-alive>
      <!-- This line decide which component will render (active-goals or manage-goals)
      Because selectedCompnent is a data property that contains "active-goals" or "manage-goals -->
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    BadgeList,
    UserInfo,
    CourseGoals,
    TheHeader,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
