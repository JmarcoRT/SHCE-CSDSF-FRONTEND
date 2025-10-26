export default function TablaResumen() {
    return (
        <div className="border border-[#174BAE] rounded-lg overflow-hidden">
            <table className="w-full text-sm border-collapse">
                <thead className="bg-[#174BAE] text-white rounded-t-lg">
                <tr>
                    <th className="text-left px-3 py-2 font-semibold rounded-tl-lg">
                        Especialidad
                    </th>
                    <th className="text-right px-3 py-2 font-semibold rounded-tr-lg">
                        Acción
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-[#0066D8]">
                    <td className="px-3 py-2">Medicina I</td>
                    <td className="px-3 py-2 text-right">
                        <button className="text-[#174BAE] font-bold">✕</button>
                    </td>
                </tr>
                <tr className="border-b border-[#0066D8] last:border-b-0">
                    <td className="px-3 py-2">Odontología</td>
                    <td className="px-3 py-2 text-right">
                        <button className="text-[#174BAE] font-bold">✕</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
