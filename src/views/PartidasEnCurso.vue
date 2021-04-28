<template>

  <div align="center" class="container mt-5" id="app">

    <div class="mt-5"> 
      
         <div class="row g-3">
           
            <div class="col-sm-9">

                <br>
                <h2 >{{nombrePag}}</h2>
                <br>

                
                <p>
                  <button style="margin:2px;" class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCiegas" aria-expanded="false" aria-controls="collapseExample">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                       <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    Partidas a ciegas <span class="badge">{{teTocaCiegas}}</span>
                  </button>
                  <button style="margin:2px;" class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAmigos" aria-expanded="false" aria-controls="collapseExample">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                       <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                    </svg>
                    Partidas vs amigos <span class="badge">{{teTocaAmigos}}</span>
                  </button>
                  <button style="margin:2px;" class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTorneo" aria-expanded="false" aria-controls="collapseExample">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-diagram-3" viewBox="0 0 16 16">
                       <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
                    </svg>
                    Partidas de torneos <span class="badge">{{teTocaTorneo}}</span>
                  </button>
                  <button style="margin:2px;" class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIA" aria-expanded="false" aria-controls="collapseExample">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cpu" viewBox="0 0 16 16">
                       <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                    </svg>
                    Partidas vs IA <span class="badge">{{teTocaIA}}</span>
                  </button>
                </p>



                <div class="collapse" id="collapseCiegas">
                  <div class="card card-body">
                        <i v-if="numPartidasCiegas!=0">
                          <div v-for="(partida) in partidasCiegas" v-bind:key="partida.id">

                              <br>

                              <div v-if="partida.turno === perfil.nombreUsuario">
                                <li class="list-group-item list-group-item-success">
                                  Partida contra {{partida.contrincante}} 
                                  <router-link to="partida" class="btn btn-light btn-sm mb-1 mt-1" type="button" >Continuar la partida</router-link>
                                </li>
                              </div>

                              <div v-else>
                                <li class="list-group-item list-group-item-warning">
                                  Partida contra {{partida.contrincante}}, esperando a movimiento del contrincante
                                </li>
                              </div>

                          </div>
                        </i>

                        <i v-if="numPartidasCiegas==0">Actualmente no tienes partidas a ciegas en curso.</i>
                      
                  </div>
                </div>


                <div class="collapse" id="collapseAmigos">
                  <div class="card card-body">
                        <i v-if="numPartidasAmigos!=0">
                          <div v-for="(partida) in partidasAmigos" v-bind:key="partida.id">

                              <br>

                              <div v-if="partida.turno === perfil.nombreUsuario">
                                <li class="list-group-item list-group-item-success">
                                  Partida contra {{partida.contrincante}} 
                                  <router-link to="partida" class="btn btn-light btn-sm mb-1 mt-1" type="button" >Continuar la partida</router-link>
                                </li>
                              </div>

                              <div v-else>
                                <li class="list-group-item list-group-item-warning">
                                  Partida contra {{partida.contrincante}}, esperando a movimiento del contrincante
                                </li>
                              </div>

                          </div>
                        </i>

                        <i v-if="numPartidasAmigos==0">Actualmente no tienes partidas contra amigos en curso.</i>
                  </div>
                </div>


                <div class="collapse" id="collapseTorneo">
                  <div class="card card-body">
                        <i v-if="numPartidasTorneo!=0">
                          <div v-for="(partida) in partidasTorneo" v-bind:key="partida.id">

                              <br>

                              <div v-if="partida.turno === perfil.nombreUsuario">
                                <li class="list-group-item list-group-item-success">
                                  Partida contra {{partida.contrincante}} 
                                  <router-link to="partida" class="btn btn-light btn-sm mb-1 mt-1" type="button" >Continuar la partida</router-link>
                                </li>
                              </div>

                              <div v-else>
                                <li class="list-group-item list-group-item-warning">
                                  Partida contra {{partida.contrincante}}, esperando a movimiento del contrincante
                                </li>
                              </div>

                          </div>
                        </i>

                        <i v-if="numPartidasTorneo==0">Actualmente no tienes torneos en curso.</i>
                  </div>
                </div>


                <div class="collapse" id="collapseIA">
                  <div class="card card-body">
                        <i v-if="numPartidasIA!=0">
                          <div v-for="(partida) in partidasIA" v-bind:key="partida.id">

                              <br>

                              <div v-if="partida.turno === perfil.nombreUsuario">
                                <li class="list-group-item list-group-item-success">
                                  Partida contra {{partida.contrincante}} 
                                  <router-link to="partida" class="btn btn-light btn-sm mb-1 mt-1" type="button" >Continuar la partida</router-link>
                                </li>
                              </div>

                              <div v-else>
                                <li class="list-group-item list-group-item-warning">
                                  Partida contra {{partida.contrincante}}, esperando a movimiento del contrincante
                                </li>
                              </div>

                          </div>
                        </i>

                        <i v-if="numPartidasIA==0">Actualmente no tienes partidas contra la IA en curso.</i>
                  </div>
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
export default {
  name: 'PartidasEnCurso',
  components: {
    ListaAmigos
  },
  data() {
        return{ 
          nombrePag: 'Partidas en curso',
          numPartidasIA: 0,
          teTocaIA: 0,
          numPartidasCiegas: 0,
          teTocaCiegas: 0,
          numPartidasAmigos: 0,
          teTocaAmigos: 0,
          numPartidasTorneo: 0,
          teTocaTorneo: 0
        }
  },
  methods: {

  },
  created: function(){
          let dir = this.host + '/game/inProgress'  
          axios
          .post(dir, {
              nombreUsuario: this.perfil.nombreUsuario,
              accessToken: this.perfil.accessToken
          })
          .then(resp => {
              //this.setPartidas(resp.data);
              console.log(resp.data)
              this.numPartidasIA = this.perfil.partidasEnCurso.filter( partida => partida.tipo == 'ia').length;
              this.numPartidasCiegas = this.perfil.partidasEnCurso.filter( partida => partida.tipo == 'ciegas').length;
              this.numPartidasAmigos = this.perfil.partidasEnCurso.filter( partida => partida.tipo == 'amistoso').length;
              this.numPartidasTorneo = this.perfil.partidasEnCurso.filter( partida => partida.tipo == 'torneo').length;

              this.teTocaIA = this.perfil.partidasEnCurso.filter( partida => partida.tipo == 'ia' && partida.turno == this.nombreUsuario).length;
              this.teTocaCiegas = this.perfil.partidasEnCurso.filter( partida => partida.tipo == 'ciegas' && partida.turno == this.nombreUsuario).length;
              this.teTocaAmigos = this.perfil.partidasEnCurso.filter( partida => partida.tipo == 'amistoso' && partida.turno == this.nombreUsuario).length;
              this.teTocaTorneo = this.perfil.partidasEnCurso.filter( partida => partida.tipo == 'torneo' && partida.turno == this.nombreUsuario).length;
            })

          .catch(error => {
            //Error al hacer login
            console.log(error.response)
            });
  },
  computed: {
      ...mapState(['perfil','host']), //Para recoger los datos de la lista de amigos que están almacenados en el store

      partidasIA: function(){
            return this.perfil.partidasEnCurso.filter( partida => partida.tipo == 'ia');
      },
      partidasCiegas: function(){
            return this.perfil.partidasEnCurso.filter( partida => partida.tipo == 'ciegas');
      },
      partidasAmigos: function(){
            return this.perfil.partidasEnCurso.filter( partida => partida.tipo == 'amistoso');
      },
      partidasTorneo: function(){
            return this.perfil.partidasEnCurso.filter( partida => partida.tipo == 'torneo');
      },
    
  }
}

</script>