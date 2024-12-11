<script setup>
import useCustomHook from './Hooks/CustomHook';

const { counter, startCounter, stopCounter } = useCustomHook();
</script>

<template>
  <div class="flex gap-20 p-4">
    <div class="">
      <h1 class="text-2xl font-bold">Счетчик: {{ counter }}</h1>
      <div class="flex flex-col gap-20 mt-20">
        <UseButton
          size="large"
          outline="outline-green"
          @click="startCounter"
          motionAnimate="m-p-wobble"
          motionClick="motion-preset-confetti"
        >
          Старт
        </UseButton>
        <UseButton
          label="Стоп"
          outline="outline-red"
          size="2xl"
          motionClick="motion-preset-confetti"
          motionAnimate="m-p-float"
          @click="stopCounter"
        />
      </div>
    </div>
  </div>
</template>
