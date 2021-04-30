<template>
    <div align="center" class="container mt-5" id="app">
      
      <p></p>

      <div class="mt-5"> 
         <div class="row g-3">           
            <div class="col-sm-9 ">

           <!-- Contenido de la pantalla -->
                <h1>Perfil: {{nombre}}</h1>
                
                <div class="text-start">

                  <h5 class="mt-5">
                    Nombre: {{nombre}} </h5>

                  <h5 class="mt-5">
                    Email: {{email}} </h5>

                  <h5 class="mt-5">
                    Partidas jugadas: {{ganadas + perdidas}}
                    <p  class="fw-lighter" style="margin-top: 10px; margin-left: 100px;">Ganadas: {{ganadas}}</p>
                    <p  class="fw-lighter" style="margin-top: 10px; margin-left: 100px;">Perdidas: {{perdidas}}</p>
                    <p  class="fw-lighter" style="margin-top: 10px; margin-left: 100px;">Torneos ganados: {{torneos}}</p>
                    <p  class="fw-lighter" v-if="ganadas+perdidas == 0" style="margin-top: 10px; margin-left: 100px;">Proporcion de victorias: No existen datos para calcular</p>
                    <p  class="fw-lighter" v-else style="margin-top: 10px; margin-left: 100px;">Proporcion de victorias: {{ganadas / perdidas}}</p>
                  </h5>

                  <h5 class="mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-award-fill" viewBox="0 0 16 16">
                      <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
                      <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                    </svg>
                    <router-link to="clasificacion" class="btn btn-primary btn-sm mb-1" type="button" >Ver posicion en la clasificación</router-link></h5>
                
                </div>

                <br> <br> <br>

                <p>
                  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Historial de partidas
                  </a>
                  
                </p>
                <div class="collapse" id="collapseExample">
                  <div class="card card-body">

                      <!-- Bucle que recorre todo el historial -->
                      <div v-for="(partida) in perfil.partidas" v-bind:key="partida.codigo">
                        
                        <!-- Si una partida ha sido victoria, se muestra en verde  -->
                        <div v-if="partida.resultado === 'Victoria'">
                          <li class="list-group-item list-group-item-success">
                            Partida contra {{partida.contrincante}} 
                            ({{partida.resultado}})
                            <router-link to="perfil" class="btn btn-light btn-sm mb-1 mt-1" type="button" >Ver partida</router-link>
                          </li>
                        </div>
                        
                        <!-- Si una partida ha sido derrota, se muestra en rojo -->
                        <div v-if="partida.resultado === 'Derrota'">
                          <li class="list-group-item list-group-item-danger">
                            Partida contra {{partida.contrincante}} 
                            ({{partida.resultado}})
                            <router-link to="perfil" class="btn btn-light btn-sm mb-1" type="button" >Ver partida</router-link>
                          </li>
                        </div>

                        <!-- Si una partida no ha sido victoria ni derrota, probablemente sea un error y se muestra en naranja -->
                        <div v-if="partida.resultado != 'Derrota' && partida.resultado != 'Victoria' ">
                          <li class="list-group-item list-group-item-warning">
                            Error?
                            Partida contra {{partida.contrincante}} 
                            ({{partida.resultado}})
                            <router-link to="perfil" class="btn btn-light btn-sm mb-1" type="button" >Ver partida</router-link>
                          </li>
                        </div>
                        

                      </div>
                  </div>
                </div>
                
              <button type="button" class="btn btn-primary mt-5">Compartir perfil</button>

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
            torneos: 0
        }
  },
  created: function(){
          let dir = this.host + '/profile'  
          let usuario = this.usuarioBuscado;
          console.log('Buscado es ' + usuario);
          axios
          .post(dir, {
              nombreUsuario: usuario
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
  computed:{
      ...mapState(['perfil','host','usuarioBuscado']), //Para recoger los datos de la lista de amigos que están almacenados en el store
  },
  methods: {

  }
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