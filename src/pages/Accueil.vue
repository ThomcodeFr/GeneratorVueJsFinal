<template>
  <div class="accueil">
    <h1>Accueil</h1>
  </div>
  <div class="background"></div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // Props : si on prends les paramètres de App pour l'afficher dans un components (alors que normalement c'est l'inverse)
  props: {
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
  /*   C'est moche, à bosser*/
  height: 500px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
