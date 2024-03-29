<script setup>
import DatePicker from "@/components/DatePicker.vue";
import { ref } from "vue";

const inputLocale = ref('en')
const inputDate = ref(null)

</script>

<template>
  <main class="app-datepicker">
    <DatePicker
        :locale="inputLocale"
        :date="inputDate"
        @select-data="(value) => console.log(value)"
    />
    <div class="app-datepicker__inputs">
      <input
          :value="inputDate"
          type="date"
          max="2999-01-01"
          min="1700-01-01"
          @change="inputDate = $event.target.value"
      >
      <input
          v-model="inputLocale"
          placeholder="example 'en'"
          maxlength="2"
      >
    </div>
  </main>
</template>

<style scoped>
.app-datepicker {
  display: flex;

  input {
    height: max-content;
  }

  .app-datepicker__inputs {
    display: flex;
    flex-direction: column;
  }
}
</style>
