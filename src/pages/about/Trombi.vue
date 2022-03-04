<template>
  <div id="team">
    <h2 class="title-team">Notre super team</h2>
    <div class="element">
      <div>
        <img src="@/assets/photos/Cansu.jpg" alt="Cansu" />
        <h4>Cansu</h4>
      </div>
      <div>
        <img src="@/assets/photos/Hermione.jpeg" alt="Fadoua" />
        <h4>Fadoua</h4>
      </div>
      <div>
        <img src="@/assets/photos/Femme.png" alt="Marem" />
        <h4>Marem</h4>
      </div>
      <div>
        <img src="@/assets/photos/Femme.png" alt="Sabrina" />
        <h4>Sabrina</h4>
      </div>
    </div>

    <div class="element">
      <div>
        <img src="@/assets/photos/Charles.jpg" alt="Charles" />
        <h4>Charles</h4>
      </div>
      <div>
        <img src="@/assets/photos/Homme.png" alt="Eliot" />
        <h4>Eliot</h4>
      </div>
      <div>
        <img src="@/assets/photos/Homme.png" alt="Loïc" />
        <h4>Loïc</h4>
      </div>
      <div>
        <img src="@/assets/photos/Thomas.jpg" alt="Thomas" />
        <h4>Thomas</h4>
      </div>
    </div>

    <div class="element">
      <div>
        <img src="@/assets/photos/ines.jpeg" alt="Ines" />
        <h4>Ines</h4>
      </div>
      <div>
        <img src="@/assets/photos/Michel.jpg" alt="Michel" />
        <h4>Michel</h4>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.title-team {
  text-align: center;
  padding-top: 20px;
  margin: 0 0 15px 0;
  margin-bottom: 15px;
  font-weight: bold;
  color: rgb(193, 162, 109);
  text-transform: uppercase;
}

#team {
  background: rgba(238, 223, 210, 0.8);
  padding-bottom: 15px;
}

#team img {
  margin-left: 15px;
  height: 120px;
  width: 120px;
  border-radius: 90%;
  border: 3px solid rgb(193, 162, 109);
  filter: grayscale(1);
}

#team img:hover {
  filter: grayscale(0);
}

.element {
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 20px;
}
</style>
