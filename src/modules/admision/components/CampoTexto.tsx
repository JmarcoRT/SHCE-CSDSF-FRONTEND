export default function CampoTexto({
                                       label,
                                       placeholder,
                                   }: {
    label: string;
    placeholder?: string;
}) {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                className="border border-[#0066D8] rounded px-2 py-1 text-sm
                            focus:outline-none focus:ring-2 focus:ring-[#0066D8] focus:border-[#0066D8]"
            />
        </div>
    );
}
