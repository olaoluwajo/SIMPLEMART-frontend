/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const customer_register = createAsyncThunk(
  "auth/customer_register",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/customer/customer-register", info);
      localStorage.setItem("customerToken", data.token);
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      // console.log(error.respone);
      return rejectWithValue(error.response.data);
    }
  }
);

// END METHODS ----------------------------------------------------------------

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    userInfo: "",
    errorMessage: "",
    successMessage: "",
  },

  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(customer_register.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(customer_register.rejected, (state, { payload }) => {
        state.errorMessage = payload.error;
        state.loading = false;
      })
      .addCase(customer_register.fulfilled, (state, { payload }) => {
        state.successMessage = payload.message;
        state.loading = false;
      });
  },
});

export const { messageClear } = authReducer.actions;

export default authReducer.reducer;
