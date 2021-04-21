import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import SocketIO from "socket.io-client";
import VueSocketIO from 'vue-socket.io';

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

const options = { withCredentials: false };

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('localhost:3001', options)
}));

new Vue({
  router,
  store,
  render: h => h(App),
  created: function() {
    this.$socket.emit("logMe", { nombreUsuario: "User4"});
  } 
}).$mount('#app')
