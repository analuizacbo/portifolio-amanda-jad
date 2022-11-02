<template>
  <div class="cxa-desc-experiencia">
    <p class="txt-roboto-24-bold">
      {{ cargo }}
    </p>
    <p>{{ data }}</p>
    <ul>
      <li v-for="tarefa in tarefas" :key="tarefa">
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
});

</script>