<script setup>
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from '@/store/productStore';
const productStore = useProductStore();
</script>

<template>
  <div class="product-card">
    <ProductCard
        v-for="product in productStore.products"
        :key="product.id"
        :product="product"
    />
  </div>
</template>

<style scoped>
.product-card {
   display: flex;
   width: 100%;
   align-content: center;
   gap: 1rem;
   height: auto;
   margin-top: 25px;
}
</style>