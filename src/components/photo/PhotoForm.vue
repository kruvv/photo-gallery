<template>
  <v-container>
    <v-row class="d-flex">
      <v-text-field v-model="title" />
      <v-file-input v-model="img" />
      <v-btn @click="addPhoto"> Add </v-btn>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  name: "PhotoForm",
  emits: ["addPhoto"],
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
          img: reader.result,
        };
        this.$emit("addPhoto", photo);
      };
      reader.readAsDataUrl(this.img);
    },
  },
};
</script>

<style lang="scss" scoped></style>
