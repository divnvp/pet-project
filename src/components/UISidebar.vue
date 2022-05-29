<script>
export default {
  name: "UISidebar",
};
</script>

<template>
  <div>
    <router-link to="/" class="ui-page__sidebar-link">
      HOME
    </router-link>

    <router-link to="/" class="ui-page__sidebar-link">
      EARTH
    </router-link>

    <router-link to="/" class="ui-page__sidebar-link">
      MARS
    </router-link>

    <router-link to="/" class="ui-page__sidebar-link">
      MOON
    </router-link>
  </div>
</template>

<style lang="scss">
@import "./src/assets/style";
</style>