import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";

function AMHome() {
    return <div>Atención Médica: Inicio</div>;
}
function Psicologia() {
    return <div>Atención Médica: Psicología</div>;
}
function Pediatria() {
    return <div>Atención Médica: Pediatría</div>;
}
function Obstetricia() {
    return <div>Atención Médica: Obstetricia</div>;
}

export function AtencionMedicaRoutes() {
    const routes: RouteObject[] = [
        { path: "", element: <AMHome /> },
        { path: "psicologia", element: <Psicologia /> },
        { path: "pediatria", element: <Pediatria /> },
        { path: "obstetricia", element: <Obstetricia /> },
    ];
    return useRoutes(routes);
}
