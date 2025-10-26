import { Navigate } from "react-router-dom";
import { useAuthContext } from "@/shared/hooks/useAuthContext";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { token } = useAuthContext();
    if (!token) {
        return <Navigate to="/login" replace />;
    }
    return <>{children}</>;
}
