<script setup>
import { useItems } from './useItems.js';

const { items } = useItems();
</script>
<template>
  <div class="inline-flex flex-col gap-10">
    <div v-for="item in items" :key="item.id">
      <div class="flex gap-10">
        <div data-aos="fade-up" :data-aos-delay="item.delay" class="">
          <img
            alt=""
            :src="item.image"
            class="w-[400px] rounded-xl hover:rotate-[45deg] transition-all"
          />
        </div>
        <div data-aos="fade-up" :data-aos-delay="item.delay" class="">
          <img
            alt=""
            :src="item.imageUp"
            class="w-[400px] rounded-xl hover:-rotate-[45deg] transition-all"
          />
        </div>
      </div>
    </div>
  </div>
</template>
