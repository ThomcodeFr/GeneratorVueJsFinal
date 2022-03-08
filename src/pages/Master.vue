<template>
  <div>
    <!--     <h2> Bonjour {{ pseudo }} !</h2>
    <h2> Pour rappel, votre mdp est {{ password }} !</h2> -->
    <!--  {{ variable }} ce qui s'affiche entre moustaches c'est la variable -->
  </div>
</template>

<script>
// mapState récupère la donnée pseudo qui est dans le store 
import { mapState } from 'vuex'

export default {
  name: 'Master',

  computed: {
    ...mapState(['pseudo']),
    ...mapState(['password']),
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
