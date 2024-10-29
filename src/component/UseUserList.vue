<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const user = ref([]);

const url = 'https://jsonplaceholder.typicode.com/users';

const fetchUsers = async () => {
  try {
    const { data: res } = await axios.get(url);
    user.value = res;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchUsers();
});
</script>

<template>
  <div class="flex flex-col gap-10 mt-10 ms-10 max-w-[1300px]">
    <div class="my-5">User List</div>
    <div class="grid grid-cols-2 gap-5" v-auto-animate>
      <div v-for="item in user" :key="item.id">
        <div class="UserCard w-full">
          <span>{{ item.username }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
