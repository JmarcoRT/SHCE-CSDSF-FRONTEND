import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import AtencionHome from "./pages/AtencionHome";
import PacientesAtendidos from "./pages/PacientesAtendidos";
import PacientesPendientes from "./pages/PacientesPendientes";
import HistorialConsultasAM from "./pages/HistorialConsultasAM";

export function AtencionMedicaRoutes() {
    const routes: RouteObject[] = [
        { path: "", element: <AtencionHome /> },
        { path: "pacientes", element: <PacientesPendientes /> },
        { path: "atendidos", element: <PacientesAtendidos /> },
        { path: "consultas", element: <HistorialConsultasAM /> },
    ];
    return useRoutes(routes);
}
