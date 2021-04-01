<template>
    <div class="col-sm">
        <h4 class="text-sm-left">{{nombreUsuario}}</h4>

        <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="amigo in listaAmigos" v-bind:key="amigo">{{amigo.nombre}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'ListaAmigos',
  data() {
        return{ 
            nombreUsuario: 'Usuario1',
            fotoUsuario: '',
            listaAmigos: [
                {nombre: 'Amigo1'},
                {nombre: 'Amigo2'}
            ]
        }
  },
  methods:{
    recuperarNombre: function(){
        
    }
        //Implementar las otras funciones de capturar la lista de amigos, el nombre del usuario y su imagen
    }
}

</script>

<style>

</style>