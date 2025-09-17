<template>
  <div class="widgets">
    <div class="widget" v-for="n in 4" :key="n">
      <h3>Widget {{ n }}</h3>
      <p>This is widget number {{ n }}.</p>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped>
.widgets {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
</style>