import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem('user'))
export const userSlice = createSlice({
    name: "user",

    initialState: storedUser || {
        userName: null,
        email: null,
        id: null,
        userToken: null,
    },
    reducers: {
        login: (state, action) => {  
            const {username, email, id, token} = action.payload
            state.userName = username;
            state.email = email,
            state.id = id,
            state.userToken = token;
            localStorage.setItem('user', JSON.stringify(state))
        },
        logout: () => {
            localStorage.removeItem('user')
        },  
    }
});

// Export the actions to be used in the components
export const { login, logout } = userSlice.actions; 
export const selectUser = (state) => state.user;
//Export the reducer to be used in the store
export default userSlice.reducer; 

