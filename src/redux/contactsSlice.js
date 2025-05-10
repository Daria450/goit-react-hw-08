import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit"
import { deleteContact, fetchContacts, addContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";


const initialState = {

    items: [],
    isLoading: false,
    isError: null,

}

// const handleReject = (state, action) => {
//     state.isError = action.payload
// }






const slice = createSlice({
    name: 'contacts',
    initialState,
    // reducers: {
    //     // addContact: (state, action) => { state.items.push(action.payload) },
    //     // deleteContact: (state, action) => {
    //     //     state.items = state.items.filter(
    //     //         item => item.id !== action.payload
    //     //     );
    //     // },
    //     // dataFullfilledOperation: (state, action) => {
    //     //     state.items = action.payload
    //     // },
    //     // setLoading: (state, action) => {
    //     //     state.isLoading = action.payload
    //     // },
    //     // setError: (state, action) => {
    //     //     state.isError = action.payload
    //     // },
    // },
    extraReducers: (builder) => {
        builder.addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload
        })

            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    item => item.id !== action.payload
                );
            })
            .addCase(addContact.fulfilled, (state, action) => { state.items.push(action.payload) })
            // .addCase(fetchContacts.rejected, handleReject)
            // .addCase(deleteContact.rejected, handleReject)
            // .addCase(addContact.rejected, handleReject)
            .addMatcher(isAnyOf(fetchContacts.rejected, deleteContact.rejected, addContact.rejected), (state, action) => {
                state.isError = action.payload
            })
            .addMatcher(isAnyOf(fetchContacts.pending, deleteContact.pending, addContact.pending), (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addMatcher(isAnyOf(fetchContacts.fulfilled, deleteContact.fulfilled, addContact.fulfilled), (state) => {
                state.isLoading = false;
            })
    }
})

export const { setLoading, setError, dataFullfilledOperation } = slice.actions;
export const contactsReducer = slice.reducer;

export const selectItems = (state) => state.contacts.items;
export const selectError = (state) => state.contacts.isError;
export const selectLoading = (state) => state.contacts.isLoading;



export const selectVisibleContacts = createSelector(
    [selectItems, selectNameFilter],
    (contacts, filter) => {
        return contacts.filter(contact => contact.name.toLowerCase()
            .includes(filter.toLowerCase()))
    }
)
