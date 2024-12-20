import { configureStore } from "@reduxjs/toolkit"
import authReducer from './features/authentification/authSlice'
import profileReducer from './features/profile/profileSlice'
import { thunk } from "redux-thunk"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export default store