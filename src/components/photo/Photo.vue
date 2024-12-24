<template>
  <v-col cols="4">
    <v-card v-if="!store.getIsLoading" @click="openPhoto">
      <v-card-title>{{ photo.title }}</v-card-title>
      <v-card-text class="d-flex">
        <v-img :src="photo.url" width="200" height="200" />
      </v-card-text>
    </v-card>
    <v-skeleton-loader v-else type="card" />
  </v-col>
</template>

<script lang="ts">
import { usePhotoStore } from '@/stores/index.ts'

// const store = usePhotoStore()

// const props = defineProps({
//   photo: {
//     type: Object,
//     required: true
//   }
// });
//
// function openPhoto() {
//   store.setCurrentPhoto(store, props.photo)
//   store.showDialog(store)
// }


export default {
  name: "Photo",
  props: {
    photo: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const store = usePhotoStore()
    return {
      store
    }
  },
  methods: {
    openPhoto() {
      this.store.setCurrentPhoto(this.store, this.photo)
      this.store.showDialog(this.store)
    }
  },
};
</script>

<style lang="scss" scoped></style>
