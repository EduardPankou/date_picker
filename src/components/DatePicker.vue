<script setup>
import DatePickerHeader from "@/components/DatePickerHeader.vue";
import DatePickerWeeks from "@/components/DatePickerWeeks.vue";
import DatePickerDays from "@/components/DatePickerDays.vue";
import { onMounted, ref, watch } from "vue";
import useDatePicker from "@/composables/datepicker.js";
import { validDate } from '@/utils/utils.js'

const props = defineProps({
  date: {type: [String, null, undefined], default: null},
  locale: {type: [String, null, undefined], default: null}
})
const emit = defineEmits(['select-data'])

const {
  year,
  month,
  day,
  inputLocale,
  selectedDate,
  initWeekList,
  getFullDate
} = useDatePicker()

watch(() => props.locale, () => inputLocale.value = props.locale)
watch(() => props.date, () => {
  if (props.date.length === 10 && validDate(props.date)) {
    const date = props.date.split('-')
    year.value = date[0]
    month.value = +date[1]
    day.value = +date[2]
    selectedDate.value = props.date
  }
})
watch(() => selectedDate.value, () => emit('select-data', selectedDate.value))

onMounted(() => {
  initWeekList()
  if (!props.date) {
    selectedDate.value = getFullDate.value
  }
})
watch(inputLocale, (value) => {
  if (value.length > 1) initWeekList()
})
</script>

<template>
  <div class="datepicker">
    <DatePickerHeader/>
    <DatePickerWeeks/>
    <DatePickerDays/>
  </div>
</template>

<style scoped>
.datepicker {
  min-height: 250px;
  padding: 10px;
  border: 1px solid #282828;
  border-radius: 8px;
}
</style>
