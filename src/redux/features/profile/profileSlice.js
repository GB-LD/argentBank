import { createSlice } from '@reduxjs/toolkit'
import fetchUserProfileThunk from './profileThunks'

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        userProfile: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearProfile(state) {
            state.userProfile = null
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUserProfileThunk.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(fetchUserProfileThunk.fulfilled, (state, action) => {
            state.loading = false
            state.userProfile = action.payload
        })
        .addCase(fetchUserProfileThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export const { clearProfile } = profileSlice.actions
export default profileSlice.reducer
