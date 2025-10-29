import { useState, type ReactNode, useEffect } from "react";
import { PacientesContext } from "./PacientesContext";
import { type Paciente, datosPacientess } from "../types/tablaTipos";

type Props = { children: ReactNode };

export const PacientesProvider = ({ children }: Props) => {
    const [datosPacientes, setDatosPacientes] = useState<Paciente[]>([]);
    const [filtros, setFiltros] = useState({ documento: "", nombre: "", area: "" });

    useEffect(()=>{
        setDatosPacientes(datosPacientess)
        console.log(datosPacientes)
    },[])

    useEffect(() => {
        console.log("filtré")
        const filtrados = datosPacientess.filter(p =>
            p.identificacion.includes(filtros.documento) &&
            p.nombre.toLowerCase().includes(filtros.nombre.toLowerCase()) &&
            (filtros.area === "" || p.area === filtros.area)
        );
        setDatosPacientes(filtrados);
        
    }, [filtros]);

    return (
        <PacientesContext.Provider value={{ datosPacientes, setDatosPacientes, filtros, setFiltros }}>
            {children}
        </PacientesContext.Provider>
    );
};
