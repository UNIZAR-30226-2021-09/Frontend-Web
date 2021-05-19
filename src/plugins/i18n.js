import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)



const messages = {
    es: {
      boton: {
        iniciarSesion: 'Iniciar sesion',
        registrarse:'Registrarse',
        enviar: 'Enviar',
        inicio: 'Inicio',
        idioma: 'Idioma',
        aceptar: 'Aceptar',
        rechazar: 'Rechazar',
        buscarContrincante: 'Buscar contrincante',
        enviarInvitacion: 'Enviar invitacion',
        reiniciar: 'Reiniciar',
        crearTorneo: 'Crear torneo',
        colocarBarcos: 'Colocar barcos',
        continuarPartida: 'Continuar partida',
        verClasificacion: 'Ver posicion en la clasificacion',
        compartirPerfil: 'Compartir perfil',
        historialPartidas: 'Historial de partidas',
        volverTutorial: 'Volver a ver el tutorial',
        verPartida: 'Ver partida'
      },
      navbar: {
          nuevaPartida: 'Partida contra la IA',
          partidaCiegas: 'Partida a ciegas',
          desafiarAmigo: 'Desafiar amigo',
          torneo: 'Torneo',
          partidasEnCurso: 'Partidas en curso',
          perfil: 'Perfil',
          cerrarSesion: 'Cerrar sesión',
          agregarAmigo: 'Agregar amigo'
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
          errorExisten: 'El nombre de usuario o el correo ya existen',
          explicacionCiegas: 'Busca una nueva partida contra un usuario aleatorio. Una vez se cree la partida, se añadirá automáticamente a tu lista de partidas',
          exlicarDesafiar: 'Selecciona un amigo de tu lista para jugar una partida contra él',
          explicarTorneo: 'Crea un torneo con otros 3 amigos',
          explicarPartidasCurso: 'Visualiza las partidas que tienes actualmente abiertas',
          explicarPartidaIA: 'Juega una partida contra el ordenador. Estas partidas no modificarán tus puntos',
          invitaJugador: 'Invita a un jugador...',
          errorDesafiar: 'Ha ocurrido un error, vuélvelo a intentar más tarde.',
          seleccionaAmigo: 'Selecciona un amigo al que desafiar',
          vasInvitar: 'Vas a invitar a ',
          hasDesafiado1: 'Has desafiado a  ',
          hasDesafiado2: '. Se añadirá la partida a la lista de partidas en curso cuando se acepte.',
          participantes: 'Participantes'
      },
      listaAmigos:{
          peticionesRecibidas: 'Peticiones de amistad recibidas',
          peticionesEnviadas:'Peticiones de amistad enviadas',
          desafiosRecibidos: 'Desafíos amistosos recibidos',
          amigos: 'Amigos',
          noRecibidas: 'No has recibido peticiones',
          noEnviadas: 'No has enviado peticiones',
          noAmigos: 'Aún no has añadido a ningún amigo',
          miPerfil: 'Mi Perfil'
      },
      partidasCurso:{
          ciegas: 'Partidas a ciegas',
          noCiegas: 'Actualmente no tienes partidas a ciegas en curso.',
          amigos: 'Partidas vs amigos',
          noAmigos: 'Actualmente no tienes partidas contra amigos en curso.',
          torneos: 'Partidas de torneos',
          noTorneos: 'Actualmente no tienes partidas de torneos en curso.',
          IA: 'Partidas vs IA',
          noIA: 'Actualmente no tienes partidas contra la IA en curso.',
          partidaContra1: 'Partida contra ',
          partidaContra2: ', esperando a movimiento del contrincante',
      },
      perfil:{
        partidasJugadas: 'Partidas jugadas',
        ganadas: 'Ganadas',
        perdidas: 'Perdidas',
        torneos: 'Torneos ganados',
        proporcion: 'Proporcion de victorias: ',
        noExisten: 'No existen datos para calcular',
        puntos: 'Puntos de clasificacion'
      },
      configuracion:{
        configuracion: 'Configuracion',
        colorBarcos: 'Color de los barcos',
        azul: 'Azul',
        rojo: 'Rojo',
        verde: 'Verde',
        colorTablero: 'Color del tablero',
        oceano: 'Oceano',
        desierto: 'Desierto',
        cesped: 'Cesped',
        espacio: 'Espacio',
        lava: 'Lava',
        IdiomaWeb: 'Idioma',
      }
    },
    en: {
      boton: {
        iniciarSesion: 'Login',
        registrarse: 'Sign up',
        enviar: 'Send',
        inicio: 'Home',
        idioma: 'Language',
        aceptar: 'Acept',
        rechazar: 'Reject',
        buscarContrincante: 'Search for opponent',
        enviarInvitacion: 'Send invitation',
        reiniciar: 'Restart',
        crearTorneo: 'Create tournament',
        colocarBarcos: 'Place ships',
        continuarPartida: 'Continue game',
        verClasificacion: 'See position in the ranking',
        compartirPerfil: 'Share profile',
        historialPartidas: 'Game history',
        volverTutorial: 'Watch the tutorial again',
        verPartida: 'See game'
      },
      navbar: {
        nuevaPartida: 'Game against AI',
        partidaCiegas: 'Blind game',
        desafiarAmigo: 'Challenge friend',
        torneo: 'Tournament',
        partidasEnCurso: 'Game list',
        perfil: 'Profile',
        cerrarSesion: 'Log out',
        agregarAmigo: 'Add friend'
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
        errorExistem : 'Username or email already exists',
        explicacionCiegas: 'Search for a new match against a random user. Once the game is created, it will be automatically added to your game list',
        exlicarDesafiar: 'Select a friend from your list to play a game against him',
        explicarTorneo: 'Create a tournament with 3 other friends',
        explicarPartidasCurso: 'View the games that you currently have open',
        explicarPartidaIA: 'Play a game against the computer. These games will not modify your points',
        invitaJugador: 'Invite a player ...',
        errorDesafiar: 'An error has occurred, please try again later.',
        seleccionaAmigo: 'Select a friend to challenge',
        vasInvitar: 'You are going to invite ',
        hasDesafiado1: 'You have challenged ',
        hasDesafiado2: '. The game will be added to your current games list when the opponent accepts it.',
        participantes: 'Participants',
        

      },
      listaAmigos:{
          peticionesRecibidas: 'Friend requests received',
          peticionesEnviadas:'Friend requests sent',
          desafiosRecibidos: 'Incoming friend challenges',
          amigos: 'Friends',
          noRecibidas: 'You have not received requests',
          noEnviadas: 'You have not sent requests',
          noAmigos: 'You have not added any friends yet',
          miPerfil: 'My Profile'
      },
      partidasCurso:{
        ciegas: 'Blind games',
        noCiegas: 'You have no blind games in progress.',
        amigos: 'Games vs friends',
        noAmigos: 'You have no games vs friends in progress.',
        torneos: 'Games of tournaments',
        noTorneos: 'You have no tournaments in progress.',
        IA: 'Games vs IA',
        noIA: 'You have no games vs IA in progress.',
        partidaContra1: 'Game against ',
        partidaContra2: ', waiting for the opponent\'s move',
    },
    perfil:{
      partidasJugadas: 'Games played',
      ganadas: 'Games won',
      perdidas: 'Games lost',
      torneos: 'Tournaments won',
      proporcion: 'Win ratio: ',
      noExisten: 'There are no data to calculate',
      puntos: 'Clasification points'
    },
    configuracion:{
      configuracion: 'Configuration',
      colorBarcos: 'Color of the ships',
      azul: 'Blue',
      rojo: 'Red',
      verde: 'Green',
      colorTablero: 'Board color',
      oceano: 'ocean',
      desierto: 'desert',
      cesped: 'grass',
      espacio: 'space',
      lava: 'wash',
      IdiomaWeb: 'Lenguage',
    }
    }
}

export const i18n = new VueI18n({
    locale: window.navigator.language.split('-')[0],
    fallbackLocale: 'en',
    messages
  })