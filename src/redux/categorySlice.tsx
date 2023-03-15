import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CategoryState = {
  category: string;
  fields: { title: string; id: number }[];
};


const initialState: CategoryState = {
  category: "",
  fields: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addField: (state, action: PayloadAction<{ title: string; id: number }>) => {
      state.fields.push(action.payload);
      console.log("retrieving store fields...");

      console.log(action.payload);
    },
    deleteField: (state, action: PayloadAction<number>) => {
      state.fields = state.fields.filter((field) => field.id !== action.payload);
    },
    addCategory: (state, action: PayloadAction<string>) => {
      //state.fields.push({ title: action.payload, id: Date.now() });
      state.category = action.payload;
    },
    
  },
});

export const { addField, deleteField } = categorySlice.actions;


export default categorySlice.reducer;
