<script setup>
import {ref} from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ProductList from "@/components/ProductList.vue";



function handleAddToCart() {
  console.log("AddToCart");
}


function submit(e) {
  console.log(111, e)
}

const username = ref()
</script>

<template>
  <Header/>
  <main>
    <ProductList v-if="$route.path === '/'" />
    <router-view></router-view>
</main>


  <Footer/>
</template>

<style scoped>
@media (max-width: 959px) {
  .product-container {
    flex-direction: column;
  }
}
  .product-list {
    display: flex;
    margin-top: 500px;
    align-items: center;
    gap: 1rem;
    flex-direction:unset;

  }
</style>
