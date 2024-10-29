<script setup>
import axios from 'axios';
import Button from 'primevue/button';
import { computed, onMounted, ref } from 'vue';

const user = ref([]);
const searchQuery = ref('');

const url = 'https://jsonplaceholder.typicode.com/users';

const fetchUsers = async () => {
  try {
    const res = await axios.get(url);
    user.value = res.data;
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (id) => {
  try {
    await axios.delete(`${url}/${id}`); // Удаляем пользователя
    user.value = user.value.filter((item) => item.id !== id); // Обновляем список пользователей
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchUsers(); // Загружаем пользователей при монтировании
});

const filteredUsers = computed(() => {
  return user.value.filter((item) => {
    return item.username.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
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
        <div class="UserCard w-full justify-between items-center">
          <span>{{ item.username }}</span>
          <Button
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
