<template>
  <div>
    <p>Welcome home!</p>
    <router-link :to="{name: 'Home'}">Home

    </router-link>


  </div>
  <div class="product-list">
    <ProductList/>
    </div>

</template>

<script setup>
import ProductList from "@/components/ProductList.vue";



</script>
<style scoped>
.product-list {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction:unset;}

</style>
