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
                      <li><p class="dropdown-item" @click="setColor('Azul')" >Azul</p></li>
                      <li><p class="dropdown-item" @click="setColor('Rojo')" >Rojo</p></li>
                      <li><p class="dropdown-item" @click="setColor('Verde')" >Verde</p></li>
                    </ul>
                  </div>

                  <!-- Color del tablero -->
                  <div class="dropdown mt-5"> 
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      {{configuracion.tablero}}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><p class="dropdown-item" @click="setTablero('Océano')" >Océano</p></li>
                      <li><p class="dropdown-item" @click="setTablero('Desierto')" >Desierto</p></li>
                      <li><p class="dropdown-item" @click="setTablero('Césped')" >Césped</p></li>
                      <li><p class="dropdown-item" @click="setTablero('Espacio')" >Espacio</p></li>
                      <li><p class="dropdown-item" @click="setTablero('Lava')" >Lava</p></li>
                    </ul>
                  </div>
                  
                  <!-- Idioma de la web -->
                  <div class="dropdown mt-5"> 
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      {{configuracion.idioma}}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><p class="dropdown-item" @click="setIdioma('Español')" >Español</p></li>
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
export default {
  name: 'Configuracion',
  components: {
    ListaAmigos
  },
  data() {
        return{ 
            nombre: '',
        }
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
