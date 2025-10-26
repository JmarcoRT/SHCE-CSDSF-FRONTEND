import { useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

function TriajeHome() {
    return <div>Triaje: Inicio</div>;
}
function TriajePacientes() {
    return <div>Triaje: Pacientes</div>;
}

export function TriajeRoutes() {
    const routes: RouteObject[] = [
        { path: "", element: <TriajeHome /> },
        { path: "pacientes", element: <TriajePacientes /> },
    ];
    return useRoutes(routes);
}
