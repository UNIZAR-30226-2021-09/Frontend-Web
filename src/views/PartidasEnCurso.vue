<template>

  <div  class="container mt-5" id="app">


    <div class="mt-5"> 
         <div class="row g-3">
            <div class="col-sm-9 bg-secondary text-white">

                <br>
                <h2 class="fw-lighter">{{nombrePag}}</h2>
                <br>


                <i v-if="numPartidas!=0">
                    <div v-for="(partida) in perfil.partidasEnCurso" v-bind:key="partida.id">

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

                <br> <br> <br>
                <i v-if="numPartidas==0">Actualmente no tienes partidas en curso.</i>

                <br> <br>
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
              this.numPartidas = this.perfil.partidasEnCurso.length;
            })

          .catch(error => {
            //Error al hacer login
            console.log(error.response)
            });
  },
  computed: {
      ...mapState(['perfil','host']), //Para recoger los datos de la lista de amigos que están almacenados en el store
  }
}

</script>