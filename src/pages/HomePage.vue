<script>
import UIPage from "../components/UIPage.vue";
import DailyImage from "../components/home/DailyImage.vue";

export default {
  name: "HomePage",

  components: { UIPage, DailyImage }
};
</script>

<template>
  <UIPage>
    <template #page>
      <DailyImage />
    </template>
  </UIPage>
</template>
