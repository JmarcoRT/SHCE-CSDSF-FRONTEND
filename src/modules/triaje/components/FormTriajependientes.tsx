import { useContext } from "react";
import { PacientesContext } from "../context/PacientesContext";
import { TablaBase } from "@/shared/components/TablaBase";
import { useNavigate } from "react-router-dom";
import { type Paciente } from "../types/tablaTipos";

export default function FormTriajependientes() {
    const { datosPacientes, setDatosPacientes } = useContext(PacientesContext);
    const navigate = useNavigate();
    
    /*const handleAgregarPaciente = () => {
        console.log("agregué un paciente de prueba")
        setDatosPacientes([ ...datosPacientes, { id: 3, identificacion: "7236", nombre: "Juan perez", area: "Pediatría", hora: "8:45 am", enAtencion: false } ]) 
    }*/

    const handleAtender = (idPaciente: string) => {
        navigate(`/triaje/atencion-triaje/${idPaciente}`);
    }
    return (
        <div className="space-y-8">
            <TablaBase<Paciente>
                columnas={[
                    { clave: "id", encabezado: "#" },
                    { clave: "identificacion", encabezado: "Identificación" },
                    { clave: "nombre", encabezado: "Paciente" },
                    { clave: "area", encabezado: "Área" },
                    { clave: "hora", encabezado: "Hora de espera" },
                    {
                        encabezado: "Acción",
                        render: (Paciente) => (
                            <div className="flex gap-2 justify-center">
                                {Paciente.enAtencion ? 
                                <button title="En Atencion"
                                    className="bg-[#174BAE] text-white text-sm focus:outline-none px-8 py-1 rounded-md cursor-default w-full md:w-[60%] min-w-[140px]"
                                > En Atención </button>
                                :
                                <button title="Atender"
                                    className="bg-[#174BAE] text-white text-sm focus:outline-none px-8 py-1 rounded-md hover:bg-[#0066D8] transition-colors w-full md:w-[60%] min-w-[140px]"
                                    onClick={() => handleAtender(Paciente.identificacion)}
                                > Atender </button>
                                }
                            </div>
                        ),
                    },
                ]}
                datos={datosPacientes}
                widthByColumn={{ 
                    2: "md:min-w-[200px]",
                    4: "md:w-[200px]",
                    5: "md:w-[100px]" 
                }}
            />
            {/*<button title="Probar nuevo paciente" className="bg-[#174BAE] text-white text-sm focus:outline-none px-8 py-1 rounded-md hover:bg-[#0066D8] transition-colors w-full md:w-[60%] min-w-[140px]" onClick={handleAgregarPaciente}> Agregar Paciente </button>*/}
        </div>
    );
}
