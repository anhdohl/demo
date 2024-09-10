import { configureStore } from '@reduxjs/toolkit'
import UsersStore from './actionReducers/UsersStore'

export const store = configureStore({
  reducer: {
    UsersStore: UsersStore
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch