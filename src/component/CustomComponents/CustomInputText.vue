<template>
  <div :class="computedContainerClass">
    <label v-if="label" :class="labelClass">
      <slot>{{ label }}</slot>
    </label>
    <input
      type="text"
      :value="modelValue"
      @input="updateValue"
      :class="computedInputClass"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup>
import { computed, defineEmits, defineProps } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Enter text'
  },
  inputClass: {
    type: String,
    default: ''
  },
  labelClass: {
    type: String,
    default: ''
  },
  containerClass: {
    type: String,
    default: 'flex flex-col'
  }
});

const emit = defineEmits(['update:modelValue']);

const computedInputClass = computed(() => {
  return `${props.inputClass} border rounded px-4 py-2`;
});

const computedContainerClass = computed(() => {
  return `${props.containerClass}`;
});

const updateValue = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>
