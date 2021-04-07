<template>
    
    <div class="col-sm-3">
        <h4 class="text-sm-left">{{nombreUsuario}}</h4>

        <p></p>
        
        <div>
            <h5 style="display:inline">Amigos </h5> 
            <router-link to="agregarAmigo" class="btn btn-outline-success btn-sm" type="button" >+</router-link>
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

import {mapState} from 'vuex';
export default {
  name: 'ListaAmigos',
  computed:{
      ...mapState(['nombreUsuario', 'listaAmigos']), //Para recoger los datos de la lista de amigos que están almacenados en el store

      amigosConectados(){
            return this.listaAmigos.filter(amigo => amigo.estado =='Conectado')
      },
      amigosDesconectados(){
            return this.listaAmigos.filter(amigo => amigo.estado ==='No conectado')
      },
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
    recuperarNombre: function(){
        
    }
        //Implementar las otras funciones de capturar la lista de amigos, el nombre del usuario
    }
}

</script>

<style>

</style>