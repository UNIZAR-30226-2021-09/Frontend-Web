import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    perfil:{
      nombreUsuario: 'Usuario1',
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
      peticionesEnviadas: [
        {nombre: 'pepe'},
        {nombre: 'ship_killer'},
        {nombre: 'repollo'}
      ],
      peticionesRecibidas: [
        {nombre: 'roberto_jose'},
        {nombre: 'algo123'},
        {nombre: 'easyGame'}
      ]
      
    },
    clasificacion:[
      {nombre: 'alguien'},
      {nombre: 'Usuario1'},
      {nombre: 'tercero'},
      {nombre: 'amigo4'},
    ],
    amigoDesafiado: 'default'
  },
  mutations: {
    setDesafiado(state, nombre){
      state.amigoDesafiado = nombre
    },
    anyadirAmigo(state,name){
      state.perfil.listaAmigos.push({nombre: name, estado: 'No conectado'});
    }
  },
  actions: {
  },
  modules: {
  }
})
