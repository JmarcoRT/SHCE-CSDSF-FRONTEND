import FormHChistorial from "@/modules/historia-clinica/components/FormHChistorial.tsx";

export default function HChistorial() {
    return (
        <div className="p-6">
            <h1 className="text-xl font-semibold text-center mb-6 uppercase">
                Historial de Historias Clínicas
            </h1>
            <FormHChistorial />
        </div>
    );
}
