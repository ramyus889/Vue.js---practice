<script setup>
import { onMounted } from 'vue';
import useDelete from './useDelete';

const { deleteUser, searchQuery, filteredUsers, fetchUsers } = useDelete();

onMounted(() => {
  fetchUsers();
});
</script>

<template>
  <div class="flex flex-col mt-10 ms-10 gap-10 max-w-[1300px]">
    <div class="my-5">Delete User</div>
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
        <div class="items-center justify-between w-full UserCard">
          <span>{{ item.username }}</span>
          <UseButton
            @click="deleteUser(item.id)"
            severity="danger"
            icon="pi pi-trash"
            label="Delete"
          />
        </div>
      </div>
    </div>
  </div>
</template>
