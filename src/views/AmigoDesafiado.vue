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

                <h4 class="mt-4">
                    {{amigoDesafiado}}: Esperando...
                </h4>

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
  name: 'AmigoDesafiado',
  components: {
    ListaAmigos
  },
  computed:{
    ...mapState(['nombreUsuario', 'amigoDesafiado'])
  },
  data() {
        return{ 
          nombrePag: 'Desafiar a un amigo'
        }
  },
  methods: {

  }
}
</script>