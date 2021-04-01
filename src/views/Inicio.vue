<template>
    <div align="center" class="container mt-5" id="app">
      
      <p></p>

      <h1>Pantalla de inicio</h1>
      <div class="mt-5">  <!-- El resto de la página tendrá que tener un tamaño de 20 -->
         <div class="row g-3">
            <div class="col-sm-9">
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsum in sapiente nostrum corporis sed perspiciatis maiores! Eum officiis ipsa laborum necessitatibus aperiam saepe impedit sapiente, explicabo temporibus labore molestiae.lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eius iste quod repudiandae ducimus, vero nulla recusandae obcaecati magnam quo placeat consequatur repellendus hic minus dicta nihil expedita libero tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, non ea suscipit numquam quae omnis nobis, dicta vitae distinctio dignissimos officia minus? Iusto dolore illum fuga aperiam sed doloribus? Dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dolore illo optio ad assumenda, ducimus libero incidunt odio voluptate molestiae ipsam, obcaecati nobis cupiditate ipsa? Exercitationem, distinctio ipsum! Aspernatur, sapiente?</p>
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
  name: 'Inicio',
  components: {
    ListaAmigos
  },
  data() {
        return{ 
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