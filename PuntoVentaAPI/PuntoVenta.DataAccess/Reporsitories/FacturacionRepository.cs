using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PuntoVenta.DataAccess.Interfaz;
using PuntoVenta.WebApi.Models;

namespace PuntoVenta.DataAccess.Reporsitories
{
    public class FacturacionRepository : IFacturacionRepository
    {
        private readonly PuntoVentaDbContext _context;

        public FacturacionRepository(PuntoVentaDbContext context)
        {
            _context = context;
        }
        public async Task<int> addEncabezadoAsync(Factura encabezado)
        {
            await _context.Set<Factura>().AddAsync(encabezado);
            await _context.SaveChangesAsync();

            return encabezado.Id;
        }

        public async Task<bool> addDetallesAsync(ICollection<DetalleFactura> detalles)
        {
           
            try
            {
                await _context.Set<DetalleFactura>().AddRangeAsync(detalles);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return  false;
            }
            

        }

    }
}
