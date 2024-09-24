/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const add_to_cart = createAsyncThunk(
  "cart/add_to_cart",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/home/product/add-to-cart", info);
      // console.log("All data", data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// END METHODS ---------------------------------------------------------------

export const get_cart_products = createAsyncThunk(
  "cart/get_cart_products",
  async (userId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(
        `/home/product/get-cart-product/${userId}`
      );
      // console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// END METHODS ---------------------------------------------------------------

export const delete_cart_product = createAsyncThunk(
  "cart/delete_cart_product",
  async (cart_id, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.delete(
        `/home/product/delete-cart-product/${cart_id}`
      );
      // console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// END METHODS ---------------------------------------------------------------
export const quantity_inc = createAsyncThunk(
  "cart/quantity_inc",
  async (cart_id, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.put(`/home/product/quantity-inc/${cart_id}`);
      // console.log(data)
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// END METHODS ---------------------------------------------------------------
export const quantity_dec = createAsyncThunk(
  "cart/quantity_dec",
  async (cart_id, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.put(`/home/product/quantity-dec/${cart_id}`);
      console.log(data)
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// END METHODS ---------------------------------------------------------------

export const cartReducer = createSlice({
  name: "cart",
  initialState: {
    cart_products: [],
    cart_product_count: 0,
    wishlist_count: 0,
    wishlist: [],
    price: 0,
    errorMessage: "",
    successMessage: "",
    shipping_fee: 0,
    outOfStockProduct: [],
    buy_product_item: 0,
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(add_to_cart.rejected, (state, { payload }) => {
        state.errorMessage = payload.error;
      })
      .addCase(add_to_cart.fulfilled, (state, { payload }) => {
        state.successMessage = payload.message;
        state.cart_product_count = state.cart_product_count + 1;
      })
      .addCase(get_cart_products.fulfilled, (state, { payload }) => {
        state.cart_products = payload.cart_products;
        state.price = payload.price;
        state.cart_product_count = payload.cart_product_count;
        state.shipping_fee = payload.shipping_fee;
        state.outOfStockProduct = payload.outOfStockProduct;
        state.buy_product_item = payload.buy_product_item;
      })
      .addCase(delete_cart_product.fulfilled, (state, { payload }) => {
        state.successMessage = payload.message;
      })
      .addCase(quantity_inc.fulfilled, (state, { payload }) => {
        state.successMessage = payload.message;
      })
      .addCase(quantity_dec.fulfilled, (state, { payload }) => {
        state.successMessage = payload.message;
      });
  },
});
export const { messageClear } = cartReducer.actions;
export default cartReducer.reducer;
