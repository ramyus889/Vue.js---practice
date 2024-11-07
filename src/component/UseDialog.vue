<script setup>
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import { ref } from 'vue';

defineProps({
  handleClickBuy: Function,
  handleClickSell: Function
});
const visible = ref(false);
</script>
<template>
  <div class="flex justify-center">
    <Button label="Show" @click="visible = true" class="w-full" />
    <Dialog v-model:visible="visible" header="Edit Profile" :style="{ width: '25rem' }">
      <div class="flex gap-5">
        <Button class="w-full" @click="handleClickBuy()">Buy</Button>
        <Button class="w-full" severity="danger" @click="handleClickSell()">Sell</Button>
      </div>
    </Dialog>
  </div>
</template>
