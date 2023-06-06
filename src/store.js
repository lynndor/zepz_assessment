import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './features/api/apiSlice.js'
import userReducer from './features/users/usersSlice'

export default configureStore({
  reducer: {
    users: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})
