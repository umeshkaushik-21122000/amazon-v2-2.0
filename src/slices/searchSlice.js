  import { createSlice } from "@reduxjs/toolkit";

  const initialState = {
      items: [],
    };


  export const searchSlice = createSlice({
      name: "search",
      initialState,
      reducers: {
          addResult : (state, action) => {
          state.items=[...action.payload]
        },
      },
    });

      export const {addResult}=searchSlice.actions;

      export default searchSlice.reducer;

      export const results=(state)=>state.search.items;