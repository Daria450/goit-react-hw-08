import { createSlice } from "@reduxjs/toolkit"
import { registerThunk } from "./operations";

const initialState = {
    user: {
        email: null,
        name: null,
    },
    token: null,
    isLogedIn: null,
    isRefreshing: false,
}

const slice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(registerThunk.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogedIn = true;
        })
    }
});
export const authReducer = slice.reducer;