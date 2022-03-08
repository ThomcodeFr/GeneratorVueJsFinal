<template>
  <div>
    <!-- <header /> est un component, cela peut être un template ou une fonctionnalité ou les deux -->
    <!-- App gère le routage -->
    <Header />
    <Master />
    <!-- Au clic tu dois lancer la fonction say , avec à l'intérieur le mot : accueil (qui contient un message) -->
    <!-- say = méthod, quand c'est du calcul c'est computed -->
    <button v-on:click="say('accueil')">Accueil</button>
    <button v-on:click="say('apropos')">A propos</button>
    <button v-on:click="say('mentionLegale')">Mention Légale</button>
    <button v-on:click="say('connexion')">Connexion</button>

    <Accueil v-if="pageMenu == 'accueil'" />
    <Apropos v-if="pageMenu == 'apropos'" />
    <MentionLegale v-if="pageMenu == 'mentionLegale'" />
    <Formulaire v-if="pageMenu == 'formulaire'" />
    <Connexion v-if="pageMenu == 'connexion'" />
    <Footer />
  </div>
</template>

<script>
import Master from './pages/Master.vue'
import Accueil from './pages/Accueil.vue'
import Apropos from './pages/Apropos.vue'
import MentionLegale from './pages/MentionLegale.vue'
import Connexion from './pages/Connexion.vue'
import Header from './template/Header'
import Footer from './template/Footer'
import Formulaire from './pages/Formulaire'
import { mapState } from 'vuex'

// export default contient tout le fonctionnement de la partie script
// components est important, car au sein d'un même fichier on peut avoir plusieurs compenents différents
export default {
  name: 'App',
  components: {
    Accueil,
    Apropos,
    MentionLegale,
    Connexion,
    Master,
    Header,
    Footer,
    Formulaire,
  },
  data() {
    return {
      pageMenu: 'accueil',
      plop: '',
    }
  },

  //Ecoute les valeurs qui changent
  computed: {
    ...mapState(['pseudo']),
  },

  methods: {
    say: function (message) {
      //this -> C'est une variable définie dans cet espace du code
      this.pageMenu = message
    },
  },

  //Surveille si la valeur change
  watch: {
    pseudo: function (nouveauPseudo) {
      // if(this.pseudo!="") ==> if(this.pseudo)
      if (nouveauPseudo != '') {
        this.pageMenu = 'formulaire'
      }
    },
  },
}
</script>

<style>
h1 {
  color: rgb(193, 162, 109);
}

h2 {
  margin-top: 10px;
}

#app {
  font-family: 'Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.background {
  background: url('./assets/network.jpg');
  max-height: auto;
}

#footer p {
  color: black;
  text-align: center;
}
</style>
