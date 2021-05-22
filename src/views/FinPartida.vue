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

                <h5 class="mt-4"> {{ $t('partida.disparosEfectuados') }} {{Disparos}} </h5>

                <h5 class="mt-4"> {{ $t('partida.barcosDestruidos') }} {{Destruidos}} </h5>

                <h5 class="mt-4"> {{ $t('partida.precision') }} {{Precision}} % </h5>

                <h5 class="mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-award-fill" viewBox="0 0 16 16">
                    <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                  </svg>
                  <router-link :to="{ name: 'Clasificacion', params: {usuario: perfil.nombreUsuario} }" class="btn btn-primary btn-sm mb-1" type="button" >{{ $t('boton.verClasificacion') }}</router-link></h5>
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
import axios from 'axios'
import { i18n } from '../plugins/i18n' 

export default {
  name: 'Configuracion',
  components: {
    ListaAmigos
  },
  data() {
        return{ 
            nombre: '',
            Resultado: '_____',
            Descripcion: 'Has __ la partida contra ___!',
            Puntos: 'Puntos __: +__',
            Disparos: -1,
            Destruidos: -1,
            Acertados: -1
        }
  },
  created: function(){
      i18n.locale = this.configuracion.idioma;  
    let dir = this.host + '/match/infoPartida'
      axios
      .post(dir, {
        nombreUsuario: this.perfil.nombreUsuario,
        accessToken: this.perfil.token,
        gameid: this.partidaActual
      })
      .then(resp => {
        //Petición enviada correctamente
        console.log(resp)
        
        if (resp.data.infoPartida.ganador == true){ //He ganado
          this.Resultado = this.$t('partida.victoria')
          this.Descripcion = (this.$t('partida.hasGanado') + this.contrincanteActual + '!')
          this.Puntos = (this.$t('partida.puntosGanados') + resp.data.infoPartida.puntos)
        } else if (resp.data.infoPartida.ganador == false){ //He perdido
          this.Resultado = this.$t('partida.derrota')
          this.Descripcion = (this.$t('partida.hasPerdido') + this.contrincanteActual + '...')
          this.Puntos = (this.$t('partida.puntosPerdidos') + resp.data.infoPartida.puntos)
        } else{
          console.log('???')
        }

        this.Disparos = resp.data.infoPartida.disparosRealizados
        this.Destruidos = resp.data.infoPartida.barcosDestruidos
        this.Acertados = resp.data.infoPartida.disparosAcertados        
      
      })
      .catch(error => {
      //Error al enviar la petición
        console.log('Error en post de incoming requests')
        console.log(error)
        
      });
  },
  computed:{
    ...mapState(['configuracion','host','partidaActual','contrincanteActual','perfil']), //Para recoger los datos de la lista de amigos que están almacenados en el store
    Precision: function(){
      let porcentaje
      if (this.Disparos == 0){
        porcentaje = 0;
      }else{
        porcentaje = (this.Acertados / this.Disparos) * 100;
      }
      
      return porcentaje.toFixed(2);
    },
  },
  methods: {
    ...mapMutations([
      ]),
  }
}
</script>
