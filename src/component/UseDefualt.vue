<script setup>
import CustomButton from './CustomComponents/CustomButton.vue';
import CustomCheckbox from './CustomComponents/CustomCheckbox.vue';
import CustomColorPicker from './CustomComponents/CustomColorPicker.vue';
import CustomInputText from './CustomComponents/CustomInputText.vue';
import useCustomHook from './Hooks/CustomHook';

const { counter, startCounter, stopCounter } = useCustomHook();
</script>

<template>
  <div class="flex gap-20 p-4">
    <div class="">
      <h1 class="text-2xl font-bold">Счетчик: {{ counter }}</h1>
      <div class="flex flex-col gap-20 mt-20">
        <CustomButton size="large" @click="startCounter"> Старт </CustomButton>
        <CustomButton label="Стоп" color="cyan" size="3xl" @click="stopCounter" />
      </div>
    </div>
    <div class="">
      <CustomCheckbox label="Checkbox" />
    </div>
    <div class="">
      <CustomColorPicker label="Color" labelClass="ps-2" />
    </div>
    <div class="">
      <CustomInputText label="Input" />
    </div>
  </div>
</template>
