import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Toasted from 'vue-toasted';
 
Vue.use(Toasted)
// import SocketIO from "socket.io-client";
// import VueSocketIO from 'vue-socket.io';

// const options = { path: '/my-app/' }; //Options object to pass into SocketIO

// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: VueSocketIO('http://localhost:3001', options),   //TODO: CAMBIAR LA DIRECCIÓN A LA BUENA PARA PODER HACER LAS PETIS
//   vuex: {
//       store,
//       actionPrefix: 'SOCKET_',
//       mutationPrefix: 'SOCKET_'
//   }
// }))

import {mapState} from 'vuex'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

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
      //this.$socket.emit("logMe", { nombreUsuario: "User4"});
    }
  } ,
  computed:{
    ...mapState(['perfil'])
  }
}).$mount('#app')
