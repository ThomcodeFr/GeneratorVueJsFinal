<template>
  <div class="presentation">
    <h1>Présentation</h1>
    <textarea
      class="preschamp"
      v-model="presentation"
      placeholder="Décrivez-vous !"
    />
    <br />
    <br />
    <button @click="savePresentation()">Suivant</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'presentationForm',
  data: function () {
    return {
      presentation: '',
    }
  },

  methods: {
    ...mapMutations(['setPresentation']),
    savePresentation() {
      if (this.presentation == '') {
        alert('Le champs présentation ne peut pas être vide')
      } else {
        alert('vous avez saisie : ' + this.presentation)
        this.setPresentation(this.presentation) //envoi dans le state
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
