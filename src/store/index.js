import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nombreUsuario: 'Usuario1',
    fotoUsuario: '',
    listaAmigos: [
        {nombre: 'Amigo1'},
        {nombre: 'Amigo2'}
    ],
    amigoDesafiado: ''
  },
  mutations: {
    setAmigoDesafiado(state){
      state.amigoDesafiado = 'amigo cambiado'
      console.log(state.amigoDesafiado)
    }
  },
  actions: {
  },
  modules: {
  }
})
