import { state } from "./state";
import { typeTask } from "./typeTask";

export interface taskGet {
    id: number;
    descripcion: string;
    inicio: Date;
    limite: Date;
    estado_tarea: state;
    tipo_tarea: typeTask
}