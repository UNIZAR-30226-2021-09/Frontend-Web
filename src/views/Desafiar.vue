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
                    <button class="btn btn-outline-info" type="button" @click="desafiaAmigo(amigo.nombre)" v-for="amigo in listaAmigos" v-bind:key="amigo">{{amigo.nombre}}</button>
                </div>

                <p class="fst-italic mt-5">{{tmpmsg}}</p>

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

export default {
  name: 'Torneo',
  components: {
    ListaAmigos
  },
  computed:{
      ...mapState(['nombreUsuario', 'listaAmigos'])
  },
  data() {
        return{ 
          nombrePag: 'Desafiar a un amigo',
          tmpmsg: ''
        }
  },
  methods: {
      desafiaAmigo: function(amigo){
          this.tmpmsg = 'Se ha invitado a ' + amigo
    }

  }
}
</script>