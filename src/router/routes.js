import UseDeleteUser from '@/component/UseDeleteUser.vue';
import UseEditUser from '@/component/UseEditUser.vue';
import UseHome from '@/component/UseHome.vue';
import UsePushList from '@/component/UsePushList.vue';
import UseRestApi from '@/component/UseRestApi.vue';
import UseSearchList from '@/component/UseSearchList.vue';
import UseUserList from '@/component/UseUserList.vue';

export const routes = [
  {
    path: '/',
    component: UseHome
  },
  {
    path: '/RestApi',
    component: UseRestApi
  },
  {
    path: '/UserList',
    component: UseUserList
  },
  {
    path: '/SearchList',
    component: UseSearchList
  },
  {
    path: '/DeleteUser',
    component: UseDeleteUser
  },
  {
    path: '/PuchList',
    component: UsePushList
  },
  {
    path: '/EditUser',
    component: UseEditUser
  }
];
