<template>
  <div class="formulaire">
    <h1>Formation</h1>
    <div>
          <input
      v-model="formationTabsNews.nomFormation"
      class="inputExperienceName"
      placeholder="Entrez le nom de la formation"
    /><br /><br>
      <label for="start">Date de début :</label><br />
      <input id="start" v-model="formationTabsNews.dateDebutFormation" type="date"/>
      <br /> <br>
      <label for="start">Date de fin</label><br />
      <input v-model="formationTabsNews.dateFinFormation" type="date"/>
      <br /> <br>
      <button @click="saveFormation()">ajouter</button><br><br>
      <button @click="nextFormation()">Suivant</button>
    </div>
    <section class="saved_datas">
    <table>
      <thead>
        <tr>
          <th>Nom de la formation</th>
          <th>Début de la formation</th>
          <th>Fin de la formation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="formationTab in formationTabs" :key="formationTab">
          <td>{{ formationTab.nomFormation }}</td>
          <td>{{ formationTab.dateDebutFormation }}</td>
          <td>{{ formationTab.dateFinFormation }}</td>
        </tr>
      </tbody>
    </table>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //c'est un objet car y a des [{}].
      formationTabsNews: [
        { nomFormation: '', dateDebutFormation: '', dateFinFormation: '' },
      ],
      formationTabs: [
        {
          nomFormation: 'Chandler Bing',
          dateDebutFormation: '42/42/42',
          dateFinFormation: '42/42/42',
        },
      ],
    }
  },

  methods: {
    saveFormation: function () {
      this.formationTabs.push(this.formationTabsNews)
      alert('vous avez une nouvelle formation', this.formationTabs)
    },
  },
}
</script>

<style>
.saved_datas {
  text-align: center;
}
</style>
