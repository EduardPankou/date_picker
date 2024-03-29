<script setup>
import ArrowButton from "@/components/ui/ArrowButton.vue";
import useDatePicker from '@/composables/datepicker.js';
import { getDate } from '@/utils/utils.js'
import { onMounted, ref, watch } from "vue";

const {
  year,
  month,
  inputLocale,
  getFullDate
} = useDatePicker()

const monthName = ref('')
const setName = () => monthName.value = getDate(inputLocale.value, getFullDate.value)
onMounted(() => setName())
watch(inputLocale, (value) => {
  if (value.length > 1) setName()
})
watch(() => getFullDate.value, () => setName())

const changeMonth = (count) => {
  let result = month.value + count
  if (result > 12) {
    month.value = 1
    year.value++
  } else if (result < 1) {
    month.value = 12
    year.value--
  } else {
    month.value = result
  }
}
</script>

<template>
  <div class="datepicker-header">
    <ArrowButton @click="changeMonth(-1)"/>
    <p v-if="year">
      {{ monthName }} {{ year }}
    </p>
    <ArrowButton
        class="datepicker-header_right"
        @click="changeMonth(1)"
    />
  </div>
</template>

<style scoped>
.datepicker-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .datepicker-header_right {
    transform: rotate(180deg);
  }
}
</style>
