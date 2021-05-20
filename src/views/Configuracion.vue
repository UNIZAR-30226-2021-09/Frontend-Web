<template>
    <div align="center" class="container mt-5" id="app">
      
      <p></p>

      <div class="mt-5"> 
         <div class="row g-3">           
            <div class="col-sm-9 ">

           <!-- Contenido de la pantalla -->
              <h1>{{ $t('configuracion.configuracion') }}</h1>

              <div class="row g-3">
                <div class="col-sm-5">
                  <div class="text-start">

                    <h3 class="mt-5">{{ $t('configuracion.colorBarcos') }}</h3>

                    <h3 class="mt-5">{{ $t('configuracion.colorTablero') }}</h3>

                    <h3 class="mt-5">{{ $t('configuracion.IdiomaWeb') }}</h3>

                  </div>
                </div>

                <div class="col-sm-2">

                  <!-- Color de los barcos -->
                  <div class="dropdown mt-5"> 
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <span v-if="configuracion.barcos == 'Azul'">{{ $t('configuracion.azul') }}</span>
                      <span v-if="configuracion.barcos == 'Rojo'">{{ $t('configuracion.rojo') }}</span>
                      <span v-if="configuracion.barcos == 'Verde'">{{ $t('configuracion.verde') }}</span>
                    </button>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><p class="dropdown-item" @click="setColor('Azul')" >{{ $t('configuracion.azul') }}</p></li>
                      <li><p class="dropdown-item" @click="setColor('Rojo')" >{{ $t('configuracion.rojo') }}</p></li>
                      <li><p class="dropdown-item" @click="setColor('Verde')" >{{ $t('configuracion.verde') }}</p></li>
                    </ul>
                  </div>

                  <!-- Color del tablero -->
                  <div class="dropdown mt-5"> 
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <span v-if="configuracion.tablero == 'Océano'">{{ $t('configuracion.oceano') }}</span>
                      <span v-if="configuracion.tablero == 'Desierto'">{{ $t('configuracion.desierto') }}</span>
                      <span v-if="configuracion.tablero == 'Césped'">{{ $t('configuracion.cesped') }}</span>
                      <span v-if="configuracion.tablero == 'Espacio'">{{ $t('configuracion.espacio') }}</span>
                      <span v-if="configuracion.tablero == 'Lava'">{{ $t('configuracion.lava') }}</span>
                    </button>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><p class="dropdown-item" @click="setTablero('Océano')" >{{ $t('configuracion.oceano') }}</p></li>
                      <li><p class="dropdown-item" @click="setTablero('Desierto')" >{{ $t('configuracion.desierto') }}</p></li>
                      <li><p class="dropdown-item" @click="setTablero('Césped')" >{{ $t('configuracion.cesped') }}</p></li>
                      <li><p class="dropdown-item" @click="setTablero('Espacio')" >{{ $t('configuracion.espacio') }}</p></li>
                      <li><p class="dropdown-item" @click="setTablero('Lava')" >{{ $t('configuracion.lava') }}</p></li>
                    </ul>
                  </div>
                  
                  <!-- Idioma de la web -->
                  <div class="dropdown mt-5"> 
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      {{configuracion.idioma}}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><p class="dropdown-item" @click="setIdioma('es')" >Español</p></li>
                      <li><p class="dropdown-item" @click="setIdioma('en')" >Inglés</p></li>
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
import { i18n } from '@/plugins/i18n'

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
    setIdioma: function(locale){
          this.configuracion.idioma = locale;
      i18n.locale = locale
    }
  },
  created: function() {
    i18n.locale = this.configuracion.idioma;  

  }
}
</script>
