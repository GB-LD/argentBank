import { createAsyncThunk } from "@reduxjs/toolkit"

// Thunk pour gérer la connexion utilisateur
const loginUserThunk = createAsyncThunk(
    "auth/loginUser",
    async ({ email, password }, thunkAPI) => {
        try {
            // Appel de l'API pour la connexion
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error("The email address or password you entered is incorrect. Please try again.") // Génère une erreur si l'authentification échoue
            }

            const data = await response.json() // Récupère les données utilisateur
            return data // Données renvoyées au reducer via `fulfilled`
        } catch(error) {
            return thunkAPI.rejectWithValue("Unable to connect to the authentication server. Please check your internet connection and try again later.")  // Retourne un message d'erreur pour `rejected`
        }
    }
);

export default loginUserThunk;