import { configureStore } from "@reduxjs/toolkit"
import authReducer from './features/authentification/authSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
    }
})

export default store