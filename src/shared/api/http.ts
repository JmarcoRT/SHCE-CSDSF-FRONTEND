import axios from "axios";
import { ENV } from "@/config/env";
import { clearAuth } from "./auth";

export const http = axios.create({
    baseURL: ENV.API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

// Interceptor de respuesta global
http.interceptors.response.use(
    (response) => response,  // si todo va bien, devuelve la respuesta normal
    (error) => {
        if (error.response?.status === 401) {   //Se asume que la sesion expiro
            console.warn(" Pasando por axios...");
            console.log("📩 Respuesta del backend:", error.response);
            clearAuth();
            //window.location.href = "/login"; // redirige a la pantalla de login
        }
        return Promise.reject(error);
    }
);