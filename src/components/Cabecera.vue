<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary w-100 p-3">
      <a class="navbar-brand" href="/">Batalla Naval</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="login">Log-in</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="signin">Sign-in</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="inicio">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="ciegas">Ciegas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="perfil">Perfil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="agregarAmigo">Agregar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="desafiar">Desafiar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="amigoDesafiado">Desafiado</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link disabled" href="#">TODO #1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">TODO #2</a>
          </li> -->

          <!-- <ListaAmigos/> -->
          

        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
//import ListaAmigos from '@/components/ListaAmigos.vue'

export default {
  name: 'Cabecera',
  components: {
    //ListaAmigos
  }
}
</script>

<style>

</style>