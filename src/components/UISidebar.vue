<script>
export default {
  name: "UISidebar",
};
</script>

<template>
  <div>
    <div class="ui-search-box">
      <span class="material-icons-outlined">search</span>

      <input placeholder="Search...">
    </div>

    <div class="ui-router-links">
      <router-link to="/" class="ui-page__sidebar-link">
        <span class="material-icons-outlined">circle</span>

        HOME
      </router-link>

      <router-link to="/earth" class="ui-page__sidebar-link">
        <span class="material-icons-outlined">public</span>

        EARTH
      </router-link>

      <router-link to="/" class="ui-page__sidebar-link">
        <span class="material-icons">circle</span>

        MARS
      </router-link>

      <router-link to="/" class="ui-page__sidebar-link">
        <span class="material-icons-outlined">dark_mode</span>

        MOON
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import "./src/assets/style";
</style>