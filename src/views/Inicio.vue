<template>
    <div align="center" class="container mt-5" id="app">
      
      <p></p>

      <div class="mt-5"> 
         <div class="row g-3">
            <div class="col-sm-9">
                
                <h2>{{nombreApp}} </h2>
                <br>
                
                <!-- <div class=".container mt-5">
                  <div class="row">
                    <p></p>
                    <div class="col"><router-link to="ciegas" class="btn btn-primary btn-lg ">Partida a ciegas</router-link></div>
                    <div class="col"></div>
                    <div class="col"><router-link to="desafiar" class="btn btn-primary btn-lg ">Desafiar a un amigo</router-link></div>
                  </div>

                  <p></p>

                  <div class="row">
                    <p></p>
                    <div class="col"><router-link to="torneo" class="btn btn-primary btn-lg ">Modo torneo</router-link></div>
                    <div class="col"></div>
                    <div class="col"><router-link to="pendientes" class="btn btn-primary btn-lg ">Partidas en curso</router-link></div>
                  </div>

                  <p></p>

                  <div class="row">
                    <p></p>
                    <div class="col"></div>
                    <div class="col"><router-link to="partida" class="btn btn-primary btn-lg ">Partida contra IA</router-link></div>
                    <div class="col"></div>
                  </div>

                </div> -->

                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                  </div>
                  <div class="carousel-inner h-50">
                    <div class="carousel-item active" data-bs-interval="4000">
                      <button @click="buscarPartidaIA"><img src="@/assets/vs_IA.jpg" width="750" height="550" class="d-block" alt="@/assets/logo.png" ></button>
                      <div class="carousel-caption d-none d-md-block bg-white rounded-pill">
                        <h4>
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cpu" viewBox="0 0 16 16">
                            <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                          </svg>
                          {{ $t('navbar.nuevaPartida') }}
                          </h4>
                        <p>{{ $t('mensaje.explicarPartidaIA') }}</p>
                      </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="4000">
                      <router-link to="ciegas"><img src="@/assets/vs_ciegas.jpg" width="750" height="550" class="d-block" alt="@/assets/logo.png"></router-link>

                      <div class="carousel-caption d-none d-md-block bg-white rounded-pill">
                        <h4>
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                          </svg>
                          {{ $t('navbar.partidaCiegas') }}
                          </h4>
                        <p> {{ $t('mensaje.explicacionCiegas') }}</p>
                      </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="4000">
                      <router-link to="desafiar"><img src="@/assets/vs_amigo.jpeg" width="750" height="550" class="d-block" alt="@/assets/logo.png" ></router-link>
                      <div class="carousel-caption d-none d-md-block bg-white rounded-pill">
                        <h4>
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                          </svg>
                          {{ $t('navbar.desafiarAmigo') }}
                        </h4>
                        <p>{{ $t('mensaje.exlicarDesafiar') }}</p>
                      </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="4000">
                      <router-link to="torneo"><img src="@/assets/vs_torneo.jpg" width="750" height="550" class="d-block" alt="@/assets/logo.png" ></router-link>
                      <div class="carousel-caption d-none d-md-block bg-white rounded-pill">
                        <h4>
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-diagram-3" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
                          </svg>
                          {{ $t('navbar.torneo') }}
                        </h4>
                        <p>{{ $t('mensaje.explicarTorneo') }}</p>
                      </div>
                    </div>
                    <div class="carousel-item h-50" >
                      <router-link to="partidasEnCurso"><img src="@/assets/logo.png" width="750" height="550" class="d-block" alt="@/assets/logo.png" ></router-link>
                      <div class="carousel-caption d-none d-md-block bg-white rounded-pill">
                        <h4>
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                            <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                          </svg>
                          {{ $t('navbar.partidasEnCurso') }}
                          </h4>
                        <p>{{ $t('mensaje.explicarPartidasCurso') }}</p>
                      </div>
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>

            </div>

            <ListaAmigos/>
        </div>
    
      </div>

    </div>
</template>

#######################################SCRIPT#######################################
<script>
import ListaAmigos from '@/components/ListaAmigos.vue'
import {mapState,mapMutations} from 'vuex'
import axios from 'axios'

export default {
  name: 'Inicio',
  components: {
    ListaAmigos
  },
  data() {
        return{ 
          nombreApp: 'Batalla Naval',
          titulo: 'Log in',
          nombre: '',
          correo: '',
          contrasena: '',
          esEnviado: false,
          correoInvalido: false
        }
  },
  computed:{
    ...mapState(['perfil', 'host', 'partidaActual'])
  },
  methods: {
      ...mapMutations(['setPartidaActual', 'setContrincanteActual']),
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
  
  created: function() {
    // if (this.perfil.token != ''){
    //   this.$router.push('login');
    // }else{
    //   this.$socket.emit("logMe", { nombreUsuario: "User4"});
    // }
    //console.log('b');
  }

}
</script>