import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

type InitialState = {
  value: Product;
};

const initialState: InitialState = {
  value: {
    title: "",
    title_en: "",
    slug: "",
    model_type: "",
    votes_count: 0,
    reviews: 0,
    price: 0,
    price_usd: 0,
    images: [],
    id: 0,
    category: "",
    votes_rating: 0,
    comments_count: 0,
    properties: [],
  },
};

export const productDetails = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    updateproductDetails: (_, action) => {
      return {
        value: {
          ...action.payload,
        },
      };
    },
  },
});

export const { updateproductDetails } = productDetails.actions;
export default productDetails.reducer;
