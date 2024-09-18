import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_categories = createAsyncThunk(
  "product/get_categories",
  async () => {
    try {
      const { data } = await api.get("/home/get-categories");
      // console.log(data);
      return data;
    } catch (error) {
      console.error(error.response);
    }
  }
);


// END METHODS ----------------------------------------------------------------

export const get_products = createAsyncThunk("product/get_products", async () => {
  try {
    const { data } = await api.get("/home/get-products");
    console.log(data);
    return data;
  } catch (error) {
    console.error(error.response);
  }
});


// END METHODS ----------------------------------------------------------------


export const price_range_product = createAsyncThunk(
  "product/price_range_product",
  async (_, { fulfillWithValue }) => {
    try {
      const { data } = await api.get("/home/price-range-latest-product");
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.respone);
    }
  }
);


// END METHODS ----------------------------------------------------------------




export const homeReducer = createSlice({
  name: "home",
  initialState: {
    categories: [],
    products: [],
    latest_product: [],
    topRated_product: [],
    discount_product: [],
    priceRange: {
      low: 0,
      high: 100,
    },
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(get_categories.fulfilled, (state, { payload }) => {
        state.categories = payload.categories;
      })
      .addCase(get_products.fulfilled, (state, { payload }) => {
        state.products = payload.products;
        state.latest_product = payload.latest_product;
        state.topRated_product = payload.topRated_product;
        state.discount_product = payload.discount_product;
      });
  },
});



export default homeReducer.reducer;