import CampoTexto from "@/modules/admision/components/CampoTexto";
import CampoSelect from "@/modules/admision/components/CampoSelect";
import { TablaBase } from "@/shared/components/TablaBase.tsx";
import Boton from "@/shared/components/Boton.tsx";
import { datosAtendidos, type Atendido } from "../types/tablaTipos";
import { Eye, Edit, LogOut } from "lucide-react";

export default function FormPacientesPendientes() {
    return (
        <div className="space-y-8">
            {/* 🔹 Sección superior */}
            <div className="border border-[#174BAE] rounded-lg p-5 grid grid-cols-4 gap-4 items-end">
                <CampoTexto label="Buscar por documento" placeholder="Search.." />
                <CampoTexto label="Buscar por nombres" placeholder="Search.." />
                <CampoSelect label="Atendido por" options={["Fernando Rivas", "Edgar Melendez"]} />

                {/* Espaciador opcional (para centrar visualmente el botón) */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>

                <div className="flex justify-end">
                    <Boton texto="Buscar" />
                </div>
            </div>

            {/* 🔹 Tabla de pacientes */}
            <div>
                <TablaBase<Atendido>
                    columnas={[
                        { clave: "id", encabezado: "#" },
                        { clave: "identificacion", encabezado: "Identificación" },
                        { clave: "nombre", encabezado: "Paciente" },
                        { clave: "atendido_por", encabezado: "Atendido por" },
                        { clave: "hora", encabezado: "Hora de atención" },
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
                    datos={datosAtendidos}
                />
            </div>
        </div>
    );
}
