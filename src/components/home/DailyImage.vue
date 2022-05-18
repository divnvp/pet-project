<script>
import { getDailyPictures } from "../../service/apod";
import { ref } from "vue";

import UILoader from "../UILoader.vue";

export default {
  name: "DailyImage",

  components: { UILoader, },

  setup() {
    let isLoading = ref(true);

    const planetaryApod = ref({});
    const parameters = ref({
      date: new Date().toISOString().substring(0, 10),
      start_date: null,
      end_date: null,
      count: 1,
      thumbs: false,
    });

    const fetchDailyPicture = async () => {
      try {
        isLoading.value = true;
        planetaryApod.value = (await getDailyPictures({ date: parameters.value.date, })).data;
        isLoading.value = false;
      } catch (e) {
        alert(e.data.message);
      }
    };

    fetchDailyPicture();

    return {
      isLoading,
      planetaryApod,
    };
  },
};
</script>

<template>
  <div class="ui-page__slot">
    <div class="main-img__card">
      <div class="main-img__card-column">
        <div class="main-img__card-row">
          <div class="main-img__card-column">
            <h2 class="main-img__card-title">{{ planetaryApod.title }}</h2>

            <hr />
          </div>
        </div>

        <div class="main-img__card-row">
          <div class="main-img__card-column">
            <UILoader v-if="isLoading" />

            <img
              v-if="!isLoading"
              id="img"
              :src="planetaryApod.url"
              alt="Daily pic"
            >

            <span>{{ planetaryApod.date }}</span>

            <span>{{ planetaryApod.copyright }}</span>
          </div>

          <div class="main-img__card-column">
            <span class="main-img__card-explanation">
              {{ planetaryApod.explanation }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
