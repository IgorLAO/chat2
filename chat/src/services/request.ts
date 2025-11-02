import axios from "axios";


export const api = axios.create({
    baseURL: 'https://35b4f2391aeb.ngrok-free.app'
})