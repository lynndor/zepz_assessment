import { configureStore } from '@reduxjs/toolkit'
import { usersApi } from './features/api/usersApi.js'

export default configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(usersApi.middleware)
})
