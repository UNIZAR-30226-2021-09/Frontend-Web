<template>

  <div  class="container mt-5" id="app">


    <div class="mt-5"> 
         <div class="row g-3">
            <div class="col-sm-9">

                <h2>{{nombrePag}}</h2>

                <br> <br> <br>
                <div v-for="(index,partida) in partidasEnCurso" v-bind:key="index">

                    <div v-if="partida.turno === this.perfil.nombreUsuario">
                      <li class="list-group-item list-group-item-success">
                        Partida contra {{partida.rival}} 
                        <router-link to="partida" class="btn btn-light btn-sm mb-1 mt-1" type="button" >Continuar la partida</router-link>
                      </li>
                    </div>

                    <div v-else>
                      <li class="list-group-item list-group-item-warning">
                        Partida contra {{partida.rival}}, esperando a movimiento del contrincante
                      </li>
                    </div>

                </div>

                <i v-if="numPartidas==0">Actualmente no tienes partidas en curso.</i>

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
          numPartidas: 0
        }
  },
  methods: {

  },
  asyncComputed: {
      ...mapState(['perfil']), //Para recoger los datos de la lista de amigos que están almacenados en el store
      partidasEnCurso(){

          let dir = this.host + '/game/inProgress'  
          axios
          .post(dir, {
              nombreUsuario: this.perfil.nombreUsuario,
              accessToken: this.perfil.accessToken
          })
          .then(resp => {
              this.setPartidas(resp.data);
              this.numPartidas = this.parfil.partidasEnCurso.lenth;
              return this.perfil.partidasEnCurso;
            })

          .catch(error => {
            //Error al hacer login
            console.log(error.response.request.response)
            });
          return [];
      },
  }
}

</script>