<template>
  <v-dialog v-model="store.getDialogVisible" max-width="600" @click:outside="store.hideDialog(store)">
    <v-card>
      <v-card-title>{{ store.getCurrentPhotoTitle }}</v-card-title>
      <v-card-text>
        <v-img :src="store.getCurrentPhoto.url" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { usePhotoStore } from '@/stores/index.ts'

// const store = usePhotoStore()
// function full_title() {
//   return `Название фотографии - ${store.getCurrentPhoto.title}`
// }

export default {
  name: "PhotoDialog",
  setup() {
    const store = usePhotoStore()
    return {
      store
    }
  }
  // computed: {
  //   full_title() {
  //     return `Название фотографии - ${this.store.getCurrentPhoto.title}`
  //   }
  // },
}

</script>

<style scoped></style>
