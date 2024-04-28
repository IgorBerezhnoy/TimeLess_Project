import { API } from '@/services/api'
import { Result } from '@/services/userApi/user-api.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API.base }),
  endpoints: builder => ({
    getUsers: builder.query<Result, string>({
      query: params => `${API.results}?${params}`,
    }),
  }),
  reducerPath: 'userApi',
})

export const { useGetUsersQuery } = usersApi
