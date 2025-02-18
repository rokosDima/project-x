<script setup>
const icons = [
  { name: 'mdi-facebook', link: 'https://facebook.com' },
  { name: 'mdi-twitter', link: 'https://twitter.com' },
  { name: 'mdi-linkedin', link: 'https://linkedin.com' },
  { name: 'mdi-instagram', link: 'https://instagram.com' },
]
</script>

<template>
  <v-footer
        style="height: 150px; "
        class="grey-darken-4 text-center d-flex flex-column"
    >
    <div>
      <v-btn
            target="_blank"
            v-for="icon in icons"
            :href="icon.link"
            :key="icon.name"
            :icon="icon.name"
            class="mx-4"
            variant="text"
        ></v-btn>

      </div>

      <div class="pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.
      </div>

      <v-divider></v-divider>

      <div>
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </div>
    </v-footer>
</template>

<style scoped>

</style>