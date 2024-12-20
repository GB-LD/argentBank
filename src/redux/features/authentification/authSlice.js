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
        })
        .addCase(loginUserThunk.fulfilled, (state, action) => {
            // Déclenché lorsque la requête réussit
            state.loading = false
            state.isAuthenticated = true
            state.userToken = action.payload.body.token
        })
        .addCase(loginUserThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;