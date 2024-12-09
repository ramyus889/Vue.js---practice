<template>
  <button :class="computedButtonClass" @click="$emit('click')">
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<script setup>
import { computed, defineEmits, defineProps } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: 'Button'
  },
  buttonClass: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: 'blue'
  },
  size: {
    type: String,
    default: 'medium'
  }
});

defineEmits(['click']);

const computedButtonClass = computed(() => {
  const colorClasses = {
    red: 'bg-red-500 text-black font-semibold',
    blue: 'bg-blue-500 font-semibold',
    green: 'bg-green-500 font-semibold',
    yellow: 'bg-yellow-500 text-black font-semibold',
    purple: 'bg-purple-500 text-black font-semibold',
    grayBlack: 'bg-gray-500 text-black font-semibold',
    grayWhite: 'bg-gray-500 text-white font-semibold',
    black: 'bg-black text-white font-semibold',
    white: 'bg-white text-black font-semibold',
    orange: 'bg-orange-500 text-black font-semibold',
    pink: 'bg-pink-500 text-black font-semibold',
    cyan: 'bg-cyan-500 text-black font-semibold'
  };

  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
    '2xl': 'px-10 py-5 text-2xl',
    '3xl': 'px-12 py-6 text-3xl'
  };

  const colorClass = colorClasses[props.color] || colorClasses.red;
  const sizeClass = sizeClasses[props.size] || sizeClasses.medium;
  return `${props.buttonClass} ${sizeClass} ${colorClass} rounded-lg transition-all`;
});
</script>
