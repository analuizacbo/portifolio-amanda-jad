<template>
  <div class="caixa-svg-rosa">
    <img class="img-fluid svg-rosa" src="/src/img/vetor-fundo-perfil.svg" />
  </div>
  <div class="row">
    <Logos :imgLogo="imgLogo" :isText="isText" />
    <div class="col-3 offset-1 text-end">
      <p>BR&nbsp;&nbsp;&nbsp;&nbsp;EN</p>
      <ListaMenu />
    </div>
  </div>
</template>

<script setup>
import Logos from "./pages/section/Cabecario/Logos.vue";
import ListaMenu from "./pages/section/Cabecario/ListaMenu.vue";

defineProps({
  imgLogo: {
    type: String,
  },
  isText: {
    type: Boolean,
    default: true,
  },
});
</script>



