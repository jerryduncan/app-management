import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryFormProps } from '../components/categoryForm';

interface CategoryFormState {
  categoryName: string;
  typedName: string;
  fieldTyped: string;
  visible: boolean;
  fields: { title: string; id: number }[];
}


interface RootState {
  category: CategoryFormState;
}

const initialState: CategoryFormState = {
  categoryName: '',
  typedName: '',
  fieldTyped: '',
  visible: false,
  fields: [],
};

const categoryFormSlice = createSlice({
  name: 'categoryForm',
  initialState,
  reducers: {
    setCategoryName: (state, action: PayloadAction<string>) => {
      state.categoryName = action.payload;
    },
    setTypedName: (state, action: PayloadAction<string>) => {
      state.typedName = action.payload;
    },
    setFieldTyped: (state, action: PayloadAction<string>) => {
      state.fieldTyped = action.payload;
    },
    setVisible: (state, action: PayloadAction<boolean>) => {
      state.visible = action.payload;
    },
    setFields: (state, action: PayloadAction<{ title: string; id: number }[]>) => {
      state.fields = action.payload;
    },
    addField: (state, action: PayloadAction<{ title: string; id: number }>) => {
      
      state.fields.push(action.payload);
      
    },
    removeField: (state, action: PayloadAction<number>) => {
      state.fields = state.fields.filter((field) => field.id !== action.payload);
    },
    resetForm: (state) => {
      state.categoryName = '';
      state.typedName = '';
      state.fieldTyped = '';
      state.visible = false;
      state.fields = [];
    },
    addCategory: (state, action: PayloadAction<{ name: string}>) => {
      state.categoryName = action.payload.name;
    },
  },
});

export const {
  setCategoryName,
  setTypedName,
  setFieldTyped,
  setVisible,
  setFields,
  addField,
  removeField,
  addCategory,
  resetForm,
} = categoryFormSlice.actions;

export const store = configureStore({
  reducer: categoryFormSlice.reducer,
});

export const getCategoryFormState = (state: { categoryForm: CategoryFormState }): CategoryFormProps => ({
  onSubmit: (name: string, field: string) => console.log(name, field),
  onDelete: () => console.log('delete'),
  ...state.categoryForm,
});

export const getCategory = (state: CategoryFormState) => state.categoryName;

export const getFields = (state: CategoryFormState) => state.fields;




