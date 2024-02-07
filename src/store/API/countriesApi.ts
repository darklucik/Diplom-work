import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiHost, apiKey, baseUrl } from "../../utils/baseUrl";

export interface ICountries {
  name: string;
  code: string;
  flag: string;
}

export interface IGetCountriesResponse {
  results: number;
  response: ICountries[];
}

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", apiKey);
      headers.set("X-RapidAPI-Host", apiHost);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCountries: builder.query<IGetCountriesResponse, any>({
      query: () => ({
        url: "/countries",
      }),
    }),
  }),
});

export const { useGetCountriesQuery } = countriesApi;
