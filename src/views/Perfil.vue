<template>
    <div align="center" class="container mt-5" id="app">
      
      <p></p>

      <div class="mt-5"> 
         <div class="row g-3">           
            <div class="col-sm-9 ">

           <!-- Contenido de la pantalla -->
                <h1>{{ $t('navbar.perfil') }}: {{nombre}}</h1>
                
                <div class="text-start">

                  <h5 class="mt-4">
                    {{ $t('placeHolder.nombre') }}: {{nombre}} </h5>

                  <h5 v-if="perfil.token != ''" class="mt-4">
                    Email: {{email}} </h5>

                  <h5 class="mt-4">
                    {{ $t('perfil.partidasJugadas') }}: {{ganadas + perdidas}}
                    <p  class="fw-lighter" style="margin-top: 10px; margin-left: 100px;">{{ $t('perfil.ganadas') }}: {{ganadas}}</p>
                    <p  class="fw-lighter" style="margin-top: 10px; margin-left: 100px;">{{ $t('perfil.perdidas') }}: {{perdidas}}</p>
                    <p  class="fw-lighter" style="margin-top: 10px; margin-left: 100px;">{{ $t('perfil.torneos') }}: {{torneos}}</p>
                    <p  class="fw-lighter" v-if="ganadas+perdidas == 0" style="margin-top: 10px; margin-left: 100px;">{{ $t('perfil.partidasJugadas') }}: {{ $t('perfil.noExisten') }}</p>
                    <p  class="fw-lighter" v-else style="margin-top: 10px; margin-left: 100px;">{{ $t('perfil.partidasJugadas') }}: {{ganadas / perdidas}}</p>
                    <p  class="fw-lighter" style="margin-top: 10px; margin-left: 100px;">{{ $t('perfil.puntos') }}: {{puntos}}</p>
                  </h5>

                  <h5 v-if="perfil.token != ''" class="mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-award-fill" viewBox="0 0 16 16">
                      <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
                      <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                    </svg>
                    <router-link :to="{ name: 'Clasificacion', params: {usuario: nombre} }" class="btn btn-primary btn-sm mb-1" type="button" >{{ $t('boton.verClasificacion') }}</router-link></h5>

                </div>

                

                
                <br> 

                <div v-if="nombre == perfil.nombreUsuario && perfil.token != ''" class="row" >    
                      
                      
                      <button type="button" style="width: 30%;" class="btn btn-secondary" aria-expanded="false"  v-clipboard:copy="direccion" @click="mensajeCopiar">
                        
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-share" viewBox="0 0 16 18">
                              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                          </svg>
                          {{ $t('boton.compartirPerfil') }}
                      </button>
                </div>

                <br>
                <br>

                <p>
                  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    {{ $t('boton.historialPartidas') }}
                  </a>
                  
                </p>
                <div class="collapse" id="collapseExample">
                  <div class="card card-body">

                      <!-- Bucle que recorre todo el historial -->
                      <div v-for="(partida) in perfil.partidas" v-bind:key="partida.codigo">
                        
                        <!-- Si una partida ha sido victoria, se muestra en verde  -->
                        <div v-if="partida.resultado === 'Victoria'">
                          <li class="list-group-item list-group-item-success">
                            {{ $t('partidasCurso.partidaContra1') }} {{partida.contrincante}} 
                            ({{partida.resultado}})
                            <router-link to="perfil" class="btn btn-light btn-sm mb-1 mt-1" type="button" >{{ $t('boton.verPartida') }}</router-link>
                          </li>
                        </div>
                        
                        <!-- Si una partida ha sido derrota, se muestra en rojo -->
                        <div v-if="partida.resultado === 'Derrota'">
                          <li class="list-group-item list-group-item-danger">
                            {{ $t('partidasCurso.partidaContra1') }} {{partida.contrincante}} 
                            ({{partida.resultado}})
                            <router-link to="perfil" class="btn btn-light btn-sm mb-1" type="button" >{{ $t('boton.verPartida') }}</router-link>
                          </li>
                        </div>

                        <!-- Si una partida no ha sido victoria ni derrota, probablemente sea un error y se muestra en naranja -->
                        <div v-if="partida.resultado != 'Derrota' && partida.resultado != 'Victoria' ">
                          <li class="list-group-item list-group-item-warning">
                            Error?
                            {{ $t('partidasCurso.partidaContra1') }} {{partida.contrincante}} 
                            ({{partida.resultado}})
                            <router-link to="perfil" class="btn btn-light btn-sm mb-1" type="button" > {{ $t('boton.verPartida') }}</router-link>
                          </li>
                        </div>
                        

                      </div>
                  </div>
                </div>
              
                <br>
                <router-link v-if="perfil.nombreUsuario == nombre && perfil.token != ''" :to="{ path: '/Tutorial'}"  class="link-secondary" ><h5 class="mt-4">{{ $t('boton.volverTutorial') }}</h5></router-link>

            </div>


            <ListaAmigos/>
        </div>
    
      </div>

    </div>
