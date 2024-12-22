<template>
  <v-col cols="4">
    <v-card @click="openPhoto">
      <v-card-title>{{ photo.title }}</v-card-title>
      <v-card-text class="d-flex">
        <v-img :src="photo.url" width="200" height="200" />
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script lang="ts">
export default {
  name: "Photo",
  props: {
    photo: {
      type: Object,
      required: true,
    },
  },
  emits: ['open-photo'],
  methods: {
    openPhoto() {
      this.$emit('open-photo', this.photo)
    }
  },
};
</script>

<style lang="scss" scoped></style>
