<template>
    <div align="center" class="container mt-5" id="app">
      
      <p></p>

      <div class="mt-5"> 
         <div class="row g-3">           
            <div class="col-sm-9">

              <!-- Contenido de la pantalla -->
                <h2>{{titulo}}</h2>

                <div class="grids-container ">
                  <div class="battleship-grid grid-user"></div>
                  <div class="battleship-grid grid-computer"></div>
                </div>

                <div class="container hidden-info">
                  <div class="setup-buttons" id="setup-buttons">
                    <button id="start" class="btn">Start Game</button>
                    <button id="rotate" class="btn">Rotate Your Ships</button>
                  </div>
                  <h3 id="whose-go" class="info-text">Your Go</h3>
                  <h3 id="info" class="info-text"></h3>
                </div>

                <div class="container">
                  <div class="grid-display">
                    <div class="ship destroyer-container" draggable="true"><div id="destroyer-0"></div><div id="destroyer-1"></div></div>
                    <div class="ship submarine-container" draggable="true"><div id="submarine-0"></div><div id="submarine-1"></div><div id="submarine-2"></div></div>
                    <div class="ship cruiser-container" draggable="true"><div id="cruiser-0"></div><div id="cruiser-1"></div><div id="cruiser-2"></div></div>
                    <div class="ship battleship-container" draggable="true"><div id="battleship-0"></div><div id="battleship-1"></div><div id="battleship-2"></div><div id="battleship-3"></div></div>
                    <div class="ship carrier-container" draggable="true"><div id="carrier-0"></div><div id="carrier-1"></div><div id="carrier-2"></div><div id="carrier-3"></div><div id="carrier-4"></div></div>
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
  name: 'Partida',
  components: {
    ListaAmigos
  },
  data() {
        return{ 
          titulo: 'Partida',
          nombre: '',
          link: '',
          esEnviado: false,
          datosInvalidos: false
        }
  },
  methods: {

  },
  mounted() {
    const userGrid = document.querySelector('.grid-user')
    const gridIdentifier = userGrid.attributes.item(0).name
    // console.log('User grid:')
    // console.log(userGrid)
    // console.log('El identificador del grid del usuario es ' + gridIdentifier)

    // const computerGrid = document.querySelector('.grid-computer')
    // const displayGrid = document.querySelector('.grid-display')
    // const ships = document.querySelectorAll('.ship')
    // const destroyer = document.querySelector('.destroyer-container')
    // const submarine = document.querySelector('.submarine-container')
    // const cruiser = document.querySelector('.cruiser-container')
    // const battleship = document.querySelector('.battleship-container')
    // const carrier = document.querySelector('.carrier-container')
        
    let userSquares = []
    const width = 10

    createBoard(userGrid, userSquares)
    
    //Create Board
    function createBoard(grid, squares) {
      for (let i = 0; i < width*width; i++) {
        const square = document.createElement('div')
        square.dataset.id = i
        //Hay que meterle el identificador interno que le pone vue al padre, porque sino no coge los estilos bien
        var t = document.createAttribute(gridIdentifier) 
        square.attributes.setNamedItem(t)
        //
        grid.appendChild(square)
        squares.push(square)
      }
    }

    
  }
}


</script>


<style scoped>

  /* .container{
    display:flex;
  } */

  .grids-container{
    display: flex
  }  

  .grid-user {
    width: 400px;
    height: 400px;
    display: flex; /* Esto sirve para que los cuadraditos estén juntos */
    flex-wrap: wrap;
    background-color: blue;
    margin: 20px;
  }

  .battleship-grid div { /*Cualquier grid que esté en un div tendrá este estilo */
    width: 40px;
    height: 40px;
  }

  .grid-computer {
    width: 400px;
    height: 400px;
    display: flex; /* Esto sirve para que los cuadraditos estén juntos */
    flex-wrap: wrap;
    background-color: lightgreen;
    margin: 20px;
  }

  .grid-display{
    width: 400px;
    height: 400px;
    margin: 20px;
    background-color: yellow;
  }

  .destroyer-container {
    width: 80px;
    height: 40px;
    background-color: orange;
    margin: 10px;
    display: flex;
  }

  .submarine-container {
    width: 120px;
    height: 40px;
    background-color: pink;
    margin: 10px;
    display: flex;
  }

  .cruiser-container {
    width: 120px;
    height: 40px;
    background-color: purple;
    margin: 10px;
    display: flex;
  }

  .battleship-container {
    width: 160px;
    height: 40px;
    background-color: aqua;
    margin: 10px;
    display: flex;
  }

  .carrier-container {
    width: 200px;
    height: 40px;
    background-color: green;
    margin: 10px;
    display: flex;
  }

  .ship div{
    width: 40px;
    height: 40px;
    cursor: grab;
  }


</style>