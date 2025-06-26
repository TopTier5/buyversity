import axios from "axios";

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
});
 
export const apiFetcher = (url) =>
  apiClient.get(url).then((res) => res.data);

export const imageBaseURL = import.meta.env.VITE_IMAGE_BASE_URL;


