<script setup>
import { routeUrl } from '../router/routes.js';
</script>

<template>
  <div class="flex gap-5 px-5 py-5 border-b border-gray-500">
    <RouterLink :to="`${routeUrl[0].path}`">Home</RouterLink>
    <RouterLink :to="`${routeUrl[1].path}`">RestApi</RouterLink>
    <RouterLink :to="`${routeUrl[2].path}`">UserList</RouterLink>
    <RouterLink :to="`${routeUrl[3].path}`">SearchList</RouterLink>
    <RouterLink :to="`${routeUrl[4].path}`">DeleteUser</RouterLink>
    <RouterLink :to="`${routeUrl[5].path}`">PushList</RouterLink>
    <RouterLink :to="`${routeUrl[6].path}`">EditUser</RouterLink>
  </div>
</template>
