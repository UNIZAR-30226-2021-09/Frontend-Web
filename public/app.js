const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Log in',
        correo: '',
        contrasena: '',
        esEnviado: false,
        correoInvalido: false
    },

    methods:{
        enviarDatos: function(){
            console.log('click :)', this.correo, ' - ' , this.contrasena)
            this.correo = ""
            this.contrasena = ""
            this.esEnviado = true
            var divideAt = this.correo.split('@')
            var divideDot = this.correo.split('.')
            console.log(divideAt.length)
            if(divideAt.length === 1 || divideDot.length === 1){
                this.correoInvalido = false
            }


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