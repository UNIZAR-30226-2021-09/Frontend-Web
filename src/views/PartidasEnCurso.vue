<template>

  <div  class="container mt-5" id="app">


    <div class="mt-5"> 
         <div class="row g-3">
            <div class="col-sm-9">

                <h2>{{nombrePag}}</h2>

            </div>
            <ListaAmigos/>
         </div>
    </div>

  </div>

</template>

#######################################SCRIPT#######################################
<script>
import ListaAmigos from '@/components/ListaAmigos.vue'
export default {
  name: 'PartidasEnCurso',
  components: {
    ListaAmigos
  },
  data() {
        return{ 
          nombrePag: 'Partidas en curso'
        }
  },
  methods: {

  }
}

</script>