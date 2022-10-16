<template>
  <div class="container borda-container">
    <div class="bg-fundo" />
    <router-view />
  </div>
  <Footer />
</template>

<script setup>
import Footer from "./components/Footer.vue";
</script>