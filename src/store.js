import { configureStore } from '@reduxjs/toolkit'
import { usersApi } from './features/api/usersApi.js'
import userReducer from './features/users/usersSlice'

export default configureStore({
  reducer: {
    users: userReducer,
    [usersApi.reducerPath]: usersApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(usersApi.middleware)
})
