import Use3D from '@/component/Use3D.vue';
import UseBackgrounds from '@/component/UseBackgrounds.vue';
import UseBlogs from '@/component/UseBlogs.vue';
import UseColors from '@/component/UseColors.vue';
import UseComponents from '@/component/UseComponents.vue';
import UseHome from '@/component/UseHome.vue';
import UseIcons from '@/component/UseIcons.vue';
import UseIllustrations from '@/component/UseIllustrations.vue';
import UseInspirations from '@/component/UseInspirations.vue';
import UseLibraries from '@/component/UseLibraries.vue';
import UsePhotos from '@/component/UsePhotos.vue';
import UseTools from '@/component/UseTools.vue';
import UseTypography from '@/component/UseTypography.vue';
import UseVideos from '@/component/UseVideos.vue';

export const routeUrl = [
  {
    path: '/'
  },
  {
    path: '/Icons'
  },
  {
    path: '/Illustrations'
  },
  {
    path: '/Photos'
  },
  {
    path: '/Videos'
  },
  {
    path: '/Colors'
  },
  {
    path: '/Backgrounds'
  },
  {
    path: '/Typography'
  },
  {
    path: '/3D'
  },
  {
    path: '/Libraries'
  },
  {
    path: '/Blogs'
  },
  {
    path: '/Tools'
  },
  {
    path: '/Inspirations'
  },
  {
    path: '/Components'
  }
];

export const routes = [
  {
    path: `${routeUrl[0].path}`,
    component: UseHome
  },
  {
    path: `${routeUrl[1].path}`,
    component: UseIcons
  },
  {
    path: `${routeUrl[2].path}`,
    component: UseIllustrations
  },
  {
    path: `${routeUrl[3].path}`,
    component: UsePhotos
  },
  {
    path: `${routeUrl[4].path}`,
    component: UseVideos
  },
  {
    path: `${routeUrl[5].path}`,
    component: UseColors
  },
  {
    path: `${routeUrl[6].path}`,
    component: UseBackgrounds
  },
  {
    path: `${routeUrl[7].path}`,
    component: UseTypography
  },
  {
    path: `${routeUrl[8].path}`,
    component: Use3D
  },
  {
    path: `${routeUrl[9].path}`,
    component: UseLibraries
  },
  {
    path: `${routeUrl[10].path}`,
    component: UseBlogs
  },
  {
    path: `${routeUrl[11].path}`,
    component: UseTools
  },
  {
    path: `${routeUrl[12].path}`,
    component: UseInspirations
  },
  {
    path: `${routeUrl[13].path}`,
    component: UseComponents
  }
];
