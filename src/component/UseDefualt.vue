<script setup>
import axios from 'axios';
import Button from 'primevue/button';
import { onMounted, ref } from 'vue';

import gsap from 'gsap';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

const toast = useToast();
const dev = ref([]);

const fetchDev = async () => {
  try {
    const { data: res } = await axios.get('https://540551bc2c03d6ee.mokky.dev/frontend');
    dev.value = res;
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: `${error} `,
      life: 3000
    });
  }
};

onMounted(() => {
  fetchDev();
});

const handleClickBuy = () => {
  toast.add({
    severity: 'success',
    summary: 'Buy',
    detail: `You've successfully Buy ${dev.value[3].title}`,
    life: 3000
  });
};
const handleClickSell = () => {
  toast.add({
    severity: 'success',
    summary: 'Sell',
    detail: `You've successfully Sell ${dev.value[0].title}`,
    life: 3000
  });
};

onMounted(() => {
  // Анимация изменения прозрачности и масштаба
  gsap.to('.box', {
    opacity: 0.5
  });
});
</script>

<template>
  <Toast />
  <div class="">
    <div class="inline-grid items-center grid-cols-4 gap-5 box">
      <div v-for="item in dev" :key="item.id" class="">
        <div ref="box" class="max-w-[300px] border border-slate-500 rounded-xl">
          <img :src="item.image" alt="" class="rounded-t-xl" />
          <div class="flex flex-col gap-5 p-2 bg-slate-800 rounded-b-xl">
            <div class="flex justify-between w-full">
              <div class="text-[18px] font-semibold">{{ item.title }}</div>
              <div class="font-semibold">{{ item.price }}</div>
            </div>
            <div class="flex gap-3">
              <Button class="w-full" @click="handleClickBuy()">Buy</Button>
              <Button class="w-full" severity="danger" @click="handleClickSell()">Sell</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
