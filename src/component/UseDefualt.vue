<script setup>
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import { ref } from 'vue';
const toast = useToast();

const handleClick = () => {
  toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
};
const handleClickError = () => {
  toast.add({ severity: 'error', summary: 'Error', detail: 'Content Error', life: 3000 });
};

let mouseX = ref(0);
let mouseY = ref(0);

const handleMouseMove = (event) => {
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;
};
</script>

<template>
  <div class="inline-flex flex-col gap-10" @mousemove="handleMouseMove">
    <Toast />
    <div class="text-3xl font-bold cursor-pointer" @click="handleClickError()">Frontend</div>
    <div class="flex gap-5">
      <Button label="Show" @click="handleClick()" />
    </div>
    <div>Mouse X: {{ mouseX }}, Mouse Y: {{ mouseY }}</div>
  </div>
</template>
