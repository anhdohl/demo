import { createSlice } from '@reduxjs/toolkit'

// let inputSearch = null
// if (typeof window !== 'undefined') {
//     inputSearch = localStorage.getItem('input_search_header');
// }

export const CommonStore = createSlice({
    name: 'CommonStore',
    initialState: {
        theme: 'light',
        menuSide: false,
        MenuActive: '/',
        logoutModal: false,
    },
    reducers: {
        // InputSearchValue: (state, actions) => {
        //     localStorage.setItem('input_search_header', actions.payload)
        //     state.valueInput = actions.payload
        // },
        setTheme: (state, actions) => {
            state.theme = actions.payload
        },
        setMenuSide: (state, actions) => {
            state.menuSide = actions.payload
        },
        setMenuActive: (state, actions) => {
            state.MenuActive = actions.payload
        },
        setLogoutModal: (state, actions) => {
            state.logoutModal = actions.payload
        },
    }
})

export const {
    setTheme,
    setMenuSide,
    setMenuActive,
    setLogoutModal,
} = CommonStore.actions

export default CommonStore.reducer