<template>
    <div align="center" class="container mt-5" id="app">
      
      <p></p>

      <div class="mt-5 "> 
         <div class="row g-3">
            <div class="container col-sm-8 border rounded border-primary bg-light" style="min-height:400px !important;">
                
                <h2 class="mt-3">{{nombrePag}}</h2>
                <br><br><br><br><br><br><br>
                <div  class="container mt-5">
                    <button type="button" class="btn btn-lg btn-primary" :disabled='disabledButton' @click="buscarPartidaCiegas" >Buscar contrincante</button>
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
import {mapState} from 'vuex';
import axios from 'axios'

export default {
  name: 'Ciegas',
  components: {
    ListaAmigos
  },
  data() {
        return{ 
          nombrePag: 'Partida a ciegas',
          titulo: 'Log in',
          nombre: '',
          correo: '',
          contrasena: '',
          esEnviado: false,
          correoInvalido: false,
          disabledButton: false
        }
  },
  methods: {
      buscarPartidaCiegas: function(){
          this.disabledButton = true;
        
          let dir = this.host + '/game/random'
          axios
          .post(dir, {
              nombreUsuario: this.perfil.nombreUsuario,
              accessToken: this.perfil.token
          })
          .then(resp => {
              if (resp.data.mensaje != null){

                  this.$toasted.show("Esperando a encontrar un contrincante, cuando se encuentre partida esta se añadira a tus partidas en curso.", { 
                    theme: "outline", 
                    position: "bottom-left", 
                    duration : 10000
                  });
              }
              else{
                  console.log(resp.data);
                  this.$toasted.show("Partida a ciegas contra " + resp.data.participante1 + " encontrada, se ha añadido a tu lista de partidas en curso.", { 
                    theme: "outline", 
                    position: "bottom-left", 
                    duration : 10000
                  });
                  this.disabledButton = false;
              }
              
          })
          .catch(error => {
          //Error al enviar la petición
          console.log(error.response.request.response)
          });
    }

  },
  computed: {
      ...mapState(['perfil','host']), //Para recoger los datos de la lista de amigos que están almacenados en el store
  }
    
    
}
</script>