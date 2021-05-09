<template>
    <div  class="container mt-5" id="app">
      
      <p></p>

      <div class="mt-5" > 
         <div class="row g-3">
            <div class="container col-sm-9 " >
                
                <h2 class="mt-3">{{nombrePag}}</h2>
                <br>


                <div class="container border rounded border-5 bg-white " >
                    <div class="row g-3">
                      <div class="action col-sm-9">
                            
                            <img  class="img-fluid rounded "  src="@/assets/torneo_cuadricula.png" alt="lava.jpg">
                      </div>

                      <div class="container col-sm-3">
                          <br> <br>
                          <h3> Amigos </h3>
                          <div v-for="amigo in perfil.listaAmigos" v-bind:key="amigo" style="border-color: green">
                              <div  class="container border border-primary" style="margin-top: 20px;" >
                                
                                <p style="margin: 5px;"> {{amigo}} </p>
                              </div>
                          </div>
                            
                      </div>

                      
                    </div>

                    <button type="button" class="btn btn-outline-secondary">Crear Torneo</button>
              
                    <br> <br>
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
import {mapState} from 'vuex';

export default {
  name: 'Modotorneo',
  components: {
    ListaAmigos
  },
  data() {
        return{ 
          nombrePag: 'Torneo',
          titulo: 'Log in',
          nombre: ''
        }
  },
  methods: {
      enviarDatos: function(){
    }

  },
  computed: {
      ...mapState(['perfil']), //Para recoger los datos de la lista de amigos que están almacenados en el store
  }
}
</script>


<style>
.action {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
}
</style>