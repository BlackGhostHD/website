import Desktop from '@/pages/Desktop.vue';
import Terminal from '@/pages/Terminal.vue';
import About from '@/pages/About.vue';
import Contact from '@/pages/Contact.vue';
import Setting from '@/pages/Setting.vue';
import Projects from '@/pages/Projects.vue';
import AsteroidsGame from '@/pages/Games/Asteroids.vue';
import AsteroidsProject from '@/pages/Projects/Asteroids.vue';

const routes = [
  {
    path: '/desktop',
    name: 'Desktop',
    component: Desktop,
  },
  {
    path: '/terminal',
    name: 'Terminal',
    component: Terminal,
  },
  {
    path: '/',
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
  {
    path: '/games/asteroids',
    name: 'Asteroids',
    component: AsteroidsGame,
  },
  {
    path: '/projects/asteroids',
    name: 'Asteroids',
    component: AsteroidsProject,
  },
  { path: '/games' },
];

export default routes;
