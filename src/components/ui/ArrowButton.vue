<script setup>
</script>

<template>
  <div class="arrow">
    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">
      <path
          d="M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z"/>
    </svg>
  </div>
</template>

<style scoped>
.arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.4s;
  user-select: none;
  &:hover {
    transition: all 0.4s;
    background-color: #f8f8f8;
  }
  svg {
    height: 20px;
    width: 20px;
  }
}
</style>
