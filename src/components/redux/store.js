// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { eventsApi } from "./rtkQuery/rtkQuery";
// import { eventReducer } from "./slice";

// export const store = configureStore({
//   reducer: combineReducers({
//     [eventsApi.reducerPath]: eventsApi.reducer,
//     eventState: eventReducer,
//   }),
//   middleware: (getDefaultMiddleware) => [
//     ...getDefaultMiddleware(),
//     eventsApi.middleware,
//   ],
// });
// export const store = configureStore({
//   reducer: {
//     eventReducer,
//     [eventsApi.reducerPath]: eventsApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(eventsApi.middleware),
// });
// ----------------------------

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { eventsApi } from "./rtkQuery/rtkQuery";
import { eventReducer } from "./slice";

export const store = configureStore({
  reducer: combineReducers({
    [eventsApi.reducerPath]: eventsApi.reducer,
    eventState: eventReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(eventsApi.middleware),
});
