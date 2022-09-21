using PuntoVenta.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PuntoVenta.DataAccess.Interfaz
{
    public interface IArticuloRepository
    {
        Task<IEnumerable<Articulo>> listArticulos();
        Task<bool> CreateAsync(Articulo articulo);
        Task<bool> UpdateAsync(Articulo articulo);
        Task<bool> DeleteAsync(string id);

        Task<Articulo> GetAsync(string id);

    }
}
