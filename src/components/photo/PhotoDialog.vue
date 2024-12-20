<template>
  <div class="text-center pa-4">
    <v-dialog v-model="dialogVisible" max-width="600">
      <v-card>
        <v-card-title>{{ full_title }}</v-card-title>
        <v-card-text>
          <v-img :src="photo.url" />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">

export default {
  name: "PhotoDialog",
  props: {
    photo: {
      type: Object,
      requared: true,
      default: null
    },
    value: {
      type: Boolean,
      default: false
    }
  }, emits: ['input'],
  data: () => ({
    dialogVisible: false
  }),
  computed: {
    full_title() {
      return `Название фотографии - ${this.photo.title}`
    }
  },
  watch: {
    value(newValue) {
      this.dialogVisible = newValue
    },
    dialogVisible(newValue) {
      this.$emit('input', newValue)
    }
  },
  created() {
    this.dialogVisible = this.value
  },
}
</script>

<style scoped></style>
