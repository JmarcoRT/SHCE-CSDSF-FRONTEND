import { useNavigate } from "react-router-dom";

export function useNavegacionHC() {
    const navigate = useNavigate();

    const irARegistrarPaciente = () => {
        navigate("registrarhistoria");
    };

    const irAHome = () => {
        navigate("/historia-clinica");
    };

    const irAAtendidos = () => {
        navigate("/historia-clinica/atendidos");
    };

    // Puedes seguir agregando más rutas específicas aquí
    return {
        irARegistrarPaciente,
        irAHome,
        irAAtendidos,
    };
}
