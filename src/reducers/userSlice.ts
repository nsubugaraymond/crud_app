import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios, { AxiosError } from 'axios';

interface User {
  id: number;
  name: string;
}

interface AddUserRequest {
  name: string;
}

interface EditUserRequest {
  id: number;
  name: string;
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => 'users',
    }),
    addUser: builder.mutation<User, AddUserRequest>({
      query: (newUser) => ({
        url: 'users',
        method: 'POST',
        body: newUser,
      }),
    }),
    editUser: builder.mutation<User, EditUserRequest>({
      query: ({ id, name }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: { name },
      }),
    }),
    deleteUser: builder.mutation<void, number>({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useAddUserMutation,
  useEditUserMutation,
  useDeleteUserMutation,
} = userApi;

export default userApi;
