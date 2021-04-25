<template>
    <div align="center" class="container mt-5" id="app">
      
      <p></p>

      <div class="mt-5"> 
         <div class="row g-3">
            <div class="col-sm-9">
                
                <h2>{{nombrePag}}</h2>
                  <div class="mt-4">
                    <div class="list-group text-left" v-for="(clasificado) in this.clasificacion" v-bind:key="clasificado.nombre">
                      <!-- Se muestran a todos los usuarios  -->
                      <div v-if="clasificado.nombreUsuario != perfil.nombreUsuario">
                        <router-link to="perfil" class="list-group-item list-group-item-action " type="button" >Nombre de jugador: {{clasificado.nombreUsuario}} ---- 
                          Numero de puntos: {{clasificado.puntos}} ---- Total de victorias: {{clasificado.partidasGanadas}} ---- Total de derrotas: {{clasificado.partidasPerdidas}} </router-link>
                      </div>

                      <!-- Al usuario se le colorea diferente para que se le vea mejor -->
                      <div v-if="clasificado.nombreUsuario == perfil.nombreUsuario" >
                        <router-link to="perfil" class="list-group-item list-group-item-action list-group-item-primary " type="button" >Nombre de jugador: {{clasificado.nombreUsuario}} ---- 
                          Numero de puntos: {{clasificado.puntos}} ---- Total de victorias: {{clasificado.partidasGanadas}} ---- Total de derrotas: {{clasificado.partidasPerdidas}} </router-link>
                      </div>                 

                    </div>
                  </div>
                  

                  <!-- <ul class="list-group">
                    <li class="list-group-item list-group-item-success">Success item</li>
                    <li class="list-group-item list-group-item-secondary">Secondary item</li>
                    <li class="list-group-item list-group-item-info">Info item</li>
                    <li class="list-group-item list-group-item-warning">Warning item</li>
                    <li class="list-group-item list-group-item-danger">Danger item</li>
                    <li class="list-group-item list-group-item-primary">Primary item</li>
                    <li class="list-group-item list-group-item-dark">Dark item</li>
                    <li class="list-group-item list-group-item-light">Light item</li>
                  </ul>  -->

            </div>

            <ListaAmigos/>
        </div>
    
      </div>

    </div>
</template>

#######################################SCRIPT#######################################
<script>
import {mapState,mapMutations} from 'vuex';
import ListaAmigos from '@/components/ListaAmigos.vue'
import axios from 'axios'

export default {
  name: 'Pendientes',
  components: {
    ListaAmigos
  },
  data() {
        return{ 
          nombrePag: 'Clasificación',
          posicion: 0,
          numClasificados: 0
        }
  },
  created: function(){
          let dir = this.host + '/user/ranking'
          axios
          .post(dir, {
              nombreUsuario: this.perfil.nombreUsuario,
              accessToken: this.perfil.token
          })
          .then(resp => {
              this.setClasificacion(resp.data.ranking);
              this.numClasificados = this.clasificacion.length;
              this.posicion = resp.data.posicion;
            })

          .catch(error => {
            //Error al hacer login
            console.log(error.response)
            });
  },
  methods: {
      ...mapMutations([
      'getToken','imprimePerfil','setClasificacion'
    ]),

  },
  computed:{
      ...mapState(['clasificacion', 'perfil','host']), //Para recoger los datos de la lista de amigos que están almacenados en el store
  },
}
</script>