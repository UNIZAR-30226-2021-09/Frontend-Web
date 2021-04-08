<template>
    <div align="center" class="container mt-5" id="app">
      
      <p></p>

      <div class="mt-5"> 
         <div class="row g-3">           
            <div class="col-sm-9 ">

           <!-- Contenido de la pantalla -->
                <h2>{{perfil.nombreUsuario}}</h2>
                
                <div class="text-start">

                  <h4 class="mt-5">
                    Puntos: {{perfil.puntos}} 
                    <router-link to="clasificacion" class="btn btn-primary btn-sm mb-1" type="button" >Ver Clasificación</router-link></h4>
                  

                  <h4 class="mt-4 mb-4">Partidas: </h4>

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

export default {
  name: 'Perfil',
  components: {
    ListaAmigos
  },
  data() {
        return{ 
          link: '',
          esEnviado: false,
          datosInvalidos: false
        }
  },
  computed:{
      ...mapState(['perfil']), //Para recoger los datos de la lista de amigos que están almacenados en el store
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