<template>
  <div class="row justify-content-center">
    <div class="col-md-6 d-flex justify-content-center">
      <div class="card-projetos">
        <p class="txt-caveat-38 text-center">
          {{ primeiroDispositivo.descricao }}
        </p>
        <a
          class="d-flex justify-content-center"
          :href="primeiroDispositivo.link"
        >
          <img :src="primeiroDispositivo.imgIcone" />
        </a>
      </div>
    </div>
    <div class="col-md-6 d-flex justify-content-center">
      <div class="card-projetos">
        <p class="txt-caveat-38 text-center">
          {{ segundoDispositivo.descricao }}
        </p>
        <a
          class="d-flex justify-content-center"
          :href="segundoDispositivo.link"
        >
          <img :src="segundoDispositivo.imgIcone" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const primeiroDispositivo = {
  descricao: "Desktop",
  link: "",
  imgIcone: "/src/img/desktop.svg",
};

const segundoDispositivo = {
  descricao: "Mobile",
  link: "",
  imgIcone: "/src/img/mobile.svg",
};
</script>
