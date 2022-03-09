<template>
  <div class="experience">
    <h1>Expériences</h1>
    <input
      v-model="experienceName"
      class="inputExperienceName"
      placeholder="Entrez le nom de l'entreprise"
    /><br /><br />

    <label for="start">Date de début :</label><br />
    <input v-model="experienceDateStart" type="date" id="start" /><br /><br />
    <label for="start">Date de fin :</label><br />

    <input v-model="experienceDateEnd" type="date" /><br /><br />
    <textarea
      v-model="experienceDescrip"
      class="inputDescription"
      placeholder="Entrez la description de vos missions"
    /><br /><br />

    <button @click="nextExperience()">Suivant</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'experienceForm',
  data: function () {
    return {
      experienceChamps: [
        {
          experienceName: '',
          experienceDateStart: '',
          experienceDateEnd: '',
          experienceDescrip: '',
        },
      ],
    }
  },

  methods: {
    ...mapMutations(['setExperiences']),
    nextExperience() {
      if (
        !this.experienceName &&
        !this.experienceDateStart &&
        !this.experienceDateEnd &&
        !this.experienceDescrip
      ) {
        alert('Attention, vous devez compléter tous les champs')
      } else {
        alert(
          'vous avez saisie : ' +
            this.experienceName +
            this.experienceDateStart +
            this.experienceDateEnd +
            this.experienceDescrip
        )
        this.setExperiences(
          this.experienceName &&
            this.experienceDateStart &&
            this.experienceDateEnd &&
            this.experienceDescrip
        )
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
  height: 170px;
  width: 400px;
}
</style>
