import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios  from "axios";

const initialState = {
  publish: null,
  isLoading: false,
};

const id = localStorage.getItem("id");
const token = localStorage.getItem("token");

export const fetchData = createAsyncThunk("publish/fetchData", async () => {
  try {
    const res = await axios.get(
      `https://evening-dusk-96253.herokuapp.com/api/quiz/set/${id}`,
      
      {
        headers: {
          Authorization: token,
          "Content-type": "Application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error)
  }
});

const publishSlice = createSlice({
  name: "publisher",
  initialState,
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      console.log(action)
      state.isLoading = false;
      state.publish = action.payload.data;
    },
    [fetchData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// export const {increment, decremet} = publishSlice.action
export default publishSlice.reducer;
