<template>
  <v-app>
    <v-container fluid>
      <Navbar />
      <v-main><router-view /></v-main>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped></style>
