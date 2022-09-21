using System;
using System.Collections.Generic;

#nullable disable

namespace PuntoVenta.WebApi.Models
{
    public partial class Factura
    {

        public int Id { get; set; }
        public string UserName { get; set; }
        public DateTime Fecha { get; set; }
        public decimal Total { get; set; }
    }
}
