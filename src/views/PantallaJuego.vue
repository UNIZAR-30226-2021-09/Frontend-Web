<template>
    <div align="center" class="container mt-5" id="app">
      
      <p></p>

      <div class="mt-5"> 
         <div class="row g-3">           
            <div class="col-sm-9">

           <!-- Contenido de la pantalla -->

                <h2>{{titulo}}</h2>

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
  name: 'PantallaJuego',
  components: {
    ListaAmigos
  },
  data() {
        return{ 
          titulo: 'Pantalla del juego',
          nombre: '',
          link: '',
          esEnviado: false,
          datosInvalidos: false
        }
  },
  methods: {

  }
}
</script>