<template>
  <div v-if="message" class="error">{{ message }}</div>
</template>
<script setup>
defineProps(['message'])
</script>
<style scoped>
.error {
  color: var(--error, #f44336);
  margin-top: 0.5rem;
}
</style>