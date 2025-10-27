import FormHistorialConsultas from "../components/FormHistorialConsultas.tsx";

export default function PacientesPendientes() {
    return (
        <div className="p-6">
            <h1 className="text-xl font-semibold text-center mb-6 uppercase">
                Historial de Consultas
            </h1>
            <FormHistorialConsultas />
        </div>
    );
}
