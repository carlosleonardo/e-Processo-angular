export interface ModeloNota {
    id?: number;
    nota: string;
    autor: string;
    permissaoAlteracao: boolean;
    permissaoExclusao: boolean;
    dataRegistro: Date;
}
