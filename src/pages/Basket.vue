<template>
  <div class="basket">
    <h1>Кошик</h1>
    <div v-if="cartStore.items.length === 0">
      <p>Кошик порожній</p>
    </div>
    <div v-else>
      <div v-for="item in cartStore.items" :key="item.id" class="basket-item">
        <img :src="item.image" :alt="item.name" />
        <h2>{{ item.name }}</h2>
        <p>Ціна: {{ item.price }} грн</p>
        <p>Кількість: {{ item.quantity }}</p>
        <button @click="removeFromCart(item.id)">Видалити</button>
      </div>
      <p>Загальна кількість товарів: {{ cartStore.totalItems }}</p>
      <p>Загальна вартість: {{ cartStore.totalPrice }} грн</p>
      <button @click="clearCart">Очистити кошик</button>
    </div>
    <router-link to="/">Повернутися до списку товарів</router-link>
  </div>
  <Form/>
</template>

<script setup>
import { useCartStore } from '@/store/cartStore';
import Form from "@/components/Form.vue";

const cartStore = useCartStore();
const removeFromCart = (productId) => {
  cartStore.removeFromCart(productId);
};
const clearCart = () => {
  cartStore.clearCart();
};
</script>

<style scoped>
.basket {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
.basket-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}
img {
  max-width: 100px;
  height: auto;
}
</style>