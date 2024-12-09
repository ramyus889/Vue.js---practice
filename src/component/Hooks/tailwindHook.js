import { useIntervalFn } from '@vueuse/core';
import { ref } from 'vue';

const counter = ref(0);

const { pause, resume } = useIntervalFn(() => {
  counter.value++;
}, 1000);

const stopCounter = () => {
  pause();
};

const startCounter = () => {
  resume();
};
export default function useTailwindHook() {
  return {
    startCounter,
    stopCounter,
    counter
  };
}
