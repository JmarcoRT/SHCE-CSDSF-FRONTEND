import FormBusqueda from "../components/FormBusqueda";
import FormTriajependientes from "../components/FormTriajependientes";
import { PacientesProvider } from "../context/PacientesProvider";

export default function TriarPacientes() {
    
    return (
        <div className="p-6 space-y-6"> 
            <h1 className="text-xl font-semibold text-center mb-6 uppercase">
                Pacientes Por Atender
            </h1>
            <PacientesProvider>
                <FormBusqueda/>
                <FormTriajependientes/>
            </PacientesProvider>
        </div>
    );
}