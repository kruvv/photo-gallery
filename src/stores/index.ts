import { defineStore } from 'pinia'

export const usePhotoStore = defineStore('photos', {
  state: (): State => ({
    photos: [],
    dialogVisible: false,
    currentPhoto: null,
    isLoading: false
  }),
  getters: {
    getAllPhotos(state) {
      return state.photos
    },
    getDialogVisible(state) {
      return state.dialogVisible
    },
    getCurrentPhoto: (state) => state.currentPhoto,
    getCurrentPhotoTitle: (state) => `Название фотографии: ${state.currentPhoto?.title}`,
    getIsLoading: (state) => state.isLoading
  },
  actions: {

    async fetchPhoto() {
      try {
        this.isLoading = true
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_limit=10",
        );
        const data = await response.json();
        this.photos = data;

      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message)
        }
      } finally {
        this.isLoading = false
      }
    },
    addPhoto(photo: PhotoInfo) {
      this.photos.push(photo)
    },
    showDialog(state: State) {
      return state.dialogVisible = true
    },
    hideDialog(state: State) {
      state.dialogVisible = false
    },
    setCurrentPhoto(state: State, payload: PhotoInfo) {
      state.currentPhoto = payload
    },
  }
})

interface PhotoInfo {
  id: number | string,
  title: string,
  url: string,
  thumbnailUrl: string
}
interface State {
  photos: PhotoInfo[],
  dialogVisible: boolean,
  currentPhoto: PhotoInfo | null,
  isLoading: boolean
}
