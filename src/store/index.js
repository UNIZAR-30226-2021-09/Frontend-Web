import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
    host: 'https://proyecto-software-09.herokuapp.com',
    //host: 'localhost:3001',
    perfil:{
      nombreUsuario: '',
      email: '',
      token: '',
      listaAmigos: [
           {nombre: 'Amigo1'},
           {nombre: 'Amigo2'},
           {nombre: 'Amigo3'},
           {nombre: 'Amigo4'},
           {nombre: 'Amigo5'}
      ],
      puntos: '-1',
      partidas:[
        // {contrincante: 'a1', resultado: 'Victoria', codigo: 111},
        // {contrincante: 'a2', resultado: 'Derrota', codigo: 112},
        // {contrincante: 'a3', resultado: 'Victoria', codigo: 113}
      ],
      peticionesRecibidas: [
        // {nombre: 'roberto_jose'},
        // {nombre: 'algo123'},
        // {nombre: 'easyGame'}
      ],
      peticionesEnviadas: [
        // {nombre: 'roberto_jose'},
        // {nombre: 'algo123'},
        // {nombre: 'easyGame'}
      ],
      desafiosRecibidos: [

      ],
      partidasEnCurso: [
         //{contrincante: 'fulanito', tipo: 'amistoso', id: '1', turno: 'adrian'},
         //{contrincante: 'fulanito', tipo: 'amistoso', id: '2',  turno: 'fulanito'},
         //{contrincante: 'fulanito', tipo: 'amistoso', id: '3', turno: 'adrian'}
      ]
      
    },
    clasificacion:[
       //{nombre: 'alguien', puntos: 100},
       //{nombre: 'Usuario1', puntos: 80},
       //{nombre: 'tercero', puntos: 50},
       //{nombre: 'amigo4', puntos: 20},
    ],
    amigoDesafiado: '',
    usuarioBuscado: '',
    configuracion:{
      idioma: 'es',
      barcos: 'Azul',
      tablero: 'Océano'
    },
    partidaActual: '', //aquí se guardará el id de la partida en la que se encuentra el usuario (para poder hacer las peticiones)
    contrincanteActual: '', //aquí se guardará el nombre del contrincante de la partida en la que se encuentra el usuario
    turnoActual: '',
  },
  mutations: {

    initialiseStore(state) {
      console.log("Nombre de usuario: " + state.perfil.nombreUsuario);
    },
    setDesafiado(state, nombre){
      //console.log("He desafiado a " + nombre)
      state.amigoDesafiado = nombre
    },
    anyadirAmigo(state,name){
      state.perfil.listaAmigos.push({nombre: name, estado: 'No conectado'});
    },
    resetToken(state){
      state.perfil.token = ''
    },
    //______________________________SETTERS______________________________
    setPerfilUndefined(state){
      state.perfil = undefined
    },
    setNombreUsuario(state, newNombreUsuario){
      // console.log("Actualizando nombre de usuario: " + newNombreUsuario)
      state.perfil.nombreUsuario = newNombreUsuario
    },
    setEmail(state, newEmail){
      // console.log("Actualizando email: " + newEmail)
      state.perfil.email = newEmail
    },
    setAmigos(state, newAmigos){
      // console.log("Actualizando lista de amigos: " + newAmigos)
      state.perfil.listaAmigos = newAmigos
    },
    setEntrantes(state, newRecibidas){
      // console.log("Actualizando entrantes: " + newEntrantes)
      state.perfil.peticionesRecibidas = newRecibidas
    },
    setSalientes(state, newEnviadas){
      // console.log("Actualizando salientes: " + newSalientes)
      state.perfil.peticionesEnviadas = newEnviadas
    },
    setDesafios(state, newDesafios){
      state.perfil.desafiosRecibidos = newDesafios
    },
    setToken(state, newToken){
      // console.log("Actualizando token: " + newToken)
      state.perfil.token = newToken
    },
    setHistorial(state, newHistorial){
      // console.log("Actualizando historial: " + newHistorial)
      state.perfil.partidas = newHistorial
    },
    setPuntos(state, newPuntos){
      // console.log("Actualizando puntos: " + newPuntos)
      state.perfil.puntos = newPuntos
    },
    setPartidas(state, newPartidas){
      // console.log("Actualizando partidas: " + newPartidas)
      state.perfil.partidasEnCurso = newPartidas
    },
    setClasificacion(state,newClasificacion){
      state.clasificacion = newClasificacion;
    },
    setUsuarioBuscado(state,user){
      state.usuarioBuscado = user;
    },
    setColor(state, newColor){
      state.configuracion.barcos = newColor
    },
    setTablero(state, newTablero){
      state.configuracion.tablero = newTablero
    },
    setIdioma(state, newIdioma){
      state.configuracion.idioma = newIdioma
    },
    setPartidaActual(state, newPartida){
      state.partidaActual = newPartida
    },
    setContrincanteActual(state, newContrincante){
      state.contrincanteActual = newContrincante
    },
    setTurnoActual(state, newTurno){
      state.turnoActual = newTurno
    },
    //______________________________GETTERS______________________________
    getToken(state){
      return state.perfil.token;
    },
    imprimePerfil(state){
      console.log("Imprimiendo información actual del perfil...")
      console.log(state.perfil)
    }

    
  },
  getters:{
    getToken: state => {
      return state.perfil.token;
    },
    getNombre: state => {
      return state.perfil.nombreUsuario;
    },
    getPerfil: state => {
      return state.perfil;
    }
  },
  actions: {
  },
  modules: {
  }
})
