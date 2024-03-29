<script setup>
import useDatePicker from "@/composables/datepicker.js";
import { getDays, getDayOfWeek, addZero } from '@/utils/utils.js'
import { computed, onMounted, ref, watch } from "vue";
import DayBlock from "@/components/ui/DayBlock.vue";

const {month, year, selectedDate, selectDay} = useDatePicker()
const days = ref(0)
const daysInWeeks = ref({})
const levels = ref([])

onMounted(() => updateData())
watch(() => month.value, () => updateData())
watch(() => year.value, () => updateData())

const updateData = () => {
  days.value = 0
  daysInWeeks.value = []
  levels.value = []
  days.value = getDays(month.value, year.value)
  for (let i = 1; i <= days.value; i++) {
    daysInWeeks.value[i] = getDayOfWeek(`${year.value}-${addZero(month.value)}-${addZero(i)}`)
  }

  let levelIndex = 0
  for (const key of Object.keys(daysInWeeks.value).map(e => +e).sort((a, b) => a - b)) {
    if (!levels.value[levelIndex]) {
      levels.value[levelIndex] = []
    }
    if (levelIndex === 0 && daysInWeeks.value[key] !== 0 && !levels.value[levelIndex].length) {
      for (let i = 0; i < daysInWeeks.value[key]; i++) {
        levels.value[levelIndex].push(' ')
      }
    }

    levels.value[levelIndex].push(key)
    if (daysInWeeks.value[key] === 6) levelIndex++
  }
}

const checkDate = computed(() => {
  const array = Object.keys(daysInWeeks.value)
      .map(e => +e)
      .sort((a, b) => a - b)
      .map(() => false)
  if (!selectedDate.value) return array

  const date = new Date(selectedDate.value)
  if (date.getFullYear() != year.value || (date.getMonth() + 1) !== month.value) return array

  return array.map((e, i) => (i + 1) === date.getDate())
})
</script>

<template>
  <div class="days">
    <div
        v-for="(level, indexLevel) in levels"
        :key="indexLevel"
        class="days_level"
    >
      <DayBlock
          v-for="(day, indexDay) of level"
          :key="indexDay"
          :day="day"
          :is-selected="checkDate[day - 1]"
          @click="selectDay(day)"
      />
    </div>
  </div>
</template>

<style scoped>
.days {
  display: flex;
  flex-direction: column;
  .days_level {
    display: flex;
    gap: 3px;
  }
}
</style>
