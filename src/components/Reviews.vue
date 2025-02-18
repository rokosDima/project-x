<script setup>

</script>
<template>
  <div class="video">
    <video>
      <source src="../video/IMG_1360.MOV" type="video/MOV">
    </video>
  </div>
  <div class="container">

  <div class="baner">
<v-banner avatar="src/img/Bonnet_macaque_(Macaca_radiata)_Photograph_By_Shantanu_Kuveskar.jpg" text="Ребята прям шарят, хотела мощный свет на тачку и, наконец, все вижу на дороге вечером и ночью, хотя через комендантскую, особенно не покатаешь" :stacked="false">
  <template v-slot:actions>
    <v-btn>Click me</v-btn>
  </template>

</v-banner>
</div>
  <div class="baner1">
    <v-banner avatar="src/img/Bonnet_macaque_(Macaca_radiata)_Photograph_By_Shantanu_Kuveskar.jpg" text="Ребята прям шарят, хотела мощный свет на тачку и, наконец, все вижу на дороге вечером и ночью, хотя через комендантскую, особенно не покатаешь" :stacked="false">
      <template v-slot:actions>
        <v-btn>Click me</v-btn>
      </template>

    </v-banner>
  </div>
  <div class="baner2">
    <v-banner avatar="src/img/Bonnet_macaque_(Macaca_radiata)_Photograph_By_Shantanu_Kuveskar.jpg" text="Ребята прям шарят, хотела мощный свет на тачку и, наконец, все вижу на дороге вечером и ночью, хотя через комендантскую, особенно не покатаешь" :stacked="false">
      <template v-slot:actions>
        <v-btn>Click me</v-btn>
      </template>

    </v-banner>
  </div>
  </div>
</template>
<style scoped>
.baner {
  width: 500px;
  margin-left: 100px;
}
.baner1 {
  width: 500px;
}
.baner2 {
  width: 500px;
}
.container {
  background: #888888;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 20px;
  position: relative;
  display: flex;
  gap: 100px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;

}
.video {
  width: 100%;
  height: 100px;
  margin-bottom: 50px;
}
</style>