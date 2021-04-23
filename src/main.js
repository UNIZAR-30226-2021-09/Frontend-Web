import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
// import SocketIO from "socket.io-client";
// import VueSocketIO from 'vue-socket.io';

import {mapState} from 'vuex'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

// const options = { withCredentials: false };


// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: SocketIO('localhost:3000', options)
// }));

new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  beforeCreate() { this.$store.commit('initialiseStore');},
  template: '<App/>',
  render: h => h(App),
  created: function() {
    console.log('Estoy en la ruta ' + this.$router.currentRoute.path)

    if (this.perfil.token === ''){
      console.log('No hay token almacenado -> login')
      
      //this.$router.push('login');
    }else{
      console.log('El token es: ' + this.perfil.token)
      this.$socket.emit("logMe", { nombreUsuario: "User4"});
    }
  } ,
  computed:{
    ...mapState(['perfil'])
  }
}).$mount('#app')
