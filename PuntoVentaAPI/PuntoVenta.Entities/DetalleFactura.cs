using System;
using System.Collections.Generic;

#nullable disable

namespace PuntoVenta.WebApi.Models
{
    public partial class DetalleFactura
    {
        public int Id { get; set; }
        public int Encabezado_Id { get; set; }
        public string Articulo_Id { get; set; }
        public decimal Precio { get; set; }
        public decimal Iva { get; set; }
        public int Cantidad { get; set; }
        public decimal Total { get; set; }

    }
}
