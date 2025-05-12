import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import { authReducer } from "./auth/slice";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filtersReducer,
        auth: authReducer,
    },

    // devTools: false,
    // devTools: import.meta.env === 'development',

});
