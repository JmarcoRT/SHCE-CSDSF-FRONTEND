import FormPacientesAtendidos from "@/modules/atencion-medica/components/FormPacientesAtendidos.tsx";

export default function PacientesAtendidos() {
    return (
        <div className="p-6">
            <h1 className="text-xl font-semibold text-center mb-6 uppercase">
                Pacientes Atendidos
            </h1>
            <FormPacientesAtendidos />
        </div>
    );
}
