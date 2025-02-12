<script setup>

</script>

<template>
  <header>
    <h1>Avtomix shop</h1>
    <nav>
      <ul>
        <li><a href="#">Головна</a></li>
        <li><a href="#">Магазин</a></li>
        <li><a href="#">Про нас</a></li>
        <li><a href="#">Відгуки</a></li>
        <li><a href="#">Контакти</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <div class="product-container">
      <div class="carousel">
        <div class="carousel-container">
          <img src="@/assets/img/105_1000.png" class="carousel-item active">
          <img src="@/assets/img/mpu-105....jpg" class="carousel-item">
          <img src="@/assets/img/mpu-105...jpg" class="carousel-item">
          <img src="@/assets/img/mpu-105.jpg" class="carousel-item">
        </div>
        <button class="prev" onclick="changeSlide(-1)">&#10094;</button>
        <button class="next" onclick="changeSlide(1)">&#10095;</button>
      </div>
      <div class="product-details">
        <h2>Автомагнітола mpu-105</h2>
        <p class="price">Нова ціна 620 грн<span class="old-price">Стара ціна 999 грн</span></p>
        <p class="description">
          Ця автомобільна магнітола з фіксованою передньою панеллю пропонує потужний звук та багатий набір функцій для вашого комфорту в дорозі. Завдяки підсилювачу 7388IC на 4 х 45 Вт, вона забезпечує якісне відтворення звуку, а підтримка Bluetooth та пульт дистанційного керування додають зручності у використанні. Магнітола підтримує як FM-радіо з функціями RDS, TA, EON, так і відтворення музики з різних джерел.
          <ul>
            <li>Напруга 12 вольт</li>
            <li>Потужність 45 ватт</li>
            <li>Вихід на сабвуфер</li>
            <li>Гарантія 12 місяців</li>
          </ul>
        </p>
        <form class="product-options">
          <label  for="color">Оплата:</label>
          <select  class="input" id="color" name="color">
            <option value="black">На карту</option>
            <option value="cream">Накладний платіж</option>
          </select>
          <label for="quantity">Кількість:</label>
          <input class="input" type="number" id="quantity" name="quantity" value="1" min="1">

          <label for="name">Ім'я:</label>
          <input class="input" type="text" id="name" name="name">

          <label for="phone"> Телефон:</label>
          <input class="input" type="tel" id="phone" name="phone" style="margin-bottom: 16px;">

          <button type="submit" class="add-to-cart">Надіслати замовлення</button>
        </form>
      </div>
    </div>
  </main>
  <footer>
    <p>&copy; 2025 Avtomix. Всі права захищені.</p>
  </footer>
</template>

<style scoped>

</style>
