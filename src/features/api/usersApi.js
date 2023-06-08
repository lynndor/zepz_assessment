import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const usersApi = createApi({
	reducerPath: 'usersApi',

	baseQuery: fetchBaseQuery({ baseUrl: 'http://api.stackexchange.com/2.2'}),

	endpoints: builder => ({
		getUsers: builder.query({
			query: () => '/users?pagesize=20&order=desc&sort=reputation&site=stackoverflow',
      transformResponse: reponseData => reponseData.items
		})
	})
})

export const updateUser = (dispatch, user) => {
  dispatch(usersApi.util.updateQueryData("getUsers", undefined, (users) => {
    const foundIndex = users.findIndex(u => u.user_id === user.user_id)
    users[foundIndex] = user
    return users
  }))
}

export const searchUser = (dispatch, searchValue) => {
  dispatch(usersApi.util.updateQueryData("getUsers", undefined, (users) => {
    return users.filter(u => u.display_name.includes(searchValue))
  }))
}

export const { useGetUsersQuery } = usersApi
