<script setup>
import Cabecario from "./components/Cabecario.vue";
import Footer from "./components/Footer.vue";
</script>
<template>
  <div class="container borda-container">
    <Cabecario />
    <router-view />
  </div>
  <Footer />
</template>