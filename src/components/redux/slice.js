// src/slice.js
import { createSlice } from "@reduxjs/toolkit";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

const eventSlice = createSlice({
  name: "eventState",
  initialState: {
    modal: false,
    events: [],
    // favorite: [],
    // searchValue: null,
  },
  reducers: {
    eventList: (state, action) => {
      console.log("action", action.payload);
      state.events = action.payload;
    },
    // searched(state, action) {
    //   state.searchValue = action.payload;
    // },
    // favorite(state, action) {
    //   const unic = state.favorite.find(el => el._id === action.payload._id);
    //   if (unic) {
    //     state.favorite = state.favorite.filter(el => el._id !== unic._id);
    //     Notify.success('Delete with favorite');
    //   } else {
    //     state.favorite = [...state.favorite, action.payload];
    //     Notify.success('Add to favorite');
    //   }
    // },
  },
});

export const { eventList } = eventSlice.actions;

export const eventReducer = eventSlice.reducer;
