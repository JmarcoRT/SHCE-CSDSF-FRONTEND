

const CampoLlenado = ({
                                          label,
                                          placeholder,
                                          props,
                                      }: {
    label: string;
    placeholder?: string;
    props?:string;
}) => {
    return (
        <div className="flex flex-col min-w-[150px]">
            <label className="text-sm font-medium mb-1 " >{label}</label>
            <div className="relative">
                <input
                    type="text"
                    placeholder={placeholder}
                    className={"border border-[#0066D8] rounded pl-2 pr-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#174BAE] " + props}
                />
            </div>
        </div>
    );
}

export default CampoLlenado;