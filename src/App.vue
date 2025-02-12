<script setup>
import Form from "@/components/Form.vue";
import {ref} from "vue";
import Description from "@/components/Description.vue";

function submit(e) {
  console.log(111, e)
}

const username = ref()
</script>

<template>
  <header>
    <h1>Avtomix shop</h1>
    <nav>
      <ul>
        <li><a href="#">Головна</a></li>
        <li><a href="#">Магазин</a></li>
        <li><a href="#">Про нас</a></li>
        <li><a href="#">Відгуки</a></li>
        <li><a href="#">Контакти</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <div class="product-container">
      <div class="carousel">
        <div class="carousel-container">
          <img src="@/assets/img/105_1000.png" class="carousel-item active">
          <img src="@/assets/img/mpu-105....jpg" class="carousel-item">
          <img src="@/assets/img/mpu-105...jpg" class="carousel-item">
          <img src="@/assets/img/mpu-105.jpg" class="carousel-item">
        </div>
        <button class="prev" onclick="changeSlide(-1)">&#10094;</button>
        <button class="next" onclick="changeSlide(1)">&#10095;</button>
      </div>
      <div class="product-details">
        <Description />

        <Form/>

      </div>
    </div>


  </main>
  <footer>
    <p>&copy; 2025 Avtomix. Всі права захищені.</p>
  </footer>
</template>

<style scoped>

</style>
