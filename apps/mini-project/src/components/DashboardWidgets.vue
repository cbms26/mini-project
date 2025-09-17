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
.widget {
  background: var(--bg);
  color: var(--text);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>