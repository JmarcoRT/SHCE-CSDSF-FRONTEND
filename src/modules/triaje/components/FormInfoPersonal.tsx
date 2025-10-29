import CampoLlenado from "./CampoLlenado";


const FormInfoPersonal = () => {
  return (
    <div className="border border-[#174BAE] rounded-lg p-5 grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4">
        <CampoLlenado label="Documento" placeholder="DNI o Carnet de extrajería"/>
    </div>
  );
};

export default FormInfoPersonal;