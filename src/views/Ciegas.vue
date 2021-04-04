<template>
    <div align="center" class="container mt-5" id="app">
      
      <p></p>

      <div class="mt-5 "> 
         <div class="row g-3">
            <div class="container col-sm-9 border rounded border-primary bg-light" style="min-height:400px !important;">
                
                <h2 class="mt-3">{{nombrePag}}</h2>
                <div  class="container mt-5">
                    <p >Buscando contrincante...</p>
                    
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
  name: 'Ciegas',
  components: {
    ListaAmigos
  },
  data() {
        return{ 
          nombrePag: 'Partida a ciegas',
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