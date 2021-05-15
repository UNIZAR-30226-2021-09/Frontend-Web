<template>
    <div align="center" class="container mt-5" id="app">
      <h1>{{ $t('boton.iniciarSesion') }}</h1>
      
      <p></p>

      <div class="input-group mb-3 mt-5">
        <span class="input-group-text" id="basic-addon1">></span>
        <input type="text" class="form-control" v-bind:placeholder="$t('placeHolder.nombre')" v-model="nombre" v-on:keyup.enter="enviarDatos">
      </div>

      <!-- <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">@</span>
        <input type="text" class="form-control" placeholder="Correo" v-model="correo" v-on:keyup.enter="enviarDatos">
      </div> -->

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">#</span>
        <input type="password" class="form-control" v-bind:placeholder="$t('placeHolder.contrasenya')" v-model="contrasena" v-on:keyup.enter="enviarDatos">
      </div>
      
      <div class="input-group mt-3 mb-3">
        {{ $t('mensaje.noTienesCuenta') }} <router-link to="Signin">{{ $t('mensaje.registrate') }}</router-link>
      </div>

      <button class="btn btn-primary" @click="enviarDatos">Enviar</button>

      <!-- Mensaje de éxito -->
      <div class="mt-3">
        <div v-if=esEnviado role="alert" :class="['alert', 'alert-success']">
          {{ $t('mensaje.enviado') }}
        </div>
      </div>

      <!-- Enviando datos... -->
      <div v-if=enviando class="alert alert-warning" role="alert">
        {{ $t('mensaje.enviando') }}
      </div>
      
      <!-- Mensaje de correo erróneo -->
      <div class="mt-3">
        <div v-if=invalido class="alert alert-danger" role="alert">
          {{ $t('mensaje.noCoinciden') }}       
        </div>
      </div>

      <br> <br>
            <h5 style="display:inline" class=" btn dropdown-toggle nav-item" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{ $t('boton.idioma') }} </h5>
                  <ul class="dropdown-menu list-group-flush">

                          <li class="list-group-item bg-secundary" bg>
                              <a class="dropdown-item" @click="changeLanguage('es')" > Español</a>
                              <a class="dropdown-item" @click="changeLanguage('en')"> Ingles</a>
                          </li>
                          
                  </ul>
                  <br>

    </div>
</template>

#######################################SCRIPT#######################################
<script>
import axios from 'axios'
import {mapState,mapMutations} from 'vuex';
import { i18n } from '@/plugins/i18n'

export default {
  name: 'Login',
  components: {
    //Cabecera
  },
  data() {
        return{ 
          titulo: 'Log in',
          nombre: '',
          contrasena: '',
          esEnviado: false,
          invalido: false,
          enviando: false
        }
  },
  methods: {
    ...mapMutations(['setNombreUsuario','setEmail','setAmigos','setEntrantes','setSalientes','setToken','setHistorial','setPartidas','imprimePerfil','setUsuarioBuscado']),
    
    digestMessage: async function(message) {
        const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
        const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
        return hashHex;
    },
    enviarDatos: async function(){
      this.invalido = false
      this.enviando = true
      // console.log(this.host)
      let dir = this.host + '/login'
      let conHash = await this.digestMessage(this.contrasena); //Hasheamos la contraseña
      axios
      .post(dir, {
          nombreUsuario: this.nombre,
          contrasena: conHash
      })
      .then(resp => {
        //Login correcto
        //console.log("Voy a meter el token " + resp.data.accessToken)
        this.enviando = false
        
        this.setNombreUsuario(resp.data.nombreUsuario);
        this.setEmail(resp.data.email);
        //this.setAmigos(resp.data.amigos);
        this.setEntrantes(resp.data.solicitudesEntrantes);
        this.setSalientes(resp.data.solicitudesSalientes);
        this.setToken(resp.data.accessToken);
          console.log('token ' + resp.data.accessToken);
        this.setHistorial(resp.data.historial);
        this.setUsuarioBuscado(resp.data.nombreUsuario);
        this.$socket.emit("logMe", { nombreUsuario: this.perfil.nombreUsuario});
        //Faltaría actualizar los puntos del usuario y sus partidas actuales (?) 

        this.imprimePerfil()

        console.log('perfil es ' + this.perfil);

//        const tok = this.$store.getters.getToken  //!!!Conseguir el token introducido 
//        console.log(tok)

        this.$router.push('Inicio'); //Vamos al inicio con el usuario identificado
        })
        
      .catch(error => {
        console.log("ERROR")
        this.enviando = false
        //Error al hacer login
        console.log(error)
        this.invalido = true;
        this.esEnviado = false;
        });


      this.nombre = ""
      this.contrasena = ""

    },

    changeLanguage(locale) {
      i18n.locale = locale

    }
  },
  computed:{
      ...mapState(['host','perfil']),
  }
}
</script>