using PuntoVenta.DataAccess.Interfaz;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PuntoVenta.Services.Interfaz;
using PuntoVenta.WebApi.Models;
using PuntoVenta.DTO;

namespace PuntoVenta.Services.Implementacion
{
    public class FacturacionService: IFacturacionService
    {
        private readonly IFacturacionRepository _repository;

        public FacturacionService(IFacturacionRepository repository)
        {
            _repository = repository;
        }

        public async Task<bool> CreateAsync(FacturaDTO request)
        {
            List<DetalleFactura> ListadoDetalle = new List<DetalleFactura>();
            var contador = 1;
            var encabezadoFactura = new Factura()
            {
                UserName = request.UserName,
                Fecha = DateTime.Now,
                Total = request.Total,
            };

            var idEncabezado = await _repository.addEncabezadoAsync(encabezadoFactura);

            foreach (var element in request.DetalleFacturas)
            {
                var detalleFactura = new DetalleFactura()
                {
                    Id = contador,
                    Encabezado_Id = idEncabezado,
                    Articulo_Id = element.ArticuloId,
                    Precio = element.Precio,
                    Iva = element.Iva,
                    Cantidad = element.Cantidad,
                    Total = element.Total
                };
                ListadoDetalle.Add(detalleFactura);
                contador += 1;
            }

            return await _repository.addDetallesAsync(ListadoDetalle);
        }

    }
}
