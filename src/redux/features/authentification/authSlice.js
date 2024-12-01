import { createSlice } from "@reduxjs/toolkit"
import loginUserThunk from "./authThunks"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        userEmail: null,
        userToken: null,
        loading: false,
        error: null,
    },
    reducers: {
        logout(state) {
            state.isAuthenticated = false
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginUserThunk.pending, (state, action) => {
            // Déclenché lorsque la requête commence
            state.loading = true
            state.error = null
            console.log(action)
        })
        .addCase(loginUserThunk.fulfilled, (state, action) => {
            // Déclenché lorsque la requête réussit
            state.loading = false
            state.isAuthenticated = true
            state.userToken = action.payload.body.token
            console.log(action)
        })
        .addCase(loginUserThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            console.log(action)
        })
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;