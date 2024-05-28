import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProfileCardData = createAsyncThunk(
    'profileCard/fetchProfileCardData',
    async () => {
        try {
            let newFilteredArr = "http://localhost:3001/data";
            const response = await axios.get(newFilteredArr);
            return response.data[0];
        } catch (error) {
            console.error("Ошибка загрузки данных:", error);
            throw error;
        }
    }
)

const profileCardSlice = createSlice({
    name: 'profileCard',
    initialState: {
        loading: false,
        error: null,
        userInfo: null, 
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
           .addCase(fetchProfileCardData.pending, (state) => {
                state.loading = true;
            })
           .addCase(fetchProfileCardData.fulfilled, (state, action) => {
                state.loading = false;
                state.userInfo = action.payload;
            })
           .addCase(fetchProfileCardData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
})

export default profileCardSlice.reducer;