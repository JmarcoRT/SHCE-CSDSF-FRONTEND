import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import RoleRedirect from "./RoleRedirect";
import LoginPage from "@/modules/auth/pages/LoginPage";
import { AdmisionRoutes } from "@/modules/admision";
import { TriajeRoutes } from "@/modules/triaje";
import { HistoriaClinicaRoutes } from "@/modules/historia-clinica";
import { AtencionMedicaRoutes } from "@/modules/atencion-medica";
import MainLayout from "@/shared/layouts/MainLayout";
import {AuthProvider} from "@/shared/context/AuthContext.tsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <AuthProvider>
                <ProtectedRoute>
                    <MainLayout />
                </ProtectedRoute>
            </AuthProvider>
        ),
        children: [
            { path: "admision/*", element: <AdmisionRoutes /> },
            { path: "triaje/*", element: <TriajeRoutes /> },
            { path: "historia-clinica/*", element: <HistoriaClinicaRoutes /> },
            { path: "atencion-medica/*", element: <AtencionMedicaRoutes /> },
        ],
    },
    {
        path: "/login",
        element: (
            <AuthProvider>
                <LoginPage />
            </AuthProvider>
        ),
    },
    {
        path: "/redirect",
        element: (
            <AuthProvider>
                <RoleRedirect />
            </AuthProvider>
        ),
    },
]);

export { router };
