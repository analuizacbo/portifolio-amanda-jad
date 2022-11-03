<template>
  <div class="cxa-desc-experiencia">
    <p class="txt-roboto-24-bold">{{ atribuicao.cargo }}</p>
    <p>{{ atribuicao.data }}</p>
    <ul>
      <li v-for="tarefa in tarefas()" :key="tarefa">
        {{ tarefa }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  cargo: {
    type: String,
  },
  data: {
    type: String,
  },
  tarefas: {
    type: Object,
  },
  atribuicao: {
    type: Object,
  },
});

function tarefas() {
  const tarefasAtr = props.atribuicao.tarefas;
  return tarefasAtr;
}
</script>