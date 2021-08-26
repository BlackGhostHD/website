import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Christian Sommer ${to.meta.title || ''}`;

  if (to.meta?.title) {
    document.querySelector("meta[property='og:title']").setAttribute('content', document.title);
    document.querySelector("meta[property='twitter:title']").setAttribute('content', document.title);
  }

  if (to.meta?.description) {
    document.getElementsByTagName('meta').namedItem('description').setAttribute('content', to.meta.description);
    document.querySelector("meta[property='og:description']").setAttribute('content', to.meta.description);
    document.querySelector("meta[property='twitter:description']").setAttribute('content', to.meta.description);
  }

  next();
});

export default router;
