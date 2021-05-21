<template>
    <div align="center">

        <div class="container mt-5" id="sign_in">
            <h1>{{ $t('boton.registrarse') }}</h1>
            <p></p>

            <div class="input-group mb-3 mt-5">
                <span class="input-group-text" id="basic-addon1">></span>
                <input type="text" class="form-control" v-bind:placeholder="$t('placeHolder.nombre')" v-model="nombre" v-on:keyup.enter="registrarse">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" v-bind:placeholder="$t('placeHolder.correo')" v-model="correo" v-on:keyup.enter="registrarse">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">#</span>
                <input type="password" class="form-control" v-bind:placeholder="$t('placeHolder.contrasenya')" v-model="contrasena" v-on:keyup.enter="registrarse" required>
            </div>

            <div class="input-group has-validation mb-3">
                <span class="input-group-text" id="basic-addon1">#</span>
                <input type="password" class="form-control" v-bind:placeholder="$t('placeHolder.repcontrasenya')" v-model="rep_contrasena" v-on:keyup.enter="registrarse" required>
                
            </div>

            <div class="input-group mt-3 mb-3">
                {{ $t('mensaje.yaTienesCuenta') }} <router-link class="mr-4" to="Login"> {{ $t('mensaje.identificate') }}</router-link>
            </div>

            <button class="btn btn-primary" @click="registrarse"> {{ $t('boton.registrarse') }}</button>

            <!-- Enviando datos... -->
            <div v-if=enviando class="alert alert-warning" role="alert">
                {{ $t('mensaje.enviando') }}
            </div>

            <!-- Mensaje de error -->
            <div class="mt-3">
                <div v-if=errorContrasenyas class="alert alert-danger" role="alert">
                    {{ $t('mensaje.noCoincidenContrasenya') }} 
                </div>

                <div v-if=errorExisten class="alert alert-danger" role="alert">
                    {{ $t('mensaje.errorExisten') }} 
                </div>
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
import {mapState,mapMutations} from 'vuex'
import { i18n } from '@/plugins/i18n'

export default {
  name: 'Signin',
  components: {
    //Cabecera
  },
  data() {
        return{ 
            titulo: 'Sign up',
            nombre: '',
            correo: '',
            contrasena: '',
            rep_contrasena: '',
            token: '',
            errorContrasenyas: false,
            errorExisten: false,
            enviando: false
        }
  },
  created: function() {
    i18n.locale = this.configuracion.idioma;  

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
            this.errorContrasenyas = true;
            
        }else{
            this.enviando = true
            this.contDif = false
            let dir = this.host + '/signin'
            let conHash = await this.digestMessage(this.contrasena); //Hasheamos la contraseña
            let ret = axios
            .post(dir, {
                email: this.correo,
                nombreUsuario: this.nombre,
                contrasena: conHash
            })
            .then(resp => {
                this.enviando = false
                //Registro correcto
                //console.log("Voy a meter el token " + resp.data.accessToken)
                this.setToken(resp.data.accessToken)
                const nombreRecibido = resp.data.nombreUsuario
                this.setNombreUsuario(nombreRecibido)
                
                //const tok = this.$store.getters.getToken  //!!!Conseguir el token introducido 
                this.$socket.emit("logMe", { nombreUsuario: nombreRecibido});
                console.log(this.perfil.nombreUsuario)
                this.$socket.emit("getIntoAllGames", { nombreUsuario: this.perfil.nombreUsuario});
                //console.log(tok)
                this.$router.push('Tutorial'); //Vamos al inicio con el usuario identificado
                })
            .catch(error => {
                this.enviando = false
                //Error al hacer signin
                console.log(error)
                this.errorExisten = true;
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
      'setToken','setNombreUsuario'
    ]),
    changeLanguage(locale) {
      this.configuracion.idioma = locale;
      i18n.locale = locale

    }

  },
  computed:{
      ...mapState(['host','configuracion','perfil'])
  }
}
</script>
