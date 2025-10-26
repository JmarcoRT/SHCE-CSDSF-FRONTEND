import { useContext } from "react";
import { AuthContext } from "@/shared/context/AuthContextObject";

export function useAuthContext() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuthContext debe usarse dentro de <AuthProvider>");
    return ctx;
}
