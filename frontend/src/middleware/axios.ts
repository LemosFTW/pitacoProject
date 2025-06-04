import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL ;

export const get = async (urlToFetch: string) => {
    const response = await axios.get(`${url}/${urlToFetch}`);
    return response.data;
}

export const post = async (urlToFetch: string, data: any) => {
    const response = await axios.post(`${url}/${urlToFetch}`, data);
    return response.data;
}

export const del = async (urlToFetch: string) => {
    const response = await axios.delete(`${url}/${urlToFetch}`);
    return response.data;
}

export const patch = async (urlToFetch: string, data: any) => {
    const response = await axios.patch(`${url}/${urlToFetch}`, data);
    return response.data;
}