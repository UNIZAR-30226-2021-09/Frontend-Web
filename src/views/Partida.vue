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
                    <button id="rotate" class="btn" >Rotate Your Ships</button>
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
        }
  },
  methods: {

  },
  mounted() {
    const userGrid = document.querySelector('.grid-user')
    const computerGrid = document.querySelector('.grid-computer')
    const gridIdentifier = userGrid.attributes.item(0).name
    const compGridIdentifier = computerGrid.attributes.item(0).name
    // console.log('User grid:')
    // console.log(userGrid)
    // console.log('El identificador del grid del usuario es ' + gridIdentifier)

    const displayGrid = document.querySelector('.grid-display')
    const ships = document.querySelectorAll('.ship')
    const destroyer = document.querySelector('.destroyer-container')
    const submarine = document.querySelector('.submarine-container')
    const cruiser = document.querySelector('.cruiser-container')
    const battleship = document.querySelector('.battleship-container')
    const carrier = document.querySelector('.carrier-container')
    const startButton = document.querySelector('#start')
    const rotateButton = document.querySelector('#rotate')
    const turnDisplay = document.querySelector('#whose-go')
    // const infoDisplay = document.querySelector('#info')
    // const setupButtons = document.getElementById('setup-buttons')
        
    let userSquares = []
    let computerSquares = []
    let isHorizontal = true
    let currentPlayer = 'user'
    // let allShipsPlaced = false

    //Array de los barcos con sus posibles orientaciones (horizontal y vertical)
    // const shipArray = [
    //   {
    //     name: 'destroyer',
    //     directions: [
    //       [0, 1],
    //       [0, width]
    //     ]
    //   },
    //   {
    //     name: 'submarine',
    //     directions: [
    //       [0, 1, 2],
    //       [0, width, width*2]
    //     ]
    //   },
    //   {
    //     name: 'cruiser',
    //     directions: [
    //       [0, 1, 2],
    //       [0, width, width*2]
    //     ]
    //   },
    //   {
    //     name: 'battleship',
    //     directions: [
    //       [0, 1, 2, 3],
    //       [0, width, width*2, width*3]
    //     ]
    //   },
    //   {
    //     name: 'carrier',
    //     directions: [
    //       [0, 1, 2, 3, 4],
    //       [0, width, width*2, width*3, width*4]
    //     ]
    //   },
    // ]

    const width = 10

    //Create Board
    function createBoard(grid, squares, id) {
      for (let i = 0; i < width*width; i++) {
        const square = document.createElement('div')
        square.dataset.id = i
        //Hay que meterle el identificador interno que le pone vue al padre, porque sino no coge los estilos bien
        var t = document.createAttribute(id) 
        square.attributes.setNamedItem(t)
        //
        grid.appendChild(square)
        squares.push(square)
      }
    }

    //Función que pone algunos barquitos para ver si se pueden seleccionar bien
    function createDebugBoard(grid, squares, id){
      for (let i = 0; i < width*width; i++) {
        const square = document.createElement('div')
        square.dataset.id = i
        //Hay que meterle el identificador interno que le pone vue al padre, porque sino no coge los estilos bien
        var t = document.createAttribute(id) 
        square.attributes.setNamedItem(t)
        //
        if(i%3 == 0){
          square.classList.add('taken', 'destroyer')
        }
        grid.appendChild(square)
        squares.push(square)
      }
    }
    
    createBoard(userGrid, userSquares, gridIdentifier)
    createDebugBoard(computerGrid, computerSquares, compGridIdentifier)

    //Función para rotar los barcos
    function rotate() {
      destroyer.classList.toggle('destroyer-container-vertical')
      submarine.classList.toggle('submarine-container-vertical')
      cruiser.classList.toggle('cruiser-container-vertical')
      battleship.classList.toggle('battleship-container-vertical')
      carrier.classList.toggle('carrier-container-vertical')
      if (isHorizontal) {
        isHorizontal = false
        return
      }else { //Está en vertical
        isHorizontal = true
        return
      }
    }

    rotateButton.addEventListener('click', rotate)

    //A cada barco le asignamos la función dragStart si ocurre el evento de drag
    ships.forEach(ship => ship.addEventListener('dragstart', dragStart))
    //A los cuadraditos les asignamos todos los eventos necesarios
    userSquares.forEach(square => square.addEventListener('dragstart', dragStart))
    userSquares.forEach(square => square.addEventListener('dragover', dragOver))
    userSquares.forEach(square => square.addEventListener('dragenter', dragEnter))
    userSquares.forEach(square => square.addEventListener('dragleave', dragLeave))
    userSquares.forEach(square => square.addEventListener('drop', dragDrop))
    userSquares.forEach(square => square.addEventListener('dragend', dragEnd))

    //Variables que nos servirán para guardar información relevante
    let selectedShipNameWithIndex
    let draggedShip
    let draggedShipLength

    //Para obtener los ids de los barcos que estamos cogiendo
    ships.forEach(ship => ship.addEventListener('mousedown', (e) => {
      selectedShipNameWithIndex = e.target.id
    }))

    function dragStart() {
      //Nos guardamos la información de qué barco estamos cogiendo y qué longitud tiene
      draggedShip = this
      draggedShipLength = this.childNodes.length
      // console.log(draggedShip)
    }

    function dragOver(e) {
      e.preventDefault()
    }

    function dragEnter(e) {
      e.preventDefault()
    }

    function dragLeave() {
      // console.log('drag leave')
    }

    function isEmpty(isH, dragLen, selectedShipIndex, id) {
      let seems = true
      if(isH){
        for (let i=0; i < dragLen; i++) {
          let element = userSquares[id - selectedShipIndex + i]
          if ((' ' + element.className + ' ').indexOf('taken') > -1) seems = false
        }
      }else{
        for (let i=0; i < dragLen; i++) {
          let element = userSquares[id - selectedShipIndex * i]
          if ((' ' + element.className + ' ').indexOf('taken') > -1) seems = false
        }
      }
      return seems

    }

    function dragDrop() {
      let shipNameWithLastId = draggedShip.lastChild.id
      let shipClass = shipNameWithLastId.slice(0, -2)
      console.log('Barco: ' + shipClass)
      let lastShipIndex = parseInt(shipNameWithLastId.substr(-1))
      let shipLastId = lastShipIndex + parseInt(this.dataset.id)
      // console.log(shipLastId)
      const notAllowedHorizontal = [0,10,20,30,40,50,60,70,80,90,1,11,21,31,41,51,61,71,81,91,2,22,32,42,52,62,72,82,92,3,13,23,33,43,53,63,73,83,93]
      const notAllowedVertical = [99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60]
      
      let newNotAllowedHorizontal = notAllowedHorizontal.splice(0, 10 * lastShipIndex)
      let newNotAllowedVertical = notAllowedVertical.splice(0, 10 * lastShipIndex)

      console.log('Cojo ' + selectedShipNameWithIndex)

      let selectedShipIndex = parseInt(selectedShipNameWithIndex.substr(-1))

      shipLastId = shipLastId - selectedShipIndex
      console.log('Acaba: ' + shipLastId)

      let empty = isEmpty(isHorizontal, draggedShipLength, selectedShipIndex, parseInt(this.dataset.id))

      console.log('Empty = ' + empty)

      if (isHorizontal && !newNotAllowedHorizontal.includes(shipLastId) && empty) {
        for (let i=0; i < draggedShipLength; i++) {
          // // let directionClass
          // // if (i === 0) directionClass = 'start'
          // // if (i === draggedShipLength - 1) directionClass = 'end'
          //Pintamos el barco en el tablero
          userSquares[parseInt(this.dataset.id) - selectedShipIndex + i].classList.add('taken', shipClass)
        }
      //As long as the index of the ship you are dragging is not in the newNotAllowedVertical array! This means that sometimes if you drag the ship by its
      //index-1 , index-2 and so on, the ship will rebound back to the displayGrid.
      } else if (!isHorizontal && !newNotAllowedVertical.includes(shipLastId) && empty) {
        for (let i=0; i < draggedShipLength; i++) {
          // let directionClass
          // if (i === 0) directionClass = 'start'
          // if (i === draggedShipLength - 1) directionClass = 'end'
          userSquares[parseInt(this.dataset.id) - selectedShipIndex + width*i].classList.add('taken', shipClass)
        }
      } else return
      // console.log(userSquares)

      displayGrid.removeChild(draggedShip) //Quitamos el barco de abajo
      // if(!displayGrid.querySelector('.ship')) allShipsPlaced = true
    }

    function dragEnd() {
      // console.log('dragend')
    }

    //Lógica del juego
    function playGame() {
      if (currentPlayer === 'user'){
        turnDisplay.innerHTML = 'Mi turno'
        computerSquares.forEach(square => square.addEventListener('click', function(e){
          revealSquare(square)
          console.log(e)
        }))
      }
      if (currentPlayer === 'computer'){
        turnDisplay.innerHTML = 'Turno del rival'
      }
    }

    playGame() //############################################################################################################################################################

    startButton.addEventListener('click', playGame)

    function revealSquare(square) {
      if(square.classList.contains('taken')){ //He clickado en una posición donde había un barco
        console.log('BOOM')
        square.classList.add('boom') //Marcamos que he acertado
      }else{
        square.classList.add('miss')
        console.log('miss~~')
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
    background-color: lightblue;
    margin: 20px;
  }

  .battleship-grid div { /*Cualquier grid que esté en un div tendrá este estilo */
    width: 40px;
    height: 40px;
    outline: 0.5px solid black;
    /* background-color: lightblue; */
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

  .destroyer-container-vertical {
    width: 40px;
    height: 80px;
    background-color: orange;
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
  }
  
  .destroyer {
    background-color: orange;
  }

  .submarine-container {
    width: 120px;
    height: 40px;
    background-color: pink;
    margin: 10px;
    display: flex;
  }

  .submarine-container-vertical {
    width: 40px;
    height: 120px;
    background-color: pink;
    margin: 10px;
    display: flex;
  }

  .submarine{
    background-color: pink;
  }

  .cruiser-container {
    width: 120px;
    height: 40px;
    background-color: purple;
    margin: 10px;
    display: flex;
  }

  .cruiser-container-vertical {
    width: 40px;
    height: 120px;
    background-color: purple;
    margin: 10px;
    display: flex;
  }

  .cruiser {
    background-color: purple;
  }

  .battleship-container {
    width: 160px;
    height: 40px;
    background-color: aqua;
    margin: 10px;
    display: flex;
  }

  .battleship-container-vertical {
    width: 40px;
    height: 160px;
    background-color: aqua;
    margin: 10px;
    display: flex;
  }

  .battleship {
    background-color: aqua;
  }

  .carrier-container {
    width: 200px;
    height: 40px;
    background-color: green;
    margin: 10px;
    display: flex;
  }

  .carrier-container-vertical {
    width: 40px;
    height: 200px;
    background-color: green;
    margin: 10px;
    display: flex;
  }

  .carrier {
    background-color: green;
  }

  .ship div{
    width: 40px;
    height: 40px;
    cursor: grab;
  }

  .boom{
    background-color: red;
  }

  .miss{
    background-color: blue;
  }



</style>