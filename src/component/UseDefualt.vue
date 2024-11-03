<script setup>
const items = [
  {
    id: 1,
    title: 'Teal',
    gradientColor: 'from-teal-400 to-teal-800',
    text: 'refer chemical card read '
  },
  {
    id: 2,
    title: 'Blue',
    gradientColor: 'from-blue-400 to-blue-800',
    text: 'lie saddle number final'
  },
  {
    id: 5,
    title: 'Red',
    gradientColor: 'from-red-500 to-red-800',
    text: 'nearly top larger '
  }
];
</script>
<template>
  <div class="">
    <div class="flex items-center p-4">
      <div class="flex max-w-[1000px] flex-wrap gap-2">
        <div v-for="item in items" :key="item.id" class="">
          <div
            :class="item.gradientColor"
            class="flex flex-col group gap-2 justify-end h-96 w-[230px] group items-start hover:w-[300px] transition rounded-lg bg-gradient-to-b p-4"
          >
            <div
              class="text-xl font-semibold text-white transition-opacity opacity-0 group-hover:opacity-100"
            >
              {{ item.title }}
            </div>
            <div class="transition-opacity opacity-0 group-hover:opacity-100">
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
