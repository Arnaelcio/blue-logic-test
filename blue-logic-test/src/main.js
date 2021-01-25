import Vue from 'vue'
import App from './App.vue'
import VueEllipseProgress from 'vue-ellipse-progress';

Vue.use(VueEllipseProgress);

new Vue({
  el: '#app',
  render: h => h(App)
})
