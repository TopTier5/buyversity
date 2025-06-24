import axios from "axios";

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
});
 
export const apiFetcher = async (url) => {
    const response = await apiClient.get(url);
    return response.data;   
}

export const imageBaseURL = import.meta.env.VITE_BASE_URL;