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

      <v-toolbar-title class="logo" ></v-toolbar-title>
      <router-link class="logo" :to="{ name: 'Home' }">AutoMix</router-link>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon="mdi-account"></v-btn>
      <router-link class="basket" :to="{ name: 'Basket' }">
      <v-btn icon="mdi-delete-outline"></v-btn>
        </router-link>
    </v-toolbar>
  </v-card>
</template>

<style scoped>
.basket {
  display: flex;
  margin-top: 45px;
}
.logo {
  color: red;
  font-style: italic;
}
.next {
  justify-content: right;
  align-items: flex-end;

}
</style>