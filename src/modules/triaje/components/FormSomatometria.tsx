import CampoLlenado from "./CampoLlenado";


const FormSomatometria = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold text-center mb-6 uppercase">
              Somatometría
      </h1>
      <div className="border border-[#174BAE] rounded-lg p-5 grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr] gap-4">
          
          <CampoLlenado label="Talla" placeholder="Escribe aquí.." props="w-full"/>
          <CampoLlenado label="Peso (kg)" placeholder="Escribe aquí.." props="w-full"/>
          <CampoLlenado label="Perímetro abdominal (cm)" placeholder="Escribe aquí.." props="w-full"/>
          <CampoLlenado label="IMC" props="w-full"/>
      </div>
      <div className="py-3"></div>
      <h1 className="text-xl font-semibold text-center mb-6 uppercase">
            Funciones vitales
      </h1>
      <div className="border border-[#174BAE] rounded-lg p-5 grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] gap-4">
          
          <CampoLlenado label="Presión arterial (mmHg)" placeholder="Escribe aquí.." props="w-full"/>
          <CampoLlenado label="Presión arterial media [PAM] (mmHg)" placeholder="Escribe aquí.." props="w-full"/>
          <CampoLlenado label="Frecuencia respiratoria (rpm)" placeholder="Escribe aquí.." props="w-full"/>
          <CampoLlenado label="Saturación de oxígeno (%)" placeholder="Escribe aquí.." props="w-full"/>
          <CampoLlenado label="Temperatura (°C)" placeholder="Escribe aquí.." props="w-full"/>
          <CampoLlenado label="Frecuencia cardiaca (lpm)" placeholder="Escribe aquí.." props="w-full"/>
      </div>
    </div>
  );
};

export default FormSomatometria;