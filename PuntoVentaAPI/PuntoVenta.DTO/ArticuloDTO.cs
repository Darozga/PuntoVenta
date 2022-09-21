using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PuntoVenta.DTO
{
    public class ArticuloDTO
    {
        public string id { get; set; }
        public string nombre { get; set; }
        public decimal precio { get; set; }
        public bool? iva { get; set; }
    }
}
