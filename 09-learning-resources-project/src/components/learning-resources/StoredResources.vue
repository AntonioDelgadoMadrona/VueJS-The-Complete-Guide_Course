<template>
  <ul>
    <LearningResource
      v-for="resource in resources"
      :key="resource.id"
      :id="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    />
  </ul>
</template>

<script>
// COMPONENTS
import LearningResource from './LearningResource.vue';

export default {
  components: {
    LearningResource,
  },
  // The inject property is used to inject a property from the parent component put into the provide property.
  inject: ['resources'],
  data() {
    return {};
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
