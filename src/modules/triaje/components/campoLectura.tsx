const CampoLectura = ({
                                          label,
                                          placeholder,
                                          props,
                                          value,
                                      }: {
    label: string;
    placeholder?: string;
    props?:string;
    value?:string
}) => {
    return (
        <div className="flex flex-col min-w-[150px]">
            <label className="text-sm font-medium mb-1 " >{label}</label>
            <div className="relative">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    className={"border border-[#0066D8] rounded pl-2 pr-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#174BAE] " + props}
                    readOnly
                    disabled
                />
            </div>
        </div>
    );
}

export default CampoLectura;