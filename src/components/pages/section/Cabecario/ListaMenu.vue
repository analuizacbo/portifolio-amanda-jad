<template>
  <div class="caixa-menu">
    <div class="caixa-lista">
      <ul class="d-flex justify-content-end menu">
        <li v-for="rota in rotas" :key="rota.nameRoute">
          <router-link :to="{ name: rota.nameRoute }">{{
            rota.descRoute
          }}</router-link>
        </li>
      </ul>
    </div>

    <!-- MENU HAMBURGUER -->
    <div class="caixa-menu-burguer">
      <ul class="text-center menu">
        <li v-for="rota in rotas" :key="rota.nameRoute">
          <router-link :to="{ name: rota.nameRoute }">{{
            rota.descRoute
          }}</router-link>
        </li>
      </ul>
    </div>

    <div class="caixa-btn-menu d-flex justify-content-end">
      <button class="btn-menu">
        <img src="src/img/menu.svg" />
      </button>

      <button class="btn-close">
        <img src="src/img/close.svg" />
      </button>
    </div>
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

