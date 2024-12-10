<template>
  <div :class="computedContainerClass">
    <input
      type="checkbox"
      :id="id"
      :checked="modelValue"
      @change="toggleCheck"
      :class="computedCheckboxClass"
    />
    <label :for="id" :class="labelClass">
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<script setup>
import { computed, defineEmits, defineProps } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  },
  checkboxClass: {
    type: String,
    default: ''
  },
  labelClass: {
    type: String,
    default: 'ps-3'
  },
  containerClass: {
    type: String,
    default: 'flex items-center'
  },
  id: {
    type: String,
    default: () => `checkbox-${Math.random().toString(36).substr(2, 9)}`
  }
});

const emit = defineEmits(['update:modelValue']);

const computedCheckboxClass = computed(() => {
  return `${props.checkboxClass} form-checkbox h-5 w-5 text-blue-600`;
});

const computedContainerClass = computed(() => {
  return `${props.containerClass}`;
});

const toggleCheck = (event) => {
  emit('update:modelValue', event.target.checked);
};
</script>
