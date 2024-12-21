import { createAsyncThunk } from "@reduxjs/toolkit"

const updateUserProfileThunk = createAsyncThunk(
    "profile/updateProfile",
    async ({token, firstName, lastName}, {rejectedValue}) => {
        try {
            if (!token) {
                throw new Error("Token is missing")
            }

            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({firstName, lastName})
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message || "failed to update profile.")
            }

            const data = await response.json()
            return data.body
        } catch (error) {
            return rejectedValue(error.message)
        }
    }
)

export default updateUserProfileThunk