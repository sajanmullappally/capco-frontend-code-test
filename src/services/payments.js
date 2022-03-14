import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../config'

export const paymentsApi = createApi({
  reducerPath: 'paymentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getPayments: builder.query({
      query: () => `payments`,
    }),
    getPaymentsByPageIndex: builder.query({
      query: (pageIndex) => `payments?pagelndex=${pageIndex}`,
    }),
  }),
})

export const { useGetPaymentsQuery, useGetPaymentsByPageIndexQuery } = paymentsApi