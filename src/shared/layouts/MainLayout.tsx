import { Link, Outlet, useLocation } from "react-router-dom";
import { useMemo, useState } from "react";
import { useAuthContext } from "@/shared/hooks/useAuthContext";
import logo from "@/assets/logoPosta.png";
import { Home, UserPlus, FileText, LayoutDashboard, Workflow} from "lucide-react";
import { BookPlus, BriefcaseMedical, ClipboardCheck } from "lucide-react"; //Triaje 
import { LogOut } from "lucide-react";

function moduleFromPath(pathname: string) {
    if (pathname.startsWith("/admision")) return "Admisión";
    if (pathname.startsWith("/triaje")) return "Triaje";
    if (pathname.startsWith("/historia-clinica")) return "Historia Clínica";
    if (pathname.startsWith("/atencion-medica")) return "Atención Médica";
}

function menuForModule(pathname: string) {
    if (pathname.startsWith("/admision")) {
        return [
            { to: "/admision", label: "Menú principal", icon: Home },
            { to: "/admision/pacientes", label: "Admisión de pacientes", icon: UserPlus },
            { to: "/admision/historial", label: "Historial de admisión", icon: FileText },
            { to: "/admision/tablero", label: "Tablero de áreas", icon: LayoutDashboard },
            { to: "/admision/flujo", label: "Flujo de pacientes", icon: Workflow },
        ];
    }
    if (pathname.startsWith("/triaje")) {
        return [
            { to: "/triaje", label: "Menú principal", icon: LayoutDashboard },
            { to: "/triaje/triar-pacientes", label: "Pacientes por atender", icon: BriefcaseMedical },
            { to: "/triaje/pacientes-triados", label: "Pacientes atendidos", icon: ClipboardCheck },
            { to: "/triaje/historias-clínicas", label: "Historias clínicas", icon: BookPlus }
        ];
    }
    if (pathname.startsWith("/historia-clinica")) {
        return [
            { to: "/historia-clinica", label: "Menú principal", icon: Home },
            { to: "/historia-clinica/pacientes", label: "Registro de historias clínicas", icon: FileText },
            { to: "/historia-clinica/atendidos", label: "Historias clínicas atendidas", icon: LayoutDashboard },
            { to: "/historia-clinica/consultas", label: "Historial de historias clínicas", icon: FileText },
        ];
    }
    if (pathname.startsWith("/atencion-medica")) {
        return [
            { to: "/atencion-medica", label: "Menú principal", icon: Home },
            { to: "/atencion-medica/pacientes", label: "Pacientes pendientes", icon: UserPlus },
            { to: "/atencion-medica/atendidos", label: "Pacientes atendidos", icon: UserPlus },
            { to: "/atencion-medica/consultas", label: "Historial de consultas", icon: FileText },
        ];
    }
}


export default function MainLayout() {
    const { user, logout } = useAuthContext();
    const { pathname } = useLocation();
    const [collapsed, setCollapsed] = useState(false);

    const title = useMemo(() => moduleFromPath(pathname) ?? "", [pathname]);
    const items = useMemo(() => menuForModule(pathname) ?? [], [pathname]);
    //const now = new Date().toLocaleString(); // puedes usar un hook con interval si quieres vivo

    return (
        <div className="min-h-screen flex bg-gray-50">
            {/* Sidebar */}
            <aside
                className={`border-r bg-[#174BAE] text-white transition-all flex flex-col items-center ${
                    collapsed ? "w-16" : "w-64"
                }`}
            >
                {/* Header del sidebar */}
                <div className="w-full flex items-center justify-start p-3">
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="text-white/80 hover:text-white transition-colors"
                    >
                        {/* Icono de menú */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Logo */}
                <div className="flex flex-col items-center mt-4 mb-6">
                    <img
                        src={logo} // reemplaza con la ruta correcta al PNG
                        alt="Logo Centro de Salud"
                        className="w-24 h-auto mb-3"
                    />
                    <p className="text-center text-white text-sm font-semibold leading-tight">
                        CENTRO DE SALUD <br /> DOCENTE SAN FERNANDO
                    </p>
                    {/* Línea blanca semitransparente */}
                    <div
                        className={`transition-all duration-300 h-[2px] bg-white/50 mt-5 rounded-full ${
                            collapsed ? "w-8" : "w-[200px]"
                        }`}
                    />
                </div>

                {/* Menú */}
                <nav className="w-full px-3 space-y-2 flex-1">
                    {items.map(({ to, label, icon: Icon }) => (
                        <Link
                            key={to}
                            to={to}
                            className="flex items-center gap-2 rounded px-3 py-2 text-white/80 hover:text-white hover:bg-[#0066D8] text-sm transition-colors"
                        >
                            {Icon && <Icon className="w-4 h-4" />}
                            {!collapsed && <span>{label}</span>}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Main */}
            <main className="flex-1 flex flex-col">
                {/* Header */}
                <header className="h-14 bg-white border-b border-[#174BAE] flex items-center justify-between px-6">
                {/* Izquierda: Título del módulo */}
                    <h1 className="text-[18px] font-semibold uppercase text-black tracking-wide">
                        Módulo de {title}
                    </h1>

                    {/* Derecha: usuario y botón de salida */}
                    <div className="flex items-center gap-3 text-black">
                        {user?.username && (
                            <span className="text-sm">Hola, {user.username}</span>
                        )}
                        <button
                            onClick={logout}
                            className="text-black/80 hover:text-black transition-colors"
                            title="Cerrar sesión"
                        >
                            <LogOut className="w-5 h-5" />
                        </button>
                    </div>
                </header>


                {/* Content */}
                <section className="p-4">
                    <Outlet />
                </section>
            </main>
        </div>
    );
}
