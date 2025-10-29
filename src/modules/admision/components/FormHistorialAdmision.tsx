import CampoTexto from "@/modules/admision/components/CampoTexto";
import CampoSelect from "@/modules/admision/components/CampoSelect";
import { TablaBase } from "@/shared/components/TablaBase.tsx";
import Boton from "@/shared/components/Boton.tsx";
import CampoFecha from "@/shared/components/CampoFecha";
import { datosHistorialAD, type HistorialAD } from "@/modules/atencion-medica/types/tablaTipos";

export default function FormHistorialAdmision() {
    return (
        <div className="space-y-8">
            {/* 🔹 Sección superior */}
            <div className="border border-[#174BAE] rounded-lg p-5 grid grid-cols-4 gap-4 items-end">
                <CampoTexto label="Buscar por documento" placeholder="Search.." />
                <CampoTexto label="Buscar por nombres" placeholder="Search.." />
                <CampoFecha label="Periodo desde" />
                <CampoFecha label="Hasta" />
                <CampoSelect label="Filtrar por área" options={["Pediatría", "Odontología"]} />

                {/* Espaciador opcional (para centrar visualmente el botón) */}
                <div></div>
                <div></div>

                <div className="flex justify-end">
                    <Boton texto="Buscar" />
                </div>
            </div>

            {/* 🔹 Tabla de pacientes */}
            <div>
                <TablaBase<HistorialAD>
                    columnas={[
                        { clave: "fecha", encabezado: "Fecha" },
                        { clave: "identificacion", encabezado: "Identificación" },
                        { clave: "nombre", encabezado: "Paciente" },
                        { clave: "especialidades", encabezado: "Especialidad(es)" },
                        { clave: "hora", encabezado: "Hora de ingreso" },
                        { clave: "estado", encabezado: "Estado" },
                    ]}
                    datos={datosHistorialAD}
                />
            </div>
        </div>
    );
}
