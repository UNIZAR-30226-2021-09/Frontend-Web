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

                <!-- Fondo de oceano -->
                <div v-if="configuracion.tablero === 'Océano' || configuracion.tablero === 'Ocean'" class="grids-container ">
                  <div class="battleship-grid grid-user tablero-oceano-mio"></div>
                  <div class="battleship-grid grid-computer tablero-oceano-rival"></div>
                </div>

                <!-- Fondo de cesped -->
                <div v-if="configuracion.tablero === 'Césped' || configuracion.tablero === 'Grass'" class="grids-container ">
                  <div class="battleship-grid grid-user tablero-cesped"></div>
                  <div class="battleship-grid grid-computer tablero-cesped"></div>
                </div>

                <!-- Fondo de desierto -->
                <div v-if="configuracion.tablero === 'Desierto' || configuracion.tablero === 'Desert'" class="grids-container ">
                  <div class="battleship-grid grid-user tablero-desierto"></div>
                  <div class="battleship-grid grid-computer tablero-desierto"></div>
                </div>

                <!-- Fondo de especio -->
                <div v-if="configuracion.tablero === 'Espacio' || configuracion.tablero === 'Space'" class="grids-container ">
                  <div class="battleship-grid grid-user tablero-espacio"></div>
                  <div class="battleship-grid grid-computer tablero-espacio"></div>
                </div>

                <!-- Fondo de lava -->
                <div v-if="configuracion.tablero === 'Lava'" class="grids-container ">
                  <div class="battleship-grid grid-user tablero-lava"></div>
                  <div class="battleship-grid grid-computer tablero-lava"></div>
                </div>

                <div class="container hidden-info">
                  <div class="setup-buttons btn-group" id="setup-buttons">
                    <button id="start" @click="playGame" class="btn btn-outline-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                      Empezar partida
                    </button>
                    <button id="rotate" @click="rotate" class="btn btn-outline-primary" >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 18">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                      </svg>
                      Rotar los barcos
                    </button>
                    <button id="restart" @click="restartGrid" class="btn btn-outline-primary" >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-eraser-fill" viewBox="0 0 16 18">
                        <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"/>
                      </svg>
                      Quitar mis barcos
                    </button>
                  </div>
                  <h3 id="whose-go" class="info-text mt-3">Your Go</h3>
                  <h3 id="info" class="info-text"></h3>
                </div>

                <div class="container">
                  <!-- Pintamos los barcos azules -->
                  <div v-if="configuracion.barcos === 'Azul' || configuracion.barcos === 'Blue' " class="grid-display">
                    <div id="destroyer" class="ship destroyer-container barco-Azul" draggable="true"><div  id="destroyer-0"></div><div id="destroyer-1"></div></div>
                    <div id="submarine" class="ship submarine-container barco-Azul" draggable="true"><div id="submarine-0"></div><div id="submarine-1"></div><div id="submarine-2"></div></div>
                    <div id="cruiser" class="ship cruiser-container barco-Azul" draggable="true"><div id="cruiser-0"></div><div id="cruiser-1"></div><div id="cruiser-2"></div></div>
                    <div id="battleship" class="ship battleship-container barco-Azul" draggable="true"><div id="battleship-0"></div><div id="battleship-1"></div><div id="battleship-2"></div><div id="battleship-3"></div></div>
                    <div id="carrier" class="ship carrier-container barco-Azul" draggable="true"><div id="carrier-0"></div><div id="carrier-1"></div><div id="carrier-2"></div><div id="carrier-3"></div><div id="carrier-4"></div></div>
                  </div>

                  <!-- Pintamos los barcos rojos -->
                  <div v-if="configuracion.barcos === 'Rojo' || configuracion.barcos === 'Red' " class="grid-display">
                    <div id="destroyer" class="ship destroyer-container barco-Rojo" draggable="true"><div  id="destroyer-0"></div><div id="destroyer-1"></div></div>
                    <div id="submarine" class="ship submarine-container barco-Rojo" draggable="true"><div id="submarine-0"></div><div id="submarine-1"></div><div id="submarine-2"></div></div>
                    <div id="cruiser" class="ship cruiser-container barco-Rojo" draggable="true"><div id="cruiser-0"></div><div id="cruiser-1"></div><div id="cruiser-2"></div></div>
                    <div id="battleship" class="ship battleship-container barco-Rojo" draggable="true"><div id="battleship-0"></div><div id="battleship-1"></div><div id="battleship-2"></div><div id="battleship-3"></div></div>
                    <div id="carrier" class="ship carrier-container barco-Rojo" draggable="true"><div id="carrier-0"></div><div id="carrier-1"></div><div id="carrier-2"></div><div id="carrier-3"></div><div id="carrier-4"></div></div>
                  </div>

                  <!-- Pintamos los barcos verdes -->
                  <div v-if="configuracion.barcos === 'Verde' || configuracion.barcos === 'Green' " class="grid-display">
                    <div id="destroyer" class="ship destroyer-container barco-Verde" draggable="true"><div  id="destroyer-0"></div><div id="destroyer-1"></div></div>
                    <div id="submarine" class="ship submarine-container barco-Verde" draggable="true"><div id="submarine-0"></div><div id="submarine-1"></div><div id="submarine-2"></div></div>
                    <div id="cruiser" class="ship cruiser-container barco-Verde" draggable="true"><div id="cruiser-0"></div><div id="cruiser-1"></div><div id="cruiser-2"></div></div>
                    <div id="battleship" class="ship battleship-container barco-Verde" draggable="true"><div id="battleship-0"></div><div id="battleship-1"></div><div id="battleship-2"></div><div id="battleship-3"></div></div>
                    <div id="carrier" class="ship carrier-container barco-Verde" draggable="true"><div id="carrier-0"></div><div id="carrier-1"></div><div id="carrier-2"></div><div id="carrier-3"></div><div id="carrier-4"></div></div>
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
import {mapState} from 'vuex';
import useSound from 'vue-use-sound'
import bombSfx from '../assets/bomb.mp3'
import waterSfx from '../assets/water.mp3'
import dropSfx from '../assets/drop.mp3'


