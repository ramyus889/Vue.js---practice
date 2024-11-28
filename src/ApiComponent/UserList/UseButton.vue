<script setup>
import Button from 'primevue/button';

defineProps({
  item: Object,
  handlers: Object
});
</script>
<template>
  <div class="flex gap-3">
    <Button label="Size" icon="pi pi-minus" @click="handlers.handleClickMinus(item.id)" />
    <Button label="Size" icon="pi pi-plus" @click="handlers.handleClickPlus(item.id)" />
  </div>
  <div class="flex gap-3">
    <Button label="Rotate" icon="pi pi-minus" @click="handlers.handleClickRotateMinus(item.id)" />
    <Button label="Rotate" icon="pi pi-plus" @click="handlers.handleClickRotatePlus(item.id)" />
  </div>
  <div class="flex gap-3">
    <Button label="Border" icon="pi pi-minus" @click="handlers.handleClickBorderMinus(item.id)" />
    <Button label="Border" icon="pi pi-plus" @click="handlers.handleClickBorderPlus(item.id)" />
  </div>
  <div class="flex gap-3">
    <Button label="Opacity" icon="pi pi-minus" @click="handlers.handleClickOpacityMinus(item.id)" />
    <Button label="Opacity" icon="pi pi-plus" @click="handlers.handleClickOpacityPlus(item.id)" />
  </div>
</template>
