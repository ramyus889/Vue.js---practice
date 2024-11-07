<script setup>
import gsap from 'gsap';
import { Draggable } from 'gsap/all';
import { onMounted } from 'vue';

const items = [
  {
    id: 1,
    x: 150,
    num: 1,
    delay: 0.4,
    opacity: 0.6,
    duration: 0.3,
    useClass: 'box1',
    color: 'bg-[#edd514]'
  },
  {
    id: 2,
    x: 100,
    num: 2,
    delay: 0.4,
    opacity: 0.5,
    duration: 0.5,
    useClass: 'box2',
    color: 'bg-[#353d8c]'
  },
  {
    id: 3,
    x: 150,
    num: 3,
    delay: 0.4,
    opacity: 0.4,
    duration: 0.7,
    useClass: 'box3',
    color: 'bg-[#00af90]'
  },
  {
    id: 4,
    x: 200,
    num: 4,
    delay: 0.4,
    opacity: 0.3,
    duration: 0.9,
    useClass: 'box4',
    color: 'bg-[#fb6750]'
  }
];

onMounted(() => {
  gsap.registerPlugin(Draggable);

  items.forEach((item) => {
    Draggable.create(`.flair--${item.id}`, {
      bounds: '.container',
      inertia: true
    });
  });
  items.forEach((item) => {
    gsap.to(`.${item.useClass}`, {
      scale: 1,
      x: item.x,
      repeat: -1,
      yoyo: true,
      delay: item.delay,
      opacity: item.opacity,
      duration: item.duration
    });
  });
});
</script>
<template>
  <div class="container mt-20 ms-20 size-[300px] flex flex-col gap-3">
    <div v-for="item in items" :key="item.id" class="">
      <div
        :class="`flair--${item.num} ${item.color} ${item.useClass}`"
        class="size-10 rounded-xl"
      ></div>
    </div>
  </div>
</template>
