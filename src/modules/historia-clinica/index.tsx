import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";

function HCHome() {
    return <div>Historia Clínica: Inicio</div>;
}
function HCBuscar() {
    return <div>Historia Clínica: Buscar</div>;
}

export function HistoriaClinicaRoutes() {
    const routes: RouteObject[] = [
        { path: "", element: <HCHome /> },
        { path: "buscar", element: <HCBuscar /> },
    ];
    return useRoutes(routes);
}
