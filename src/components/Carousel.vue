<script setup>
import img1 from '@/assets/img/105_1000.png'
import img2 from '@/assets/img/mpu-105....jpg'
import img3 from '@/assets/img/mpu-105...jpg'
import img4 from '@/assets/img/mpu-105.jpg'

const items = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
];

const testIcon = [
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
  },
]
</script>

<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
        v-for="(item,i) in testIcon"
        :key="i"
        :src="item.src"
        cover
    ></v-carousel-item>
  </v-carousel>
</template>

<style scoped>

</style>