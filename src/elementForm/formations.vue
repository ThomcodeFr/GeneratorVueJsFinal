<template>
  <div class="formulaire">
    <h1>Formation</h1>
    <div>
      <p>Nom de la formation</p>
      <!--  le v-model, grace au input modifie la valeur dans la data-->
      <input v-model="formationTabsNews.nomFormation" />
      <br />
      <p>Date de début</p>
      <input v-model="formationTabsNews.dateDebutFormation" />
      <br />
      <p>Date de fin</p>
      <input v-model="formationTabsNews.dateFinFormation" />
      <br />
      <button @click="saveFormation()">Enregistrer</button>
    </div>
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
      alert('vous avez une nouvelle formation',this.formationTabs)
    },
  },
}
</script>

<style></style>
