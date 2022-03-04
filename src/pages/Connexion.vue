<template>
  <div class="connexion">
      <h1>Connexion</h1>
      <input v-model="pseudo" />
    <input type="password" v-model="password" />
      <button @click="saveConnexion">Connexion</button>
  </div>
</template>


<script>
import { mapMutations } from "vuex";
export default {
  name: 'ConnexionForm',
  data: function() {
    return {
      pseudo: "",
      pseudojuste:"plop",
      password: "",
    }
  },
  
  methods: {
    ...mapMutations(["setPseudo"]),
    ...mapMutations(["setPassword"]),
    saveConnexion() {
        if(this.pseudo == this.pseudojuste && this.password == this.pseudojuste){
          alert("Bienvenue ! ")
          this.setPassword(this.password);
          this.setPseudo(this.pseudo);
        }else{
          alert("Utilisateur ou mot de passe inconnu")
        }

    }
  }
}
</script>