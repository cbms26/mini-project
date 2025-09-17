<template>
  <aside class="sidebar">
    <ul>
      <li><button @click="$emit('navigate', 'dashboard')">Dashboard</button></li>
      <li><button @click="$emit('navigate', 'connections')">Connections</button></li>
      <li><button @click="$emit('navigate', 'usage')">Usage Stats</button></li>
      <li><button @click="$emit('navigate', 'activity')">Recent Activity</button></li>
      <li><button @click="$emit('navigate', 'settings')">Settings</button></li>
    </ul>
  </aside>
</template>

<script setup>
</script>
<style scoped>
.sidebar {
  background: #1565c0;
  color: #fff;
  width: 200px;
  min-height: 100vh;
  padding: 1rem 2rem;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 1rem 0;
}
a {
  color: #fff;
  text-decoration: none;
}
button {
  background: none;
  border: none;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  padding: 0;
}
</style>