import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import AdmisionHome from "./pages/AdmisionHome";
import AdmisionLista from "./pages/AdmisionLista";
import PacientesPage from "./pages/PacientesPage";

export function AdmisionRoutes() {
    const routes: RouteObject[] = [
        { path: "", element: <AdmisionHome /> },
        { path: "pacientes", element: <PacientesPage /> },
        { path: "historial", element: <AdmisionLista /> },
    ];
    return useRoutes(routes);
}
