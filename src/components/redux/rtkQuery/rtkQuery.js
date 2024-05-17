import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

console.log("first", process.env.REACT_APP_BASE_URL);

export const eventsApi = createApi({
  reducerPath: "eventRtk",

  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:4000/api/events`,
  }),
  tagTypes: ["TagEvent"],
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => `/`,
      providesTags: ["TagEvent"],
    }),

    getParticipants: (builder) => ({
      getEvents: builder.query({
        query: () => `/participants`,
        providesTags: ["TagEvent"],
      }),
      addEvent: builder.mutation({
        query: (body) => ({
          url: `/add`,
          method: "POST",
          body,
        }),
        invalidatesTags: ["TagEvent"],
      }),
    }),
  }),
});

export const {
  useGetEventsQuery,
  useGetParticipantsQuery,
  useAddEventMutation,
} = eventsApi;
