<template>
    <div align="center" class="container mt-5" id="app">
      
      <p></p>

      <div class="mt-5"> 
         <div class="row g-3">
            <div class="col-sm-9">
                
              <h2>{{nombrePag}}</h2>
              
              <h4 class="mt-5">
                  {{nombreUsuario}}: Listo
              </h4>

              <p></p>

              <h6 class="mt-4">Invita a un jugador...</h6>

              <p></p>

              <div class="d-grid gap-2 col-6 mx-auto mt-4" >
                  <button v-for="(amigo, index) in listaAmigos" v-bind:key="amigo.nombre" @click='modificarDesafiado(amigo.nombre)' to="amigoDesafiado" class="btn btn-outline-info" type="button" >{{index}} - {{amigo.nombre}}</button>

              </div>

              <p></p>

              <h6>
                {{msg}}
              </h6>

              <p></p>

              <router-link id="btnSend" to="amigoDesafiado" class="btn btn-success disabled" type="button" >Enviar invitación</router-link>

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

export default {
  name: 'Desafiar',
  components: {
    ListaAmigos
  },
  data() {
        return{ 
          nombrePag: 'Desafiar a un amigo',
          msg: 'Selecciona un amigo al que desafiar'
        }
  },
  computed: mapState(['nombreUsuario', 'listaAmigos', 'amigoDesafiado']),
  methods: {
    ...mapMutations([
      'setDesafiado'
    ]),
    modificarDesafiado: function(amigo){
      this.setDesafiado(amigo);
      this.msg =  'Invitando a ' + amigo + '...';
      var element = document.getElementById("btnSend");
      element.classList.remove("disabled");
    }
    // prueba: function(){
    //   this.$store.commit('setDesafiado')
    // }
  }
}
</script>