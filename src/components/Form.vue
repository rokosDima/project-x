<script setup>
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate';
import axios from 'axios';

// Валідація форми
const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true;
      return 'Повинно бути більше 2 символів';
    },
    phone(value) {
      if (/^[0-9-]{7,}$/.test(value)) return true;
      return 'Номер телефону має бути не менше 7 цифр.';
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;
      return 'Має бути дійсна електронна адреса.';
    },
    amount(value) {
      if (value > 0) return true;
      return 'Мінімум 1';
    },
    select(value) {
      if (value) return true;
      return 'Виберіть елемент.';
    },
  },
});
const name = useField('name');
const phone = useField('phone');
const email = useField('email');
const amount = useField('amount');
const select = useField('select');
const checkbox = useField('checkbox');

const formData = ref({
  name: '',
  phone: '',
  email: '',
  token: '7525672942:AAEfhM8-ZZ2FpYf_TlvBJJIJ-B28v_Ub4ms',
  chatID: 536226288,
});


const submit = handleSubmit(async (values) => {
 console.log( values);
  const fullMessage = `name: ${name.value.value}\nphone: ${phone.value.value}\nemail: ${email.value.value}`;
  const url = `https://api.telegram.org/bot${formData.value.token}/sendMessage`;

  try {
    const response = await axios.post(url, {
      chat_id: formData.value.chatID,
      text: fullMessage,
    });
    console.log('Success:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
});
</script>

<template>
  <form @submit.prevent="submit">
    <v-text-field
        v-model="name.value.value"
        label="Імʼя"
        :error-messages="name.errorMessage.value"
    ></v-text-field>

    <v-text-field
        v-model="phone.value.value"
        label="Телефон"
        :error-messages="phone.errorMessage.value"
    ></v-text-field>

    <v-text-field
        v-model="email.value.value"
        label="E-mail"
        :error-messages="email.errorMessage.value"
    ></v-text-field>

    <v-btn type="submit">Відправитиfyfy</v-btn>
  </form>
</template>