<script setup>
import useDatePicker from "@/composables/datepicker.js";

const {weekList} = useDatePicker()
</script>

<template>
  <div class="weeks">
    <div
        v-for="item of weekList"
        :key="item"
    >
      {{item}}
    </div>
  </div>
</template>

<style scoped>
.weeks {
  display: flex;
  justify-content: space-between;
  div {
    width: 25px;
  }
}
</style>
