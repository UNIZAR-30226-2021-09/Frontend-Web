<template>
    <div align="center">

        <div class="container mt-5" id="sign_in">
            <h1>{{titulo}}</h1>
            <p></p>

            <div class="input-group mb-3 mt-5">
                <span class="input-group-text" id="basic-addon1">></span>
                <input type="text" class="form-control" placeholder="Nombre de usuario" v-model="nombre" v-on:keyup.enter="registrarse">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="Correo" v-model="correo" v-on:keyup.enter="registrarse">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">#</span>
                <input type="password" class="form-control" placeholder="Contraseña" v-model="contrasena" v-on:keyup.enter="registrarse">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">#</span>
                <input type="password" class="form-control" placeholder="Repetir Contraseña" v-model="rep_contrasena" v-on:keyup.enter="registrarse">
            </div>

            <div class="input-group mt-3 mb-3">
                ¿Ya tienes una cuenta? <router-link class="mr-4" to="Login">¡Identifícate!</router-link>
            </div>

            <button class="btn btn-primary" @click="registrarse">Registrarse</button>
            
        </div>
    </div>
</template>


#######################################SCRIPT#######################################
<script>
export default {
  name: 'Signin',
  components: {
    //Cabecera
  },
  data() {
        return{ 
            titulo: 'Sign in',
            nombre: '',
            correo: '',
            contrasena: '',
            rep_contrasena: ''
        }
  },
  methods:{
    registrarse: function(){
        console.log('click!', this.correo, ' - ' , this.contrasena)
        this.correo = ""
        this.nombre = ""
        this.contrasena = ""
        this.rep_contrasena = ""
            //si el nombre de usuario esta disponible
                //si las contraseñas son iguales
                    //introducir los datos en la base de datos
                //sino informamos del error recargando la pagina
            //sino informamos del error recargando la pagina
    }

    }
}
</script>
