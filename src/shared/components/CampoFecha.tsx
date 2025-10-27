import { Calendar } from "lucide-react";

type CampoFechaProps = {
    label: string;
    value?: string;
    onChange?: (value: string) => void;
};

export default function CampoFecha({ label, value, onChange }: CampoFechaProps) {
    return (
        <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <div className="relative">
                <Calendar className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
                <input
                    type="date"
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 border border-[#174BAE] rounded focus:outline-none focus:ring-1 focus:ring-[#0066D8] text-sm bg-gray-100"
                />
            </div>
        </div>
    );
}
