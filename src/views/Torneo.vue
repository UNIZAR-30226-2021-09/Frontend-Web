<template>
    <div  class="container mt-5" id="app">
      
      <p></p>

      <div class="mt-5" > 
         <div class="row g-3">
            <div class="container col-sm-9 " >
                
                <h2 class="mt-3">{{ $t('navbar.torneo') }}</h2>
                <br>


                <div class="container border rounded border-5 bg-white " >
                    <div class="row g-3">
                      <div class="action col-sm-9">
                            
                            <img  class="img-fluid rounded "  src="@/assets/torneo_cuadricula.png" alt="lava.jpg">
                      </div>

                      <div class=" container col-sm-3 bg-white">
                          <br> <br>

                          <h3> {{ $t('mensaje.participantes') }}: </h3>
                          <br>
                          <div v-for="amigo in this.participantes" v-bind:key="amigo.puesto" style="border-color: green">
                                <p v-if="seleccionado(amigo.nombre) == 1" style="background-color: #e0ecfc; margin: 5px;"> {{amigo.nombre}}</p>
                                <p v-else-if="seleccionado(amigo.nombre) == 2" style="background-color: #d8ecd4; margin: 5px;">{{amigo.nombre}}</p>
                                <p v-else-if="seleccionado(amigo.nombre) == 3" style="background-color: #fff4cc; margin: 5px;">{{amigo.nombre}}</p>
                                <p v-else-if="seleccionado(amigo.nombre) == 4" style="background-color: #f8cccc; margin: 5px;">{{amigo.nombre}}</p>

                          </div>

                          <br>

                          <h3> {{ $t('listaAmigos.amigos') }}: </h3>
                          <br>
                          <div class="overflow-auto p-3 mb-3 mb-md-0 mr-md-3" style="max-width: 260px; max-height: 320px;">
                              <div v-for="amigo in perfil.listaAmigos" v-bind:key="amigo" style="border-color: green">
                                <div v-if="seleccionado(amigo) == 0">
                                  <button class="container btn border border-3 mt-2" style="margin-top: 20px;" role="button" @click="anyadir(amigo)" type="button" >
                                    <p style="margin: 5px;"> {{amigo}}</p>
                                  </button>
                                </div>

                                <div v-else>
                                  <button class="container btn border border-3 mt-2 bg-secondary" style="margin-top: 20px;" role="button" @click="anyadir(amigo)" type="button" disabled >
                                    <p style="margin: 5px;"> {{amigo}}</p>
                                  </button>
                                </div>
                              </div>
                          </div>

                          
                            
                      </div>

                      
                    </div>

                    <button type="button" class="btn btn-outline-secondary" style="margin-right: 30px;" @click="reiniciar()">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                      </svg>
                      {{ $t('boton.reiniciar') }}
                    </button>

                    <button type="button" class="btn btn-outline-secondary" @click="crearTorneo()">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                      </svg>
                      {{ $t('boton.crearTorneo') }}
                    </button>
              
                    <br> <br>
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
import {mapState} from 'vuex';
import axios from 'axios'
import { i18n } from '../plugins/i18n' 

export default {
  name: 'Modotorneo',
  components: {
    ListaAmigos
  },
  data() {
        return{ 
          nombrePag: 'Torneo',
          participantes: [ {puesto: 1, nombre: ''}, {puesto: 2, nombre: ''} , {puesto: 3, nombre: ''} , {puesto: 4, nombre: ''} ],
          siguiente: 1
        }
  },
  created: function(){
        this.participantes[0].nombre = this.perfil.nombreUsuario;
        i18n.locale = this.configuracion.idioma;  
    },
  methods: {
      seleccionado: function(amigo){
        
          if(amigo == this.participantes[0].nombre){
            return 1;
          }
          else if (amigo == this.participantes[1].nombre){
            return 2;
          }
          else if (amigo == this.participantes[2].nombre){
            return 3;
          }
          else if (amigo == this.participantes[3].nombre){
            return 4;
          }
          return 0;
      },
      anyadir: function (amigo) {
        
        if(this.siguiente <= 3 && this.seleccionado(amigo) == 0){
            this.participantes[this.siguiente].nombre = amigo;
            this.siguiente = this.siguiente + 1;
        }
        
      },
      reiniciar: function (){
          this.participantes[1].nombre = '';
          this.participantes[2].nombre = '';
          this.participantes[3].nombre = '';
          this.siguiente = 1;
      },
      crearTorneo: function (){
          console.log('Enviamos las cosas al backend');
          console.log(this.perfil.token);

          let dir = this.host + '/game/torneo';

          axios
          .post(dir, {
              nombreUsuario: this.perfil.nombreUsuario,
              participante2: this.participantes[1].nombre,
              participante3: this.participantes[2].nombre,
              participante4: this.participantes[3].nombre,
              accessToken: this.perfil.token
          })
          .then(resp => {
                console.log(resp)
                this.$socket.emit("joinGame", resp.data.p1);
                this.$socket.emit("aceptarChallenge", {nombreUsuario: resp.data.j2, game: resp.data.p1});
                this.$socket.emit("aceptarChallenge", {nombreUsuario: resp.data.j3, game: resp.data.p2});
                this.$socket.emit("aceptarChallenge", {nombreUsuario: resp.data.j4, game: resp.data.p2});
            })

          .catch(error => {
            //Error al hacer login
            console.log(error.response)
            });
      }

  },
  computed: {
      ...mapState(['perfil','host','configuracion']), //Para recoger los datos de la lista de amigos que están almacenados en el store

  },

}
</script>


<style>
.action {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
}
</style>