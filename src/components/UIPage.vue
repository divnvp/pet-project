<script>
import UISidebar from "./UISidebar.vue";
export default {
  name: "UIPage",

  components: { UISidebar, },
};
</script>

<template>
  <div class="ui-page__main">
    <u-i-sidebar class="ui-page__sidebar" />

    <slot name="page" />
  </div>
</template>

<style lang="scss">
@import "./src/assets/style";
</style>