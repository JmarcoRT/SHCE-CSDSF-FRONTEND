type Columna<T> = {
    clave?: keyof T;
    encabezado: string;
    render?: (item: T) => React.ReactNode;
};

type TablaBaseProps<T> = {
    columnas: Columna<T>[];
    datos: T[];
};

export function TablaBase<T extends Record<string, unknown>>({
                                                                 columnas,
                                                                 datos,
                                                             }: TablaBaseProps<T>) {
    return (
        <div className="border border-[#174BAE] rounded-lg overflow-hidden">
            <table className="w-full text-sm border-collapse">
                {/* ENCABEZADO */}
                <thead className="bg-[#0066D8] text-white">
                <tr>
                    {columnas.map((col, i) => (
                        <th
                            key={i}
                            className={`px-3 py-2 font-semibold border-x border-[#0066D8] text-left ${
                                i === 0 ? "border-l-0" : ""
                            } ${i === columnas.length - 1 ? "border-r-0" : ""}`}
                        >
                            {col.encabezado}
                        </th>
                    ))}
                </tr>
                </thead>

                {/* CUERPO */}
                <tbody>
                {datos.map((item, i) => (
                    <tr key={i} className="border-t border-[#0066D8]">
                        {columnas.map((col, j) => (
                            <td
                                key={j}
                                className={`px-3 py-2 border-x border-[#0066D8] text-left align-middle ${
                                    j === 0 ? "border-l-0" : ""
                                } ${j === columnas.length - 1 ? "border-r-0" : ""}`}
                            >
                                {col.render
                                    ? (
                                        <div className="flex items-center gap-2 justify-start">
                                            {col.render(item)}
                                        </div>
                                    )
                                    : col.clave
                                        ? (item[col.clave] as React.ReactNode)
                                        : null}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
