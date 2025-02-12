<script setup>
 //rounded = 0 | sm | md | lg | xl
 //size = x-small | small | default | large | x-large
 //color = primary | secondary | success | error | warning | info | black | white | grey | blue | red | green | yellow | orange | purple | pink | brown | indigo | teal | cyan | lime | deep-orange | deep-purple | light-blue | light-green | amber | blue-grey
 defineProps(['rounded', 'size', 'color'])

 const emit = defineEmits(['click'])
</script>

<template>
  <v-btn @click="emit('click', $event)" variant="flat" :rounded="rounded" :size="size" block  :color="color">
    <slot></slot>
  </v-btn>
</template>

<style scoped>

</style>