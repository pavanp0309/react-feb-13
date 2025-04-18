// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes:["Contacts"],
  endpoints: (builder) => ({
    getContacts: builder.query({ // for fetching the data we use Query
      query: () => `users`,
      providesTags:["Contacts"],
    }),
    createContact: builder.mutation({ // mutation: helps in doing crud operation on server side
        query: (newcontact) => ({
         url: "users",
         method:"POST", // creation of data 
         body:newcontact
        }),
        invalidatesTags:["Contacts"],
      }),
    deleteContact: builder.mutation({ // mutation: helps in doing crud operation on server side
        query: (id) => ({
            url: `users/${id}`,
            method:"DELETE",
           }),
        invalidatesTags:["Contacts"],
      }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetContactsQuery,useCreateContactMutation,useDeleteContactMutation,} = contactsApi