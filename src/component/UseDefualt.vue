<script setup>
import Button from 'primevue/button';
import { twMerge } from 'tailwind-merge';
import { ref } from 'vue';

const isOpened = ref([true, false, true]);

const toggleOpen = (index) => {
  isOpened.value = isOpened.value.map((open, i) => (i === index ? !open : open));
};
</script>

<template>
  <div class="inline-flex flex-col gap-5">
    <div class="flex gap-5 place-content-center">
      <Button @click="toggleOpen(0)"> Click Green </Button>
      <Button @click="toggleOpen(1)"> Click Red </Button>
      <Button @click="toggleOpen(2)"> Click Blue </Button>
    </div>
    <div class="flex gap-5">
      <div
        v-for="(open, index) in isOpened"
        :key="index"
        :class="
          twMerge(
            open ? ['bg-green-500', 'bg-red-500', 'bg-blue-500'][index] : '',
            'px-10 py-5 rounded-xl text-center'
          )
        "
      >
        <div>Frontend</div>
      </div>
    </div>
  </div>
</template>
