<template>
  <v-container>
    <PhotoForm @addphoto="addPhoto" />
    <v-row>
      <Photo v-for="photo of photos" :key="photo.id" :photo="photo" @open-photo="openPhoto" />
    </v-row>
    <PhotoDialog v-model="dialogVisible" :photo="currentPhoto" />
  </v-container>
</template>

<script lang="ts">
import PhotoDialog from '@/components/photo/PhotoDialog.vue'
import Photo from "@/components/photo/Photo.vue";
import PhotoForm from "@/components/photo/PhotoForm.vue";
export default {
  name: "FotoPage",
  components: [Photo, PhotoForm, PhotoDialog],
  data() {
    return {
      photos: [],
      currentPhoto: {},
      dialogVisible: false
    };
  },
  mounted() {
    // debugger;
    this.fetchPhoto();
  },
  methods: {
    async fetchPhoto() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=5",
      );
      const data = await response.json();
      this.photos = data;
    },
    addPhoto(photo) {
      this.photos.push(photo);
    },
    openPhoto(photo) {
      this.currentPhoto = photo;
      this.dialogVisible = true
    },
  },
};
</script>

<style lang="scss" scoped></style>
