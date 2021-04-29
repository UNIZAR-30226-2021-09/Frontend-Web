<template>
    <div align="center" class="container mt-5" id="app">
      
      <p></p>

      <div class="mt-5"> 
         <div class="row g-3">
            <div class="col-sm-9">
                
              <h2>{{nombrePag}}</h2>
              
              <h4 class="mt-5">
                  {{perfil.nombreUsuario}}: Listo
              </h4>

              <p></p>

              <h6 class="mt-4">Invita a un jugador...</h6>

              <p></p>

              <div class="d-grid gap-2 col-6 mx-auto mt-4" >
                  <button v-for="(amigo) in perfil.listaAmigos" v-bind:key="amigo.nombre" @click='modificarDesafiado(amigo)' class="btn btn-outline-info" type="button" >{{amigo}}</button>

              </div>

              <p></p>

              <h6>
                {{msg}}
              </h6>

              <p></p>

              <button id="btnSend" to="amigoDesafiado" class="btn btn-success disabled" @click="desafiarAmigo" type="button" >Enviar invitación</button>

              <!-- Mensaje de error -->
              <div class="mt-3">
                <div v-if=errorPeti class="alert alert-danger" role="alert">
                  Ha ocurrido un error, vuélvelo a intentar más tarde.
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
import {mapState, mapMutations} from 'vuex';
import axios from 'axios'

export default {
  name: 'Desafiar',
  components: {
    ListaAmigos
  },
  data() {
        return{ 
          nombrePag: 'Desafiar a un amigo',
          msg: 'Selecciona un amigo al que desafiar',
          errorPeti: false
        }
  },
  computed: mapState(['perfil', 'amigoDesafiado','host']),
  methods: {
    ...mapMutations([
      'setDesafiado'
    ]),
    modificarDesafiado: function(amigo){
      this.setDesafiado(amigo);
      this.msg =  'Vas a invitar a ' + amigo;
      var element = document.getElementById("btnSend");
      element.classList.remove("disabled");
    },
    desafiarAmigo: function(){
      this.errorPeti = false

      //Desafiar a un amigo a un desafío amistoso
      let dir = this.host + '/game/friend'
      axios
      .post(dir, {
          nombreUsuario: this.perfil.nombreUsuario,
          nombreAmigo: this.amigoDesafiado,
          accessToken: this.perfil.token
      })
      .then(resp => {
      //Petición enviada correctamente
        if(resp.data.mensaje === 'Token inválido'){
          this.errorPeti = true
        }else{
          console.log("Éxito en la petición ")
          console.log(resp)
        }
        
      
      })
      .catch(error => {
      //Error al enviar la petición
        console.log(error)
        this.errorPeti = true
      });
    }
    // prueba: function(){
    //   this.$store.commit('setDesafiado')
    // }
  },
  created: function() {
    if(this.perfil.listaAmigos.length == 0){
      this.msg = 'Necesitas añadir a amigos antes de invitarlos :('
    }
    
  }
}
</script>