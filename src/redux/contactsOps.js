import axios from "axios";
// import { dataFullfilledOperation, setError, setLoading } from "./contactsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://681cc452f74de1d219adb863.mockapi.io';

// export const fetchDataThunk = () => async (dispatch) => {
//     try {
//         dispatch(setLoading(true));
//         const response = await axios.get('/Contacts');
//         dispatch(dataFullfilledOperation(response.data));
//         console.log(response.data);
//         dispatch(setLoading(false));
//     } catch (error) {
//         dispatch(setError(error));
//         console.log(error);
//     }
// }


export const fetchContacts = createAsyncThunk('fetchData', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/Contacts');

        return response.data;
    } catch (error) {

        return thunkAPI.rejectWithValue(error.message);
    }
})

export const deleteContact = createAsyncThunk('deleteContact', async (id, thunkAPI) => {
    try {
        const response = await axios.delete(`/Contacts/${id}`);

        return response.data.id;
    } catch (error) {

        return thunkAPI.rejectWithValue(error.message);
    }
})
export const addContact = createAsyncThunk('addContact', async (body, thunkAPI) => {
    try {
        const response = await axios.post(`/Contacts`, body);

        return response.data;
    } catch (error) {

        return thunkAPI.rejectWithValue(error.message);
    }
})