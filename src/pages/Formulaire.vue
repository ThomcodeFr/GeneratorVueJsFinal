<template>
  <Presentation v-if="formContent == 'presentation'" />
  <Experience v-if="formContent == 'experiences'" />
  <Formations v-if="formContent == 'formations'" />
  <Competences v-if="formContent == 'competences'" />
</template>

<script>
import Presentation from '../elementForm/presentationForm.vue'
import Experience from '../elementForm/experiences.vue'
import Formations from '../elementForm/formations.vue'
import Competences from '../elementForm/competences.vue'
import { mapState } from 'vuex'
/* import { watch } from '@vue/runtime-core'
 */

export default {
  name: 'App',

  components: {
    Presentation,
    Experience,
    Formations,
    Competences,
  },

// C'est ce qu'il va router en premier
  data() {
    return {
      formContent: 'presentation',
    }
  },

  computed: {
    ...mapState(['presentation']),
    ...mapState(['experiences']),
    ...mapState(['formations']),
    ...mapState(['competences']),
  },

  watch: {
    presentation: function (nouvellePresentation) {
      if (nouvellePresentation != '') {
        this.formContent = 'experiences'
      }
    },
    exprience: function (nouvelleExperience) {
      if (nouvelleExperience != '') {
        this.formContent = 'formations'
      }
    },
  },
}
</script>

<style></style>
