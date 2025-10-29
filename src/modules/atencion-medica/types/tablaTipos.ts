type PacienteBase<TExtra extends Record<string, unknown> = Record<string, unknown>> = {
    identificacion: string;
    nombre: string;
} & TExtra;


export type Paciente = PacienteBase<{ id: number; area: string; hora: string }>;
export type Atendido = PacienteBase<{ id: number; atendido_por: string; hora: string }>;
export type HistorialAD = PacienteBase<{ fecha: string; especialidades: string; hora: string; estado: string }>;
export type HistorialAM = PacienteBase<{ hora: string; area: string; atendido_por: string; diagnostico: string }>;
export type HistorialHC = PacienteBase<{ hora_creacion: string; hora_edicion: string; editado_por: string }>;
export type Admitidos = PacienteBase<{ id: number; especialidades: string; hora: string; estado: string }>;


export const datosPacientes: Paciente[] = [
    { id: 1, identificacion: "12345678", nombre: "María Gutiérrez López", area: "Pediatría", hora: "8:15 am" },
    { id: 2, identificacion: "72874556", nombre: "Selene Ramos Vera", area: "Odontología", hora: "8:25 am" },
];

export const datosAtendidos: Atendido[] = [
    { id: 1, identificacion: "12345678", nombre: "María Gutiérrez López", atendido_por: "Fernando Rivas", hora: "8:15 am" },
    { id: 2, identificacion: "72874556", nombre: "Selene Ramos Vera", atendido_por: "Edgar Melendez", hora: "8:25 am" },
];

export const datosHistorialAD: HistorialAD[] = [
    { fecha: "--/--/--", identificacion: "12345678", nombre: "María Gutiérrez López", especialidades: "Pediatría", hora: "10:15 am", estado: "Triaje" },
    { fecha: "--/--/--", identificacion: "72874556", nombre: "Selene Ramos Vera", especialidades: "Odontología", hora: "12:15 am", estado: "De alta" },
];

export const datosHistorialAM: HistorialAM[] = [
    { hora: "8:15 am", identificacion: "12345678", nombre: "María Gutiérrez López", area: "Pediatría", atendido_por: "Fernando Rivas", diagnostico: "CIE 10 - Diagnóstico" },
    { hora: "8:25 am", identificacion: "72874556", nombre: "Selene Ramos Vera", area: "Odontología", atendido_por: "Edgar Melendez", diagnostico: "CIE10 - Caries" },
];

export const datosHistorialHC: HistorialHC[] = [
    { hora_creacion: "8:15 am", hora_edicion: "10:15 am", identificacion: "12345678", nombre: "María Gutiérrez López", editado_por: "Fernando Rivas", },
    { hora_creacion: "9:15 am", hora_edicion: "10:15 am", identificacion: "72874556", nombre: "Selene Ramos Vera", editado_por: "Edgar Melendez" },
];

export const datosAdmitidos: Admitidos[] = [
    { id: 1, identificacion: "12345678", nombre: "María Gutiérrez López", especialidades: "Pediatría, Nutricion", hora: "8:15 am", estado: "Triaje" },
    { id: 2, identificacion: "72874556", nombre: "Selene Ramos Vera", especialidades: "Odontología", hora: "8:25 am", estado: "Odontología" },
];