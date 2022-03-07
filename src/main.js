import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'

const store = createStore({
  state() {
    return {
      pseudo: '',
      password: '',
      presentation: '',
      experienceChamps: '',
    }
  },
  mutations: {
    setPseudo(state, pseudo) {
      console.error('setting pseudo', pseudo)
      state.pseudo = pseudo
    },
    setPassword(state, password) {
      console.error('setting password', password)
      state.password = password
    },
    setPresentation(state, presentation) {
      console.error('setting presentation', presentation)
      state.presentation = presentation
    },
    setExperiences(state, experienceChamps) {
      console.error('setting experience', experienceChamps)
      state.experienceChamps = experienceChamps
    },
  },
})

const app = createApp(App)

app.use(store)

app.mount('#app')

// Différence entre js et php --> Asynchrone
// Js lance l'ensemble u code d'un coup et PHP le lit dans l'ordre d'écriture.
