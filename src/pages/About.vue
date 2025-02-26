<template>
  <div>
    <p>About page</p>
    <router-link :to="{name: 'About'}">About
    </router-link>
  </div>
  <ProductCard/>
</template>

<script setup>
import ProductCard from "@/components/ProductCard.vue";
</script>

<style scoped>
@media (max-width: 959px) {
  .product-container {
    flex-direction: column;
  }
}
</style>