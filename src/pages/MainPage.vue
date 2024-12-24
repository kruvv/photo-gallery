<template>
  <v-container>
    <v-carousel>
      <v-carousel-item v-for="photo in store.getAllPhotos" :key="photo.id" :src="photo.url" cover />
    </v-carousel>
  </v-container>
</template>

<script lang="ts" setup>
import { usePhotoStore } from '@/stores/index.ts'

const store = usePhotoStore()
// export default {
//   name: "MainPage",
// };
</script>

<style lang="scss" scoped></style>
