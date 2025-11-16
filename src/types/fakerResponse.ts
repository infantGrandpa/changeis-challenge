export interface FakerResponse {
    status: string;
    code: number;
    locale: string;
    total: number;
    seed?: null | string;
    data: [ImageResponse]
}

export interface ImageResponse {
    title: string;
    description: string;
    url: string;
}