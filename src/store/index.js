import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    host: 'https://proyecto-software-09.herokuapp.com',
    // host: 'localhost:3000',
    perfil:{
      nombreUsuario: 'Usuario1',
      token: '',
      fotoUsuario: '',
      listaAmigos: [
          {nombre: 'Amigo1' , estado: 'Conectado'},
          {nombre: 'Amigo2' , estado: 'No conectado'},
          {nombre: 'Amigo3' , estado: 'No conectado'},
          {nombre: 'Amigo4' , estado: 'Conectado'},
          {nombre: 'Amigo5' , estado: 'Conectado'}
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
    amigoDesafiado: 'default',
  },
  mutations: {
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
    }
  },
  getters:{
    getToken: state => {
      return state.perfil.token
    }
  },
  actions: {
  },
  modules: {
  }
})
