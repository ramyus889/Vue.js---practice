<script setup>
import { useRoute } from 'vue-router';
import { routeUrl } from '../router/routes.js';

const useClass = 'transition-all hover:font-bold';
const route = useRoute();

function isActive(path) {
  return route.path === path ? 'text-red-500 font-bold' : '';
}

const items = [
  {
    id: 1,
    name: 'Home',
    pathItems: `${routeUrl[0].path}`
  },
  {
    id: 2,
    name: 'RestApi',
    pathItems: `${routeUrl[1].path}`
  },
  {
    id: 3,
    name: 'UserList',
    pathItems: `${routeUrl[2].path}`
  },
  {
    id: 4,
    name: 'SearchList',
    pathItems: `${routeUrl[3].path}`
  },
  {
    id: 5,
    name: 'DeleteUser',
    pathItems: `${routeUrl[4].path}`
  },
  {
    id: 6,
    name: 'PushList',
    pathItems: `${routeUrl[5].path}`
  },
  {
    id: 7,
    name: 'EditUser',
    pathItems: `${routeUrl[6].path}`
  },
  {
    id: 8,
    name: 'GSAP',
    pathItems: `${routeUrl[7].path}`
  }
];
</script>

<template>
  <div
    class="max-w-[700px] bg-gradient-to-r from-[#4b4b4c] to-[#3e0b35] rounded-full shadow-lg mx-auto mt-5 flex place-content-center items-center px-4 py-3"
  >
    <div class="flex items-center gap-5 px-5 py-3 place-content-center">
      <div v-for="item in items" :key="item.id" class="">
        <RouterLink :to="item.pathItems" :class="[useClass, isActive(item.pathItems)]">{{
          item.name
        }}</RouterLink>
      </div>
    </div>
  </div>
</template>
