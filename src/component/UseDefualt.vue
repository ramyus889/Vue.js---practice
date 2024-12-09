<script setup>
import CustomButton from './CustomComponents/CustomButton.vue';
import useTailwindHook from './Hooks/tailwindHook';

const { counter, startCounter, stopCounter } = useTailwindHook();
</script>

<template>
  <div class="p-4 text-center">
    <h1 class="text-2xl font-bold">Счетчик: {{ counter }}</h1>
    <div class="flex flex-col gap-20 mt-20">
      <CustomButton label="Старт" color="cyan" rotate="22" size="large" @click="startCounter" />
      <CustomButton
        label="Стоп"
        color="red"
        rotate="230"
        rounded="xl"
        size="3xl"
        @click="stopCounter"
      />
    </div>
  </div>
</template>
