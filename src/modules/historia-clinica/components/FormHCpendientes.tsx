import CampoTexto from "@/modules/admision/components/CampoTexto";
import CampoSelect from "@/modules/admision/components/CampoSelect";
import { TablaBase } from "@/shared/components/TablaBase.tsx";
import Boton from "@/shared/components/Boton.tsx";
import { datosPacientes, type Paciente } from "@/modules/atencion-medica/types/tablaTipos";
import { Eye, Edit, LogOut } from "lucide-react";
import { useNavegacionHC } from "../hooks/useNavegacionHC";

export default function FormHCpendientes() {

    const { irARegistrarPaciente } = useNavegacionHC();

    return (
        <div className="space-y-8">
            {/* 🔹 Sección superior */}
            <div className="border border-[#174BAE] rounded-lg p-5 grid grid-cols-4 gap-4 items-end">
                <CampoTexto label="Buscar por documento" placeholder="Search.." />
                <CampoTexto label="Buscar por nombres" placeholder="Search.." />
                <CampoSelect label="Filtrar por área" options={["Pediatría", "Odontología", "Terapia física"]} />

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
                <TablaBase<Paciente>
                    columnas={[
                        { clave: "id", encabezado: "#" },
                        { clave: "identificacion", encabezado: "Identificación" },
                        { clave: "nombre", encabezado: "Paciente" },
                        { clave: "area", encabezado: "Área" },
                        { clave: "hora", encabezado: "Hora de espera" },
                        {
                            encabezado: "Acción",
                            render: () => (
                                <div className="flex gap-2 justify-center">
                                    <button title="Ver"> <Eye className="w-4 h-4" /> </button>
                                    <button title="Editar" onClick={irARegistrarPaciente}> <Edit className="w-4 h-4" /> </button>
                                    <button title="Salir"> <LogOut className="w-4 h-4" /> </button>
                                </div>
                            ),
                        },
                    ]}
                    datos={datosPacientes}
                />
            </div>
        </div>
    );
}
