<script setup>
const featureList = [
  {
    label: 'Напруга 12 вольт'
  },
  {
    label: 'Потужність 45 ватт'
  },
  {
    label: 'Вихід на сабвуфер'
  },
  {
    label: 'Гарантія 12 місяців'
  },
]
</script>

<template>
  <div style="margin-bottom: 16px">
    <h2 class="title">Автомагнітола mpu-105</h2>
    <div class="price-wrapper">
      <div class="old-price">999 грн</div>
      <div class="price">620 грн</div>
    </div>

    <div class="description">
      Ця автомобільна магнітола з фіксованою передньою панеллю пропонує потужний звук та багатий набір функцій для вашого комфорту в дорозі. Завдяки підсилювачу 7388IC на 4 х 45 Вт, вона забезпечує якісне відтворення звуку, а підтримка Bluetooth та пульт дистанційного керування додають зручності у використанні. Магнітола підтримує як FM-радіо з функціями RDS, TA, EON, так і відтворення музики з різних джерел.
    </div>

    <div class="feature-block">
      <ul v-if="featureList && featureList.length">
        <li v-for="f in featureList" :key="f.label">
          {{f.label}}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 21px;
  color: #fff;
}

.price-wrapper {
  margin-bottom: 12px;
}

.old-price {
  font-size: 24px;
  font-weight: 700;
  color: #888;
  text-decoration: line-through;
}

.price {
  font-size: 34px;
  line-height: 34px;
}

.description {
  font-size: 16px;
  color: #fff;
}

.feature-block {
  padding-left: 14px;
}
</style>