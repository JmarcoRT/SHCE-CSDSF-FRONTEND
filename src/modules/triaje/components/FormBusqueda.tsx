import { useContext } from "react";
import { PacientesContext } from "../context/PacientesContext";
import { Especialidades } from "../types/Especialidades";
import CampoBusqueda from "./CampoBusqueda";
import CampoSelect from "./CampoSelect";

export default function FormBusqueda() {
    const { filtros, setFiltros } = useContext(PacientesContext);

    return (
        <div className="border border-[#174BAE] rounded-lg p-5 grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4">

            <CampoBusqueda
                label="Buscar por documento"
                placeholder="Buscar.."
                width="w-full min-w-[150px]"
                value={filtros.documento}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFiltros(prev => ({ ...prev, documento: e.target.value }))
                }
            />

            <CampoBusqueda
                label="Buscar por nombre"
                placeholder="Buscar.."
                width="w-full min-w-[150px]"
                value={filtros.nombre}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFiltros(prev => ({ ...prev, nombre: e.target.value }))
                }
            />

            <CampoSelect
                label="Filtrar por área"
                options={Especialidades.map(opt => opt.nombre)}
                width="w-full min-w-[150px]"
                value={filtros.area}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setFiltros(prev => ({ ...prev, area: e.target.value }))
                }
            />

        </div>
    );
}
