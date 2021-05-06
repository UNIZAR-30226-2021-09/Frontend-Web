<template>
    <div align="center" class="container mt-5" id="app">
      
      <p></p>

      <div class="mt-5"> 
         <div class="row g-3">           
            <div class="col-sm-9">

              <!-- Contenido de la pantalla -->
                <!-- <input type="button" value="Click Me" style="float: right;"> -->
                <div class="btn-group" style="float: right;">
                  <a href="inicio" class="btn btn-warning">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-flag" viewBox="0 0 16 18">
                      <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z"/>
                    </svg>
                    Rendirme
                  </a>
                  <a href="inicio" class="btn btn-warning">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 18">
                      <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                      <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                    </svg>
                    Salir 
                  </a>
                </div>

                <p></p>
                <br>

                <h2>{{mensaje}}</h2>


                <div class="row">
                  <div class="column"> <h3>Tu flota</h3> </div>
                  <div class="column"> <h3>Flota de {{adversario}}</h3> </div>
                </div>

                <div class="grids-container ">
                  <div class="battleship-grid grid-user"></div>
                  <div class="battleship-grid grid-computer"></div>
                </div>

                <div class="container hidden-info">
                  <div class="setup-buttons btn-group" id="setup-buttons">
                    <button id="start" class="btn btn-outline-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                      Empezar partida
                    </button>
                    <button id="rotate" class="btn btn-outline-primary" >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 18">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                      </svg>
                      Rotar los barcos
                    </button>
                    <button id="restart" class="btn btn-outline-primary" >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-eraser" viewBox="0 0 16 18">
                        <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"/>
                      </svg>
                      Reiniciar mi tablero
                    </button>
                  </div>
                  <h3 id="whose-go" class="info-text">Your Go</h3>
                  <h3 id="info" class="info-text"></h3>
                </div>

                <div class="container">
                  <div class="grid-display">
                    <div id="destroyer" class="ship destroyer-container" draggable="true"><div id="destroyer-0"></div><div id="destroyer-1"></div></div>
                    <div id="submarine" class="ship submarine-container" draggable="true"><div id="submarine-0"></div><div id="submarine-1"></div><div id="submarine-2"></div></div>
                    <div id="cruiser" class="ship cruiser-container" draggable="true"><div id="cruiser-0"></div><div id="cruiser-1"></div><div id="cruiser-2"></div></div>
                    <div id="battleship" class="ship battleship-container" draggable="true"><div id="battleship-0"></div><div id="battleship-1"></div><div id="battleship-2"></div><div id="battleship-3"></div></div>
                    <div id="carrier" class="ship carrier-container" draggable="true"><div id="carrier-0"></div><div id="carrier-1"></div><div id="carrier-2"></div><div id="carrier-3"></div><div id="carrier-4"></div></div>
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
  computed:{
    mensaje :function(){
      let retVal = 'Partida contra ' + this.adversario + ': ';
      if (this.colocarFlota){
        retVal += 'Coloca tus barcos';
      }else{ //La flota ya está colocada
        if (this.miTurno){
          retVal += 'Tu turno';
        }else{
          retVal += 'Turno de ' + this.adversario;
        }
      }
      return retVal;
    }
  },
  components: {
    ListaAmigos
  },
  data() {
        return{ 
          titulo: 'Partida contra _____',
          adversario: '_____',
          miTurno: true,
          colocarFlota: true
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
    const restartButton = document.querySelector('#restart')
    const turnDisplay = document.querySelector('#whose-go')

    //Nos guardamos los barcos por si hay que volverlos a poner en el grid inferior
    const destroyer_saved = document.querySelector('#destroyer')
    const submarine_saved = document.querySelector('#submarine')
    const cruiser_saved = document.querySelector('#cruiser')
    const battleship_saved = document.querySelector('#battleship')
    const carrier_saved = document.querySelector('#carrier')

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
          square.classList.add('taken', 'cruiser')
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
      displayGrid.classList.toggle('grid-display-vertical')
      if (isHorizontal) {
        isHorizontal = false
        return
      }else { //Está en vertical
        isHorizontal = true
        return
      }
    }

    function restartGrid() {
      //Limpiar el tablero
      userSquares.forEach(element => element.className = "")  //Borramos el tablero actual
      //userSquares.forEach(element => console.log(element.classList)) //Imprimimos las clases de cada uno de los recuadros
      
      //Limpiamos el tablero
      displayGrid.children.forEach(elem => displayGrid.removeChild(document.querySelector('#'+elem.id)))
      
      // displayGrid.removeChild(document.querySelector('#destroyer'))
      // displayGrid.removeChild(document.querySelector('#submarine'))
      // displayGrid.removeChild(document.querySelector('#cruiser'))
      // displayGrid.removeChild(document.querySelector('#battleship'))
      // displayGrid.removeChild(document.querySelector('#carrier'))

      //Y volvemos a meterlos todos
      displayGrid.appendChild(destroyer_saved)
      displayGrid.appendChild(submarine_saved)
      displayGrid.appendChild(cruiser_saved)
      displayGrid.appendChild(battleship_saved)
      displayGrid.appendChild(carrier_saved)

    }

    rotateButton.addEventListener('click', rotate)
    restartButton.addEventListener('click', restartGrid)
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
      console.log(draggedShip)
      let shipNameWithLastId = draggedShip.lastChild.id
      let shipClass = shipNameWithLastId.slice(0, -2)
      //console.log('Barco: ' + shipClass)
      let lastShipIndex = parseInt(shipNameWithLastId.substr(-1))
      let shipLastId = lastShipIndex + parseInt(this.dataset.id)
      const notAllowedHorizontal = [0,10,20,30,40,50,60,70,80,90,1,11,21,31,41,51,61,71,81,91,2,22,32,42,52,62,72,82,92,3,13,23,33,43,53,63,73,83,93]
      const notAllowedVertical = [99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60]
      
      let newNotAllowedHorizontal = notAllowedHorizontal.splice(0, 10 * lastShipIndex)
      let newNotAllowedVertical = notAllowedVertical.splice(0, 10 * lastShipIndex)

      //console.log('Cojo ' + selectedShipNameWithIndex)

      let selectedShipIndex = parseInt(selectedShipNameWithIndex.substr(-1))

      // console.log('selected ship index: ' + selectedShipIndex)
      // console.log('shiplastid: ' + shipLastId)
      if (isHorizontal){
        shipLastId = shipLastId - selectedShipIndex
      }else{
        shipLastId = shipLastId - (selectedShipIndex * width)
      }
      
      // console.log('Acaba: ' + shipLastId)
      // console.log('???: ' + this.dataset.id)

      let empty = isEmpty(isHorizontal, draggedShipLength, selectedShipIndex, parseInt(this.dataset.id))

      //console.log('Empty = ' + empty)

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
        computerSquares.forEach(square => square.addEventListener('click', function(){
          revealSquare(square)
          //console.log(e)
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
    /* background-color: yellow; */
    background-image: url('~@/assets/base_barcos.jpg');
  }

  .grid-display-vertical{
    width: 400px;
    height: 400px;
    margin: 20px;
    /* background-color: yellow; */
    background-image: url('~@/assets/base_barcos.jpg');
    display: flex;
  }

  .destroyer-container {
    width: 80px;
    height: 40px;
    background-image: url('~@/assets/barco_2.png');
    margin: 10px;
    display: flex;
  }

  .destroyer-container-vertical {
    width: 40px;
    height: 80px;
    background-image: url('~@/assets/barco_2-vert.png');
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
  }
  
  .destroyer {
    background-image: url('~@/assets/barco_2.png');
  }

  .submarine-container {
    width: 120px;
    height: 40px;
    background-image: url('~@/assets/barco_3.jpg');
    margin: 10px;
    display: flex;
  }

  .submarine-container-vertical {
    width: 40px;
    height: 120px;
    background-image: url('~@/assets/barco_3-vert.jpg');
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
  }

  .submarine{
    background-image: url('~@/assets/barco_3.jpg');
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
    flex-wrap: wrap;
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
    flex-wrap: wrap;
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
    flex-wrap: wrap;
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




  .row {
    display: flex;
  }

  .column {
    flex: 50%;
  }


</style>