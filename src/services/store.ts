import { usersApi } from '@/services/userApi/user-api.service'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(usersApi.middleware),
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
