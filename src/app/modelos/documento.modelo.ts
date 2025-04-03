export interface ModeloDocumento {
    id?: number;
    nome: string;
    codigoDocNPG: number;
    copiaSimples: "S" | "N" | "NI";
    copiaOutroProcesso: string;
}
