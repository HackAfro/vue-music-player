import Vue from 'vue'
import App from './App.vue'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { LayoutInstaller } from '@progress/kendo-layout-vue-wrapper';

Vue.use(LayoutInstaller);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
