import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)



const messages = {
    es: {
      boton: {
        iniciarSesion: 'Iniciar sesion',
        registrarse:'Registrarse',
        inicio: 'Inicio',
        idioma: 'Idioma',
        aceptar: 'Aceptar',
        rechazar: 'Rechazar'
      },
      navbar: {
          nuevaPartida: 'Nueva partida',
          partidaCiegas: 'Partida a ciegas',
          desafiarAmigo: 'Desafiar amigo',
          torneo: 'Torneo',
          partidasEnCurso: 'Partidas en curso',
          perfil: 'Perfil',
          cerrarSesion: 'Cerrar sesión'
      },
      placeHolder:{
          nombre: 'Nombre de usuario',
          contrasenya: 'Contraseña de usuario',
          correo: 'Correo de usuario',
          repcontrasenya: 'Repetir contraseña de usuario',
      },
      mensaje:{
          noTienesCuenta: '¿No tienes cuenta?',
          yaTienesCuenta: '¿Ya tienes cuenta?',
          registrate: '¡Regístrate!',
          identificate: '¡Identificate!',
          enviado: 'Enviado!',
          enviando: 'Enviando datos...',
          noCoinciden: 'El usuario y la contraseña no coinciden.',
          noCoincidenContrasenya: 'Las contraseñas no coinciden',
          errorExisten: 'El nombre de usuario o el correo ya existen'
      },
      listaAmigos:{
          peticionesRecibidas: 'Peticiones de amistad recibidas',
          peticionesEnviadas:'Peticiones de amistad enviadas',
          amigos: 'Amigos',
          noRecibidas: 'No has recibido peticiones',
          noEnviadas: 'No has enviado peticiones',
          noAmigos: 'Aún no has añadido a ningún amigo',
          miPerfil: 'Mi Perfil'
      }
    },
    en: {
      boton: {
        iniciarSesion: 'Login',
        registrarse: 'Sign up',
        inicio: 'Home',
        idioma: 'Language',
        aceptar: 'Acept',
        rechazar: 'Reject'
      },
      navbar: {
        nuevaPartida: 'New game',
        partidaCiegas: 'Blind game',
        desafiarAmigo: 'Challenge friend',
        torneo: 'Tournament',
        partidasEnCurso: 'Games in progress',
        perfil: 'Profile',
        cerrarSesion: 'Log out'
      },
      placeHolder:{
        nombre: 'User name',
        contrasenya: 'User password',
        repcontrasenya: 'Repeat user password',
        correo: 'User mail'
      },
      mensaje:{
        noTienesCuenta: 'You do not have an account?',
        yaTienesCuenta: 'Do you already have an account?',
        registrate: 'Sign up!',
        identificate: 'Log in!',
        enviado: 'Sent!',
        enviando: 'Sending data...',
        noCoinciden: 'The username and password do not match.',
        noCoincidenContrasenya: 'Passwords do not match',
        errorExistem : 'Username or email already exists'
      },
      listaAmigos:{
          peticionesRecibidas: 'Friend requests received',
          peticionesEnviadas:'Friend requests sent',
          amigos: 'Friends',
          noRecibidas: 'You have not received requests',
          noEnviadas: 'You have not sent requests',
          noAmigos: 'You have not added any friends yet',
          miPerfil: 'My Profile'
      }
    }
}

export const i18n = new VueI18n({
    locale: window.navigator.language.split('-')[0],
    fallbackLocale: 'en',
    messages
  })