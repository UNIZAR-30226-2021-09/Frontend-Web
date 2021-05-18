<template >
  <div>
    <div id="app" class="container text-center bg-light" style="border-radius: 30px;">
      <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div> -->
      <Cabecera></Cabecera>

      <router-view/>
      
      <Infobar></Infobar>   <!-- Información adicional -->
    </div>
     
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