using PuntoVenta.DTO;
using PuntoVenta.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PuntoVenta.Services.Interfaz
{
    public interface IFacturacionService
    {
        Task<bool> CreateAsync(FacturaDTO request);

        
    }
}
