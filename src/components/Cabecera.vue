<template>
  <div>
    <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-primary w-100 p-3">
      <a class="navbar-brand" href="/">Batalla Naval</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="login">Log-in</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="signin">Sign-in</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="inicio">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="ciegas">Ciegas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="perfil">Perfil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="agregarAmigo">Agregar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="desafiar">Desafiar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="amigoDesafiado">Desafiado</a>
          </li>        

        </ul>
      </div>
    </nav> -->
    <br>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary" style="border-radius: 20px; margin-left: 50px; margin-right: 50px;">
      <div class="container-fluid" style="margin-left: 30px; margin-right: 30px;">
        <router-link v-if="perfil.token === ''" :to="{ path: '/'}"  class="navbar-brand">Batalla Naval</router-link>
        <router-link v-else :to="{ path: '/Inicio'}"  class="navbar-brand">Batalla Naval</router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li v-if="perfil.token === ''" class="nav-item">
              <router-link to="/"  class="nav-link">{{ $t('boton.inicio') }}</router-link>
            </li>
            <li v-if="perfil.token === ''" class="nav-item">
              <router-link to="Login"  class="nav-link">{{ $t('boton.iniciarSesion') }}</router-link>
            </li>
            <li v-if="perfil.token === ''" class="nav-item">
              <router-link to="Signin"  class="nav-link">{{ $t('boton.registrarse') }}</router-link>
            </li>
            <li v-if="perfil.token != ''" class="nav-item">
              <router-link :to="{ path: '/Inicio'}"   class="nav-link">{{ $t('boton.inicio') }}</router-link>
            </li>
            <li v-if="perfil.token != ''" class="nav-item">
              <p  @click="buscarPartidaIA" style="cursor: pointer" class="nav-link">{{ $t('navbar.nuevaPartida') }}</p>
            </li>
            <li v-if="perfil.token != ''" class="nav-item">
              <router-link :to="{ path: '/Ciegas'}" class="nav-link">{{ $t('navbar.partidaCiegas') }}</router-link>
            </li>
            <li v-if="perfil.token != ''" class="nav-item">
              <router-link :to="{ path: '/Desafiar'}" class="nav-link">{{ $t('navbar.desafiarAmigo') }}</router-link>
            </li>
            <li v-if="perfil.token != ''" class="nav-item">
              <router-link :to="{ path: '/Torneo'}"  class="nav-link">{{ $t('navbar.torneo') }}</router-link>
            </li>
            <li v-if="perfil.token != ''" class="nav-item">
              <router-link :to="{ path: '/partidasEnCurso'}" class="nav-link">{{ $t('navbar.partidasEnCurso') }}<span style="background-color: coral;" class="badge">{{numNotificaciones}}</span></router-link>
            </li>

            <li v-if="perfil.token != ''" class="nav-item" >
              <router-link :to="{ name: 'Perfil', params: {usuario: perfil.nombreUsuario} }"  class="nav-link" >{{ $t('navbar.perfil') }}  </router-link>
            </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="/AmigoDesafiado" to="Inicio">inicio?</a>
          </li> -->
          

          </ul>
          <button v-if="perfil.token != ''" class=" btn centered btn-danger d-flex" @click="cerrarSesion" type="submit">{{ $t('navbar.cerrarSesion') }}</button>
        </div>
      </div>
    </nav>



  </div>
</template>

<script>
//import ListaAmigos from '@/components/ListaAmigos.vue'
import {mapState,mapMutations} from 'vuex';
import axios from 'axios'
export default {
  name: 'Cabecera',
  components: {
    //ListaAmigos
  },
  data() {
        return{ 
          nombrePag: 'Partidas en curso',
          numTeToca: 0
        }
  },
  created: function(){

  },
  methods: {
      ...mapMutations([
      'setUsuarioBuscado','resetToken','setPartidas','imprimePerfil','setPerfilUndefined','setPartidaActual','setContrincanteActual','setTurnoActual']),

      cerrarSesion: function(){
        this.setPartidas([]);
        this.resetToken()
        this.$router.push('/');
      },
      buscarPartidaIA: function(){
        let dir = this.host + '/game/ia'
        axios
        .post(dir, {
            nombreUsuario: this.perfil.nombreUsuario,
            accessToken: this.perfil.token
        })
        .then(resp => {
          //Partida contra IA creada
          console.log(resp)
          this.setPartidaActual(resp.data._id)
          this.setContrincanteActual(resp.data.participante2)
          this.setTurnoActual("ColocandoBarcos")
          console.log('Vamos a la partida ' + this.partidaActual)
          this.$router.push('/partida');
          
        })
        .catch(error => {
        //Error al enviar la petición
        this.$toasted.show("Ha habido un error creando la partida contra la IA. Inténtalo de nuevo más tarde.", { 
                    theme: "toasted-primary", 
                    position: "bottom-left", 
                    duration : 4000
                  });
        console.log(error)
        });
    
    }

    },
  computed: {
    ...mapState(['perfil','usuarioBuscado','host']), //Para recoger los datos de la lista de amigos que están almacenados en el store

    numNotificaciones: function () {
      // `this` points to the vm instance
      if(this.perfil.partidasEnCurso.mensaje != "Token no proveído."){
        //TODO: HAY QUE ACTUALIZAR DINÁMICAMENTE EL GLOBITO
          //console.log(this.perfil.partidasEnCurso.mensaje);
          return this.perfil.partidasEnCurso.filter( partida =>partida.tuTurno == 'TuTurno' || partida.tuTurno == 'ColocandoBarcos' ).length;
      }
      return 0;
    }
  },
  mounted(){

          let dir = this.host + '/game/inProgress'  
                console.log(this.perfil);
                if (this.perfil != undefined ){

                    axios
                    .post(dir, {
                        nombreUsuario: this.perfil.nombreUsuario,
                        accessToken: this.perfil.token
                    })
                    .then(resp => {
                        this.setPartidas(resp.data);
                      })

                    .catch(error => {
                      //Error al hacer login
                      console.log(error)
                      this.$toasted.show("Error", { 
                        theme: "toasted-primary", 
                        position: "bottom-left", 
                        duration : 10000
                      });
                      });
                }
  },
}
</script>

<style>
span.red {
  background: red;
   border-radius: 0.8em;
  -moz-border-radius: 0.8em;
  -webkit-border-radius: 0.8em;
  color: #ffffff;
  display: inline-block;
  font-weight: bold;
  line-height: 1.6em;
  margin-right: 15px;
  text-align: center;
  width: 1.6em; 
}

</style>