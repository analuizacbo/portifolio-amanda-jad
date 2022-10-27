<template>
  <div class="col-4 d-flex">
    <img class="img-fluid" src="/src/img/foto-amanda-jad.svg" />
    <div class="caixa-linha">
      <img class="img-linha" src="/src/img/linha-perfil-grande.svg" />
      <img class="img-linha-menor" src="/src/img/linha-perfil.svg" />
      <img class="img-linha-medio" src="/src/img/linha-perfil-medio.svg" />
    </div>
  </div>
  <div v-if="isText" class="col-3 offset-1 d-flex align-items-center">
    <span class="txt-caveat-38">{{ imgLogo }}</span>
  </div>
  <div v-else class="col-3 d-flex align-items-center">
    <img class="img-logo-amanda" :src="imgLogo" />
  </div>
</template>

<script setup>
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
