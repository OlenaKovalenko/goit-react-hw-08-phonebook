import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchContacts = createAsyncThunk("contacts",
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get("/contacts");
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    });

export const addContact = createAsyncThunk("contacts/addContact",
    async ({name, number}, thunkAPI) => {
        try {
            const { data } = await axios.post("/contacts", {name, number });
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    });

export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const { data } = await axios.delete(`/contacts/${contactId}`);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    });

