<template>
  <div class="caixa-menu">
    <ul class="d-flex justify-content-end menu">
      <li v-for="rota in rotas" :key="rota.nameRoute">
        <router-link :to="{ name: rota.nameRoute }">{{
          rota.descRoute
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const rotas = ref([
  {
    nameRoute: "home",
    descRoute: "Home",
  },
  {
    nameRoute: "sobre",
    descRoute: "Sobre",
  },
  {
    nameRoute: "contato",
    descRoute: "Contato",
  },
]);
</script>

