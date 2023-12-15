import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk("auth/register",
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post("/users/signup", credentials);
            return data;
            setAuthHeader(data.token);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        
        }
    }
);

export const logIn = createAsyncThunk("auth/login",
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post("/users/login", credentials);
            return data;
            setAuthHeader(data.token);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
            
        }
    }
);

export const logOut = createAsyncThunk("auth/logout",
    async (_, thunkAPI) => {
        try {
            await axios.post("/users/logout");
            clearAuthHeader();
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
            
        }
    }
);

export const refreshUser = createAsyncThunk("auth/refresh",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        
    }
)

