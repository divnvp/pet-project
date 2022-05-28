<script>
import { computed, ref, watch } from "vue";

export default {
  name: "DateChooser",

  emits: [ "updateDate", ],

  setup(props, { emit, }) {
    const date = ref({
      start_date: "",
      end_date: "",
    });

    const startDateValue = computed({
      get() {
        return new Date();
      },
      set(newValue) {
        date.value.start_date = new Date(newValue).toISOString().substring(0, 10);
        updateDate();

        return new Date(newValue).toISOString().substring(0, 10);
      },
    });

    const endDateValue = computed({
      get() {
        return new Date();
      },
      set(newValue) {
        date.value.end_date = new Date(newValue).toISOString().substring(0, 10);
        updateDate();

        return new Date(newValue).toISOString().substring(0, 10);
      },
    });

    const updateDate = () => {
      emit("updateDate", date.value);
    };

    return {
      startDateValue,
      endDateValue,
    };
  },
};
</script>

<template>
  <div class="ui-row">
    <span class="ui-datepicker__label">AFTER:</span>
    <input type="date" v-model="startDateValue">

    <span class="ui-datepicker__label">BEFORE:</span>
    <input type="date" v-model="endDateValue">
  </div>
</template>