export default {
  setup() {
    const [bomb] = useSound(bombSfx, { volume: 0.3 })
    const [water] = useSound(waterSfx, { volume: 0.3 })
    const [drop] = useSound(dropSfx, { volume: 0.3 })
    return {
      bomb,
      water,
      drop
    }
  },
  name: 'Partida',
  computed:{
    ...mapState(['configuracion','host','partidaActual','contrincanteActual']), 
    color: function(){
      if (this.configuracion.color === "Azul" || this.configuracion.color === "Blue"){
        return "azul"
      }
      if (this.configuracion.color === "Rojo" || this.configuracion.color === "Red"){
        return "rojo" //<- orangered ?
      }
      if (this.configuracion.color === "Verde" || this.configuracion.color === "Green"){
        return "verde"
      }
      return "ERROR"

    },
    shipStyles: function(){
      return "background-color: this.color"
    },
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
          colocarFlota: true,

          //Variables de la lógica del juego
          userGrid: '',
          computerGrid: '',
          gridIdentifier: '',
          compGridIdentifier: '',

          displayGrid: '',
          ships: '',
          destroyer: '',
          submarine: '',
          cruiser: '',
          battleship: '',
          carrier: '',

          turnDisplay: '',

          destroyer_saved: '',
          submarine_saved: '',
          cruiser_saved: '',
          battleship_saved: '',
          carrier_saved: '',

          userSquares: [],
          computerSquares: [],
          isHorizontal: true,
          currentPlayer: 'user',

          width: 10,

          //Variables que nos servirán para guardar información relevante
          selectedShipNameWithIndex: '',
          draggedShip: [],
          draggedShipLength: '',

        }
  },
  methods: {
    //Game logic
    //Create Board
    createBoard: function (grid, squares, id) {
      for (let i = 0; i < this.width*this.width; i++) {
        const square = document.createElement('div')
        square.dataset.id = i
        //Hay que meterle el identificador interno que le pone vue al padre, porque sino no coge los estilos bien
        var t = document.createAttribute(id) 
        square.attributes.setNamedItem(t)
        //
        grid.appendChild(square)
        squares.push(square)
      }
    },
    //Función que pone algunos barquitos para ver si se pueden seleccionar bien
    createDebugBoard: function (grid, squares, id){
      for (let i = 0; i < this.width*this.width; i++) {
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
    },
    //Función para rotar los barcos
    rotate: function () {
      //console.log(this.draggedShip)
      console.log(this.configuracion.barcos)

      this.destroyer.classList.toggle('destroyer-container-vertical')
      this.submarine.classList.toggle('submarine-container-vertical')
      this.cruiser.classList.toggle('cruiser-container-vertical')
      this.battleship.classList.toggle('battleship-container-vertical')
      this.carrier.classList.toggle('carrier-container-vertical')
      this.displayGrid.classList.toggle('grid-display-vertical')
      if (this.isHorizontal) {
        this.isHorizontal = false
        return
      }else { //Está en vertical
        this.isHorizontal = true
        return
      }
    },
    restartGrid: function () {
      //Limpiar el tablero
      this.userSquares.forEach(element => element.className = "")  //Borramos el tablero actual
      //userSquares.forEach(element => console.log(element.classList)) //Imprimimos las clases de cada uno de los recuadros
      
      //Limpiamos el tablero
      this.displayGrid.children.forEach(elem => this.displayGrid.removeChild(document.querySelector('#'+elem.id)))
      
      // displayGrid.removeChild(document.querySelector('#destroyer'))
      // displayGrid.removeChild(document.querySelector('#submarine'))
      // displayGrid.removeChild(document.querySelector('#cruiser'))
      // displayGrid.removeChild(document.querySelector('#battleship'))
      // displayGrid.removeChild(document.querySelector('#carrier'))

      //Y volvemos a meterlos todos
      this.displayGrid.appendChild(this.destroyer_saved)
      this.displayGrid.appendChild(this.submarine_saved)
      this.displayGrid.appendChild(this.cruiser_saved)
      this.displayGrid.appendChild(this.battleship_saved)
      this.displayGrid.appendChild(this.carrier_saved)

    },

    revealSquare: function (square) {
       if(square.classList.contains('taken')){ //He clickado en una posición donde había un barco
        this.bomb()
        console.log('BOOM')
        square.classList.add('boom') //Marcamos que he acertado

       }else{
        this.water()
        square.classList.add('miss')
        console.log('miss~~')
       }
    },
    //Lógica del juego
    playGame: function () {
      if (this.currentPlayer === 'user'){
        this.turnDisplay.innerHTML = 'Mi turno'
        let self = this; //Para usar este this dentro de la función de flecha! :D (https://forum.vuejs.org/t/is-not-a-function/12444)
        this.computerSquares.forEach(square => square.addEventListener('click', function(){
          self.revealSquare(square)
        }))
      }
      if (this.currentPlayer === 'computer'){
        this.turnDisplay.innerHTML = 'Turno del rival'
      }
    },
    
    //Extra functions
    disparo: function(square){
      if(square.classList.contains('taken')){ //He clickado en una posición donde había un barco
        console.log('BOOM')
        square.classList.add('boom') //Marcamos que he acertado

      }else{
        square.classList.add('miss')
        console.log('miss~~')
      }
    }
  },
  mounted() {
    console.log('Entrando en la partida con id ' + this.partidaActual)
    console.log('Jugando contra ' + this.contrincanteActual)
    this.adversario = this.contrincanteActual

    this.userGrid = document.querySelector('.grid-user')
    this.computerGrid = document.querySelector('.grid-computer')
    this.gridIdentifier = this.userGrid.attributes.item(0).name
    this.compGridIdentifier = this.computerGrid.attributes.item(0).name
    // console.log('User grid:')
    // console.log(userGrid)
    // console.log('El identificador del grid del usuario es ' + gridIdentifier)

    this.displayGrid = document.querySelector('.grid-display')
    this.ships = document.querySelectorAll('.ship')
    this.destroyer = document.querySelector('.destroyer-container')
    this.submarine = document.querySelector('.submarine-container')
    this.cruiser = document.querySelector('.cruiser-container')
    this.battleship = document.querySelector('.battleship-container')
    this.carrier = document.querySelector('.carrier-container')
    
    this.turnDisplay = document.querySelector('#whose-go')

    //Nos guardamos los barcos por si hay que volverlos a poner en el grid inferior
    this.destroyer_saved = document.querySelector('#destroyer')
    this.submarine_saved = document.querySelector('#submarine')
    this.cruiser_saved = document.querySelector('#cruiser')
    this.battleship_saved = document.querySelector('#battleship')
    this.carrier_saved = document.querySelector('#carrier')

    // const infoDisplay = document.querySelector('#info')
    // const setupButtons = document.getElementById('setup-buttons')
        

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


  
    this.createBoard(this.userGrid, this.userSquares, this.gridIdentifier)
    this.createDebugBoard(this.computerGrid, this.computerSquares, this.compGridIdentifier)


    //A cada barco le asignamos la función dragStart si ocurre el evento de drag
    this.ships.forEach(ship => ship.addEventListener('dragstart', dragStart))
    //A los cuadraditos les asignamos todos los eventos necesarios
    this.userSquares.forEach(square => square.addEventListener('dragstart', dragStart))
    this.userSquares.forEach(square => square.addEventListener('dragover', dragOver))
    this.userSquares.forEach(square => square.addEventListener('dragenter', dragEnter))
    this.userSquares.forEach(square => square.addEventListener('dragleave', dragLeave))
    this.userSquares.forEach(square => square.addEventListener('drop', dragDrop))
    this.userSquares.forEach(square => square.addEventListener('dragend', dragEnd))

    let self = this; //Me guardo la instancia de this, porque al entrar en las funciones de abajo ésta cambia y 
    //  si no me lo guardara, no podría acceder a las funciones/datos de la vista.
    function dragStart() {
      //console.log(this)
      //Nos guardamos la información de qué barco estamos cogiendo y qué longitud tiene
      self.draggedShip = this
      self.draggedShipLength = this.childNodes.length
      //console.log(self.draggedShip)
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
          let element = self.userSquares[id - selectedShipIndex + i]
          if ((' ' + element.className + ' ').indexOf('taken') > -1) seems = false
        }
      }else{
        for (let i=0; i < dragLen; i++) {
          let element = self.userSquares[id - selectedShipIndex * i]
          if ((' ' + element.className + ' ').indexOf('taken') > -1) seems = false
        }
      }
      return seems

    }

    function dragDrop() {
      //console.log(self.draggedShip)
      let shipNameWithLastId = self.draggedShip.lastChild.id
      let shipClass = shipNameWithLastId.slice(0, -2)
      //console.log('Barco: ' + shipClass)
      let lastShipIndex = parseInt(shipNameWithLastId.substr(-1))
      let shipLastId = lastShipIndex + parseInt(this.dataset.id)
      const notAllowedHorizontal = [0,10,20,30,40,50,60,70,80,90,1,11,21,31,41,51,61,71,81,91,2,22,32,42,52,62,72,82,92,3,13,23,33,43,53,63,73,83,93]
      const notAllowedVertical = [99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60]
      
      let newNotAllowedHorizontal = notAllowedHorizontal.splice(0, 10 * lastShipIndex)
      let newNotAllowedVertical = notAllowedVertical.splice(0, 10 * lastShipIndex)

      //console.log('Cojo ' + selectedShipNameWithIndex)

      let selectedShipIndex = parseInt(self.selectedShipNameWithIndex.substr(-1))

      // console.log('selected ship index: ' + selectedShipIndex)
      // console.log('shiplastid: ' + shipLastId)
      if (self.isHorizontal){
        shipLastId = shipLastId - selectedShipIndex
      }else{
        shipLastId = shipLastId - (selectedShipIndex * self.width)
      }
      
      // console.log('Acaba: ' + shipLastId)
      // console.log('???: ' + this.dataset.id)

      let empty = isEmpty(self.isHorizontal, self.draggedShipLength, selectedShipIndex, parseInt(this.dataset.id))
      let colorBarco = 'barco-' + self.configuracion.barcos
      console.log('He dejado ' + shipClass)
      //console.log('Voy a pintar los barcos con la clase ' + colorBarco)
      //console.log('Empty = ' + empty)

      if (self.isHorizontal && !newNotAllowedHorizontal.includes(shipLastId) && empty) {
        self.drop()
        for (let i=0; i < self.draggedShipLength; i++) {
          // // let directionClass
          // // if (i === 0) directionClass = 'start'
          // // if (i === draggedShipLength - 1) directionClass = 'end'
          //Pintamos el barco en el tablero
          self.userSquares[parseInt(this.dataset.id) - selectedShipIndex + i].classList.add('taken', colorBarco)
        }
      //As long as the index of the ship you are dragging is not in the newNotAllowedVertical array! This means that sometimes if you drag the ship by its
      //index-1 , index-2 and so on, the ship will rebound back to the displayGrid.
      } else if (!self.isHorizontal && !newNotAllowedVertical.includes(shipLastId) && empty) {
        self.drop()
        for (let i=0; i < self.draggedShipLength; i++) {
          // let directionClass
          // if (i === 0) directionClass = 'start'
          // if (i === draggedShipLength - 1) directionClass = 'end'
          self.userSquares[parseInt(this.dataset.id) - selectedShipIndex + self.width*i].classList.add('taken', colorBarco)
        }
      } else return
      // console.log(userSquares)

      self.displayGrid.removeChild(self.draggedShip) //Quitamos el barco de abajo
      // if(!displayGrid.querySelector('.ship')) allShipsPlaced = true
    }

    function dragEnd() {
      // console.log('dragend')
    }


    //Para obtener los ids de los barcos que estamos cogiendo
    this.ships.forEach(ship => ship.addEventListener('mousedown', (e) => {
      this.selectedShipNameWithIndex = e.target.id
    }))

    this.playGame() //############################################################################################################################################################

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

  .barco-Azul{
    background-color: rgb(11, 148, 228);
  }

  .barco-Verde{
    background-color: rgb(75, 224, 75);
  }

  .barco-Rojo{
    background-color: rgb(207, 41, 41);
  }

  .tablero-oceano{
    background-image: url('~@/assets/oceano.jpg');
  }

  .tablero-oceano-mio{
    background-image: url('~@/assets/mapaMio.jpg');
  }

  .tablero-oceano-rival{
    background-image: url('~@/assets/mapaRival.jpg');
  }

  .tablero-cesped{
    background-image: url('~@/assets/cesped.jpg');
  }

  .tablero-lava{
    background-image: url('~@/assets/lava.jpg');
  }

  .tablero-espacio{
    background-image: url('~@/assets/espacio.jpg');
  }

  .tablero-desierto{
    background-image: url('~@/assets/desierto.jpg');
  }

  .grid-user {
    width: 400px;
    height: 400px;
    display: flex; /* Esto sirve para que los cuadraditos estén juntos */
    flex-wrap: wrap;
    /* background-color: lightblue; */
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
    /* background-color: lightgreen; */
    /* background-image: url('~@/assets/oceano.jpg'); */
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
    /* background-color: orange; */
    margin: 10px;
    display: flex;
  }

  .destroyer-container-vertical {
    width: 40px;
    height: 80px;
    /* background-color: orange; */
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
  }
  
  /* .destroyer {
    background-color: orange;
  } */

  .submarine-container {
    width: 120px;
    height: 40px;
    /* background-color: pink; */
    margin: 10px;
    display: flex;
  }

  .submarine-container-vertical {
    width: 40px;
    height: 120px;
    /* background-color: pink; */
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
  }

  /* .submarine{
    background-color: pink;
  } */

  .cruiser-container {
    width: 120px;
    height: 40px;
    /* background-color: purple; */
    margin: 10px;
    display: flex;
  }

  .cruiser-container-vertical {
    width: 40px;
    height: 120px;
    /* background-color: purple; */
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
  }

  /* .cruiser {
    background-color: purple;
  } */

  .battleship-container {
    width: 160px;
    height: 40px;
    /* background-color: aqua; */
    margin: 10px;
    display: flex;
  }

  .battleship-container-vertical {
    width: 40px;
    height: 160px;
    /* background-color: aqua; */
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
  }

  /* .battleship {
    background-color: aqua;
  } */

  .carrier-container {
    width: 200px;
    height: 40px;
    /* background-color: green; */
    margin: 10px;
    display: flex;
  }

  .carrier-container-vertical {
    width: 40px;
    height: 200px;
    /* background-color: green; */
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
  }

  /* .carrier {
    background-color: green;
  } */

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