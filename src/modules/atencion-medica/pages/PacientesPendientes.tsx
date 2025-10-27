import FormPacientesPendientes from "@/modules/atencion-medica/components/FormPacientesPendientes.tsx";

export default function PacientesPendientes() {
    return (
        <div className="p-6">
            <h1 className="text-xl font-semibold text-center mb-6 uppercase">
                Pacientes Pendientes
            </h1>
            <FormPacientesPendientes />
        </div>
    );
}
