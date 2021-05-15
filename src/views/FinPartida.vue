<template>
    <div align="center" class="container mt-5" id="app">
      
      <p></p>

      <div class="mt-5"> 
         <div class="row g-3">           
            <div class="col-sm-9 ">

           <!-- Contenido de la pantalla -->
              <h1>{{Resultado}}</h1>
              <h5 class="mt-4">{{Descripcion}}</h5>

              <div class="text-start">

                <h5 class="mt-4"> {{Puntos}} </h5>

                <h5 class="mt-4"> Disparos efectuados: {{Disparos}} </h5>

                <h5 class="mt-4"> Barcos destruidos: {{Destruidos}} </h5>

                <h5 class="mt-4"> Precision de los disparos: {{Precision}} % </h5>

                <h5 class="mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-award-fill" viewBox="0 0 16 16">
                    <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                  </svg>
                  <router-link to="clasificacion" class="btn btn-primary btn-sm mb-1" type="button" >Ver posicion en la clasificación</router-link></h5>

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
import {mapState, mapMutations} from 'vuex';
export default {
  name: 'Configuracion',
  components: {
    ListaAmigos
  },
  data() {
        return{ 
            nombre: '',
            Resultado: 'VICTORIA',
            Descripcion: 'Has ganado la partida contra ___!',
            Puntos: 'Puntos ganados: +14',
            Disparos: 51,
            Destruidos: 5,
            Acertados: 17
        }
  },
  created: function(){
          //TODO: COGER TODA LA INFO DE LA PARTIDA Y CAMBIAR LAS VARIABLES PARA QUE LA MUESTREN
          //Hay que recuperar:
          //  -Si he ganado o he perdido
          //  -Los puntos que me han dado/quitado
          //  -Los disparos efectuados
          //  -El número de barcos destruidos
          //  -El número de disparos acertados
  },
  computed:{
    ...mapState(['configuracion','host']), //Para recoger los datos de la lista de amigos que están almacenados en el store
    Precision: function(){
      let porcentaje = (this.Acertados / this.Disparos) * 100;
      return porcentaje.toFixed(2);
    },
  },
  methods: {
    ...mapMutations([
      ]),
  }
}
</script>
