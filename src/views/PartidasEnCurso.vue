<template>

  <div align="center" class="container mt-5" id="app">
    <ListaAmigos/>
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
          titulo: 'Partidas en curso'
        }
  },
  methods: {

  }
}

</script>