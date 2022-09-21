using PuntoVenta.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PuntoVenta.DTO;

namespace PuntoVenta.Services.Interfaz
{
    public interface IArticuloService
    {
        Task<IEnumerable<ArticuloDTO>> getArticulos();
        Task<bool> CreateAsync(ArticuloDTO articulo);
        Task<bool> UpdateAsync(ArticuloDTO articulo);
        Task<bool> DeleteAsync(string id);

        Task<ArticuloDTO> GetByIdAsync(string id);
    }
}
