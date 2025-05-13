import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const api = axios.create({
    baseURL: 'https://connections-api.goit.global', // базовий URL

});
// Gugenberger@gmail.com

export const registerThunk = createAsyncThunk('register', async (body, thunkAPI) => {
    try {
        const response = await api.post('/users/signup', body);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const loginThunk = createAsyncThunk('login', async (body, thunkAPI) => {
    try {
        const response = await api.post('/users/login', body);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})