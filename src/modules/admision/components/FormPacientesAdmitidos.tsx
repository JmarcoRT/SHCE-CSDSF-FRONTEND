import CampoTexto from "@/modules/admision/components/CampoTexto";
import CampoSelect from "@/modules/admision/components/CampoSelect";
import { TablaBase } from "@/shared/components/TablaBase.tsx";
import Boton from "@/shared/components/Boton.tsx";
import { datosAdmitidos, type Admitidos } from "@/modules/atencion-medica/types/tablaTipos";
import { Edit } from "lucide-react";

export default function FormPacientesAdmitidos() {
    return (
        <div className="space-y-8">
            {/* 🔹 Sección superior */}
            <div className="border border-[#174BAE] rounded-lg p-5 grid grid-cols-4 gap-4 items-end">
                <CampoTexto label="Buscar por documento" placeholder="Search.." />
                <CampoTexto label="Buscar por nombres" placeholder="Search.." />
                <CampoSelect label="Filtrar por especialidad" options={["Pediatría", "Odontología"]} />

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
                <TablaBase<Admitidos>
                    columnas={[
                        { clave: "id", encabezado: "#" },
                        { clave: "identificacion", encabezado: "Identificación" },
                        { clave: "nombre", encabezado: "Paciente" },
                        { clave: "especialidades", encabezado: "Especialidad(es)" },
                        { clave: "hora", encabezado: "Hora de ingreso" },
                        { clave: "estado", encabezado: "Estado" },
                        {
                            encabezado: "Acción",
                            render: () => (
                                <div className="flex gap-2 justify-center">
                                    <button title="Editar"> <Edit className="w-4 h-4" /> </button>
                                </div>
                            ),
                        },
                    ]}
                    datos={datosAdmitidos}
                />
            </div>
        </div>
    );
}
