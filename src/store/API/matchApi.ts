import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiHost, apiKey, baseUrl } from "../../utils/baseUrl";

export interface MatchItem {
  fixture: {
    id: number;
    referee: string;
    timezone: string;
    date: string;
    venue: {
      id: number;
      name: string;
      city: string;
    };
    status: {
      long: string;
      short: string;
    };
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
  };
  teams: {
    home: {
      id: number;
      name: string;
      winner: boolean;
      logo: string;
    };
    away: {
      id: number;
      name: string;
      winner: boolean;
      logo: string;
    };
  };
  goals: {
    home: number;
    away: number;
  };
  score: {
    fulltime: {
      home: number;
      away: number;
    };
  };
}

export interface IGetMatchResponse {
  results: number;
  response: MatchItem[];
}

export const matchApi = createApi({
  reducerPath: "matchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", apiKey);
      headers.set("X-RapidAPI-Host", apiHost);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCountries: builder.query<IGetMatchResponse, any>({
      query: (h2h) => ({
        url: "/fixtures/headtohead",
        params: {
          h2h: "33-34",
        },
      }),
    }),
  }),
});

export const { useLazyGetCountriesQuery } = matchApi;
