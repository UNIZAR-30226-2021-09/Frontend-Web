import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Toasted from 'vue-toasted';
import SocketIO from "socket.io-client";
import VueSocketIO from 'vue-socket.io';
import { i18n } from '@/plugins/i18n'
import VueClipboard from 'vue-clipboard2';

import {mapState, mapMutations} from 'vuex'


Vue.use(Toasted)
Vue.use(VueClipboard);

const options = { withCredentials: false };

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('https://proyecto-software-09.herokuapp.com', options)
}));

Vue.use(VueAxios, axios)
Vue.config.productionTip = false



new Vue({
  el: '#app',
  i18n,
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
      console.log('El nombre de usuario es ' + this.perfil.nombreUsuario)
      this.$socket.emit("logMe", { nombreUsuario: this.perfil.nombreUsuario});
      //TODO: Hay que hacer emit de getIntoAllGames
    }
  } ,
  sockets:{
    llegaInvitacion: function (){
      if (this.perfil.token != ''){
        //this.host me sale undefined
      let dir = this.host + '/user/incomingRequests';
      console.log(dir);
      axios
      .post(dir, {
          nombreUsuario: this.perfil.nombreUsuario,
          accessToken: this.perfil.token
      })
      .then(resp => {
      //Petición enviada correctamente
      console.log("Petición enviada. Respuesta: " + resp.data);
      this.setEntrantes(resp.data);
      console.log(this.perfil.peticionesRecibidas);
      })
      .catch(error => {
      //Error al enviar la petición
      console.log(error.response.request.response)
      });
      }
    },
    llegaAceptarInvitacionAmigo: function (){
      if (this.perfil.token != ''){
        //this.host me sale undefined
      let dir = this.host + '/user/friendList';
      console.log(dir);
      axios
      .post(dir, {
          nombreUsuario: this.perfil.nombreUsuario,
          accessToken: this.perfil.token
      })
      .then(resp => {
      //Petición enviada correctamente
      this.setAmigos(resp.data)
      })
      .catch(error => {
      //Error al enviar la petición
      console.log(error.response.request.response)
      this.$toasted.show("Error", { 
        theme: "toasted-primary", 
        position: "bottom-left", 
        duration : 10000
      });
      })

      //Actualizo la lista de salientes
      dir = this.host + '/user/outgoingRequests'
      axios
      .post(dir, {
          nombreUsuario: this.perfil.nombreUsuario,
          accessToken: this.perfil.token
      })
      .then(resp => {
      //Petición enviada correctamente
      this.setSalientes(resp.data)
      })
      .catch(error => {
      //Error al enviar la petición
        console.log(error.response.request.response)
        this.$toasted.show("Error", { 
          theme: "toasted-primary", 
          position: "bottom-left", 
          duration : 10000
        });
      })

      }
    },
    llegaChallenge: function (){
      console.log("llegachallenge")
      if (this.perfil.token != ''){
        //this.host me sale undefined
        let dir = this.host + '/game/incomingRequests'
        axios
        .post(dir, {
            nombreUsuario: this.perfil.nombreUsuario,
            accessToken: this.perfil.token
        })
        .then(resp => {
        //Petición enviada correctamente
          this.setDesafios(resp.data)
        })
        .catch(error => {
        //Error al enviar la petición
          console.log(error)
        });
      }
    },
    llegaAceptarChallenge: function (gameid){
      //TODO: Aquí tenemos que actualizar la lista de partidas en curso
      console.log("llegaAceptarChallenge")
      this.$socket.emit("joinGame", gameid);
      console.log("join game")
    },
    
  },
  computed:{
    ...mapState(['perfil', 'host'])
  },
  methods:{
    ...mapMutations(['setEntrantes','setAmigos', 'setSalientes', 'setDesafios']),
  }
}).$mount('#app')
