using System;
using System.Collections.Generic;

#nullable disable

namespace PuntoVenta.WebApi.Models
{
    public class Articulo
    {
        public string Id { get; set; }
        public string Nombre { get; set; }
        public decimal Precio { get; set; }
        public bool? Iva { get; set; }
    }
}
