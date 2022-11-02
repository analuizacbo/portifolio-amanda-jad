<template>
  <div v-for="informacao in infomacoes" class="text-center" :key="informacao">
    <p>{{ informacao }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const infomacoes = ref({
  idade: "Idade: 26 anos",
  telefone: "Telefone: (14) 98181-8006",
  email: "Email: contato@amandajad.com.br",
});
</script>