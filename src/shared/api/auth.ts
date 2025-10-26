import { http } from "./http";

export function setAuth(token: string) {
    http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export function clearAuth() {
    delete http.defaults.headers.common["Authorization"];
}