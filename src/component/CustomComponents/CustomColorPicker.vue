<template>
  <div :class="computedContainerClass">
    <input
      type="color"
      :value="modelValue"
      @input="updateColor"
      :class="computedColorPickerClass"
    />
    <label :class="labelClass">
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<script setup>
import { computed, defineEmits, defineProps } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '#000000'
  },
  label: {
    type: String,
    default: ''
  },
  colorPickerClass: {
    type: String,
    default: ''
  },
  labelClass: {
    type: String,
    default: ''
  },
  containerClass: {
    type: String,
    default: 'flex items-center'
  }
});

const emit = defineEmits(['update:modelValue']);

const computedColorPickerClass = computed(() => {
  return `${props.colorPickerClass} h-10 w-10 cursor-pointer rounded-xl border-2 border-gray-600`;
});

const computedContainerClass = computed(() => {
  return `${props.containerClass}`;
});

const updateColor = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>
