<template>
  <div id="localisation">
    <div id="adress">
      <h2>Localisation de notre agence</h2>
      <h3>STRASBOURG</h3>
      <h3>21 rue Jacobi-Netter</h3>
      <h3>67000 - STRASBOURG</h3>
      <h3>+33 (0)3 88 77 88 99</h3>
    </div>

    <div id="maps">
      <iframe
        class="map-configuration"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.183735833279!2d7.703902715053181!3d48.58718072771926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796b7d6a0d32fc5%3A0x448ea528fec3f9d3!2s21%20Rue%20Jacobi-Netter%2C%2067200%20Strasbourg!5e0!3m2!1sfr!2sfr!4v1642169569696!5m2!1sfr!2sfr"
      ></iframe>
    </div>
  </div>
</template>

<script></script>

<style>
#localisation {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(201, 196, 196);
  color: white;
  padding: 15px 0 15px;
}

#adress {
  margin-right: 40px;
}

#map {
  margin: 20px;
}

.map-configuration {
  width: 400px;
  height: 250px;
}
</style>
