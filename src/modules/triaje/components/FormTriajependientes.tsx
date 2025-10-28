
import { TablaBase } from "@/shared/components/TablaBase.tsx";
import { datosPacientes, type Paciente } from "../types/tablaTipos";

export default function FormTriajependientes() {
    return (
        <div className="space-y-8">
            
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
                                    <button title="Ver"
                                    className="bg-[#174BAE] text-white text-sm focus:outline-none px-8 py-1 rounded-md hover:bg-[#0066D8] transition-colors w-full md:w-[60%] min-w-[140px]"> 
                                    En Atención 
                                    </button>
                                </div>
                            ),
                        },
                    ]}
                    datos={datosPacientes}
                    widthByColumn={{
                        2: "md:min-w-[200px]",
                        4: "md:w-[200px]",
                        5: "md:w-[100px]"
                    }
                    }
                />
            </div>
        </div>
    );
}
