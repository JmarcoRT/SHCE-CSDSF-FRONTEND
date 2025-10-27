import FormHCpendientes from "@/modules/historia-clinica/components/FormHCpendientes.tsx";

export default function HCpendientes() {
    return (
        <div className="p-6">
            <h1 className="text-xl font-semibold text-center mb-6 uppercase">
                Historias Clínicas por atender
            </h1>
            <FormHCpendientes />
        </div>
    );
}
