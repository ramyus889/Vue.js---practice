<template>
  <button :class="computedButtonClass" @click="handleClick">
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<script setup>
import { computed, defineEmits, defineProps, ref } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: 'Button'
  },
  buttonClass: {
    type: String,
    default: ''
  },
  bgColor: {
    type: String,
    default: 'bg-blue'
  },
  size: {
    type: String,
    default: 'medium'
  },
  motionClick: {
    type: String,
    default: ''
  },
  motionAnimate: {
    type: String,
    default: ''
  },
  outline: {
    type: String,
    default: ''
  },
  textColor: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['click']);
const isAnimating = ref(false);

const handleClick = () => {
  isAnimating.value = true;
  emit('click');
  setTimeout(() => {
    isAnimating.value = false;
  }, 1000);
};

const sizeClasses = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl',
  '2xl': 'px-10 py-5 text-2xl',
  '3xl': 'px-12 py-6 text-3xl'
};

const motionClasses = {
  'm-p-spin': 'motion-preset-spin',
  'm-p-blink': 'motion-preset-blink',
  'm-p-float': 'motion-preset-float',
  'm-p-pulse': 'motion-preset-pulse',
  'm-p-seesaw': 'motion-preset-seesaw',
  'm-p-wobble': 'motion-preset-wobble',
  'm-p-stretch': 'motion-preset-stretch',
  'm-p-oscillate': 'motion-preset-oscillate'
};

const computedButtonClass = computed(() => {
  const colorClasses = {
    'bg-red': 'bg-red-500 text-black font-semibold',
    'bg-blue': 'bg-blue-500 text-black font-semibold',
    'bg-green': 'bg-green-500 text-black font-semibold',
    'bg-yellow': 'bg-yellow-500 text-black font-semibold',
    'bg-purple': 'bg-purple-500 text-black font-semibold',
    'bg-grayBlack': 'bg-gray-500 text-black font-semibold',
    'bg-grayWhite': 'bg-gray-500 text-white font-semibold',
    'bg-black': 'bg-black text-white font-semibold',
    'bg-white': 'bg-white text-black font-semibold',
    'bg-orange': 'bg-orange-500 text-black font-semibold',
    'bg-pink': 'bg-pink-500 text-black font-semibold',
    'bg-cyan': 'bg-cyan-500 text-black font-semibold'
  };

  const outlineClasses = {
    'outline-red': 'border border-red-500 text-red-500 bg-transparent',
    'outline-blue': 'border border-blue-500 text-blue-500 bg-transparent',
    'outline-green': 'border border-green-500 text-green-500 bg-transparent',
    'outline-yellow': 'border border-yellow-500 text-yellow-500 bg-transparent',
    'outline-purple': 'border border-purple-500 text-purple-500 bg-transparent',
    'outline-grayBlack': 'border border-gray-500 text-gray-500 bg-transparent',
    'outline-grayWhite': 'border border-gray-500 text-gray-500 bg-transparent',
    'outline-black': 'border border-black text-black bg-transparent',
    'outline-white': 'border border-white text-white bg-transparent',
    'outline-orange': 'border border-orange-500 text-orange-500 bg-transparent',
    'outline-pink': 'border border-pink-500 text-pink-500 bg-transparent',
    'outline-cyan': 'border border-cyan-500 text-cyan-500 bg-transparent'
  };

  const textClasses = {
    'text-red': 'border-none text-red-500 bg-transparent',
    'text-blue': 'border-none text-blue-500 bg-transparent',
    'text-green': 'border-none text-green-500 bg-transparent',
    'text-yellow': 'border-none text-yellow-500 bg-transparent',
    'text-purple': 'border-none text-purple-500 bg-transparent',
    'text-grayBlack': 'border-none text-gray-500 bg-transparent',
    'text-grayWhite': 'border-none text-gray-500 bg-transparent',
    'text-black': 'border-none text-black bg-transparent',
    'text-white': 'border-none text-white bg-transparent',
    'text-orange': 'border-none text-orange-500 bg-transparent',
    'text-pink': 'border-none text-pink-500 bg-transparent',
    'text-cyan': 'border-none text-cyan-500 bg-transparent'
  };

  const textClass = textClasses[props.textColor] || '';
  const outlineClass = outlineClasses[props.outline] || '';
  const motionClass = motionClasses[props.motionAnimate] || '';
  const motionClick = isAnimating.value ? props.motionClick : '';
  const sizeClass = sizeClasses[props.size] || sizeClasses.medium;
  const colorClass = colorClasses[props.bgColor] || colorClasses.red;

  return `${props.buttonClass} ${sizeClass} ${colorClass} ${textClass} ${motionClick} ${motionClass} ${outlineClass} rounded-lg transition-all`;
});
</script>
