<template>
  <v-app-bar color="orange">
    <v-spacer />
    <v-btn variant="outlined" class="ml-3">
      <router-link to="/">
        Главная
      </router-link>
    </v-btn>
    <v-btn variant="outlined" class="ml-3">
      <router-link to="/photo">
        Фото
      </router-link>
    </v-btn>
    <v-btn :prepend-icon="themeIcon === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
      " text="Toggle Theme" slim class="ml-3" @click="toggleTheme" />
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTheme } from "vuetify";

export default defineComponent({
  components: {},
  setup() {
    // debugger;
    const theme = useTheme();

    return { theme, themeIcon: null };
  },
  methods: {
    toggleTheme() {
      // debugger;
      const t = this.theme.global.name.value === "light" ? "dark" : "light";
      this.themeIcon = t;
      this.theme.global.name.value = t;
    },
  },
});
</script>

<style scoped></style>
