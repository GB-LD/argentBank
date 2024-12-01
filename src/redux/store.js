import { configureStore } from "@reduxjs/toolkit"
import authReducer from './features/authentification/authSlice'
import { thunk } from "redux-thunk"

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export default store