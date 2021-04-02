<template>
    <div align="center" class="container mt-5" id="app">
      
      <p></p>

      <div class="mt-5"> 
         <div class="row g-3">
            <div class="col-sm-9">
                
                <h2>{{nombrePag}}</h2>
                
                <div class=".container mt-5">
                  <div class="row">
                    <p></p>
                    <div class="col"><router-link to="" class="btn btn-primary btn-lg ">Partida a ciegas</router-link></div>
                    <div class="col"></div>
                    <div class="col"><router-link to="" class="btn btn-primary btn-lg ">Desafiar a un amigo</router-link></div>
                  </div>

                  <p></p>

                  <div class="row">
                    <p></p>
                    <div class="col"><router-link to="" class="btn btn-primary btn-lg ">Modo torneo</router-link></div>
                    <div class="col"></div>
                    <div class="col"><router-link to="" class="btn btn-primary btn-lg ">Partidas en curso</router-link></div>
                  </div>

                </div>

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
  name: 'Pendientes',
  components: {
    ListaAmigos
  },
  data() {
        return{ 
          nombrePag: 'Partidas en curso',
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

  }
}
</script>