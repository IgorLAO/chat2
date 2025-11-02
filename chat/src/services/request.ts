import axios from "axios";


export const api = axios.create({
    baseURL: 'https://f29c961ee40d.ngrok-free.app'
})