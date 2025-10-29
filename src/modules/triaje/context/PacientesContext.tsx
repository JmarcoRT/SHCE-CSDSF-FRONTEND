import { createContext, type Dispatch, type SetStateAction } from "react";
import { type Paciente } from "../types/tablaTipos";

type PacientesContextData = {
    datosPacientes: Paciente[];
    setDatosPacientes: Dispatch<SetStateAction<Paciente[]>>;
    filtros: { documento: string; nombre: string; area: string };
    setFiltros: Dispatch<SetStateAction<{ documento: string; nombre: string; area: string }>>;
};

export const PacientesContext = createContext<PacientesContextData>({
    datosPacientes: [],
    setDatosPacientes: () => {},
    filtros: { documento: "", nombre: "", area: "" },
    setFiltros: () => {},
});
