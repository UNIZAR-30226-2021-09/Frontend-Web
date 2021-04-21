<style>

</style>

<template>
    
    <div class="col-sm-3">
        
        <h4 class="text-sm-left">{{perfil.nombreUsuario}} 
            <router-link to="perfil" class="btn btn-primary btn-sm mb-1" type="button" >Mi Perfil</router-link>
        </h4>

        <div class="mt-3">
            <h5 style="display:inline" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Peticiones recibidas </h5> 
            <ul class="dropdown-menu">
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
            <h5 style="display:inline">Amigos </h5>  <router-link to="agregarAmigo" class="btn btn-outline-success btn-sm mb-1" type="button">+</router-link>
        </div>
        

        <!-- Lista de amigos conectados -->
        <ul class="list-group list-group-flush mt-2">
            <li class="list-group-item bg-primary" v-for="amigo in amigosConectados" v-bind:key="amigo.nombre" bg>{{amigo.nombre}} - {{amigo.estado}}</li>
        </ul>

        <br>

        <!-- Lista de amigos desconectados -->
        <ul class="list-group list-group-flush">
            <li class="list-group-item bg-secondary" v-for="amigo in amigosDesconectados" v-bind:key="amigo.nombre" bg>{{amigo.nombre}} - {{amigo.estado}}</li>
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

      amigosConectados(){
            return this.perfil.listaAmigos.filter(amigo => amigo.estado =='Conectado')
      },
      amigosDesconectados(){
            return this.perfil.listaAmigos.filter(amigo => amigo.estado ==='No conectado')
      },
      peticionesRecibidasF(){
            return this.perfil.peticionesRecibidas
      }
  },
//   data() {
//         return{ 
//             nombreUsuario: 'Usuario1',
//             fotoUsuario: '',
//             listaAmigos: [
//                 {nombre: 'Amigo1'},
//                 {nombre: 'Amigo2'}
//             ]
//         }
//   },
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
    }
}

</script>

