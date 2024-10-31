import UseDeleteUser from '@/component/DeleteUser/UseDeleteUser.vue';
import UseEditUser from '@/component/EditList/UseEditUser.vue';
import UsePushList from '@/component/PushList/UsePushList.vue';
import UseSearchList from '@/component/SearshList/UseSearchList.vue';
import UseHome from '@/component/UseHome.vue';
import UseRestApi from '@/component/UseRestApi.vue';
import UseUserList from '@/component/UserList/UseUserList.vue';

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
