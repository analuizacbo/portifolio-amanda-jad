
<template>
  <div class="row justify-content-center">
    <div class="col-6 d-flex justify-content-end">
      <div class="bolinha d-flex justify-content-center align-items-center">
        <a :href="linkedin.linkRede">
          <img :src="linkedin.imgIcone" />
        </a>
      </div>
    </div>
    <div class="col-6 d-flex justify-content-start">
      <div class="bolinha d-flex justify-content-center align-items-center">
        <a :href="instagram.linkRede">
          <img :src="instagram.imgIcone" />
        </a>
      </div>
    </div>
  </div>
</template>



<script setup>
import { ref } from "vue";

const linkedin = ref({
  imgIcone: "/src/img/Icones/linkedin.svg",
  linkRede: "https://www.linkedin.com/in/amanda-jad/",
});

const instagram = ref({
  imgIcone: "/src/img/Icones/instagram.svg",
  linkRede: "https://www.instagram.com/mandy_jad/",
});
</script>
