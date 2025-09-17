<template>
  <div>
    <button class="hamburger" @click="showSidebar = !showSidebar">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <aside v-if="showSidebar" class="sidebar open">
      <button class="close-btn" @click="showSidebar = false" aria-label="Close sidebar">&#10005;</button>
      <ul>
        <li><button @click="$emit('navigate', 'dashboard'); showSidebar = false">Dashboard</button></li>
        <li><button @click="$emit('navigate', 'connections'); showSidebar = false">Connections</button></li>
        <li><button @click="$emit('navigate', 'usage'); showSidebar = false">Usage Stats</button></li>
        <li><button @click="$emit('navigate', 'activity'); showSidebar = false">Recent Activity</button></li>
        <li><button @click="$emit('navigate', 'settings'); showSidebar = false">Settings</button></li>
      </ul>
    </aside>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showSidebar = ref(false);
</script>

<style scoped>
.sidebar {
  background: var(--sidebar-bg);
  color: var(--sidebar-text);
  width: 200px;
  min-height: 100vh;
  padding: 1rem 2rem;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  box-shadow: 2px 0 8px rgba(0,0,0,0.08);
  transition: transform 0.3s;
}
ul {
  list-style: none;
  padding: 1.5rem 0 0 0;
}
li {
  margin: 1rem 0;
}
a {
  color: var(--sidebar-text);
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

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  margin: 1rem;
}
.hamburger span {
  width: 28px;
  height: 3px;
  background: var(--sidebar-hamburger-icon);
  margin: 4px 0;
  border-radius: 2px;
  transition: 0.3s;
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  color: var(--sidebar-text);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 101;
}

@media (max-width: 768px) {
  .sidebar {
    width: 70vw;
    max-width: 260px;
  }
}
</style>