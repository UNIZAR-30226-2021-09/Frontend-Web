const app = new Vue({
    el: '#sign_in',
    data: {
        titulo: 'Sign in',
        correo: '',
        contrasena: '',
        rep_contrasena: ''

    },

    methods:{
        registrarse(){
            //si el nombre de usuario esta disponible
                //si las contraseñas son iguales
                    //introducir los datos en la base de datos
                //sino informamos del error recargando la pagina
            //sino informamos del error recargando la pagina
        }


    }

})

String.prototype.hashCode = function() {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr   = this.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };