import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  postDetails: null,
  isLoading: false,
  errorMessage: null
};

export const fetchDetails = createAsyncThunk(
  "details/fetchDetails",
  async ({ code, email },  thunkAPI) => {

    try {
      const res = await axios.post(
        "https://evening-dusk-96253.herokuapp.com/api/quiz/verify",
        { quizCode: code, email }
      );;
      return res.data;
    } catch (error) {
      // return
      // thunkAPI.rejectWithValue(error.response.data.message)
      throw Error(error.response.data.message)
    }
    
  }
);

const testDetailSlice = createSlice({
  name: "postDetails",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDetails.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.postDetails = action.payload.data ;
    });
    builder.addCase(fetchDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    });
  },
});

export default testDetailSlice.reducer;
