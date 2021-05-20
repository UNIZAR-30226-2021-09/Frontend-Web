<template>
  <div class="home">
    <div align="center">
      <div class="container mt-5" id="app">
        <h1>{{titulo}}</h1>
        <div>
            <img src="@/assets/barco.png" class="img-fluid" alt="logoAplicacion" style="width:230px ; height:300px">
        </div>
        <p></p>
        <div>
            <router-link to="Login"  class="btn btn-outline-primary btn-lg mr-5">{{ $t('boton.iniciarSesion') }}</router-link>
            <router-link to="Signin" style="margin-left: 10px;" class="btn btn-outline-primary btn-lg ">{{ $t('boton.registrarse') }}</router-link>

            <br> <br> <br>
            <h5 style="display:inline" class=" btn dropdown-toggle nav-item" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{ $t('boton.idioma') }} </h5>
                  <ul class="dropdown-menu list-group-flush">

                          <li class="list-group-item bg-secundary" bg>
                              <a class="dropdown-item" @click="changeLanguage('es')" > Español</a>
                              <a class="dropdown-item" @click="changeLanguage('en')"> Ingles</a>
                          </li>
                          
                  </ul>
                  <br>
        </div>
        
        

      </div>

    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
//import Cabecera from '@/components/Cabecera.vue'
import {mapState} from 'vuex';
import { i18n } from '@/plugins/i18n'

export default {
  name: 'Home',
  components: {
    //Cabecera
  },
  created: function() {
    i18n.locale = this.configuracion.idioma;  

  },
  data() {
        return{ 
          titulo: 'Batalla Naval',
          correo: '',
          contrasena: '',
          esEnviado: false,
          correoInvalido: false
        }
  },
  methods:{

    changeLanguage(locale) {
      i18n.locale = locale

    }
  },
  computed:{
    ...mapState(['configuracion'])
  },

}

</script>
