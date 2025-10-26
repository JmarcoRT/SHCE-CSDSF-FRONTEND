import { Search } from "lucide-react";

export default function CampoBusqueda({
                                          label,
                                          placeholder,
                                      }: {
    label: string;
    placeholder?: string;
}) {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">{label}</label>
            <div className="relative">
                <Search className="absolute left-2 top-1.5 w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    placeholder={placeholder}
                    className="border border-[#0066D8] rounded pl-7 pr-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#174BAE] w-full"
                />
            </div>
        </div>
    );
}
