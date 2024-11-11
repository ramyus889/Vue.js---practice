<script setup>
let currentSpin = 0;

const spinId = () => {
  return ++currentSpin;
};

const items = [
  {
    id: spinId(),
    delay: 100
  },
  {
    id: spinId(),
    delay: 150
  },
  {
    id: spinId(),
    delay: 200
  },
  {
    id: spinId(),
    delay: 300
  },
  {
    id: spinId(),
    delay: 500
  },
  {
    id: spinId(),
    delay: 700
  },
  {
    id: spinId(),
    delay: 1000
  },
  {
    id: spinId(),
    delay: 1500
  },
  {
    id: spinId(),
    delay: 900
  },
  {
    id: spinId(),
    delay: 1000
  },
  {
    id: spinId(),
    delay: 1500
  }
];
</script>

<template>
  <div class="grid grid-cols-3 gap-20 mb-20">
    <div class="text-center UserBorder motion-preset-spin motion-duration-100"></div>
    <div v-for="item in items" :key="item.id" class="">
      <div
        :class="`motion-delay-${item.delay}`"
        class="text-center UserBorder motion-blur-loop"
      ></div>
    </div>
  </div>
</template>
