import { Search } from "lucide-react";

export default function CampoBusqueda({
    label,
    placeholder,
    width,
    value,
    onChange,
}: {
    label: string;
    placeholder?: string;
    width: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <div className="flex flex-col min-w-[150px]">
            <label className="text-sm font-medium mb-1">{label}</label>
            <div className="relative">
                <Search className="absolute left-2 top-1.5 w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={
                        "border border-[#0066D8] rounded pl-7 pr-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#174BAE] " +
                        width
                    }
                />
            </div>
        </div>
    );
}
