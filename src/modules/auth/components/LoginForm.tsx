import { useState } from "react";
import { useAuthContext as useAuth } from "@/shared/hooks/useAuthContext";
import { Input } from "@/shared/components/Input";
import { Button } from "@/shared/components/Button";
import { LogoCircle } from "./LogoCircle";

export default function LoginForm() {
    const { login, loading, error } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login(username, password);
    };

    return (
        <>
            <LogoCircle />
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <Input
                    placeholder="Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button disabled={loading} type="submit">
                    {loading ? "Cargando..." : "INICIAR SESIÓN"}
                </Button>
                {error && <p className="text-red-500 mt-3 text-sm">{error}</p>}
            </form>
        </>
    );
}
