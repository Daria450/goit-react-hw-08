import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.goit.global';

export const registerThunk = createAsyncThunk('register', async (body, thunkAPI) => {
    try {
        const response = await axios.post('/users/signup', body);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})