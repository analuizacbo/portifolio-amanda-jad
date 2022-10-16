<template>
  <Cabecario imgLogo="/src/img/amanda-jad-logo.svg" :isText="false" />
  <Skills />
  <IconeRedeSocial />
  <div class="caixa-desc">
    <p class="txt-caveat-38 txt-caveat-22 text-center">Projetos</p>
  </div>
  <Projetos />
</template>

<script setup>
import Cabecario from "../Cabecario.vue";
import Skills from "./section/Home/Skills.vue";
import IconeRedeSocial from "./section/Home/IconeRedeSocial.vue";
import Projetos from "./section/Home/Projetos.vue";
</script>
