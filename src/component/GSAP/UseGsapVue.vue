<script setup>
import gsap from 'gsap';
import { Draggable } from 'gsap/all';
import { onMounted } from 'vue';

let currentId = 0;

const getNextId = () => {
  return ++currentId;
};

const items = [
  {
    id: getNextId(),
    y: -300,
    num: getNextId(),
    delay: 0.1,
    opacity: 1,
    duration: 0.4,
    useClass: `box${getNextId()}`,
    color: 'bg-[#edd514]'
  },
  {
    id: getNextId(),
    y: -300,
    num: getNextId(),
    delay: 0.2,
    opacity: 1,
    duration: 0.4,
    useClass: `box${getNextId()}`,
    color: 'bg-[#353d8c]'
  },
  {
    id: getNextId(),
    y: -300,
    num: getNextId(),
    delay: 0.3,
    opacity: 1,
    duration: 0.4,
    useClass: `box${getNextId()}`,
    color: 'bg-[#00af90]'
  },
  {
    id: getNextId(),
    y: -300,
    num: getNextId(),
    delay: 0.4,
    opacity: 1,
    duration: 0.4,
    useClass: `box${getNextId()}`,
    color: 'bg-[#fb6750]'
  },
  {
    id: getNextId(),
    y: -300,
    num: getNextId(),
    delay: 0.5,
    opacity: 1,
    duration: 0.4,
    useClass: `box${getNextId()}`,
    color: 'bg-[#fb6750]'
  },
  {
    id: getNextId(),
    y: -300,
    num: getNextId(),
    delay: 0.6,
    opacity: 1,
    duration: 0.4,
    useClass: `box${getNextId()}`,
    color: 'bg-[#df10cc]'
  },
  {
    id: getNextId(),
    y: -300,
    num: getNextId(),
    delay: 0.7,
    opacity: 1,
    duration: 0.4,
    useClass: `box${getNextId()}`,
    color: 'bg-[#e1f6e7]'
  },
  {
    id: getNextId(),
    y: -300,
    num: getNextId(),
    delay: 0.8,
    opacity: 1,
    duration: 0.4,
    useClass: `box${getNextId()}`,
    color: 'bg-[#0f912b]'
  },
  {
    id: getNextId(),
    y: -300,
    num: getNextId(),
    delay: 0.9,
    opacity: 1,
    duration: 0.4,
    useClass: `box${getNextId()}`,
    color: 'bg-[#d1e2a1]'
  },
  {
    id: getNextId(),
    y: -300,
    num: getNextId(),
    delay: 1,
    opacity: 1,
    duration: 0.4,
    useClass: `box${getNextId()}`,
    color: 'bg-[#1c7c55]'
  },
  {
    id: getNextId(),
    y: -300,
    num: getNextId(),
    delay: 1.1,
    opacity: 1,
    duration: 0.4,
    useClass: `box${getNextId()}`,
    color: 'bg-[#edd514]'
  },
  {
    id: getNextId(),
    y: -300,
    num: getNextId(),
    delay: 1.2,
    opacity: 1,
    duration: 0.4,
    useClass: `box${getNextId()}`,
    color: 'bg-[#353d8c]'
  },
  {
    id: getNextId(),
    y: -300,
    num: getNextId(),
    delay: 1.3,
    opacity: 1,
    duration: 0.4,
    useClass: `box${getNextId()}`,
    color: 'bg-[#00af90]'
  },
  {
    id: getNextId(),
    y: -300,
    num: getNextId(),
    delay: 1.4,
    opacity: 1,
    duration: 0.4,
    useClass: `box${getNextId()}`,
    color: 'bg-[#fb6750]'
  },
  {
    id: getNextId(),
    y: -300,
    num: getNextId(),
    delay: 1.5,
    opacity: 1,
    duration: 0.4,
    useClass: `box${getNextId()}`,
    color: 'bg-[#fb6750]'
  },
  {
    id: getNextId(),
    y: -300,
    num: getNextId(),
    delay: 1.6,
    opacity: 1,
    duration: 0.4,
    useClass: `box${getNextId()}`,
    color: 'bg-[#df10cc]'
  },
  {
    id: getNextId(),
    y: -300,
    num: getNextId(),
    delay: 1.7,
    opacity: 1,
    duration: 0.4,
    useClass: `box${getNextId()}`,
    color: 'bg-[#e1f6e7]'
  },
  {
    id: getNextId(),
    y: -300,
    num: getNextId(),
    delay: 1.8,
    opacity: 1,
    duration: 0.4,
    useClass: `box${getNextId()}`,
    color: 'bg-[#0f912b]'
  },
  {
    id: getNextId(),
    y: -300,
    num: getNextId(),
    delay: 1.9,
    opacity: 1,
    duration: 0.4,
    useClass: `box${getNextId()}`,
    color: 'bg-[#d1e2a1]'
  },
  {
    id: getNextId(),
    y: -300,
    num: getNextId(),
    delay: 2,
    opacity: 1,
    duration: 0.4,
    useClass: `box${getNextId()}`,
    color: 'bg-[#1c7c55]'
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
      y: item.y,
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
  <div class="container flex gap-3 mt-[500px] ms-20">
    <div v-for="item in items" :key="item.id" class="">
      <div
        :class="`flair--${item.num} ${item.color} ${item.useClass}`"
        class="opacity-0 size-10 rounded-xl"
      ></div>
    </div>
  </div>
</template>
