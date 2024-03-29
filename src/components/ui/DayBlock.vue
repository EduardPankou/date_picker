<script setup>
defineProps({
  day: {type: [String, Number], required: true},
  isSelected: {type: Boolean, default: false}
})
</script>

<template>
  <div
      class="day"
      :class="{
          'day_selected': isSelected,
          'day_hover': typeof day !== 'string'
      }"
  >
    {{ day }}
  </div>
</template>

<style scoped>
.day {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 30px;
  height: 30px;
  transition: all 0.4s;
}
.day_selected {
  transition: all 0.4s;
  background-color: cornflowerblue;
  color: white;
}
.day_hover {
  &:hover {
    cursor: pointer;
    transition: all 0.4s;
    background-color: cornflowerblue;
    color: white;
  }
}
</style>
