<template>
  <h1>Connexion</h1>

  <section id="connexionStyle">
    <div class="background">
      <input v-model="pseudo" placeholder="Entrez votre pseudo" /> <br />
      <br />
      <input
        type="password"
        v-model="password"
        placeholder="Entrez votre mot de passe"
      />
      <br />
      <br />
      <button @click="saveConnexion">Connexion</button>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
//mapMutations = permet de crer une mutation des datas dans le store, comme c'est une constante, je ne peux pas la modifier sans mutation

export default {
  name: 'ConnexionForm',
  data: function () {
    return {
      pseudo: '',
      pseudojuste: 'p',
      password: '',
    }
  },

  methods: {
    //pour muter, il faut rajouter set.
    ...mapMutations(['setPseudo']),
    ...mapMutations(['setPassword']),
    saveConnexion() {
      if (
        this.pseudo == this.pseudojuste &&
        this.password == this.pseudojuste
      ) {
        alert('Bienvenue ! ')
        this.setPassword(this.password)
        this.setPseudo(this.pseudo)
      } else {
        alert('Utilisateur ou mot de passe inconnu')
      }
    },
  },
}
</script>

<style scoped>
.background {
  /*   C'est moche, à bosser*/
  height: 500px;
}

h1 {
  color: rgb(193, 162, 109);
}
</style>
