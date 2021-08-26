/* eslint-disable max-len */

import Desktop from '@/pages/Desktop.vue';
import Terminal from '@/pages/Terminal.vue';
import About from '@/pages/About.vue';
import Contact from '@/pages/Contact.vue';
import Setting from '@/pages/Setting.vue';
import Projects from '@/pages/Projects.vue';
import AsteroidsGame from '@/pages/Games/Asteroids.vue';
import AsteroidsProject from '@/pages/Projects/Asteroids.vue';
import Camera from '@/pages/Camera.vue';

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
    meta: {
      title: '- 🕹️ Asteroids',
      description: 'Play Asteroids Online! - Multiplayer clone of the 1979 Game: Asteroids for Atari by Christian Sommer',
    },
  },
  {
    path: '/projects/asteroids',
    name: 'Asteroids',
    component: AsteroidsProject,
    meta: {
      title: '- 🧪 Asteroids',
    },
  },
  {
    path: '/exp/camera',
    name: 'Camera',
    component: Camera,
  },
  { path: '/games' },
];

export default routes;
