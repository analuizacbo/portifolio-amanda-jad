<template>
  <div class="row">
    <div
      v-for="dispositivo in dispositivos"
      class="col-6 d-flex justify-content-center"
      :key="dispositivo.descricao"
    >
      <a :href="dispositivo.link">
        <div
          class="
            card-projetos
            d-flex
            flex-column
            justify-content-center
            align-items-center
          "
          :class="dispositivo.classe"
        >
          <p class="txt-caveat-38 text-center txt-desc-projeto">
            {{ dispositivo.descricao }}
          </p>
          <img class="img-fluid" :src="dispositivo.imgIcone" />
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
const dispositivos = [
  {
    descricao: "Desktop",
    link: "",
    imgIcone: "/src/img/desktop.svg",
    classe: "desktop",
  },
  {
    descricao: "Mobile",
    link: "",
    imgIcone: "/src/img/mobile.svg",
    classe: "mobile",
  },
];
</script>
