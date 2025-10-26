import FormRegistroPaciente from "../components/FormRegistroPaciente";

export default function PacientesPage() {
    return (
        <div className="p-6">
            <h1 className="text-xl font-semibold text-center mb-6 uppercase">
                Registrar admisión de paciente
            </h1>
            <FormRegistroPaciente />
        </div>
    );
}
