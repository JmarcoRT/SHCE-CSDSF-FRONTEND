import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import AdmisionHome from "./pages/AdmisionHome";
import AdmisionAdmitidos from "./pages/AdmisionAdmitidos";
import PacientesPage from "./pages/PacientesPage";
import HistorialAdmision from "./pages/HistorialAdmision";


export function AdmisionRoutes() {
    const routes: RouteObject[] = [
        { path: "", element: <AdmisionHome /> },
        { path: "pacientes", element: <PacientesPage /> },
        { path: "admitidos", element: <AdmisionAdmitidos /> },
        { path: "historial", element: <HistorialAdmision /> },
    ];
    return useRoutes(routes);
}
