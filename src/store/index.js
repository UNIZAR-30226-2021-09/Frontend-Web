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
      fotoUsuario: '',
      listaAmigos: [
          {nombre: 'Amigo1'},
          {nombre: 'Amigo2'},
          {nombre: 'Amigo3'},
          {nombre: 'Amigo4'},
          {nombre: 'Amigo5'}
      ],
      puntos: '0',
      partidas:[
        {contrincante: 'a1', resultado: 'Victoria', codigo: 111},
        {contrincante: 'a2', resultado: 'Derrota', codigo: 112},
        {contrincante: 'a3', resultado: 'Victoria', codigo: 113}
      ],
      pendientes:[
        {contrincante: 'a1', codigo: 111},
        {contrincante: 'a2', codigo: 112},
        {contrincante: 'a3', codigo: 113}
      ],
      peticionesRecibidas: [
        {nombre: 'roberto_jose'},
        {nombre: 'algo123'},
        {nombre: 'easyGame'}
      ],
      partidasEnCurso: [
        {rival: 'fulanito', turno: 'Usuario1'},
        {rival: 'fulanito', turno: 'fulanito'},
        {rival: 'fulanito', turno: 'Usuario1'}
      ]
      
    },
    clasificacion:[
      {nombre: 'alguien', puntos: 100},
      {nombre: 'Usuario1', puntos: 80},
      {nombre: 'tercero', puntos: 50},
      {nombre: 'amigo4', puntos: 20},
    ],
    amigoDesafiado: 'default'
  },
  mutations: {

    initialiseStore() {
      console.log(this.nombreUsuario);
    },
    setDesafiado(state, nombre){
      state.amigoDesafiado = nombre
    },
    anyadirAmigo(state,name){
      state.perfil.listaAmigos.push({nombre: name, estado: 'No conectado'});
    },
    getToken(state){
      return state.perfil.token;
    },
    setToken(state, newToken){
      state.perfil.token = newToken
    },
    setPerfil(state,nombreUsuario,email,amigos,solicitudesEntrantes,solicitudesSalientes,accessToken,historial){
      console.log('4545');
      state.perfil.nombreUsuario=nombreUsuario;
      state.perfil.email = email;
      state.perfil.listaAmigos = amigos + [];
      state.perfil.peticionesRecibidas = solicitudesEntrantes + [];
      state.perfil.pendientes = solicitudesSalientes + [];
      state.perfil.token = accessToken;
      state.perfil.partidas = historial;
    },

    
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
