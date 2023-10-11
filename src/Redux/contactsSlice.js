import { addContscts, fetchContacts, deleteContact } from "Api";
import { createSlice } from "@reduxjs/toolkit";

const contactInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}

export const contactSlice = createSlice({
  name: "contacts",
  initialState: contactInitialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [addContscts.pending]: handlePending,

    [fetchContacts.fulfilled]: (state, {payload}) => {
      state.status = 'resolved';
      state.contacts = payload;
    },
    [addContscts.fulfilled]: (state, {payload}) => {
      state.status = 'resolved';
      state.contacts.push(payload);
    },
    [deleteContact.fulfilled](state, {payload}) {
      state.status = 'resolved';
      state.contacts = state.contacts.filter(contact => contact.id !== payload.id);
    },
    [fetchContacts.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [addContscts.rejected]: handleRejected,
  }
});



export const contactsReducer = contactSlice.reducer;