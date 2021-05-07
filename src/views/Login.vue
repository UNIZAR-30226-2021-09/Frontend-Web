<template>
    <div align="center" class="container mt-5" id="app">
      <h1>{{titulo}}</h1>
      
      <p></p>

      <div class="input-group mb-3 mt-5">
        <span class="input-group-text" id="basic-addon1">></span>
        <input type="text" class="form-control" placeholder="Nombre de usuario" v-model="nombre" v-on:keyup.enter="enviarDatos">
      </div>

      <!-- <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">@</span>
        <input type="text" class="form-control" placeholder="Correo" v-model="correo" v-on:keyup.enter="enviarDatos">
      </div> -->

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">#</span>
        <input type="password" class="form-control" placeholder="Contraseña" v-model="contrasena" v-on:keyup.enter="enviarDatos">
      </div>
      
      <div class="input-group mt-3 mb-3">
        ¿No tienes cuenta? <router-link to="Signin">¡Regístrate!</router-link>
      </div>

      <button class="btn btn-primary" @click="enviarDatos">Enviar</button>

      <!-- Mensaje de éxito -->
      <div class="mt-3">
        <div v-if=esEnviado role="alert" :class="['alert', 'alert-success']">
          Enviado!
        </div>
      </div>

      <!-- Enviando datos... -->
      <div v-if=enviando class="alert alert-warning" role="alert">
        Enviando datos...
      </div>
      
      <!-- Mensaje de correo erróneo -->
      <div class="mt-3">
        <div v-if=invalido class="alert alert-danger" role="alert">
          El usuario y la contraseña no coinciden.
        </div>
      </div>

    </div>
</template>

#######################################SCRIPT#######################################
<script>
import axios from 'axios'
import {mapState,mapMutations} from 'vuex';

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

    }

  },
  computed:{
      ...mapState(['host','perfil']),
  }
}
</script>