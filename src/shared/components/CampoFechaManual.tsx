
type CampoFechaManualProps = {
    label: string;
    required?: boolean;
};

export default function CampoFechaManual({ label, required }: CampoFechaManualProps) {
    return (
        <div className="flex flex-col space-y-1">
            {/* Etiqueta */}
            <label className="text-sm font-medium text-gray-700">
                {label}{required && <span className="text-red-500">*</span>}
            </label>

            {/* Contenedor de los 3 campos */}
            <div className="flex space-x-2">
                <input
                    type="text"
                    maxLength={2}
                    placeholder="dd"
                    className="w-12 text-center border border-[#0066D8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#174BAE] text-sm py-1"
                />
                <input
                    type="text"
                    maxLength={2}
                    placeholder="mm"
                    className="w-12 text-center border border-[#0066D8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#174BAE] text-sm py-1"
                />
                <input
                    type="text"
                    maxLength={4}
                    placeholder="aaaa"
                    className="w-16 text-center border border-[#0066D8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#174BAE] text-sm py-1"
                />
            </div>
        </div>
    );
}
