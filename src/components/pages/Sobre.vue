<template>
  <Cabecario imgLogo="Sobre" />
  <section class="conteudo-principal">
    <InfoPessoal />
    <p class="txt-roboto-24-bold text-center">Experiência profissional</p>
    <div class="offset-2 cxa-ptp">
      <p class="txt-roboto-24-bold">Poupatempo</p>
      <p>2017 até atualmente.</p>
    </div>
    <div class="row">
      <div class="col-1 offset-2">
        <img
          class="img-fluid img-seta-exp"
          src="/src/img/seta-experiencia.svg"
          alt=""
        />
      </div>
      <div class="col-9">
        <Experiencia
          :cargo="filtroCargo(0)"
          :data="filtroData(0)"
          :tarefas="filtroTarefa(0)"
        />
        <Experiencia
          :cargo="filtroCargo(1)"
          :data="filtroData(1)"
          :tarefas="filtroTarefa(1)"
        />
        <Experiencia
          :cargo="filtroCargo(2)"
          :data="filtroData(2)"
          :tarefas="filtroTarefa(2)"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
import Cabecario from "../Cabecario.vue";
import InfoPessoal from "./section/Sobre/InfoPessoal.vue";
import Experiencia from "../pages/section/Sobre/Experiencia.vue";

import { ref } from "vue";
import { map } from "lodash";

const atribuicoes = ref([
  {
    cargo: "Gerente",
    data: "2021-2022",
    tarefas: {
      tarefa1: "Líder de uma equipe de 24 funcionários, com idade distintas.",
      tarefa2: "Responsável por supervisionar o posto em geral.",
      tarefa3: "Manutenção de todos os itens contratuais de rotina",
    },
  },
  {
    cargo: "Técnico Informática",
    data: "2019-2021",
    tarefas: {
      tarefa1: "Inserção de máquinas do domínio.",
      tarefa2: "Configuração de rede.",
      tarefa3: "Preservação e manutenção de equipamentos.",
    },
  },
  {
    cargo: "Atendente",
    data: "2017-2019",
    tarefas: {
      tarefa1: "Atendimento ao público.",
      tarefa2: "Auxílio referente as documentações.",
      tarefa3: "Realizando serviços em geral de Detran e IIRGD.",
    },
  },
]);

const attr = atribuicoes.value;
const objetoTarefas = ref({});
const cargos = ref("");
const datas = ref("");

function filtroTarefa(index) {
  objetoTarefas.value = map(attr, "tarefas");
  return objetoTarefas.value[index];
}

function filtroCargo(index) {
  cargos.value = map(attr, "cargo");
  return cargos.value[index];
}

function filtroData(index) {
  datas.value = map(attr, "data");
  return datas.value[index];
}
</script> 
