<template>
  <v-container>
    <PhotoForm v-if="store.getAllPhotos.length < 11" @addphoto="addPhoto" />
    <div v-else>
      Вы не можете добавить больше фотографий
    </div>
    <v-row>
      <Photo v-for="photo of store.getAllPhotos" :key="photo.id" :photo="photo" @open-photo="openPhoto" />
    </v-row>
    <PhotoDialog v-model="dialogVisible" :photo="currentPhoto" />
  </v-container>
</template>

<script lang="ts">
import PhotoDialog from '@/components/photo/PhotoDialog.vue'
import Photo from "@/components/photo/Photo.vue";
import PhotoForm from "@/components/photo/PhotoForm.vue";
import { usePhotoStore } from '@/stores/index.ts'


export default {
  name: "FotoPage",
  components: [Photo, PhotoForm, PhotoDialog],
  setup() {
    const store = usePhotoStore()
    return {
      store
    }
  },
  data: () => ({
    currentPhoto: {},
    dialogVisible: false
  }),
  mounted() {
    // debugger;
    // this.fetchPhoto();
    this.store.fetchPhoto()
  },
  methods: {
    addPhoto(photo) {
      this.store.addPhoto(photo);
    },
    openPhoto(photo) {
      this.currentPhoto = photo;
      this.dialogVisible = true
    },
  }
};
</script>

<style lang="scss" scoped></style>
