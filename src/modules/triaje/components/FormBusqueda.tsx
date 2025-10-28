import CampoBusqueda from "./CampoBusqueda";
import CampoSelect from "./CampoSelect";


const FormBusqueda = () => {
  return (
    <div className="border border-[#174BAE] rounded-lg p-5 grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4">

      <CampoBusqueda
        label="Buscar por documento"
        placeholder="Buscar.."
        width="w-full min-w-[150px]"
      />
      <CampoBusqueda
        label="Buscar por nombres"
        placeholder="Buscar.."
        width="w-full min-w-[150px]"
      />
      <CampoSelect
        label="Filtrar por área"
        options={["placeholder 1", "placeholder 2"]}
        width="w-full min-w-[150px]"
      />

      <div className="hidden md:block"></div>
      <div className="hidden md:block"></div>

      <div className="flex justify-center md:justify-end">
        <button className="bg-[#174BAE] text-white text-sm focus:outline-none px-8 py-2 rounded-md hover:bg-[#0066D8] transition-colors w-full md:w-[60%] min-w-[140px]">
          Guardar
        </button>
      </div>
    </div>
  );
};

export default FormBusqueda;