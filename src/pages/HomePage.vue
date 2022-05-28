<script>
import UIPage from "../components/UIPage.vue";
import DailyImage from "../components/home/DailyImage.vue";

export default {
  name: "HomePage",

  components: { UIPage, DailyImage, },
};
</script>

<template>
  <UIPage>
    <template #page>
      <div class="ui-page__home">
        <DailyImage />
      </div>
    </template>
  </UIPage>
</template>
