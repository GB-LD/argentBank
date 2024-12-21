import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserProfileThunk = createAsyncThunk(
    "profile/fetchProfile",
    async (token, { rejectWithValue }) => {
        try {
            if (!token) {
                throw new Error("Token is missing");
            }

            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message || "Failed to fetch user profile")
            }

            const data = await response.json();
            return data.body

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export default fetchUserProfileThunk