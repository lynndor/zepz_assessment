import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
	reducerPath: 'api',

	baseQuery: fetchBaseQuery({ baseUrl: 'http://api.stackexchange.com/2.2'}),

	endpoints: builder => ({
		getUsers: builder.query({
			query: () => '/users?pagesize=20&order=desc&sort=reputation&site=stackoverflow'
		})
	})
})

export const { useGetUsersQuery } = apiSlice
