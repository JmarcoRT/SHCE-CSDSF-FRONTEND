import CampoTexto from "@/modules/admision/components/CampoTexto";
import CampoSelect from "@/modules/admision/components/CampoSelect";
import { TablaBase } from "@/shared/components/TablaBase.tsx";
import Boton from "@/shared/components/Boton.tsx";
import CampoFecha from "@/shared/components/CampoFecha";
import { datosHistorialAM, type HistorialAM } from "../types/tablaTipos";
import { Eye, Edit, LogOut } from "lucide-react";

export default function FormHistorialConsultas() {
    return (
        <div className="space-y-8">
            {/* 🔹 Sección superior */}
            <div className="border border-[#174BAE] rounded-lg p-5 grid grid-cols-4 gap-4 items-end">
                <CampoTexto label="Buscar por documento" placeholder="Search.." />
                <CampoTexto label="Buscar por nombres" placeholder="Search.." />
                <CampoFecha label="Periodo desde" />
                <CampoFecha label="Hasta" />
                <CampoSelect label="Filtrar por área" options={["Pediatría", "Odontología"]} />
                <CampoSelect label="Atendido por" options={["Fernando Rivas", "Edgar Melendez"]} />

                {/* Espaciador opcional (para centrar visualmente el botón) */}
                <div></div>

                <div className="flex justify-end">
                    <Boton texto="Buscar" />
                </div>
            </div>

            {/* 🔹 Tabla de pacientes */}
            <div>
                <TablaBase<HistorialAM>
                    columnas={[
                        { clave: "hora", encabezado: "Fecha y hora" },
                        { clave: "identificacion", encabezado: "Identificación" },
                        { clave: "nombre", encabezado: "Paciente" },
                        { clave: "area", encabezado: "Area" },
                        { clave: "atendido_por", encabezado: "Atendido por" },
                        { clave: "diagnostico", encabezado: "Diagnostico" },
                        {
                            encabezado: "Acción",
                            render: () => (
                                <div className="flex gap-2 justify-center">
                                    <button title="Ver"> <Eye className="w-4 h-4" /> </button>
                                    <button title="Editar"> <Edit className="w-4 h-4" /> </button>
                                    <button title="Salir"> <LogOut className="w-4 h-4" /> </button>
                                </div>
                            ),
                        },
                    ]}
                    datos={datosHistorialAM}
                />
            </div>
        </div>
    );
}
