using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PuntoVenta.DTO
{
    public class DetalleFacturaDTO
    {
        public int? Id { get; set; }
        public int? EncabezadoId { get; set; }
        public string ArticuloId { get; set; }
        public decimal Precio { get; set; }
        public decimal Iva { get; set; }
        public int Cantidad { get; set; }
        public decimal Total { get; set; }
    }
}
