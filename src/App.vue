<template >
  <div class="bg-light">
    <div id="app" class="container text-center">
      <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div> -->
      <Cabecera></Cabecera>

      <router-view/>
      
      <Infobar></Infobar>   <!-- Información adicional -->
    </div>
    <br> <br> <br> <br> <br> <br>
    <br> <br> <br> <br> <br> <br>
    <br> <br> <br> <br> <br> <br>
    <br> <br> <br> <br> <br> <br>
  </div>
  
</template>


<script>
// @ is an alias to /src
import Infobar from '@/components/Infobar.vue'
import Cabecera from '@/components/Cabecera.vue'

export default {
  name: 'App',
  components: {
    Infobar,
    Cabecera
  },
}



</script>