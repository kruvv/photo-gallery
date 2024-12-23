import { defineStore } from 'pinia'

export const usePhotoStore = defineStore('photos', {
  state: () => ({
    photos: [],
    dilogVisible: false
  }),
  getters: {
    getAllPhotos(state) {
      return state.photos
    }
  },
  actions: {
    async fetchPhoto() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=10",
      );
      const data = await response.json();
      this.photos = data;
    },
    addPhoto(photo) {
      this.photos.push(photo)
    },
    showDilog(state) {
      state.dialogVisible = true
    },
    hideDilog(state) {
      state.dialogVisible = false
    }


  }
})
