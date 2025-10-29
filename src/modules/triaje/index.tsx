import { useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import TriajeHome from "./pages/TriajeHome";
import TriarPacientes from "./pages/TriarPacientes";
import PacientesTriados from "./pages/PacientesTriados";
import HistoriasClinicas from "./pages/HistoriasClinicas";
import AtencionTriaje from "./pages/AtencionTriaje";

export function TriajeRoutes() {
    const routes: RouteObject[] = [
        { path: "", element: <TriajeHome /> },
        { path: "triar-pacientes", element: <TriarPacientes /> },
        { path: "pacientes-triados", element: <PacientesTriados /> },
        { path: "triar-pacientes/atencion-triaje", element: <AtencionTriaje /> },
        { path: "historias-clínicas", element: <HistoriasClinicas /> },
        
    ];
    return useRoutes(routes);
}
