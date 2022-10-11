<template>
  <div class="col-4">
    <img class="img-fluid" src="/src/img/foto-amanda-jad.svg" />
  </div>
  <div v-if="isText" class="col-3 offset-1 d-flex align-items-center">
    <span class="txt-caveat-38">{{ imgLogo }}</span>
  </div>
  <div v-else class="col-3 offset-1 d-flex align-items-center">
    <img class="img-fluid" :src="imgLogo" />
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
