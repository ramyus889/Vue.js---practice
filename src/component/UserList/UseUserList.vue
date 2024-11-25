<script setup>
import Button from 'primevue/button';
import { onMounted } from 'vue';
import UseButton from './UseButton.vue';
import useHandlers from './useHandlers.js';

const {
  show,
  user,
  userSizes,
  userRotate,
  userBorder,
  userOpacity,
  fetchUsers,
  handleClickPlus,
  handleClickMinus,
  handleClickRotatePlus,
  handleClickRotateMinus,
  handleClickBorderPlus,
  handleClickBorderMinus,
  handleClickOpacityMinus,
  handleClickOpacityPlus,
  handleClickShow
} = useHandlers();

onMounted(() => {
  fetchUsers();
});
</script>

<template>
  <div class="flex flex-col gap-10 mt-10 ms-10 max-w-[1400px]">
    <div class="my-5">User List</div>
    <div class="grid grid-cols-2 gap-5" v-auto-animate>
      <div v-for="item in user" :key="item.id">
        <div class="items-center justify-between w-full UserCard">
          <span
            :style="{
              fontSize: (userSizes[item.id] || 16) + 'px',
              transform: 'rotate(' + (userRotate[item.id] || 0) + 'deg)',
              border: (userBorder[item.id] || 1) + 'px solid white',
              opacity: userOpacity[item.id] || 1
            }"
            class="px-3 py-1 transition-all rounded-xl"
            >{{ item.username }}</span
          >
          <div class="flex flex-col items-center gap-3">
            <div class="">
              <Button
                :severity="show[item.id] ? 'danger' : 'default'"
                :label="show[item.id] ? 'Close' : 'Edit'"
                @click="handleClickShow(item.id)"
              />
            </div>
            <div v-if="show[item.id]" class="flex flex-col items-center gap-3">
              <UseButton
                :item="item"
                :handlers="{
                  handleClickPlus: handleClickPlus,
                  handleClickMinus: handleClickMinus,
                  handleClickRotatePlus: handleClickRotatePlus,
                  handleClickRotateMinus: handleClickRotateMinus,
                  handleClickBorderPlus: handleClickBorderPlus,
                  handleClickBorderMinus: handleClickBorderMinus,
                  handleClickOpacityMinus: handleClickOpacityMinus,
                  handleClickOpacityPlus: handleClickOpacityPlus
                }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