</template>

#######################################SCRIPT#######################################
<script>
import ListaAmigos from '@/components/ListaAmigos.vue'
import {mapState} from 'vuex';
import axios from 'axios'
import { i18n } from '@/plugins/i18n'

export default {
  name: 'Perfil',
  components: {
    ListaAmigos
  },
  data() {
        return{ 
            nombre: '',
            email: '',
            ganadas: 0,
            perdidas: 0,
            torneos: 0,
            puntos: 0,
        }
  },
  created: function(){

          console.log('La ruta es:');
          console.log(window.location.href );
          i18n.locale = this.configuracion.idioma;

          let dir = this.host + '/profile';

          axios
          .post(dir, {
              nombreUsuario: this.usuario
          })
          .then(resp => {
              
              this.nombre = resp.data.nombreUsuario;
              this.email = resp.data.email; //nos lo tienen que mandar
              this.ganadas = resp.data.partidasGanadas;
              this.perdidas = resp.data.partidasPerdidas;
              this.torneos = resp.data.torneosGanados;
              this.puntos = resp.data.puntos;
            })

          .catch(error => {
            //Error al hacer login
            console.log(error.response)
            });
                
  },
  computed:{
      ...mapState(['perfil','host','usuarioBuscado','configuracion']), //Para recoger los datos de la lista de amigos que están almacenados en el store
      usuario: function(){
        return this.$route.params.usuario;
      },

      direccion: function(){

          return window.location.href;
      }
  },
  methods: {
        recargar: function(){
        this.setPartidas([]);
        this.resetToken()
        this.$router.push('/');
      },
      mensajeCopiar: function(){
        let msg = this.$t('perfil.copy')
        this.$toasted.show(msg, { 
              theme: "toasted-primary", 
              position: "bottom-left", 
              duration : 10000
            });
      },
  },
  mounted(){
          console.log("Pues aqui estamos: ");
          console.log(this.usuario);
  },
  updated(){
          console.log("NUEVA CARGA");
  },
   watch: {
    // whenever question changes, this function will run
    usuario: function () {
      console.log(this.usuario)

      let dir = this.host + '/profile';

      axios
      .post(dir, {
          nombreUsuario: this.usuario
      })
      .then(resp => {
          
          this.nombre = resp.data.nombreUsuario;
          this.email = resp.data.email; //nos lo tienen que mandar
          this.ganadas = resp.data.partidasGanadas;
          this.perdidas = resp.data.partidasPerdidas;
          this.torneos = resp.data.torneosGanados;
        })

      .catch(error => {
        //Error al hacer login
        console.log(error.response)
        });
    },
  },
}
</script>

<style >
  li[value="1"]{
  background-color: blue;
}
li[value="2"]{
  background-color: red;
}
input[value="3"]{
  background-color: green;
}
input[value="4"]{
  background-color: yellow;
}
</style>