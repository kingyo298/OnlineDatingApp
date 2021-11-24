import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import {routes} from './routes';
import store from './store/index';
import axios from 'axios';

axios.defaults.baseURL = 'https://randomuser.me/api/';
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes
});
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
