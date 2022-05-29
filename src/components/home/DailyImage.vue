<script>
import { getDailyPictures } from "../../service/apod";
import { ref } from "vue";

import UILoader from "../UILoader.vue";
import DateChooser from "./DateChooser.vue";

export default {
  name: "DailyImage",

  components: { DateChooser, UILoader, },

  setup() {
    let isLoading = ref(true);

    const parameters = ref({
      start_date: new Date(new Date() - 1000 * 60 * 60 * 24).toISOString().substring(0 ,10),
      end_date: new Date().toISOString().substring(0 ,10),
    });

    const planetaryApods = ref([]);

    const fetchDailyPicture = async () => {
      try {
        isLoading.value = true;
        planetaryApods.value = (await getDailyPictures(parameters.value)).data;
        isLoading.value = false;
      } catch (e) {
        alert(e.data.message);
      }
    };

    const updateParams = (newParams) => {
      parameters.value.start_date = newParams.start_date;
      parameters.value.end_date = newParams.end_date;

      fetchDailyPicture();
    };

    fetchDailyPicture();

    return {
      isLoading,
      planetaryApods,
      updateParams,
    };
  },
};
</script>

<template>
  <div class="ui-column">
    <DateChooser @update-date="updateParams" />

    <div v-for="pod in planetaryApods" :key="pod.date" class="main-img__card">
      <div class="ui-column">
        <h2 class="main-img__card-title">{{ pod.title }}</h2>

        <UILoader v-if="isLoading" />

        <img
          v-if="!isLoading"
          id="img"
          :src="pod.url"
          alt="Daily pic"
        >

        <span class="main-img__card-explanation">{{ pod.date }}</span>

        <span class="main-img__card-explanation">{{ pod.copyright || "" }}</span>
      </div>

      <div class="ui-row__start" style="margin-left: 20px;">
        <div class="ui-column">
        <span class="main-img__card-explanation">
          {{ pod.explanation }}
        </span>
        </div>
      </div>
    </div>
  </div>
</template>
