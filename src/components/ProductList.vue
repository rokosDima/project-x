<script setup>
import ProductCard from "@/components/ProductCard.vue";
import {ref} from "vue";


const products = ref([
{
  id: 1,
  name: 'Кросівки Nike Air Max',
  description: 'Зручні та стильні кросівки для щоденного використання.',
  price: 2500,
  image: 'https://example.com/nike-air-max.jpg',
},
{
  id: 2,
  name: 'Кросівки Adidas Ultraboost',
  description: 'Легкі та комфортні кросівки для бігу.',
  price: 3000,
  image: 'https://example.com/adidas-ultraboost.jpg',
},
]);
</script>
<template>
  <div>
    <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
    />
  </div>
</template>