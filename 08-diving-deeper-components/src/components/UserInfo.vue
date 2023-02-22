<template>
  <section>
    <base-card>
      <!-- We use the template when the components has different slots.
      We can use v-slot:header to define the default slot or we can use #header. -->
      <template #header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <!-- We use the template when the components has different slots.
      We can use v-slot:default to define the default slot or we can use #default. -->
      <template #default>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ["fullName", "infoText", "role"],
};
</script>
