import Vue from 'vue';
import Vuex from 'vuex';

import setup from '@/helpers/axios';
import eventBus from '@/plugins/eventBus';

// modules

Vue.use(Vuex);

Vuex.Store.prototype.$axios = setup();
Vuex.Store.prototype.$eventBus = eventBus;

const store = new Vuex.Store({
  plugins: [],
  modules: {},
});

export default store;
