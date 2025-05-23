import axios from "axios";
import { environment } from "../assets/environments/environments";
import { PostInterface, GetInterface } from "../interfaces/api";

const api = axios.create({
    baseURL: environment.API_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export const Post = async ({ endpoint, body }: PostInterface) => {
    try {
        const response = await api.post(`${endpoint}`, body);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const Get = async ({ endpoint }: GetInterface) => {
    try {
        const response = await api.get(`/${endpoint}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
