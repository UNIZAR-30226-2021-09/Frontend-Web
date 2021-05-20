<style>

</style>

<template>
    
    <div v-if="perfil.token != ''" class="col-sm-3">
        
        <!-- Nombre del usuario -->
        <h4 class="text-sm-left">{{perfil.nombreUsuario}} 
            <div class="btn-group">
                <router-link :to="{ name: 'Perfil', params: {usuario: perfil.nombreUsuario} }" type="button" class="btn btn-primary btn-sm mb-1">{{ $t('listaAmigos.miPerfil') }}</router-link>
                <router-link :to="{ name: 'Perfil', params: {usuario: perfil.nombreUsuario} }" type="button" class="btn btn-primary btn-sm mb-1">
                
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-share" viewBox="0 0 16 18">
                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                    </svg>
                </router-link>
                <router-link :to="{ path: '/configuracion'}" type="button" class="btn btn-primary btn-sm mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 18">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                    </svg>
                </router-link>
            </div>
            
        </h4>

        <!-- Lista de peticiones recibidas -->
        <div class="mt-3">
            <h5 style="display:inline" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{ $t('listaAmigos.peticionesRecibidas') }} <span style="background-color: coral;" class="badge">{{numPeticionesRecibidas}}</span></h5>
            <ul class="dropdown-menu list-group-flush">
                    <li class="list-group-item bg-secundary" v-if="numPeticionesRecibidas==0" bg>
                        <i>{{ $t('listaAmigos.noRecibidas') }}</i>
                    </li>
                    <li class="list-group-item bg-secundary" v-else v-for="(jugador) in peticionesRecibidasF" v-bind:key="jugador" bg>
                        <a class="dropdown-item" > {{jugador }}
                                <button  class="btn btn-outline-success btn-sm mb-1" style="margin-left: 10px" type="button" @click='aceptarAmigo(jugador)'>{{ $t('boton.aceptar') }}</button>
                                <button  class="btn btn-outline-danger btn-sm mb-1" style="margin-left: 5px" type="button" @click='rechazarAmigo(jugador)'>{{ $t('boton.rechazar') }}</button>
                            </a>
                    </li>
            </ul>
        </div>

        <!-- Lista de peticiones enviadas -->
        <div class="mt-3">
            <h5 style="display:inline" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{ $t('listaAmigos.peticionesEnviadas') }} </h5>
            <ul class="dropdown-menu list-group-flush">
                    <li class="list-group-item bg-secundary" v-if="numPeticionesEnviadas==0" bg>
                        <i>{{ $t('listaAmigos.noEnviadas') }}</i>
                    </li>
                    <li class="list-group-item bg-secundary" v-else v-for="(jugador) in peticionesEnviadasF" v-bind:key="jugador" bg>
                        <a class="dropdown-item" > {{jugador}}</a>
                    </li>
            </ul>
        </div>

        <!-- Lista de desafios recibidas -->
        <div class="mt-3">
            <h5 style="display:inline" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{ $t('listaAmigos.desafiosRecibidos') }} <span style="background-color: coral;" class="badge">{{numDesafiosRecibidos}}</span></h5>
            <ul class="dropdown-menu list-group-flush">
                    <li class="list-group-item bg-secundary" v-if="numDesafiosRecibidos==0" bg>
                        <i>{{ $t('listaAmigos.noRecibidas') }}</i>
                    </li>
                    <li class="list-group-item bg-secundary" v-else v-for="(jugador,index) in desafiosRecibidosF" v-bind:key="jugador.id" bg>
                        <a class="dropdown-item" > {{jugador.contrincante}}
                                <button  class="btn btn-outline-success btn-sm mb-1" style="margin-left: 10px" type="button" @click='aceptarDesafio(jugador,index)'>{{ $t('boton.aceptar') }}</button>
                                <button  class="btn btn-outline-danger btn-sm mb-1" style="margin-left: 5px" type="button" @click='rechazarDesafio(jugador,index)'>{{ $t('boton.rechazar') }}</button>
                            </a>
                    </li>
            </ul>
        </div>

        <br>

        <!-- Lista de amigos -->
        <div>
            <h5 style="display:inline">{{ $t('listaAmigos.amigos') }} </h5>  
            <router-link :to="{ path: '/agregarAmigo'}" class="btn btn-outline-success btn-sm mb-1" type="button">
                <!-- Botón de añadir amigo -->
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
            </router-link>
        </div>
        <br v-if="numAmigos==0">
        <i v-if="numAmigos==0">{{ $t('listaAmigos.noAmigos') }}</i>
        
        <!-- Lista de amigos conectados -->
        <ul>
            <div class="overflow-auto p-3 mb-3 mb-md-0 mr-md-3 bg-light" style="max-width: 260px; max-height: 420px;">
                <div v-for="amigo in amigos" v-bind:key="amigo" style="border-color: green">
                    <router-link :to="{ name: 'Perfil', params: {usuario: amigo} }" role="button" class="container btn border border-3 mt-2">
                    <p style="margin: 5px;"> 
                            <svg style="margin-right: 10px;" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                                <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                                <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg> {{amigo}}
                    </p>
                    </router-link>
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
    
      numPeticionesRecibidas(){
        return this.perfil.peticionesRecibidas.length
      },
      numPeticionesEnviadas(){
        return this.perfil.peticionesEnviadas.length
      },
      numDesafiosRecibidos(){
          return this.perfil.desafiosRecibidos.length
      },
      numAmigos(){
        return this.perfil.listaAmigos.length
      },

      amigos(){
          //console.log(this.perfil.listaAmigos)
          return this.perfil.listaAmigos;
      },
      peticionesRecibidasF(){
            return this.perfil.peticionesRecibidas;
      },
      peticionesEnviadasF(){
            return this.perfil.peticionesEnviadas;
      },
      desafiosRecibidosF(){
            return this.perfil.desafiosRecibidos;
      },
      
  },
  data() {
        return{
        }
  },
  methods:{
    ...mapMutations([
      'anyadirAmigo','setUsuarioBuscado','setEntrantes','setSalientes','setAmigos','setDesafios','setPartidaActual', 'setContrincanteActual', 'setTurnoActual'
    ]),
    recuperarNombre: function(){
        
    },
    aceptarAmigo: function(amigo){

        let dir = this.host + '/user/accept'
        axios
        .post(dir, {
            nombreUsuario: this.perfil.nombreUsuario,
            nombreAmigo: amigo,
            accessToken: this.perfil.token
        })
        .then(resp => {
            //Petición enviada correctamente
            this.setAmigos(resp.data)

            //Actualizamos la lista
            dir = this.host + '/user/incomingRequests'
            axios
            .post(dir, {
                nombreUsuario: this.perfil.nombreUsuario,
                accessToken: this.perfil.token
            })
            .then(resp => {
                //Petición enviada correctamente
                this.setEntrantes(resp.data)
                //this.setEntrantes(['prueba2','prueba3'])
                })
                .catch(error => {
                //Error al enviar la petición
                console.log('Error en post de incoming requests de aceptar amigo')
                console.log(error.response.request.response)
            });
            
            this.$socket.emit("aceptarInvitacionAmigo", {nombreUsuario: amigo});
            
            })
        .catch(error => {
        //Error al enviar la petición
        console.log('Error en post de incoming requests')
        console.log(error.response.request.response)
        });

        //this.perfil.peticionesRecibidas.splice(index, 1);
        // this.anyadirAmigo(amigo);
    },
    rechazarAmigo: function(amigo){

        let dir = this.host + '/user/dismiss'
        axios
        .post(dir, {
            nombreUsuario: this.perfil.nombreUsuario,
            nombreAmigo: amigo,
            accessToken: this.perfil.token
        })
        .then(resp => {
        //Petición enviada correctamente
        this.setEntrantes(resp.data)
        })
        .catch(error => {
        //Error al enviar la petición
        console.log('Error en dimiss de rechazar amigo')
        console.log(error.response.request.response)
        });
    },
    aceptarDesafio: function(jugador, index){
        let dir = this.host + '/game/accept'
        axios
        .post(dir, {
            nombreUsuario: this.perfil.nombreUsuario,
            gameid: jugador.id,
            accessToken: this.perfil.token
        })
        .then(resp => {
            //Petición enviada correctamente
            this.$socket.emit("aceptarChallenge", {nombreUsuario: jugador.contrincante, game: jugador.id});
            this.$socket.emit("joinGame", jugador.id);
            console.log("join game")
            console.log(resp)
            this.setPartidaActual(resp.data._id)
            console.log(resp.data._id)
            console.log(jugador.id)
            this.setContrincanteActual(jugador.contrincante)
            this.setTurnoActual('ColocandoBarcos')
            this.perfil.desafiosRecibidos.splice(index, 1);
            this.$router.push('partida')
            
            })
        .catch(error => {
        //Error al enviar la petición
            console.log('Error en post de aceptar desafio')
            console.log(error)
        });
    },
    rechazarDesafio: function(jugador, index){
        let dir = this.host + '/game/dismiss'
        axios
        .post(dir, {
            nombreUsuario: this.perfil.nombreUsuario,
            gameid: jugador.id,
            accessToken: this.perfil.token
        })
        .then(() => {
            //Petición enviada correctamente
            console.log('Partida rechazada')
            this.perfil.desafiosRecibidos.splice(index, 1);
            })
        .catch(error => {
        //Error al enviar la petición
            console.log('Error en post de rechazar desafio')
            console.log(error)
        });
    },
    cambiarBuscado: function(nom){
          //this.setUsuarioBuscado(this.perfil.nombreUsuario);
          //console.log('aaaaaaa');
          this.setUsuarioBuscado(nom);
      } 
        //Implementar las otras funciones de capturar la lista de amigos, el nombre del usuario
  },
  created: function() {
    //Actualizamos la lista de amigos
    //console.log(this.host)

    //Actualizamos las peticiones entrantes
    let dir = this.host + '/user/incomingRequests'
    axios
    .post(dir, {
        nombreUsuario: this.perfil.nombreUsuario,
        accessToken: this.perfil.token
    })
    .then(resp => {
    //Petición enviada correctamente
    this.setEntrantes(resp.data)
    //this.setEntrantes(['prueba2','prueba3'])
    })
    .catch(error => {
    //Error al enviar la petición
    console.log('Error en incoming requests de created')
    console.log(error.response.request.response)
    });

    //Actualizamos las peticiones salientes
    dir = this.host + '/user/outgoingRequests'
    axios
    .post(dir, {
        nombreUsuario: this.perfil.nombreUsuario,
        accessToken: this.perfil.token
    })
    .then(resp => {
    //Petición enviada correctamente
    this.setSalientes(resp.data)
    })
    .catch(error => {
    //Error al enviar la petición
    console.log('Error en outgoing requests de created')
    console.log(error.response.request.response)
    });

    //Actualizamos la lista de amigos
    dir = this.host + '/user/friendList'
    axios
    .post(dir, {
        nombreUsuario: this.perfil.nombreUsuario,
        accessToken: this.perfil.token
    })
    .then(resp => {
    //Petición enviada correctamente
    this.setAmigos(resp.data)
    })
    .catch(error => {
    //Error al enviar la petición
    console.log(error)
    });

    //Actualizamos la lista de desafios entrantes
    dir = this.host + '/game/incomingRequests'
    axios
    .post(dir, {
        nombreUsuario: this.perfil.nombreUsuario,
        accessToken: this.perfil.token
    })
    .then(resp => {
    //Petición enviada correctamente
    //console.log('Peticiones de deasfios entrantes:')
    //console.log(resp)
    this.setDesafios(resp.data)
    })
    .catch(error => {
    //Error al enviar la petición
    console.log(error)
    });


    // this.numPeticionesRecibidas = this.perfil.peticionesRecibidas.length
    // this.numPeticionesEnviadas = this.perfil.peticionesEnviadas.length
    // this.numAmigos = this.perfil.listaAmigos.length
    
  }
}

</script>

