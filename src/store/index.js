import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nombreUsuario: 'Usuario1',
    fotoUsuario: '',
    listaAmigos: [
        {nombre: 'Amigo1' , estado: 'Conectado'},
        {nombre: 'Amigo2' , estado: 'No conectado'},
        {nombre: 'Amigo3' , estado: 'No conectado'},
        {nombre: 'Amigo4' , estado: 'Conectado'},
        {nombre: 'Amigo5' , estado: 'Conectado'}
    ],
    amigoDesafiado: ''
  },
  mutations: {
    setDesafiado(state, nombre){
      state.amigoDesafiado = nombre
    }
  },
  actions: {
  },
  modules: {
  }
})
