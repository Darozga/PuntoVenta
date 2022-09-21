using PuntoVenta.DataAccess.Interfaz;
using PuntoVenta.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PuntoVenta.DTO;
using PuntoVenta.WebApi.Models;
using PuntoVenta.Services.Interfaz;

namespace PuntoVenta.Services.Implementacion
{
    public class ArticuloService : IArticuloService
    {
        private readonly IArticuloRepository _repository;

        public ArticuloService(IArticuloRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<ArticuloDTO>> getArticulos()
        {
            var listArticulos = await _repository.listArticulos();
            return listArticulos.Select(x => new ArticuloDTO()
            {
                id = x.Id,
                nombre = x.Nombre,
                precio = x.Precio,
                iva = x.Iva
            }).ToList();

            //return listArticulos;
        }

        public async Task<bool> CreateAsync(ArticuloDTO request)
        {
            return await _repository.CreateAsync(new Articulo()
            {
                Id = request.id,
                Nombre = request.nombre,
                Precio = request.precio,
                Iva = request.iva
                

            });
        }

        public async Task<bool> UpdateAsync(ArticuloDTO request)
        {
            return await _repository.UpdateAsync(new Articulo()
            {
                Id = request.id,
                Nombre = request.nombre,
                Precio = request.precio,
                Iva = request.iva


            });
        }

        public async Task<bool> DeleteAsync(string id)
        {
            return await _repository.DeleteAsync(id);
        }

        public async Task<ArticuloDTO> GetByIdAsync(string id)
        {
            var articulo = await _repository.GetAsync(id);

            if (articulo == null)
                return null;

            return new ArticuloDTO
            {
                id = articulo.Id,
                nombre = articulo.Nombre,
                precio = articulo.Precio,
                iva = articulo.Iva
            };
        }


    }
}
