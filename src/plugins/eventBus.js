/* eslint-disable */
import Vue from 'vue';

const eventBus = {};
let eventListeners = {};
const vue = new Vue();

// adds '$eventBus' to all components
eventBus.install = function (Vue) {
  Vue.prototype.$eventBus = vue;
};
Vue.use(eventBus);

Vue.mixin({
	created: function () {
		//register events
		const events = this.$options.eventBus;
		eventListeners = {};
		for (const event in events) {
			eventListeners[event] = events[event].bind(this); //remember register listener
			vue.$eventBus.$on(event, eventListeners[event]);
		}
	},
	beforeDestroy: function () {
		//unregister events
		for (const event in eventListeners) {
			vue.$eventBus.$off(event, eventListeners[event]);
		}
		eventListeners = null;
	},
});
