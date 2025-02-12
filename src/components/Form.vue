<script setup>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name (value) {
      if (value?.length >= 2) return true

      return 'Повинно бути більше 2 символа'
    },
    phone (value) {
      if (/^[0-9-]{7,}$/.test(value)) return true

      return 'Номер телефону має бути не менше 7 цифр.'
    },
    email (value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

      return 'Має бути дійсна електронна адреса.'
    },

    amount (value) {
      if(!value) return true

      return 'Мінімум 1'
    },
    select (value) {
      if (value) return true

      return 'Виберіть елемент.'
    },
    // checkbox (value) {
    //   if (value === '1') return true
    //
    //   return 'Must be checked.'
    // },
  },
})
const name = useField('name')
const phone = useField('phone')
const email = useField('email')
const amount = useField('amount')
const select = useField('select')
const checkbox = useField('checkbox')

const paymentMethods = ref([
  'На карту',
  'Оплата при отриманні',
])

const submit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2))
})
</script>

<template>
  <form @submit.prevent="submit">
    <v-text-field
        class="mt-2"
        v-model="name.value.value"
        :counter="10"
        :error-messages="name.errorMessage.value"
        label="Імʼя"
    ></v-text-field>

    <v-text-field
        class="mt-2"
        v-model="phone.value.value"
        :counter="7"
        :error-messages="phone.errorMessage.value"
        label="Телефон"
    ></v-text-field>

    <v-text-field
        class="mt-2"
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="E-mail"
    ></v-text-field>

    <v-text-field
        class="mt-2"
        v-model="amount.value.value"
        :error-messages="amount.errorMessage.value"
        label="Кількість"
    ></v-text-field>

    <v-select
        class="mt-2"
        v-model="select.value.value"
        :error-messages="select.errorMessage.value"
        :items="paymentMethods"
        label="Оплата"
    ></v-select>

    <v-checkbox
        v-model="checkbox.value.value"
        :error-messages="checkbox.errorMessage.value"
        label="Option"
        type="checkbox"
        value="1"
    ></v-checkbox>

    <v-btn
        class="me-4 mt-3 sub-btn"
        type="submit"
        variant="flat" size="x-large" block
    >
      Відправити
    </v-btn>

<!--    <v-btn @click="handleReset">-->
<!--      Очистити-->
<!--    </v-btn>-->
  </form>
</template>

<style scoped>


@media (max-width: 959px) {
  .sub-btn {
    width: 100%;
  }
}
</style>