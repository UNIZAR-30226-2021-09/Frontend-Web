<template>
    <div align="center" class="container mt-5" id="app">
      
      <p></p>

      <div class="mt-5"> 
         <div class="row g-3">
            <div class="col-sm-9">
                
                <h2>{{nombreApp}}</h2>
                
                <div class=".container mt-5">
                  <div class="row">
                    <p></p>
                    <div class="col"><router-link to="ciegas" class="btn btn-primary btn-lg ">Partida a ciegas</router-link></div>
                    <div class="col"></div>
                    <div class="col"><router-link to="desafiar" class="btn btn-primary btn-lg ">Desafiar a un amigo</router-link></div>
                  </div>

                  <p></p>

                  <div class="row">
                    <p></p>
                    <div class="col"><router-link to="torneo" class="btn btn-primary btn-lg ">Modo torneo</router-link></div>
                    <div class="col"></div>
                    <div class="col"><router-link to="pendientes" class="btn btn-primary btn-lg ">Partidas en curso</router-link></div>
                  </div>

                  <p></p>

                  <div class="row">
                    <p></p>
                    <div class="col"></div>
                    <div class="col"><router-link to="partida" class="btn btn-primary btn-lg ">Partida contra IA</router-link></div>
                    <div class="col"></div>
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
import {mapState} from 'vuex'

export default {
  name: 'Inicio',
  components: {
    ListaAmigos
  },
  data() {
        return{ 
          nombreApp: 'Batalla Naval',
          titulo: 'Log in',
          nombre: '',
          correo: '',
          contrasena: '',
          esEnviado: false,
          correoInvalido: false
        }
  },
  computed:{
    ...mapState(['perfil'])
  },
  // methods: {
  //     enviarDatos: function(){
  //   }

  // },
  
  created: function() {
    if (this.perfil.token != ''){
      this.$router.push('login');
    }else{
      this.$socket.emit("logMe", { nombreUsuario: "User4"});
    }
    
  }

}
</script>