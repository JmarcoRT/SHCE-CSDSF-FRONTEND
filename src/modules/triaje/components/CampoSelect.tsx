export default function CampoSelect({
    label,
    options,
    width,
    value,
    onChange,
}: {
    label: string;
    options: string[];
    width: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">{label}</label>
            <select
                value={value}
                onChange={onChange}
                className={
                    "border border-[#0066D8] rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066D8] focus:border-[#0066D8] " +
                    width
                }
            >
                <option value="" className="text-gray-400 italic">[Seleccionar especialidad..]</option>
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))
                }
                
            </select>
        </div>
    );
}
