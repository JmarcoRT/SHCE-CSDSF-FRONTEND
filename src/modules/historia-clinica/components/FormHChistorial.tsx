import CampoTexto from "@/modules/admision/components/CampoTexto";
import CampoSelect from "@/modules/admision/components/CampoSelect";
import { TablaBase } from "@/shared/components/TablaBase.tsx";
import Boton from "@/shared/components/Boton.tsx";
import { datosHistorialHC, type HistorialHC } from "@/modules/atencion-medica/types/tablaTipos";
import { Eye, Edit } from "lucide-react";
import CampoFecha from "@/shared/components/CampoFecha.tsx";

export default function FormHChistorial() {
    return (
        <div className="space-y-8">
            {/* 🔹 Sección superior */}
            <div className="border border-[#174BAE] rounded-lg p-5 grid grid-cols-4 gap-4 items-end">
                <CampoTexto label="Buscar por documento" placeholder="Search.." />
                <CampoTexto label="Buscar por nombres" placeholder="Search.." />
                <CampoFecha label="Periodo desde" />
                <CampoFecha label="Hasta" />
                <CampoSelect label="Editado por" options={["Fernando Rivas", "Edgar Melendez"]} />

                {/* Espaciador opcional (para centrar visualmente el botón) */}
                <div></div>
                <div></div>

                <div className="flex justify-end">
                    <Boton texto="Buscar" />
                </div>
            </div>

            {/* 🔹 Tabla de pacientes */}
            <div>
                <TablaBase<HistorialHC>
                    columnas={[
                        { clave: "hora_creacion", encabezado: "Fecha de creación" },
                        { clave: "hora_edicion", encabezado: "Fecha de edición" },
                        { clave: "identificacion", encabezado: "Identificación" },
                        { clave: "nombre", encabezado: "Paciente" },
                        { clave: "editado_por", encabezado: "Editado por" },
                        {
                            encabezado: "Acción",
                            render: () => (
                                <div className="flex gap-2 justify-center">
                                    <button title="Ver"> <Eye className="w-4 h-4" /> </button>
                                    <button title="Editar"> <Edit className="w-4 h-4" /> </button>
                                </div>
                            ),
                        },
                    ]}
                    datos={datosHistorialHC}
                />
            </div>
        </div>
    );
}
