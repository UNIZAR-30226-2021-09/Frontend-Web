<template>
    <div align="center">

        <div class="container mt-5" id="sign_in">
            <h1>{{titulo}}</h1>
            <p></p>

            <div class="input-group mb-3 mt-5">
                <span class="input-group-text" id="basic-addon1">></span>
                <input type="text" class="form-control" placeholder="Nombre de usuario" v-model="nombre" v-on:keyup.enter="registrarse">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="Correo" v-model="correo" v-on:keyup.enter="registrarse">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">#</span>
                <input type="password" class="form-control" placeholder="Contraseña" v-model="contrasena" v-on:keyup.enter="registrarse">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">#</span>
                <input type="password" class="form-control" placeholder="Repetir Contraseña" v-model="rep_contrasena" v-on:keyup.enter="registrarse">
            </div>

            <div class="input-group mt-3 mb-3">
                ¿Ya tienes una cuenta? <router-link class="mr-4" to="Login">¡Identifícate!</router-link>
            </div>

            <button class="btn btn-primary" @click="registrarse">Registrarse</button>

            <!-- Mensaje de error -->
            <div class="mt-3">
                <div v-if=error class="alert alert-danger" role="alert">
                {{errorMSG}}
                </div>
            </div>

            <p>{{respuesta}}</p>
            
        </div>
    </div>
</template>


#######################################SCRIPT#######################################
<script>
import axios from 'axios'
import {mapState,mapMutations} from 'vuex'

export default {
  name: 'Signin',
  components: {
    //Cabecera
  },
  data() {
        return{ 
            titulo: 'Sign in',
            nombre: '',
            correo: '',
            contrasena: '',
            rep_contrasena: '',
            respuesta: '',
            token: '',
            error: false,
            errorMSG: ''
        }
  },
  methods:{
    digestMessage: async function(message) {
        const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
        const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
        return hashHex;
    },
    registrarse: async function(){
        if (this.contrasena != this.rep_contrasena){
            this.error = true;
            this.errorMSG = "Las contraseñas no coinciden"
            
        }else{
            this.contDif = false;
            let dir = this.host + '/signin'
            let conHash = await this.digestMessage(this.contrasena); //Hasheamos la contraseña
            let ret = axios
            .post(dir, {
                email: this.correo,
                nombreUsuario: this.nombre,
                contrasena: conHash
            })
            .then(resp => {
                //Registro correcto
                console.log("Voy a meter el token " + resp.data.accessToken)
                this.setToken(resp.data.accessToken)
                
                const tok = this.$store.getters.getToken  //!!!Conseguir el token introducido 
                console.log(tok)
                this.$router.push('Inicio'); //Vamos al inicio con el usuario identificado
                })
            .catch(error => {
                //Error al hacer signin
                console.log(error)
                this.error = true;
                this.errorMSG = "El usuario o el correo ya existen"
                
                });

            console.log(ret)
        }

        this.correo = ""
        this.nombre = ""
        this.contrasena = ""
        this.rep_contrasena = ""
    },
    ...mapMutations([
      'setToken'
    ])

  },
  computed:{
      ...mapState(['host'])
  }
}
</script>
