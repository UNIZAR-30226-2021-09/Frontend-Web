<template>
    <div class="col-sm">
        <h4 class="text-sm-left">{{nombreUsuario}}</h4>

        <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="amigo in listaAmigos" v-bind:key="amigo">{{amigo.nombre}}</li>
        </ul>
    </div>
</template>

<script>

import {mapState} from 'vuex';
export default {
  name: 'ListaAmigos',
  computed:{
      ...mapState(['nombreUsuario', 'listaAmigos']) //Para recoger los datos de la lista de amigos que están almacenados en el store
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