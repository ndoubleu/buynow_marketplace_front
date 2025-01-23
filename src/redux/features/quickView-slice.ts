import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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

export const quickView = createSlice({
  name: "quickView",
  initialState,
  reducers: {
    updateQuickView: (_, action) => {
      return {
        value: {
          ...action.payload,
        },
      };
    },

    resetQuickView: () => {
      return {
        value: initialState.value,
      };
    },
  },
});

export const { updateQuickView, resetQuickView } = quickView.actions;
export default quickView.reducer;
