  <template>
    <div class="formulaire">
        <h1>Formulaire</h1>
    </div>

    <section class="form">
    <form action="action" method="get" class="formulaire">
      <h2>Compétences</h2>
      <label for="skills">Entrez votre compétence</label>
      <input v-model="competences" placeholder="Entrez votre compétence" />
      <button @click="submit">Validez les données</button> <br />

      <h2>Expérience Professionnelle</h2>
      <label for="expe">Entrez votre expérience</label>
      <input v-model="experience" placeholder="Entrez votre experience" />
      <button @click="save">Validez les données</button><br />

      <h2>Formation</h2>
      <label for="formation">Entrez votre formation</label>
      <input v-model="formation" placeholder="Entrez votre formation" />
      <button @click="save">Validez les données</button>

      <h2>Divers</h2>
      <label for="formation">Autres</label>
      <input v-model="divers" placeholder="Autre chose ?" />
      <button @click="save">Validez les données</button>
    </form>
    </section>

  <h2>Vous avez saisies</h2>
  <div> {{ competences }}</div>
  <div> {{ experience }}</div>
  <div> {{ formation }}</div>
  <div> {{ divers }}</div>
</template>


<script>
export default {
  data() {
    return {
      competences: [],
      experience: [],
      formation: [],
      divers: [],
    }
  },
  methods : {
    submit() {
        console.log(this.competences);
    }
  }
}
</script>

<style></style>