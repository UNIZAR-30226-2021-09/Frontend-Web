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

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a v-if="perfil.token === ''" class="navbar-brand" href="/">Batalla Naval</a>
        <a v-if="perfil.token != ''" class="navbar-brand" href="/inicio">Batalla Naval</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li v-if="perfil.token === ''" class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li v-if="perfil.token === ''" class="nav-item">
              <a class="nav-link" href="/login">Log-in</a>
            </li>
            <li v-if="perfil.token === ''" class="nav-item">
              <a class="nav-link" href="/signin">Sign-in</a>
            </li>
            <li v-if="perfil.token != ''" class="nav-item">
              <a class="nav-link" href="/inicio">Inicio</a>
            </li>
            <li v-if="perfil.token != ''" class="nav-item">
              <a class="nav-link" href="/ciegas">Ciegas</a>
            </li>
            <li v-if="perfil.token != ''" class="nav-item">
              <a class="nav-link" href="/perfil" @click="cambiarBuscado()">Perfil</a>
            </li>
            <li v-if="perfil.token != ''" class="nav-item">
              <a class="nav-link" href="/agregarAmigo">Agregar</a>
            </li>
            <li v-if="perfil.token != ''" class="nav-item">
              <a class="nav-link" href="/desafiar">Desafiar</a>
            </li>
            <li v-if="perfil.token != ''" class="nav-item">
              <a class="nav-link" href="/amigoDesafiado">Desafiado</a>
            </li>
            <li v-if="perfil.token != ''" class="nav-item">
              <a class="nav-link" href="/partida">Partida</a>
            </li>
            <li v-if="perfil.token != ''" class="nav-item">
              <a class="nav-link" href="/clasificacion" @click="cambiarBuscado()">Clasificacion</a>
            </li>
            <li v-if="perfil.token != ''" class="nav-item">
              <a class="nav-link" href="/partidasEnCurso">Partidas en curso <span style="background-color: coral;" class="badge">{{numTeToca}}</span> </a>
            </li>
          
          <!-- <li class="nav-item">
            <a class="nav-link" href="/AmigoDesafiado" to="Inicio">inicio?</a>
          </li> -->
          

          </ul>
          <button v-if="perfil.token != ''" class=" btn centered btn-danger d-flex" @click="cerrarSesion" type="submit">Cerrar sesión</button>
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

      //cada 5 segundos se ejecutara esto para actualizar las partidas en curso y el numero de notificacion de la cabecera
            let dir = this.host + '/game/inProgress'
            axios
            .post(dir, {
                nombreUsuario: this.perfil.nombreUsuario,
                accessToken: this.perfil.token
            })
            .then(resp => {
                //Petición enviada correctamente
                this.setPartidas(resp.data);
                this.numTeToca = resp.data.filter(partida => partida.turno == this.perfil.nombreUsuario ).length;
            })
            .catch(error => {
            //Error al enviar la petición
              console.log(error.response)
            });
  },
  methods: {
      ...mapMutations([
      'setUsuarioBuscado','resetToken','setPartidas']),

      cerrarSesion: function(){
        this.resetToken()
        this.$router.push('/');
      },

      cambiarBuscado: function(){
          //this.setUsuarioBuscado(this.perfil.nombreUsuario);
          this.setUsuarioBuscado(this.perfil.nombreUsuario);
      } 
    },
  computed: {
    ...mapState(['perfil','usuarioBuscado','host']), //Para recoger los datos de la lista de amigos que están almacenados en el store
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