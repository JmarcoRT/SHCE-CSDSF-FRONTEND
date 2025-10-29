type CampoRadioProps = {
    label: string;
    name: string;
    options: { label: string; value: string }[];
};

export default function CampoRadio({ label, name, options }: CampoRadioProps) {
    return (
        <div className="flex flex-col space-y-1">
            {/* Etiqueta */}
            <label className="text-sm font-medium text-gray-700">{label}</label>

            {/* Opciones */}
            <div className="flex space-x-6 mt-1">
                {options.map((opt) => (
                    <label key={opt.value} className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name={name}
                            value={opt.value}
                            className="text-[#174BAE] focus:ring-[#174BAE]"
                        />
                        <span className="text-sm text-gray-700">{opt.label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}
