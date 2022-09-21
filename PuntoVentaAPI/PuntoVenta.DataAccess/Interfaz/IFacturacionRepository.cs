using PuntoVenta.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PuntoVenta.DataAccess.Interfaz
{
    public interface IFacturacionRepository
    {
        Task<int> addEncabezadoAsync(Factura encabezado);

        Task<bool> addDetallesAsync(ICollection<DetalleFactura> detalles);
    }
}
