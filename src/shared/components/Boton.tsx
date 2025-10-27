type BotonProps = {
    texto: string;
    //onClick?: () => void;
};

//luego agregar el evento como prop
export default function Boton({ texto }: BotonProps) {
    return (
        <button className="w-[100px] h-[38px] text-sm font-medium bg-[#174BAE] hover:bg-[#0066D8] text-white rounded-md transition-colors">
            {texto}
        </button>
    );
}
