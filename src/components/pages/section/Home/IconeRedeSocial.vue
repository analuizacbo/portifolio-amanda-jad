
<template>
  <div class="row justify-content-center">
    <div
      v-for="rede in redes"
      :class="rede.classe"
      class="col-6 d-flex"
      :key="rede.linkRede"
    >
      <div class="bolinha d-flex justify-content-center align-items-center">
        <a :href="rede.linkRede">
          <img :src="rede.imgIcone" />
        </a>
      </div>
    </div>
  </div>
</template>



<script setup>
import { ref } from "vue";

const redes = ref([
  {
    imgIcone: "/src/img/Icones/linkedin.svg",
    linkRede: "https://www.linkedin.com/in/amanda-jad/",
    classe: "justify-content-end",
  },
  {
    imgIcone: "/src/img/Icones/instagram.svg",
    linkRede: "https://www.instagram.com/mandy_jad/",
    classe: "justify-content-start",
  },
]);
</script>
