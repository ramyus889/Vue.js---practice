<script setup></script>

<template>
  <div class="mt-[100px] ms-[100px]">
    <div class="">
      <UseButton
        size="large"
        label="Start"
        outline="outline-green"
        disabled
        @click="startCounter"
        motionAnimate="m-p-wobble"
        motionClick="motion-preset-confetti"
      />
    </div>
  </div>
</template>
