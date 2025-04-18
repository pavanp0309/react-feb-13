import { configureStore } from '@reduxjs/toolkit'
import { contactsApi } from '../features/contacts/contactsApi'
import authreducer from "../features/auth/userSlice"

export const store = configureStore({
  reducer: {
    auth:authreducer, // client side reducer
    // Add the generated reducer as a specific top-level slice
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
})

