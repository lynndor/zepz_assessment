import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
	name: "users",

	initialState: {	},

	reducers: {
		setUsers: (state, data) => {
			state.users = data.payload
		},

		follow: ( state, payload ) => {
			console.log(state, "follow")
		},

		unFollow: ( state, payload ) => {
			console.log(state, "follow")
		},

		blockUser: ( state, payload ) => {
			console.log(state)
			console.log(payload)

		}
	}

})

export const { setUsers, follow, unFollow, blockUser } = userSlice.actions

export default userSlice.reducer
