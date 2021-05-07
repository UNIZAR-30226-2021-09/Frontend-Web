<template>
    <div align="center" class="container mt-5" id="app">
      
      <p></p>

      <div class="mt-5"> 
         <div class="row g-3">           
            <div class="col-sm-9 ">

           <!-- Contenido de la pantalla -->
              <h1>Configuración</h1>

              <div class="row g-3">
                <div class="col-sm-5">
                  <div class="text-start">

                    <h3 class="mt-5">Color de los barcos</h3>

                    <h3 class="mt-5">Color del tablero</h3>

                    <h3 class="mt-5">Idioma de la web</h3>

                  </div>
                </div>

                <div class="col-sm-2">

                  <!-- Color de los barcos -->
                  <div class="dropdown mt-5"> 
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      {{configuracion.barcos}}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>

                  <!-- Color del tablero -->
                  <div class="dropdown mt-5"> 
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      {{configuracion.tablero}}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                  
                  <!-- Idioma de la web -->
                  <div class="dropdown mt-5"> 
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      {{configuracion.idioma}}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><p class="dropdown-item" >Español</p></li>
                      <li><p class="dropdown-item" @click="setIdioma('Inglés')" >Inglés</p></li>
                    </ul>
                  </div>


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
import {mapState, mapMutations} from 'vuex';
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
    ...mapState(['configuracion','host']), //Para recoger los datos de la lista de amigos que están almacenados en el store
  },
  methods: {
    ...mapMutations([
      'setColor','setTablero','setIdioma']),
  }
}
</script>
