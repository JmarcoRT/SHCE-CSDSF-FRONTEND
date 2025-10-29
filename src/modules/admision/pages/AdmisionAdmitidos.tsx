import FormPacientesAdmitidos from "../components/FormPacientesAdmitidos";

export default function AdmisionAdmitidos() {
    return (
        <div className="p-6">
            <h1 className="text-xl font-semibold text-center mb-6 uppercase">
                Pacientes admitidos
            </h1>
            <FormPacientesAdmitidos />
        </div>
    );
}
