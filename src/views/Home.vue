<template>
  <div class="home">
    <div align="center">
      <div class="container mt-5" id="app">
        <h1>{{titulo}}</h1>
        
        <div>
            <img src="@/assets/logo.png" class="img-fluid" alt="logoAplicacion">
        </div>
        <p></p>
        <div>
            <router-link to="Login"  class="btn btn-outline-primary btn-lg ">Identificarme</router-link>
            <router-link to="Signin" class="btn btn-outline-primary btn-lg ">Registrarme</router-link>
        </div>
        

      </div>

    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
//import Cabecera from '@/components/Cabecera.vue'

export default {
  name: 'Home',
  components: {
    //Cabecera
  },
  data() {
        return{ 
          titulo: 'Batalla Naval',
          correo: '',
          contrasena: '',
          esEnviado: false,
          correoInvalido: false
        }
  }
}

</script>
