import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface AutosaveProjectResponse {
  success: boolean;
  message: string;
  eventId: string;
}

interface AutosaveProjectRequest {
  projectId: string;
  userId: string;
  shapedData: {
    shapes: Record<string, unknown>;
    tool: string;
    selected: Record<string, unknown>;
    frameCounter: number;
  };
  viewportData?: {
    scale: number;
    translation: {
      x: number;
      y: number;
    };
  };
}

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/project" }),
  tagTypes: ["Project"],
  endpoints: (builder) => ({
    autosaveProject: builder.mutation<
      AutosaveProjectResponse,
      AutosaveProjectRequest
    >({
      query: (data) => ({
        url: "",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
