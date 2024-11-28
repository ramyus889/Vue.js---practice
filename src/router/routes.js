import UseDeleteUser from '@/ApiComponent/DeleteUser/UseDeleteUser.vue';
import UseEditUser from '@/ApiComponent/EditList/UseEditUser.vue';
import UsePushList from '@/ApiComponent/PushList/UsePushList.vue';
import UseSearchList from '@/ApiComponent/SearshList/UseSearchList.vue';
import UseRestApi from '@/ApiComponent/UseRestApi.vue';
import UseUserList from '@/ApiComponent/UserList/UseUserList.vue';
import UseGsapVue from '@/component/GSAP/UseGsapVue.vue';
import UseHome from '@/component/UseHome.vue';

export const routeUrl = [
  {
    path: '/'
  },
  {
    path: '/RestApi'
  },
  {
    path: '/UserList'
  },
  {
    path: '/SearchList'
  },
  {
    path: '/DeleteUser'
  },
  {
    path: '/PuchList'
  },
  {
    path: '/EditUser'
  },
  {
    path: '/UseGsap'
  }
];

export const routes = [
  {
    path: `${routeUrl[0].path}`,
    component: UseHome
  },
  {
    path: `${routeUrl[1].path}`,
    component: UseRestApi
  },
  {
    path: `${routeUrl[2].path}`,
    component: UseUserList
  },
  {
    path: `${routeUrl[3].path}`,
    component: UseSearchList
  },
  {
    path: `${routeUrl[4].path}`,
    component: UseDeleteUser
  },
  {
    path: `${routeUrl[5].path}`,
    component: UsePushList
  },
  {
    path: `${routeUrl[6].path}`,
    component: UseEditUser
  },
  {
    path: `${routeUrl[7].path}`,
    component: UseGsapVue
  }
];
