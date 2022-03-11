import { configureStore } from '@reduxjs/toolkit'
import { paymentsApi } from '../services/payments'

export const store = configureStore({
  reducer: {
    [paymentsApi.reducerPath]: paymentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(paymentsApi.middleware),
})