<template>
    <div align="center" class="container mt-5" id="app">
      
      <p></p>

      <div class="mt-5"> 
         <div class="row g-3">
            <div class="col-sm-9">
                
                <h2>{{nombreApp}}</h2>
                
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
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="4000">
                      <router-link to="ciegas"><img src="@/assets/logo.png" class="d-block w-50" alt="@/assets/logo.png"></router-link>
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Partida a Ciegas</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                      </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="4000">
                      <router-link to="desafiar"><img src="@/assets/logo.png" class="d-block w-50" alt="@/assets/logo.png" ></router-link>
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Desafiar a un amigo</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                      </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="4000">
                      <router-link to="torneo"><img src="@/assets/logo.png" class="d-block w-50" alt="@/assets/logo.png" ></router-link>
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Modo torneo</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                      </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="4000">
                      <router-link to="pendientes"><img src="@/assets/logo.png" class="d-block w-50" alt="@/assets/logo.png" ></router-link>
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Partidas en curso</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <router-link to="partida"><img src="@/assets/logo.png" class="d-block w-50" alt="@/assets/logo.png" ></router-link>
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Partida contra la IA</h5>
                        <p>Some representative placeholder content for the third slide.</p>
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
import {mapState} from 'vuex'

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
    ...mapState(['perfil'])
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
    
  }

}
</script>