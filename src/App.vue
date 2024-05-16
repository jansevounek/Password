<template>
  <NavBar />
  <router-view />
</template>

<style>
body,
html {
  background-color: #000000;
}
</style>

<script setup>
import NavBar from './components/navbar/NavBar.vue'
</script>