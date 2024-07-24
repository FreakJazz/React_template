import { endOfWeekWithOptions } from "date-fns/fp";

export interface Dignidad  {
    codigoDignidad?: number;
    nombreDignidad: string;
    nombreAmbito: string;
    imagenDignidad: string;
    codigoProceso: number;
    numeroProceso: number;
    anioProceso: number;
}

export interface JurisdiccionDignidad  {
    codigoDignidad?: number;
    codigoProvincia: number;
    codigoCircProvincia: number;
    codigoCanton: number;
    codigocircuCantonal: number;
}

interface Jurisdiccion {
    codigoJurisdiccion: number;
    nombreJurisdiccion: string;
    nivel: string;
    padre: number;
    codigoUnicoJurisdiccion: number;
    label: string;
    tipo: string;
    orden: number;
    requerido: number;
    habilitado: number;
  }

  interface Provincia {
    codigo: number;
    nombre: string;
  }

  interface Canton {
    codigo: number;
    codigoProvincia: number;
    nombre: string;
  }

  interface Parroquia {
    codigo: number;
    codigoCanton: number;
    nombreCanton: string;
    nombre: string;
    tipoParroquia: string;
  }
  
  interface EnabledField {
    [key: string]: boolean;
  }
  
  export interface DataForm {
    title: string;
    layout: Jurisdiccion[];
    data: {
      provincia: Provincia[];
      cantones: Canton[];
      parroquias: Parroquia[];
    };
    required: string[];
    enabled: EnabledField[];
  }
  







