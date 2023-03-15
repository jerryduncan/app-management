import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CategoryState = {
  fields: { title: string; id: number }[];
};

const initialState: CategoryState = {
  fields: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addField: (state, action: PayloadAction<{ title: string; id: number }>) => {
      state.fields.push(action.payload);
    },
    deleteField: (state, action: PayloadAction<number>) => {
      state.fields = state.fields.filter((field) => field.id !== action.payload);
    },
  },
});

export const { addField, deleteField } = categorySlice.actions;

export default categorySlice.reducer;
