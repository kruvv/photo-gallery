<template>
  <v-container>
    <PhotoForm @add-photo="addFoto" />
    <v-row>
      <Photo v-for="photo of photos" :key="photo.id" :photo="photo" />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Photo from "@/components/photo/Photo.vue";
import PhotoForm from "@/components/photo/PhotoForm.vue";
export default {
  name: "FotoPage",
  components: [Photo, PhotoForm],
  data() {
    return {
      photos: [],
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
  },
};
</script>

<style lang="scss" scoped></style>
