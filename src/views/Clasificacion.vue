<template>
    <div align="center" class="container mt-5" id="app">
      
      <p></p>

      <div class="mt-5"> 
         <div class="row g-3">
            <div class="col-sm-9">
                
                <h2>{{nombrePag}}</h2>
                
                  <div class="mt-4">
                    <div class="list-group" v-for="(clasificacion) in clasificacion" v-bind:key="clasificacion.nombre">
                      <!-- Se muestran a todos los usuarios  -->
                      <div v-if="clasificacion.nombre != perfil.nombreUsuario">
                        <router-link to="perfil" class="list-group-item list-group-item-action" type="button" >{{clasificacion.nombre}} - {{clasificacion.puntos}} puntos</router-link>
                      </div>

                      <!-- Al usuario se le colorea diferente para que se le vea mejor -->
                      <div v-if="clasificacion.nombre === perfil.nombreUsuario">
                        <router-link to="perfil" class="list-group-item list-group-item-action list-group-item-primary" type="button" >{{clasificacion.nombre}} - {{clasificacion.puntos}} puntos</router-link>
                      </div>                 

                    </div>
                  </div>
                  

                  <!-- <ul class="list-group">
                    <li class="list-group-item list-group-item-success">Success item</li>
                    <li class="list-group-item list-group-item-secondary">Secondary item</li>
                    <li class="list-group-item list-group-item-info">Info item</li>
                    <li class="list-group-item list-group-item-warning">Warning item</li>
                    <li class="list-group-item list-group-item-danger">Danger item</li>
                    <li class="list-group-item list-group-item-primary">Primary item</li>
                    <li class="list-group-item list-group-item-dark">Dark item</li>
                    <li class="list-group-item list-group-item-light">Light item</li>
                  </ul>  -->

            </div>

            <ListaAmigos/>
        </div>
    
      </div>

    </div>
</template>

#######################################SCRIPT#######################################
<script>
import {mapState} from 'vuex';
import ListaAmigos from '@/components/ListaAmigos.vue'

export default {
  name: 'Pendientes',
  components: {
    ListaAmigos
  },
  data() {
        return{ 
          nombrePag: 'Clasificación',
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
    }

  },
  computed:{
      ...mapState(['clasificacion', 'perfil']), //Para recoger los datos de la lista de amigos que están almacenados en el store
  },
}
</script>