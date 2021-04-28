<style>

</style>

<template>
    
    <div class="col-sm-3">
        
        <h4 class="text-sm-left">{{perfil.nombreUsuario}} 
            <div class="btn-group">
                <router-link to="perfil" class="btn btn-primary btn-sm mb-1" type="button" @click="cambiarBuscado()" >Mi Perfil</router-link>
                <router-link to="perfil" class="btn btn-primary btn-sm mb-1" type="button" @click="cambiarBuscado()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                    </svg>
                </router-link>
            </div>
            
        </h4>

        <div class="mt-3">
            <h5 style="display:inline" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Peticiones de amistad recibidas </h5>
            <ul class="dropdown-menu">
                    <li class="list-group-item bg-secundary" v-if="numPeticionesRecibidas==0" bg>
                        <i>No hay peticiones</i>
                    </li>
                    <li class="list-group-item bg-secundary" v-for="(jugador,index) in peticionesRecibidasF" v-bind:key="jugador" bg>
                        <a class="dropdown-item" > {{jugador }}
                                <button  class="btn btn-outline-success btn-sm mb-1" type="button" @click='aceptarAmigo(jugador.nombre,index)'>Aceptar</button>
                                <button  class="btn btn-outline-danger btn-sm mb-1" type="button" @click='rechazarAmigo(index)'>Rechazar</button>
                            </a>
                    </li>
            </ul>
        </div>

        <div class="mt-3">
            <h5 style="display:inline" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Peticiones de amistad enviadas </h5>
            <ul class="dropdown-menu">
                    <li class="list-group-item bg-secundary" v-if="numPeticionesEnviadas==0" bg>
                        <i>No hay peticiones</i>
                    </li>
                    <li class="list-group-item bg-secundary" v-for="(jugador,index) in peticionesRecibidasF" v-bind:key="jugador" bg>
                        <a class="dropdown-item" > {{jugador }}
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
        <ul class="mt-2">
            <div class="overflow-auto p-3 mb-3 mb-md-0 mr-md-3 bg-light" style="max-width: 260px; max-height: 420px;">
                <div v-for="amigo in amigos" v-bind:key="amigo.nombre" >
                    <a class="container btn border border-3" href="/Perfil" role="button" @click="cambiarBuscado(amigo.nombre)">
                    <p style="margin: 7px;"> 
                            <svg style="margin-right: 10px;" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                                <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                                <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg> {{amigo.nombre}}
                    </p>
                    </a>
                    <p style="background-color: coral;">-</p>
                </div>
            </div>

        </ul>

        <br>

        
    </div>
</template>

<script>
import axios from 'axios'
import {mapState,mapMutations} from 'vuex';
export default {
  name: 'ListaAmigos',
  computed:{
      ...mapState(['perfil','host','usuarioBuscado']), //Para recoger los datos de la lista de amigos que están almacenados en el store


      amigos(){
            return this.perfil.listaAmigos;
      },
      peticionesRecibidasF(){
            return this.perfil.peticionesRecibidas;
      },
      peticionesEnviadasF(){
            return this.perfil.peticionesEnviadas;
      }
      
  },
  data() {
        return{ 
          numPeticionesRecibidas: -1,
          numPeticionesEnviadas: -1,
          numAmigos: -1
        }
  },
  methods:{
    ...mapMutations([
      'anyadirAmigo','setUsuarioBuscado'
    ]),
    recuperarNombre: function(){
        
    },
    aceptarAmigo: function(amigo,index){

        this.perfil.peticionesRecibidas.splice(index, 1);
        this.anyadirAmigo(amigo);
    },
    rechazarAmigo: function(index){

        this.perfil.peticionesRecibidas.splice(index, 1);
    },
    cambiarBuscado: function(nom){
          //this.setUsuarioBuscado(this.perfil.nombreUsuario);
          this.setUsuarioBuscado(nom);
      } 
        //Implementar las otras funciones de capturar la lista de amigos, el nombre del usuario
  },
  created: function() {
    //Actualizamos la lista de amigos
    console.log(this.host)
    let dir = this.host + '/user/incomingRequests'
    axios
    .post(dir, {
        nombreUsuario: this.perfil.nombreUsuario,
        accessToken: this.perfil.token
    })
    .then(resp => {
    //Petición enviada correctamente
    console.log("Petición enviada. Respuesta: " + resp)
    })
    
    .catch(error => {
    //Error al enviar la petición
    console.log(error.response.request.response)
    });


    this.numPeticionesRecibidas = this.perfil.peticionesRecibidas.length
    this.numPeticionesEnviadas = this.perfil.peticionesEnviadas.length
    this.numAmigos = this.perfil.listaAmigos.length
    
  }
}

</script>

