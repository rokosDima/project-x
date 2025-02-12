<script setup>
import Form from "@/components/Form.vue";
import {ref} from "vue";
import Description from "@/components/Description.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Carousel from "@/components/Carousel.vue";
import Guarantee from "@/components/Guarantee.vue";

function submit(e) {
  console.log(111, e)
}

const username = ref()
</script>

<template>
<!--  <header>-->
<!--    <h1>Avtomix shop</h1>-->
<!--    <nav>-->
<!--      <ul>-->
<!--        <li><a href="#">Головна</a></li>-->
<!--        <li><a href="#">Магазин</a></li>-->
<!--        <li><a href="#">Про нас</a></li>-->
<!--        <li><a href="#">Відгуки</a></li>-->
<!--        <li><a href="#">Контакти</a></li>-->
<!--      </ul>-->
<!--    </nav>-->
<!--  </header>-->

  <Header/>


  <main>
    <div class="product-container">
      <v-col cols="12" md="6">
        <Carousel/>

        <Guarantee/>

      </v-col>
      <v-col cols="12" md="6">
        <div class="product-details">
        <Description />

        <Form/>

      </div>
      </v-col>
    </div>


  </main>
  <Footer/>
</template>

<style scoped>
@media (max-width: 959px) {
  .product-container {
    flex-direction: column;
  }
}
</style>
