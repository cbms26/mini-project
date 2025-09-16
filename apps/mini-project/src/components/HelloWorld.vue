<template>
  <div>
    <h1>Hello, {{ name }}!</h1>
    <button @click="changeName">Change Name</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const name = ref('World')
function changeName() {
  name.value = name.value === 'World' ? 'Vue' : 'World'
}
</script>
