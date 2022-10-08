<script setup>
import Cabecario from "./components/Cabecario.vue";
import Footer from "./components/Footer.vue";
</script>
<template>
  <section class="caixa-principal">
    <img class="vetor-rosa" src="../src/img/vetor-fundo-perfil.svg" alt="" />
    <div class="container borda-container">
      <Cabecario />
      <router-view />
    </div>
    <Footer />
  </section>
</template>