import FormBusqueda from "../components/FormBusqueda";

export default function TriarPacientes() {
    
    return (
        <div className="p-6">
            <h1 className="text-xl font-semibold text-center mb-6 uppercase">
                Pacientes Por Atender
            </h1>
            <FormBusqueda></FormBusqueda>
        </div>
    );
}