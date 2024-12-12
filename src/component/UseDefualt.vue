<script setup>
import useCustomHook from './Hooks/CustomHook';

const { counter, startCounter, stopCounter } = useCustomHook();

const items = [
  {
    id: 1,
    name: 'SearchList',
    pathItems: '/SearchList',
    OutlineColor: 'outline-green'
  },
  {
    id: 2,
    name: 'RestApi',
    pathItems: '/RestApi',
    OutlineColor: 'outline-blue'
  },
  {
    id: 3,
    name: 'UserList',
    pathItems: '/UserList',
    OutlineColor: 'outline-red'
  }
];
</script>

<template>
  <div class="flex gap-[100px] p-4">
    <div class="">
      <h1 class="text-2xl font-bold">Счетчик: {{ counter }}</h1>
      <div class="flex flex-col gap-20 mt-20">
        <UseButton
          size="large"
          outline="outline-green"
          disabled
          @click="startCounter"
          motionAnimate="m-p-wobble"
          motionClick="motion-preset-confetti"
        >
          Старт
        </UseButton>
        <UseButton
          label="Стоп"
          outline="outline-red"
          size="2xl"
          motionClick="motion-preset-confetti"
          motionAnimate="m-p-float"
          @click="stopCounter"
        />
      </div>
    </div>
    <div class="flex flex-col gap-10">
      <UseButton
        loading
        size="2xl"
        rounded="full"
        :key="item.id"
        as="router-link"
        :label="item.name"
        :to="item.pathItems"
        v-for="item in items"
        textPosition="center"
        :outline="item.OutlineColor"
      />
    </div>
  </div>
</template>
