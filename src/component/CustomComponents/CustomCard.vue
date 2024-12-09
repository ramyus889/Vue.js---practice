<template>
  <div :class="computedCardClass">
    <div v-if="image" class="overflow-hidden">
      <img :src="image" :alt="title" :class="computedImageClass" />
    </div>
    <div class="p-4">
      <h3 class="text-xl font-bold">{{ title }}</h3>
      <p class="mt-3 mb-6 font-semibold text-gray-400">{{ description }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: null
  },
  cardClass: {
    type: String,
    default: ''
  },
  shadow: {
    type: Boolean,
    default: true
  },
  rounded: {
    type: [String, Number],
    default: 'lg'
  },
  roundedImage: {
    type: [String, Number],
    default: 'xl'
  },
  Width: {
    type: [String, Number],
    default: '500'
  },
  maxWImage: {
    type: [String, Number],
    default: '50'
  }
});

const computedCardClass = computed(() => {
  const baseClass = 'bg-transparent border border-gray-200 px-4 py-6 w-full';
  const WidthClass = typeof props.Width === 'number' ? `w-[${props.Width}px]` : `w-${props.Width}`;
  const shadowClass = props.shadow ? 'shadow-lg' : '';
  const roundedClass =
    typeof props.rounded === 'number' ? `rounded-${props.rounded}` : `rounded-${props.rounded}`;

  return `${baseClass} ${shadowClass} ${roundedClass} ${props.cardClass} ${WidthClass}`;
});

const computedImageClass = computed(() => {
  const maxWidthImageClass =
    typeof props.maxWImage === 'number'
      ? `max-w-[${props.maxWImage}px]`
      : `max-w-${props.maxWImage}`;
  const roundedClass =
    typeof props.roundedImage === 'number'
      ? `rounded-${props.roundedImage}`
      : `rounded-${props.roundedImage}`;

  return `${maxWidthImageClass} ${roundedClass}`;
});
</script>
