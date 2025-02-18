<script setup>
import ShieldIcon from '@/icons/shield.svg'
import RestoreIcon from '@/icons/restore.svg'
import ShipIcon from '@/icons/ship.svg'
</script>

<template>
  <div style="margin-top: 16px">
    <h3 class="title">Гарантія та доставка:</h3>
    <ul class="list">
      <li>
        <img :src="ShipIcon" alt="Доставка" class="icon">
        Безкоштовна доставка у магазин та відділення Нової Пошти.
      </li>
      <li>
        <img :src="ShieldIcon" alt="Гарантія" class="icon">
        Гарантія від виробника та магазину до 2 років.
      </li>
      <li>
        <img :src="RestoreIcon" alt="Обмін" class="icon">
        Швидкий обмін та повернення протягом 14 днів.
      </li>
      <li>
      <v-rating
          hover
          :length="5"
          :size="35"
          :model-value="4"
          color="red-lighten-3"
          active-color="warning"
      />
      </li>

    </ul>
  </div>


</template>

<style scoped>
.title {
  font-size: 15px;
  font-weight: 700;
  color: #999;
}

.list {
  margin-top: 12px;
  list-style: none;
  padding: 0;
}

.list li {
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  display: flex;
  align-items: center; /* Щоб іконки вирівнювались по центру */
  gap: 10px; /* Відступ між іконкою і текстом */
}

.icon {
  width: 20px; /* Розмір іконки */
  height: 20px;
}
</style>