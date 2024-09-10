import { createSlice } from '@reduxjs/toolkit'

export const UsersStore = createSlice({
    name: 'UsersStore',
    initialState: {
        user: null,
    },
    reducers: {
        setUserDetail: (state, actions) => {
            state.user = actions.payload
        },
    }
})

export const { setUserDetail } = UsersStore.actions

export default UsersStore.reducer