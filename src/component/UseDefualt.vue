<script setup>
import CustomButton from './CustomComponents/CustomButton.vue';
import useTailwindHook from './Hooks/tailwindHook';

const { counter, startCounter, stopCounter } = useTailwindHook();
</script>

<template>
  <div class="flex gap-20 p-4">
    <div class="">
      <h1 class="text-2xl font-bold">Счетчик: {{ counter }}</h1>
      <div class="flex flex-col gap-20 mt-20">
        <CustomButton rotate="22" size="large" @click="startCounter"> Старт </CustomButton>
        <CustomButton label="Стоп" color="cyan" size="3xl" @click="stopCounter" />
      </div>
    </div>
    <div class=""></div>
  </div>
</template>
