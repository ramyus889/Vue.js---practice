// useHandlers.js
import axios from 'axios';
import { ref } from 'vue';

const show = ref({});
const user = ref([]);
const userSizes = ref({});
const userRotate = ref({});
const userBorder = ref({});
const userOpacity = ref({});

const url = 'https://jsonplaceholder.typicode.com/users';

const fetchUsers = async () => {
  try {
    const { data: res } = await axios.get(url);
    user.value = res;
  } catch (error) {
    console.error(error);
  }
};

const handleClickPlus = (id) => {
  userSizes.value[id] = (userSizes.value[id] || 16) + 1;
};

const handleClickMinus = (id) => {
  userSizes.value[id] = (userSizes.value[id] || 16) - 1;
};

const handleClickRotatePlus = (id) => {
  userRotate.value[id] = (userRotate.value[id] || 0) + 10;
};

const handleClickRotateMinus = (id) => {
  userRotate.value[id] = (userRotate.value[id] || 0) - 10;
};

const handleClickBorderPlus = (id) => {
  userBorder.value[id] = (userBorder.value[id] || 1) + 1;
};

const handleClickBorderMinus = (id) => {
  userBorder.value[id] = (userBorder.value[id] || 1) - 1;
};

const handleClickOpacityMinus = (id) => {
  userOpacity.value[id] = (userOpacity.value[id] || 1) - 0.1;
};

const handleClickOpacityPlus = (id) => {
  userOpacity.value[id] = (userOpacity.value[id] || 1) + 0.1;
};

const handleClickShow = (id) => {
  show.value[id] = !show.value[id];
};

export default function useHandlers() {
  return {
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
  };
}
