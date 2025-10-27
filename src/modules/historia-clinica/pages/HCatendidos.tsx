import FormHCatendidos from "@/modules/historia-clinica/components/FormHCatendidos";

export default function HCatendidos() {
    return (
        <div className="p-6">
            <h1 className="text-xl font-semibold text-center mb-6 uppercase">
                Historias Clínicas atendidas
            </h1>
            <FormHCatendidos />
        </div>
    );
}
