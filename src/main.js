import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSocketIO from 'vue-socket.io'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/*const options = { path: '/my-app/' }; //Options object to pass into SocketIO

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('http://metinseylan.com:1992', options), //options object is Optional
  vuex: {
    store,
    actionPrefix: "SOCKET_",
    mutationPrefix: "SOCKET_"
  }
})
);*/

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'https://proyecto-software-09.herokuapp.com/',
  vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
  },
  options: { path: "/my-app/" } //Optional options
}))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
