<template>
    <div align="center" class="container mt-5" id="app">
      
      <p></p>

      <div class="mt-5"> 
         <div >
            <div >
                
                <h2>{{ $t('tutorial.tutorial') }} </h2>
                <br>

                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7" aria-label="Slide 8"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="8" aria-label="Slide 9"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="9" aria-label="Slide 10"></button>
                    
                  </div>
                  <div class="carousel-inner h-50" style="min-height: 600px;">

                    <!-- Barra de Navegación -->
                    <div class="carousel-item active" data-bs-interval="4000" >
                      <img src="@/assets/imagenesTutorial/barraNavegacion.png" width="900" height="550" class="d-block" alt="@/assets/logo.png">
                      <div class="carousel-caption d-none d-md-block bg-light rounded-pill border border-primary">
                        <p>{{ $t('tutorial.scroll1') }}</p>
                      </div>
                    </div>

                    <!-- Modos de juego -->
                    <div class="carousel-item" data-bs-interval="4000">
                      <img src="@/assets/imagenesTutorial/modosJuego.png" width="900" height="600" class="d-block" alt="@/assets/logo.png" >
                      <div class="carousel-caption d-none d-md-block bg-light rounded-pill border border-primary">
                        <p>{{ $t('tutorial.scroll2') }}</p>
                      </div>
                    </div>

                    <!-- Partida a ciegas -->
                    <div class="carousel-item" data-bs-interval="4000">
                      <img src="@/assets/imagenesTutorial/contrincanteAleatorio.png" width="900" height="600" class="d-block" alt="@/assets/logo.png" >
                      <div class="carousel-caption d-none d-md-block bg-light rounded-pill border border-primary">
                        <p>{{ $t('tutorial.scroll3') }}</p>
                      </div>
                    </div>

                    <!-- Desafiar a un amigo -->
                    <div class="carousel-item" data-bs-interval="4000">
                      <img src="@/assets/imagenesTutorial/partidaAmistosa.png" width="900" height="600" class="d-block" alt="@/assets/logo.png" >
                      <div class="carousel-caption d-none d-md-block bg-light rounded-pill border border-primary">
                        <p>{{ $t('tutorial.scroll4') }}</p>
                      </div>
                    </div>

                    <!-- Modo torneo -->
                    <div class="carousel-item" data-bs-interval="4000">
                      <img src="@/assets/imagenesTutorial/creaTorneo.png" width="900" height="600" class="d-block" alt="@/assets/logo.png" >
                      <div class="carousel-caption d-none d-md-block bg-light rounded-pill border border-primary">
                        <p>{{ $t('tutorial.scroll5') }}</p>
                      </div>
                    </div>

                    <!-- Partidas en curso -->
                    <div class="carousel-item" data-bs-interval="4000">
                      <img src="@/assets/imagenesTutorial/listaPartidas.png" width="900" height="550" class="d-block" alt="@/assets/logo.png" >
                      <div class="carousel-caption d-none d-md-block bg-light rounded-pill border border-primary">
                        <p>{{ $t('tutorial.scroll6') }}</p>
                      </div>
                    </div>

                    <!-- Lista de amigos -->
                    <div class="carousel-item" data-bs-interval="4000">
                      <img src="@/assets/imagenesTutorial/listaAmigos.png" width="900" height="550" class="d-block" alt="@/assets/logo.png" >
                      <div class="carousel-caption d-none d-md-block bg-light rounded-pill border border-primary">
                        <p>{{ $t('tutorial.scroll7') }}</p>
                      </div>
                    </div>

                    <!-- Clasificación  -->
                    <div class="carousel-item" data-bs-interval="4000">
                      <img src="@/assets/imagenesTutorial/perfil.png" width="900" height="550" class="d-block" alt="@/assets/logo.png" >
                      <div class="carousel-caption d-none d-md-block bg-light rounded-pill border border-primary">
                        <p>{{ $t('tutorial.scroll8') }}</p>
                      </div>
                    </div>

                    <!-- Configuración  -->
                    <div class="carousel-item" data-bs-interval="4000">
                      <img src="@/assets/imagenesTutorial/pestanaConfig.png" width="900" height="400" class="d-block" alt="@/assets/logo.png" >
                      <div class="carousel-caption d-none d-md-block bg-light rounded-pill border border-primary">
                        <p>{{ $t('tutorial.scroll9') }}</p>
                      </div>
                    </div>

                    <!-- Pantalla de partida -->
                    <div class="carousel-item h-50">
                      <img src="@/assets/imagenesTutorial/partida.png" width="900" height="500" class="d-block" alt="@/assets/logo.png" >
                      <div class="carousel-caption d-none d-md-block bg-light rounded-pill border border-primary">
                        <p>{{ $t('tutorial.scroll10') }}</p>
                        <router-link to="inicio" class="link-primary" >
                          <p > 
                            {{ $t('tutorial.irInicio') }}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 18">
                              <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                              <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                            </svg>
                          </p>
                        </router-link>
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

              <router-link to="inicio" class="link-secondary" style="margin-right:20px" >
                <h4 class="mt-4" style="float: right; margin-right:20px">
                  {{ $t('tutorial.saltarTutorial') }}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-skip-forward-fill" viewBox="0 0 16 18">
                    <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.753l-6.267 3.636c-.54.313-1.233-.066-1.233-.697v-2.94l-6.267 3.636C.693 12.703 0 12.324 0 11.693V4.308c0-.63.693-1.01 1.233-.696L7.5 7.248v-2.94c0-.63.693-1.01 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                </h4>
              </router-link>

              

            </div>

            <!-- <ListaAmigos/> -->
        </div>
    
      </div>

    </div>
</template>

#######################################SCRIPT#######################################
<script>
// import ListaAmigos from '@/components/ListaAmigos.vue'
import {mapState} from 'vuex'
import { i18n } from '../plugins/i18n' 

export default {
  name: 'Tutorial',
  components: {
    // ListaAmigos
  },
  data() {
        return{ 
          nombreApp: 'Tutorial',
          nombre: '',
          correo: '',
          contrasena: '',
          esEnviado: false,
          correoInvalido: false
        }
  },
  computed:{
    ...mapState(['perfil','configuracion'])
  },
  // methods: {
  //     enviarDatos: function(){
  //   }

  // },
  
  created: function() {
    // if (this.perfil.token != ''){
    //   this.$router.push('login');
    // }else{
    //   this.$socket.emit("logMe", { nombreUsuario: "User4"});
    // }
    i18n.locale = this.configuracion.idioma;  
  }

}
</script>