<template>
  <div class="product-details">
    <h1>{{ product.name }}</h1>
    <img :src="product.image" :alt="product.name" />
    <p>{{ product.description }}</p>
    <p>Ціна: {{ product.price }} грн</p>
    <router-link to="/">Повернутися до списку товарів</router-link>
  </div>
</template>

<script setup>
import { useProductStore } from '@/store/productStore';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const productStore = useProductStore();
const route = useRoute();
const productId = parseInt(route.params.id);
const product = computed(() => productStore.getProductById(productId));
</script>

<style scoped>
.product-details {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
img {
  max-width: 100%;
  height: auto;
}
</style>