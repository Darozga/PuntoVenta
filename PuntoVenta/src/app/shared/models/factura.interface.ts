import { DetalleFactura } from "./detalleFactura.inerface";

export interface Factura{
    userName: string;
    total: number;
    detalleFacturas: DetalleFactura[];
}