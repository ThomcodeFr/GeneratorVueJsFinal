<template>
  <div class="presentation">
    <h1>Présentation</h1>
    <input
      class="preschamp"
      v-model="presentation"
      placeholder="Décrivez-vous ! "
    />
    <button @click="savePresentation">Suivant</button>
  </div>
</template>

<script></script>

<style scoped>
.preschamp {
  height: 250px;
  width: 500px;
}

placeholder {
  text-align: center;
}

</style>
