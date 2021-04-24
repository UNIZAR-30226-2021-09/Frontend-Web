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
    // host: 'localhost:3000',
    perfil:{
      nombreUsuario: '',
      email: '',
      token: '',
      listaAmigos: [
          // {nombre: 'Amigo1'},
          // {nombre: 'Amigo2'},
          // {nombre: 'Amigo3'},
          // {nombre: 'Amigo4'},
          // {nombre: 'Amigo5'}
      ],
      puntos: '-1',
      partidas:[
        // {contrincante: 'a1', resultado: 'Victoria', codigo: 111},
        // {contrincante: 'a2', resultado: 'Derrota', codigo: 112},
        // {contrincante: 'a3', resultado: 'Victoria', codigo: 113}
      ],
      pendientes:[
        // {contrincante: 'a1', codigo: 111},
        // {contrincante: 'a2', codigo: 112},
        // {contrincante: 'a3', codigo: 113}
      ],
      peticionesRecibidas: [
        // {nombre: 'roberto_jose'},
        // {nombre: 'algo123'},
        // {nombre: 'easyGame'}
      ],
      partidasEnCurso: [
         //{contrincante: 'fulanito', tipo: 'amistoso', id: '1', turno: 'adrian'},
         //{contrincante: 'fulanito', tipo: 'amistoso', id: '2',  turno: 'fulanito'},
         //{contrincante: 'fulanito', tipo: 'amistoso', id: '3', turno: 'adrian'}
      ]
      
    },
    clasificacion:[
       {nombre: 'alguien', puntos: 100},
       {nombre: 'Usuario1', puntos: 80},
       {nombre: 'tercero', puntos: 50},
       {nombre: 'amigo4', puntos: 20},
    ],
    amigoDesafiado: ''
  },
  mutations: {

    initialiseStore(state) {
      console.log("Nombre de usuario: " + state.perfil.nombreUsuario);
    },
    setDesafiado(state, nombre){
      state.amigoDesafiado = nombre
    },
    anyadirAmigo(state,name){
      state.perfil.listaAmigos.push({nombre: name, estado: 'No conectado'});
    },
    //______________________________SETTERS______________________________
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
    setEntrantes(state, newEntrantes){
      // console.log("Actualizando entrantes: " + newEntrantes)
      state.perfil.peticionesRecibidas = newEntrantes
    },
    setSalientes(state, newSalientes){
      // console.log("Actualizando salientes: " + newSalientes)
      state.perfil.pendientes = newSalientes
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
