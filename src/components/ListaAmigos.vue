<style>

</style>

<template>
    
    <div class="col-sm-3">
        
        <h4 class="text-sm-left">{{perfil.nombreUsuario}} 
            <div class="btn-group">
                <router-link to="perfil" class="btn btn-primary btn-sm mb-1" type="button" >Mi Perfil</router-link>
                <router-link to="perfil" class="btn btn-primary btn-sm mb-1" type="button" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                    </svg>
                </router-link>
            </div>
            
        </h4>

        <div class="mt-3">
            <h5 style="display:inline" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Peticiones recibidas </h5>
            <ul class="dropdown-menu">
                    <li class="list-group-item bg-secundary" v-if="numPeticionesRecibidas==0" bg>
                        <i>No hay peticiones</i>
                    </li>
                    <li class="list-group-item bg-secundary" v-for="(jugador,index) in peticionesRecibidasF" v-bind:key="jugador.nombre" bg>
                        <a class="dropdown-item" > {{jugador.nombre }}
                                <button  class="btn btn-outline-success btn-sm mb-1" type="button" @click='aceptarAmigo(jugador.nombre,index)'>Aceptar</button>
                                <button  class="btn btn-outline-danger btn-sm mb-1" type="button" @click='rechazarAmigo(index)'>Rechazar</button>
                            </a>
                    </li>
            </ul>
        </div>

        <br>

        <div>
            <h5 style="display:inline">Amigos </h5>  
            <router-link to="agregarAmigo" class="btn btn-outline-success btn-sm mb-1" type="button">
                <!-- Botón de añadir amigo -->
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
            </router-link>
        </div>
        <p></p>

        <i v-if="numAmigos==0">Aún no has añadido a ningún amigo</i>

        <!-- Lista de amigos conectados -->
        <ul class="list-group list-group-flush mt-2">
            <li class="list-group-item bg-primary" v-for="amigo in amigos" v-bind:key="amigo.nombre" bg>{{amigo.nombre}}</li>
        </ul>

        <br>

        
    </div>
</template>

<script>

import {mapState,mapMutations} from 'vuex';
export default {
  name: 'ListaAmigos',
  computed:{
      ...mapState(['perfil']), //Para recoger los datos de la lista de amigos que están almacenados en el store


      amigos(){
            return this.perfil.listaAmigos;
      },
      peticionesRecibidasF(){
            return this.perfil.peticionesRecibidas;
      }
  },
  data() {
        return{ 
          numPeticionesRecibidas: -1,
          numAmigos: -1
        }
  },
  methods:{
    ...mapMutations([
      'anyadirAmigo'
    ]),
    recuperarNombre: function(){
        
    },
    aceptarAmigo: function(amigo,index){

        this.perfil.peticionesRecibidas.splice(index, 1);
        this.anyadirAmigo(amigo);
    },
    rechazarAmigo: function(index){

        this.perfil.peticionesRecibidas.splice(index, 1);
    }
        //Implementar las otras funciones de capturar la lista de amigos, el nombre del usuario
  },
  created: function() {
    this.numPeticionesRecibidas = this.perfil.peticionesRecibidas.length
    this.numAmigos = this.perfil.listaAmigos.length
    
  }
}

</script>

