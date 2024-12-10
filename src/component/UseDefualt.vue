<script setup>
import CustomButton from './CustomComponents/CustomButton.vue';
import useCustomHook from './Hooks/CustomHook';

const { counter, startCounter, stopCounter } = useCustomHook();
</script>

<template>
  <div class="flex gap-20 p-4">
    <div class="">
      <h1 class="text-2xl font-bold">Счетчик: {{ counter }}</h1>
      <div class="flex flex-col gap-20 mt-20">
        <CustomButton size="large" @click="startCounter" animationClass="motion-preset-pulse">
          Старт
        </CustomButton>
        <CustomButton
          label="Стоп"
          color="cyan"
          size="2xl"
          animationClass="motion-preset-seesaw"
          @click="stopCounter"
        />
      </div>
    </div>
  </div>
</template>
