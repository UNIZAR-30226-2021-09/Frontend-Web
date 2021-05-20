
<template>
    <div align="center" class="container mt-5" id="app">
      <p></p>

      <div class="mt-5"> 
         <div class="row g-3">
            <div class="col-sm-9">
                
                <h2>{{ $t('navbar.clasificacion') }}: {{me.nombreUsuario}} </h2>
                  <div class="mt-4">
                    <table>
                        <thead>
                          <tr>
                            <th v-for="key in columnas" v-bind:key="key">
                              {{key}}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(entry,index) in this.clasificacion" v-bind:key="entry.nombreUsuario" >

                            <td v-if="entry.nombreUsuario == me.nombreUsuario" class="d-flex justify-content-center bg-info">{{index + 1}}</td>
                            <td v-else class="d-flex justify-content-center">{{index + 1}}</td>

                            <td v-for="key in columnasRespuesta" v-bind:key="key">
                              <div class="d-flex justify-content-center">{{entry[key]}}</div>
                            </td>
                          </tr>
                      
                        </tbody>
                        
                      </table> 
                      <br> <br>
                      
                      <div v-if="me.posicion > 10">
                          <table>
                            <thead>
                              <tr>
                                <th v-for="key in columnas" v-bind:key="key">
                                  {{key}}
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style="bg-info">
                                  <td class="d-flex justify-content-center bg-info">{{me.posicion}}</td>

                                  <td v-for="key in columnasRespuesta" v-bind:key="key" class="bg-info">
                                    <div class="d-flex justify-content-center">{{me[key]}}</div>
                                  </td>
                                </tr>
                            </tbody>
                          </table> 
                      </div>

                      <br> <br>


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
import { i18n } from '@/plugins/i18n'

export default {
  name: 'Clasificacion',
  components: {
    ListaAmigos
  },
  data() {
        return{ 
          nombrePag: 'Clasificación',
          numClasificados: 0,
          columnas:['Posicion','Nombre','Puntos','Victorias','Derrotas'],
          columnasRespuesta:['nombreUsuario','puntos','partidasGanadas','partidasPerdidas'],
          me: {}

        }
  },
  created: function(){
          i18n.locale = this.configuracion.idioma;
          let dir = this.host + '/user/ranking'
          axios
          .post(dir, {
              nombreUsuario: this.perfil.nombreUsuario,
              accessToken: this.perfil.token
          })
          .then(resp => {
              this.setClasificacion(resp.data.ranking);
              this.numClasificados = this.clasificacion.length;
            })

          .catch(error => {
            //Error al hacer login
            console.log(error.response)
            });

          dir = this.host + '/profile'
          let usuario = this.$route.params.usuario;
          axios
          .post(dir, {
              nombreUsuario: usuario
          })
          .then(resp => {
               
              this.me.nombreUsuario = resp.data.nombreUsuario;
              this.me.puntos = resp.data.puntos;
              this.me.partidasGanadas = resp.data.partidasGanadas;
              this.me.partidasPerdidas = resp.data.partidasPerdidas;
              this.me.posicion = resp.data.posicion;
              console.log(this.me);
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
      ...mapState(['clasificacion', 'perfil','host','configuracion']), //Para recoger los datos de la lista de amigos que están almacenados en el store
  },
}


</script>

<style scoped>
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

table {
  border: 2px solid #007bff;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #007bff;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td,tr {
  background-color: #f9f9f9;
}

th, td, tr {
  min-width: 100px;
  padding: 10px 40px;
}


</style>