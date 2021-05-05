<template>
    <div align="center" class="container mt-5" id="app">
      
      <p></p>

      <div class="mt-5"> 
         <div class="row g-3">           
            <div class="col-sm-9">

           <!-- Contenido de la pantalla -->

                <h2>{{titulo}}</h2>
                
                <div class="input-group mb-3 mt-5">
                  <span class="input-group-text" id="basic-addon1">></span>
                  <input type="text" class="form-control" placeholder="Nombre de usuario" v-model="nombre" v-on:keyup.enter="enviarPeticion">
                </div>

                <!-- <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">@</span>
                  <input type="text" class="form-control" placeholder="Enlace de invitación" v-model="link" v-on:keyup.enter="enviarPeticion">
                </div> -->

                <button class="btn btn-primary mt-3" @click="enviarPeticion">Enviar invitación</button>

                <!-- Mensaje de éxito -->
                <div class="mt-3">
                  <div v-if=esEnviado role="alert" :class="['alert', 'alert-success']">
                    ¡Invitación enviada!
                  </div>
                </div>

                <!-- Mensaje de error -->
                <div class="mt-3">
                  <div v-if=datosInvalidos class="alert alert-danger" role="alert">
                    Ha habido un error al enviar la invitación. Comprueba el nombre y prueba otra vez
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
import axios from 'axios'
import ListaAmigos from '@/components/ListaAmigos.vue'
import {mapState,mapMutations} from 'vuex';
//import axios from 'axios'
export default {
  name: 'AgregarAmigo',
  computed:{
      ...mapState(['perfil','host']) //Para recoger los datos de la lista de amigos que están almacenados en el store
  },
  components: {
    ListaAmigos
  },
  data() {
        return{ 
          titulo: 'Agregar a un amigo',
          nombre: '',
          link: '',
          esEnviado: false,
          datosInvalidos: false
        }
  },
  // sockets: {
  //   llegaInvitacion: function () {
  //       console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
  //   }
  // },
  methods: {
    ...mapMutations([
      'getToken','setSalientes'
    ]),

    enviarPeticion: function(){
      this.datosInvalidos = false
      this.esEnviado = false
      
      const amigoPeti = this.nombre
      console.log('Voy a enviar petición a ' + amigoPeti)
      let dir = this.host + '/user/addfriend'
      axios
      .post(dir, {
          nombreUsuario: this.perfil.nombreUsuario,
          nombreAmigo: this.nombre,
          accessToken: this.perfil.token
      })
      .then(resp => {
        //Petición enviada correctamente
        console.log("Petición enviada. Respuesta: " + resp);
        this.setSalientes(resp.data)
        this.esEnviado = true
        this.datosInvalidos = false
        console.log('Voy a enviar petición a ' + amigoPeti)
        this.$socket.emit("friendPetition", {nombreUsuario: amigoPeti});
        })
        
      .catch(error => {
        //Error al enviar la petición
        this.esEnviado = false
        this.datosInvalidos = true
        console.log(error.response.request.response)
      });

      this.nombre = ""
    }

  }
}
</script>
