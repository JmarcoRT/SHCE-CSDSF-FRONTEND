import CampoTexto from "@/modules/admision/components/CampoTexto";
import CampoSelect from "@/modules/admision/components/CampoSelect";
import CampoRadio from "@/shared/components/CampoRadio";
import CampoFechaManual from "@/shared/components/CampoFechaManual";
import Boton from "@/shared/components/Boton.tsx";


export default function FormHCgeneral() {
    return (
        <div className="space-y-4">
            {/* 🔹 FILIACION */}
            <h2 className="text-gray-800 font-semibold uppercase tracking-wide text-base mt-1 mb-0">
                Filiación
            </h2>

            <div className="border border-[#174BAE] rounded-lg p-5 grid grid-cols-3 gap-4 items-end">
                <h2 className="text-gray-800 font-semibold tracking-wide text-base mb-2">
                    Datos personales
                </h2>

                <div></div>
                <div></div>

                <CampoSelect label="Tipo de documento" options={["DNI", "Carné de extranjería"]} />
                <CampoTexto label="Número de documento" placeholder="Type here.." />

                <div></div>

                <CampoTexto label="Apellido paterno" placeholder="Type here.." />
                <CampoTexto label="Apellido materno" placeholder="Type here.." />
                <CampoTexto label="Nombres" placeholder="Type here.." />


                <CampoRadio label="Sexo*" name="sexo"
                    options={[
                        { label: "Femenino", value: "F" },
                        { label: "Masculino", value: "M" },
                    ]}
                />
                <CampoSelect label="Estado civil" options={["Soltero", "Casado"]} />
                <div className="grid grid-cols-2 gap-3">
                    <CampoFechaManual label="Fecha de nacimiento" required />
                    <CampoTexto label="Edad" placeholder="Type here.." />
                </div>


                <h2 className="text-gray-800 font-semibold tracking-wide text-base mt-3 mb-0">
                    Datos de procedencia
                </h2>

                <div></div>
                <div></div>

                <CampoTexto label="Pais de origen" placeholder="Type here.." />
                <CampoTexto label="Ubigeo" placeholder="Type here.." />

                <div></div>

                <CampoSelect label="Departamento" options={["Lima", "Ayacucho"]} />
                <CampoSelect label="Provincia" options={["Lima", "Callao"]} />
                <CampoSelect label="Distrito" options={["Comas", "Independencia"]} />


                <h2 className="text-gray-800 font-semibold tracking-wide text-base mt-3 mb-0">
                    Contacto y responsable
                </h2>

                <div></div>
                <div></div>

                <CampoTexto label="Teléfono" placeholder="Type here.." />
                <CampoTexto label="Persona responsable" placeholder="Type here.." />

                <div></div>

                <h2 className="text-gray-800 font-semibold tracking-wide text-base mt-3 mb-0">
                    Información étnica y religión
                </h2>

                <div></div>
                <div></div>

                <CampoTexto label="Etnia" placeholder="Type here.." />
                <CampoSelect label="Religión" options={["Cristiana", "Católica"]} />

                <div></div>

                <h2 className="text-gray-800 font-semibold tracking-wide text-base mt-3 mb-0">
                    Dirección
                </h2>

                <div></div>
                <div></div>

                <CampoSelect label="Departamento" options={["Lima", "Ayacucho"]} />
                <CampoSelect label="Provincia" options={["Lima", "Callao"]} />
                <CampoSelect label="Distrito" options={["Comas", "Independencia"]} />


                <CampoTexto label="Dirección" placeholder="Type here.." />

            </div>

            {/* 🔹 ANTECEDENTES PERSONALES GENERALES */}

            {/* 🔹 ANTECEDENTES PERSONALES PATOLOGICOS */}

            {/* 🔹 ANTECEDENTES FAMILIARES */}

            <div className="flex justify-center space-x-4">
                <Boton texto="Guardar" />
                <Boton texto="Cancelar" />
            </div>

        </div>
    );
}
