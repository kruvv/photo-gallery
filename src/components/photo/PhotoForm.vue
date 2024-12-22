<template>
  <v-container>
    <v-row class="d-flex justify-space-between ga-3">
      <v-text-field v-model="title" />
      <v-file-input v-model="img" />
      <v-btn class="mt-3" @click="addPhoto">
        Добавить
      </v-btn>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  name: "PhotoForm",
  emits: ["addphoto"],
  data: () => ({
    title: "",
    img: null,
  }),
  methods: {
    addPhoto() {
      const reader = new FileReader();
      reader.onload = () => {
        const photo = {
          id: Date.now(),
          title: this.title,
          url: reader.result,
        };
        this.$emit("addphoto", photo);
      };
      reader.readAsDataURL(this.img);
    },
  },
};
</script>

<style lang="scss" scoped></style>
