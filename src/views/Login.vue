<template>
    <div align="center" class="container mt-5" id="app">
      <h1>{{titulo}}</h1>
      
      <p></p>

      <div class="input-group mb-3 mt-5">
        <span class="input-group-text" id="basic-addon1">></span>
        <input type="text" class="form-control" placeholder="Nombre de usuario" v-model="nombre" v-on:keyup.enter="enviarDatos">
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">@</span>
        <input type="text" class="form-control" placeholder="Correo" v-model="correo" v-on:keyup.enter="enviarDatos">
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">#</span>
        <input type="password" class="form-control" placeholder="Contraseña" v-model="contrasena" v-on:keyup.enter="enviarDatos">
      </div>
      
      <div class="input-group mt-3">
        ¿No tienes cuenta? <router-link to="Signin">¡Regístrate!</router-link>
      </div>

      <button class="btn btn-primary" @click="enviarDatos">Enviar</button>

      <!-- Mensaje de éxito -->
      <div class="mt-3">
        <div v-if=esEnviado role="alert" :class="['alert', 'alert-success']">
          Enviado!
        </div>
      </div>
      
      <!-- Mensaje de correo erróneo -->
      <div class="mt-3">
        <div v-if=correoInvalido class="alert alert-danger" role="alert">
          Por favor, introduzca un correo válido.
        </div>
      </div>

    </div>
</template>

#######################################SCRIPT#######################################
<script>
export default {
  name: 'Login',
  components: {
    //Cabecera
  },
  data() {
        return{ 
          titulo: 'Log in',
          nombre: '',
          correo: '',
          contrasena: '',
          esEnviado: false,
          correoInvalido: false
        }
  },
  methods: {
      enviarDatos: function(){
        console.log('click!', this.correo, ' - ' , this.contrasena)
        this.correo = ""
        this.nombre = ""
        this.contrasena = ""
        this.esEnviado = true
        var divideAt = this.correo.split('@')
        var divideDot = this.correo.split('.')
        console.log(divideAt.length)
        
        // TO-DO
        // Pequeña comprobación de que el correo parece correcto
        if(divideAt.length === 1 || divideDot.length === 1){
            this.correoInvalido = false
        }
    }

  }
}
</script>