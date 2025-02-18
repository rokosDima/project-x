<script setup>
const props = defineProps(["product"]);
    const handleAddToCart = (product) => {
      console.log('Додано до кошика:', product);
};
</script>
<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="product.image" :alt="product.name" />
    </div>
    <div class="product-details">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-description">{{ product.description }}</p>
      <p class="product-price">{{ product.price }} грн</p>
      <button class="add-to-cart" @click="addToCart">Додати до кошика</button>
    </div>
  </div>
</template>
<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 250px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image img {
  width: 100%;
  height: auto;
  display: block;
}

.product-details {
  padding: 16px;
  text-align: center;
}

.product-name {
  font-size: 1.2em;
  margin: 0 0 8px;
}

.product-description {
  font-size: 0.9em;
  color: #666;
  margin: 0 0 12px;
}

.product-price {
  font-size: 1.1em;
  font-weight: bold;
  color: #333;
  margin: 0 0 16px;
}

.add-to-cart {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.add-to-cart:hover {
  background-color: #0056b3;
}
</style>