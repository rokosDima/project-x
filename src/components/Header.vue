<script>

</script>

<template>
  <v-card
      color="grey-lighten-4"
      rounded="0"
      flat
  >
    <v-toolbar density="compact">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title class="logo">AutoMix</v-toolbar-title>
      <v-toolbar-title1 class="sail">Розпродажа</v-toolbar-title1>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon="mdi-account"></v-btn>
      <v-btn icon="mdi-delete-outline"></v-btn>

    </v-toolbar>
  </v-card>
</template>

<style scoped>
.sail {
  color: red;
  font-size: 35px;
}
.logo {
  color: red;
  font-style: italic;
}
</style>