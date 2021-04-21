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

                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">@</span>
                  <input type="text" class="form-control" placeholder="Enlace de invitación" v-model="link" v-on:keyup.enter="enviarPeticion">
                </div>

                <button class="btn btn-primary mt-3" @click="enviarPeticion">Enviar invitación</button>

                <!-- TODO: Este botón es para emular la respuesta del servidor si se intenta añadir un usuario inexistente -->
                <button class="btn btn-warning mt-3" @click="emularError">~Usuario desconocido~</button>

                <!-- Mensaje de éxito -->
                <div class="mt-3">
                  <div v-if=esEnviado role="alert" :class="['alert', 'alert-success']">
                    ¡Invitación enviada!
                  </div>
                </div>

                <!-- Mensaje de error -->
                <div class="mt-3">
                  <div v-if=datosInvalidos class="alert alert-danger" role="alert">
                    Usuario desconocido
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
import {mapMutations} from 'vuex';
//import axios from 'axios'
export default {
  name: 'AgregarAmigo',
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
  sockets: {
    llegaInvitacion: function () {
        console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
  methods: {
    ...mapMutations([
      'getToken'
    ]),

    enviarPeticion: function(){
        //console.log('click!', this.correo, ' - ' , this.contrasena)
      //let token = this.getToken();
      this.$socket.emit("friendPetition", { nombreUsuario: "User4"});
      /*axios
      .post('https://proyecto-software-09.herokuapp.com/user/addfriend', {
          nombreUsuario:"User3",
          nombreAmigo: "User4",
          accessToken: token
      })
      .then(resp => (this.respuesta = resp))*/
    },
    emularError: function(){
      this.datosInvalidos = true
      this.esEnviado = false
    }

  }
}
</script>