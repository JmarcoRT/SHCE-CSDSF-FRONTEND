import React, { useEffect, useState } from "react";
import { useAuth } from "@/shared/hooks/useAuth";
import { getUserById } from "@/shared/api/users";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/shared/context/AuthContextObject";
import type { User } from "@/shared/types/auth";

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const { login: doLogin, logout: doLogout, token, loading, error } = useAuth();
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    async function login(username: string, password: string) {
        const res = await doLogin(username, password);
        const userData = await getUserById(res.id);
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/redirect", { replace: true });
    }

    function logout() {
        doLogout();
        setUser(null);
        localStorage.removeItem("user");
        navigate("/login", { replace: true });
    }

    useEffect(() => {
        const stored = localStorage.getItem("user");
        if (stored) setUser(JSON.parse(stored));
    }, []);

    return (
        <AuthContext.Provider value={{ user, token, loading, error, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
