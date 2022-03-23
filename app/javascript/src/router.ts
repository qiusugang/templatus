import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import NotFound from '@/pages/NotFound.vue';
import MasonryImage from '@/pages/MasonryImage.vue';
import ImageGrid from '@/pages/ImageGrid.vue';
import UploadImage from '@/pages/UploadImage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: {
      name: 'Templatus',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/masonry',
    name: 'Masonry',
    component: MasonryImage,
  },
  {
    path: '/grid',
    name: 'Image Grid',
    component: ImageGrid,
  },
  {
    path: '/upload',
    name: 'Upload Image',
    component: UploadImage,
  },
  { path: '/:pathMatch(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
