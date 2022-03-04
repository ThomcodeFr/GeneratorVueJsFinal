<template>
  <div id="app">
    <div class="background">
      <Presentation />
      <Trombi />
      <Localisation />
    </div>
  </div>
</template>

<script>
import Presentation from '../pages/about/Presentation.vue'
import Trombi from '../pages/about/Trombi.vue'
import  Localisation from '../pages/about/Localisation.vue'

export default {
  name: 'App',
  components: {
    Presentation,
    Trombi,
    Localisation
  },
}
</script>

<style>
@media screen and (max-width: 640px) {
  #team-infos {
    display: flex;
    flex-direction: column;
  }

  h1 {
    text-align: center;
  }

  .title-font {
    color: rgb(193, 162, 109);
    text-align: center;
    font-size: 30px;
  }

  #team img {
    height: 60px;
    width: 60px;
    border-radius: 90%;
    border: 3px solid rgb(193, 162, 109);
    filter: grayscale(1);
  }

  #team img:hover {
    filter: grayscale(0);
  }

  .presentation {
    margin: 0;
  }

  .presentation p {
    margin: 0 2%;
  }

  #localisation {
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
  }

  #adress {
    margin: auto;
    padding-bottom: 10px;
  }

  .map-configuration {
    width: auto;
    height: auto;
  }
}

</style>
