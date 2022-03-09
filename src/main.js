import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'

const store = createStore({
  state() {
    return {
      pseudo: '',
      password: '',
      presentationChamps: '',
      experienceChamps: '',
    }
  },
  //mutations permets de faire muter et le state => gros store
  mutations: {
    setPseudo(state, pseudo) {
      console.error('setting pseudo', pseudo)
      state.pseudo = pseudo
    },
    setPassword(state, password) {
      console.error('setting password', password)
      state.password = password
    },
    setPresentation(state, presentationChamps) {
      console.error('setting presentation', presentationChamps)
      state.presentationChamps = presentationChamps
    },
    setExperiences(state, experienceChamps) {
      console.error('setting experience', experienceChamps)
      state.experienceChamps = experienceChamps
    },
  },
})

// Pour vueX, il faut faire attention à la version de vue utilisée avec la version de vueX.
// On apporte la fonction createApp et on importe le store, on apporte #app (qui est la premiere vue de notre projet)
// Si trop de lignes dans le main.js, il faudra créer un fichier store (nom, adresse, numéro de téléphone...).
// Vue.js est asynchrome
const app = createApp(App)

app.use(store)

app.mount('#app')

// Différence entre js et php --> Asynchrone
// Js lance l'ensemble u code d'un coup et PHP le lit dans l'ordre d'écriture.
