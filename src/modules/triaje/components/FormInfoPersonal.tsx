import CampoLlenado from "./CampoLlenado";
import { datosPacientess } from "../types/tablaTipos";
import CampoLectura from "./campoLectura";

const FormInfoPersonal = ({idPaciente}: {idPaciente:string}) => {

 
  const buscarPacienteporID = (id:string) =>{
    return datosPacientess.find(paciente => paciente.identificacion == id)
  }

  return (
    <div>
      <div className="border border-[#174BAE] rounded-lg p-5 grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr] gap-4">
          <CampoLectura label="Documento" placeholder="DNI o Carnet de extrajería" props="w-full" value={buscarPacienteporID(idPaciente)?.identificacion}/>
          <CampoLectura label="Apellido paterno" placeholder="Lopez.." props="w-full"/>
          <CampoLectura label="Apellido materno" placeholder="Gutierrez.." props="w-full"/>
          <CampoLectura label="Nombres" placeholder="Maria Fernanda.." props="w-full" value={buscarPacienteporID(idPaciente)?.nombre}/>
      </div>
    </div>
  );
};

export default FormInfoPersonal;