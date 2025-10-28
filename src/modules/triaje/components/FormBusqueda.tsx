import CampoBusqueda from "./CampoBusqueda";
import CampoSelect from "./CampoSelect";


const FormBusqueda = () => {
  return (
    <div className="border border-[#174BAE] rounded-lg p-5 grid grid-cols-3 gap-4">
        <CampoBusqueda label="Buscar por documento" placeholder="Buscar.."/>
        <CampoBusqueda label="Buscar por nombres" placeholder="Buscar.."/>
        <CampoSelect label="Filtrar por área" options= {["pepe", "pipo"]} />
        <div></div>
        <div></div>
        <button className="bg-[#174BAE] text-white text-sm px-8 py-2 rounded-md hover:bg-[#0066D8] transition-colors">
            Guardar
        </button>
    </div>
  );
};

export default FormBusqueda;