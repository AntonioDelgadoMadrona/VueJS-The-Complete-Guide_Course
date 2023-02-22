<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<!-- The scope property is used to apply styles only to the current component. It is useful when you want to apply styles to a component that is used in multiple places. If you don't use the scoped property, the styles will be applied to all the components that use the same class name. -->
<style scoped>
dialog {
  margin: 0;
  position: fixed;
  top: 20vh;
  left: 30%;
  width: 40%;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
