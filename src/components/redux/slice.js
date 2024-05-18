// src/slice.js
import { createSlice } from "@reduxjs/toolkit";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

const eventSlice = createSlice({
  name: "eventState",
  initialState: {
    modal: false,
    events: [],
    participants: [],
    paginationArr: [],
    // favorite: [],
    // searchValue: null,
  },
  reducers: {
    eventList: (state, action) => {
      state.events = action.payload;
    },
    participantsList: (state, action) => {
      state.participants = action.payload;
    },
    paginationList: (state, action) => {
      state.paginationArr = action.payload;
    },
  },
});

export const { eventList, participantsList, paginationList } =
  eventSlice.actions;

export const eventReducer = eventSlice.reducer;
