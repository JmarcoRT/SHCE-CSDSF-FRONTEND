import { useState, useEffect } from "react";
import { loginApi } from "@/modules/auth/api/login.ts";
import { setAuth, clearAuth } from "../api/auth.ts";

export function useAuth() {
    const [token, setToken] = useState<string | null>(localStorage.getItem("accessToken"));
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // si hay token guardado, lo aplicas a Axios
    useEffect(() => {
        if (token) setAuth(token);
    }, [token]);

    async function login(username: string, password: string) {
        try {
            console.log(username, password);
            setLoading(true);

            // Quitar cualquier token viejo antes de loguear
            clearAuth();
            localStorage.removeItem("accessToken");

            const res = await loginApi({ username, password });
            setAuth(res.accessToken);                                           //crea el cabezal token para sgts llamadas
            localStorage.setItem("accessToken", res.accessToken);
            setToken(res.accessToken);
            setError(null);
            console.log("Funcionoooo");
            return res;
        } catch (err: any) {
            console.error("🔴 Error en login:", err);
            console.error("📩 Respuesta backend:", err?.response);
            const msg =
                err?.response?.data?.message ||
                err?.response?.data?.error ||
                err?.message ||
                "Error de autenticación";
            setError(msg);
            throw err;
        } finally {
            setLoading(false);
        }
    }

    function logout() {
        clearAuth();    //quita cabezal token del http
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setToken(null);
    }

    return { token, login, logout, loading, error };
}