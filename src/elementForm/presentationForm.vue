<template>
  <div class="presentation">
    <h1>Présentation</h1>
    <input
      v-model="presentationFirstName"
      class="inputPresentationFirstName"
      placeholder="Entrez votre prénom "
    /><br /><br />
    <input
      v-model="presentationLastName"
      class="inputPresentationLastName"
      placeholder="Entrez votre nom de famille"
    /><br /><br />

    <textarea
      class="preschamp"
      v-model="presentationDescrip"
      placeholder="Décrivez-vous !"
    />
    <br />
    <br />
    <button @click="nextPresentation()">Suivant</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'presentationForm',
  data: function () {
    return {
      presentationChamps: [
        {
          presentationFirstName: '',
          presentationLastName: '',
          presentationDescrip: '',
        },
      ],
    }
  },

  methods: {
    ...mapMutations(['setPresentation']),
    nextPresentation() {
      if (
        !this.presentationFirstName &&
        !this.presentationLastName &&
        !this.presentationDescrip
      ) {
        alert('Attention, vous devez compléter tous les champs')
      } else {
        alert('vous avez saisie : ' + this.presentationFirstName + this.presentationLastName +  this.presentationDescrip)
        this.setPresentation(this.presentationFirstName + this.presentationLastName + this.presentationDescrip) //envoi dans le state
      }

      // si présentation complet -> par le biais watch il va mapstate expérience
    },
  },
}
</script>

<style scoped>
.preschamp {
  height: 250px;
  width: 500px;
}

placeholder {
  text-align: center;
}
</style>
