<template>
  <div class="experience">
    <h1>Expériences</h1>
    <input
      v-model="experienceName"
      class="inputExperienceName"
      placeholder="Entrez le nom de l'entreprise"
    /><br /><br />

    <label for="start">Date de début :</label><br />
    <input v-model="experienceDate" type="date" id="start" /><br /><br />
    <label for="start">Date de fin :</label><br />

    <input v-model="experienceDate" type="date" /><br /><br />
    <input
      v-model="experienceDescrip"
      class="inputDescription"
      placeholder="Entrez la description de vos missions"
    /><br /><br />

    <button @click="saveExperience()">Suivant</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'experienceForm',
  data: function () {
    return {
      experience: '',
    }
  },

  methods: {
    ...mapMutations(['setExperience']),
    setExperience() {
      if (this.experience == '') {
        alert('Le champs présentation ne peut pas être vide')
      } else {
        alert('vous avez saisie : ' + this.experience)
        this.setExperience(this.experience) //envoi dans le state
      }
    },
  },
}
</script>
<style scoped>
.inputExperienceName {
  width: 250px;
}

.inputDescription {
  height: 200px;
  width: 400px;
}
</style>
