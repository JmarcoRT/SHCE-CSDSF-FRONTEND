import { useNavigate, useParams } from "react-router-dom";
import FormInfoPersonal from "../components/FormInfoPersonal";
import FormSomatometria from "../components/FormSomatometria";


const AtencionTriaje = () => {
  const navigate = useNavigate();

  const{idPaciente} =useParams<string>();
  const handleCancelar = () =>{
    navigate("/triaje/atencion-triaje")
  }

  return (
    <div className="p-6 space-y-6"> 
        <h1 className="text-xl font-semibold text-center mb-6 uppercase">
            Información personal
        </h1>
        <FormInfoPersonal idPaciente={idPaciente!}/>
        <FormSomatometria/>

        <div className="py-2"></div>
        <div className=" grid grid-cols-1 mx-[40%] md:grid-cols-[1fr_1fr]">
          <button 
          className="w-[100px] h-[38px] text-sm font-medium bg-[#174BAE] hover:bg-[#0066D8] text-white rounded-md transition-colors"
          >Guardar
          </button>
          <button 
          className="w-[100px] h-[38px] text-sm font-medium bg-[#174BAE] hover:bg-[#0066D8] text-white rounded-md transition-colors"
          onClick={() => handleCancelar()}
          >Cancelar
          </button>
        </div>
    </div>
        
  );
};

export default AtencionTriaje;