<script setup>
import { ref } from 'vue'
import TopNavBar from '../components/TopNavBar.vue'
import SidebarNav from '../components/SidebarNav.vue'
import DashboardWidgets from '../components/DashboardWidgets.vue'
import ConnectionsSection from '../components/ConnectionsSection.vue'
import UsageSection from '../components/UsageSection.vue'
import ActivitySection from '../components/ActivitySection.vue'
import SettingsSection from '../components/SettingsSection.vue'
import { useAuth } from '../composables/useAuth'

const { user, logout } = useAuth()
function handleLogout() {
  logout()
}

const currentSection = ref('dashboard')
function handleNavigate(section) {
  currentSection.value = section
}
</script>

<template>
  <div class="dashboard-layout">
    <TopNavBar :loggedIn="true" :user="user" @logout="handleLogout" />
    <div class="dashboard-content">
      <SidebarNav @navigate="handleNavigate" />
      <main>
        <DashboardWidgets v-if="currentSection === 'dashboard'" />
        <ConnectionsSection v-else-if="currentSection === 'connections'" />
        <UsageSection v-else-if="currentSection === 'usage'" />
        <ActivitySection v-else-if="currentSection === 'activity'" />
        <SettingsSection v-else-if="currentSection === 'settings'" />
      </main>
    </div>
  </div>
</template>

<style scoped>
.dashboard-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.dashboard-content {
  display: flex;
  flex: 1;
}
main {
  flex: 1;
  padding: 2rem;
  background: var(--card-bg);
  color: var(--card-text);
}
</style>