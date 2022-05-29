<script>
import { computed, ref } from "vue";

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
  <div>
    <span class="ui-datepicker__label">AFTER:</span>
    <input type="date" v-model="startDateValue" class="ui-datepicker__input">

    <span class="ui-datepicker__label">BEFORE:</span>
    <input type="date" v-model="endDateValue" class="ui-datepicker__input">
  </div>
</template>