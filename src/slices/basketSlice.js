import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};


export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items=[...state.items,action.payload]
    },
    
    removeFromBasket: (state, action) => {
      const idx=state.items.findIndex(
        basketItems=>basketItems.id===action.payload.id
      )
      let newbasket=[...state.items];
      newbasket.splice(idx,1);
      state.items=newbasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selecttotal = (state) =>state.basket.items.reduce((total,items)=>total+items.price,0);

export default basketSlice.reducer;
