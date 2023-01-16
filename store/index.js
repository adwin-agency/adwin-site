import { createSlice, configureStore } from '@reduxjs/toolkit'

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    media: {
      mobile: false
    }
  },
  reducers: {
    setMedia(state, action) {
      state.media = {
        mobile: action.payload < 1200
      }
    }
  }
})

export const { setMedia } = mainSlice.actions

export default configureStore({
  reducer: mainSlice.reducer
})
