using System;
using System.Collections.Generic;

namespace PuntoVenta.DTO
{
    public class FacturaDTO
    {

        public int? Id { get; set; }
        public string UserName { get; set; }
        public DateTime? Fecha { get; set; }
        public decimal Total { get; set; }

        public  ICollection<DetalleFacturaDTO> DetalleFacturas { get; set; }

    }
}
