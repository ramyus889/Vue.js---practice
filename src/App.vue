<script setup>
import UseHeader from './component/UseHeader.vue';
</script>

<template>
  <div class="">
    <div class="max-w-[95rem] mx-auto md:px-10 p-6">
      <UseHeader />
      <RouterView />
    </div>
  </div>
</template>
