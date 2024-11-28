import axios from 'axios';
import { computed, ref } from 'vue';

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

const filteredUsers = computed(() => {
  return user.value.filter((item) => {
    return item.username.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});

export default function useDelete() {
  return {
    deleteUser,
    fetchUsers,
    searchQuery,
    filteredUsers
  };
}
