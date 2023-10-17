import axios from "axios";

const Base_URL = import.meta.env.VITE_REACT_APP_BASE_URL; 
 
export async function get(url: string) {
    return axios.get(Base_URL + url);
}

export {Base_URL}