import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://651f0a8244a3a8aa47695c1f.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async () => {
  try {
    const response = await axios.get("/contacts");
    return response.data; 
  } catch (e) {
    throw e; 
  }
});


export const addContscts = createAsyncThunk(
  'contacts/addContscts',
  async function(contact, {rejectWithValue}) {
   try {
    
    const response = await axios.post(`/contacts`, {
      ...contact
    })
   
    return response.data
  }catch (error) {
    return rejectWithValue(error.message)
   }
  }
)


export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async function(id, {rejectWithValue}) {
    try {
      const response = await axios.delete(`/contacts/${id}`)
      return response.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)