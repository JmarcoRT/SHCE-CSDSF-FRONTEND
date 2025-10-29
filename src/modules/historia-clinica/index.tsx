import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import HistoriaClinicaHome from "./pages/HistoriaClinicaHome";
import HCpendientes from "./pages/HCpendientes";
import HChistorial from "./pages/HChistorial";
import HCatendidos from "./pages/HCatendidos";
import HCgeneral from "./pages/HCgeneral";

export function HistoriaClinicaRoutes() {
    const routes: RouteObject[] = [
        { path: "", element: <HistoriaClinicaHome /> },
        { path: "pacientes", element: <HCpendientes /> },
        { path: "atendidos", element: <HCatendidos /> },
        { path: "consultas", element: <HChistorial /> },
        { path: "pacientes/registrarhistoria", element: <HCgeneral /> },
    ];
    return useRoutes(routes);
}
