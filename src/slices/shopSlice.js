import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchShopData = createAsyncThunk(
  'shop/fetchShopData',
  async () => {
    const response = await axios.get('http://localhost:3001/shop');
    return response.data 
  }
);

const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    cases: [],
    personages: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShopData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchShopData.fulfilled, (state, action) => {
        state.loading = false;
        state.cases = action.payload[0]['cases'];
        state.personages = action.payload[0]['personages'];
      })
      .addCase(fetchShopData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default shopSlice.reducer;
