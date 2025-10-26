import CampoTexto from "./CampoTexto";
import CampoSelect from "./CampoSelect";
import CampoBusqueda from "./CampoBusqueda";
import TablaResumen from "./TablaResumen";
import BotonGuardar from "./BotonGuardar";

export default function FormRegistroPaciente() {
    return (
        <div className="space-y-8">
            {/* Sección superior */}
            <div className="border border-[#174BAE] rounded-lg p-5 grid grid-cols-3 gap-4">
                <CampoTexto label="Número de ticket" placeholder="10" />
                <CampoSelect label="Tipo de documento" options={["DNI", "Carné de extranjería"]} />
                <CampoTexto label="Número de documento" placeholder="Ingresar nro. de documento" />
                <CampoTexto label="Apellido paterno" placeholder="Apellido paterno" />
                <CampoTexto label="Apellido materno" placeholder="Apellido materno" />
                <CampoTexto label="Nombres" placeholder="Nombres" />
                <CampoBusqueda label="Área" placeholder="Buscar área" />
            </div>

            {/* Tabla resumen */}
            <div>
                <TablaResumen />
            </div>

            {/* Botón guardar */}
            <div className="flex justify-end">
                <BotonGuardar />
            </div>
        </div>
    );
}
