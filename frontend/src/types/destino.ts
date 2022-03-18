export type Destino = {
    id: number;
    cidade: string;
    imagem: string;
    score: number;
    count: number;
}

export type DestinoPage = {
    content: Destino[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}