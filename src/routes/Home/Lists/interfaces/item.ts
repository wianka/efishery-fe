export interface ItemValuesInterfaces {
    uuid: string;
    komoditas: string;
    area_provinsi: string;
    area_kota: string;
    size: string;
    price: string;
    tgl_parsed: string;
    timestamp: string;
}

export interface ItemValuesReadInterfaces {
    uuid?: string;
    komoditas: string;
    provinsi: string;
    kota: string;
    size: string;
    price: string;
}