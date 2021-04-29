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

                <h4 class="mt-4">
                    {{amigoDesafiado}}: {{estadoAmigo}}
                </h4>

                <button class="btn btn-warning mt-3" @click="emularAceptar">~Emular partida aceptada~</button>

                <p></p>

                <router-link id="btnStart" to="partida" class="btn btn-primary disabled" type="button" >Iniciar desafío</router-link>

            </div>

            <ListaAmigos/>
        </div>
    
      </div>

    </div>
</template>

#######################################SCRIPT#######################################
<script>
import ListaAmigos from '@/components/ListaAmigos.vue'
import {mapState,mapMutations} from 'vuex';

export default {
  name: 'AmigoDesafiado',
  components: {
    ListaAmigos
  },
  computed:{
    ...mapState(['perfil', 'amigoDesafiado'])
  },
  data() {
        return{ 
          nombrePag: 'Desafiar a un amigo',
          estadoAmigo: 'Esperando...'
        }
  },
  methods: {
    ...mapMutations([
      'getDesafiado'
    ]),
    emularAceptar: function(){
      this.estadoAmigo =  'Listo';
      var element = document.getElementById("btnStart");
      element.classList.remove("disabled");
    }
  },
  created: function() {
    console.log(this.amigoDesafiado)

    

  }
}
</script>