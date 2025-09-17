<script>
import MegaportLogo from '../assets/megaport-logo.svg';
</script>

<template>
    <div class="logo-header">
      <h1 class="logo-heading text-3xl font-bold">Megaport Portal</h1>
      <p>Login to your Account</p>
    </div>
    <div class="theme-toggle">
      <ThemeToggle />
    </div>
</template>

<style>
.logo-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
}
.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
.font-bold {
  font-weight: 700;
}
.logo-heading {
  text-align: center;
  color: var(--topnav-text);
}
.theme-toggle {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>