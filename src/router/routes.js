import Desktop from '@/pages/Desktop.vue';
import Terminal from '@/pages/Terminal.vue';
import About from '@/pages/About.vue';
import Contact from '@/pages/Contact.vue';
import Setting from '@/pages/Setting.vue';
import Projects from '@/pages/Projects.vue';

const routes = [
  {
    path: '/',
    name: 'Desktop',
    component: Desktop,
  },
  {
    path: '/terminal',
    name: 'Terminal',
    component: Terminal,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/settings',
    name: 'Setting',
    component: Setting,
  },
];

export default routes;
