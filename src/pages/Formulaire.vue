<template>
  <Presentation v-if="formContent == 'presentation'" />
  <Experience v-if="formContent == 'experience'" />
  <Formations v-if="formContent == 'formations'" />
  <Competences v-if="formContent == 'competences'" />
</template>

<script>
import Presentation from '../elementForm/presentation.vue'
import Experience from '../elementForm/experiences.vue'
import Formations from '../elementForm/formations.vue'
import Competences from '../elementForm/competences.vue'
import { mapState } from 'vuex';


export default {
  name: 'App',

  components: {
    Presentation,
    Experience,
    Formations,
    Competences,
  },

  computed: {
    ...mapState(['presentation']),
    ...mapState(['experiences']),
    ...mapState(['formations']),
    ...mapState(['competences']),
  },

  methods: {
    // si contenu vide alors alert complete sinon mapstate experience
    // si présentation complet -> par le biais watch il va mapstate expérience
    },

  data() {
    return {
      formContent: 'presentation',
    }
  },


}
</script>

<style></style>
