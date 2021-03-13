import Vue from 'vue';
import VueDraggableResizable from 'vue-draggable-resizable';
import setup from '@/helpers/axios';
import eventBus from '@/plugins/eventBus';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import i18n from './i18n';

import DefaultLayout from './layout/Default.vue';
import vuetify from './plugins/vuetify';

Vue.prototype.$axios = setup();

Vue.component('vue-draggable-resizable', VueDraggableResizable);
Vue.component('defaultLayout', DefaultLayout);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  vuetify,
  eventBus,
  render: (h) => h(App),
}).$mount('#app');
