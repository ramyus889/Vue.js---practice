<script setup>
import { onMounted } from 'vue';
import useSearch from './useSearch';

const { searchQuery, filteredUsers, fetchUsers } = useSearch();

onMounted(() => {
  fetchUsers();
});
</script>

<template>
  <div class="flex flex-col gap-10 mt-10 ms-10 max-w-[900px]">
    <div class="my-5">Search List</div>
    <div class="flex gap-5">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search users"
        class="max-w-[300px] py-3 px-5 rounded-2xl border-2 border-gray-300"
      />
    </div>
    <div class="grid grid-cols-2 gap-5" v-auto-animate>
      <div v-for="item in filteredUsers" :key="item.id">
        <div class="UserCard w-full">
          <span>{{ item.username }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
