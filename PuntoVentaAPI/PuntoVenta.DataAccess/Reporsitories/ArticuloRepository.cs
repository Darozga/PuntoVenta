using Microsoft.EntityFrameworkCore;
using PuntoVenta.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using PuntoVenta.DataAccess.Interfaz;
using PuntoVenta.WebApi.Models;

namespace PuntoVenta.DataAccess.Reporsitories
{
    public class ArticuloRepository : IArticuloRepository
    {
        private readonly PuntoVentaDbContext _context;
        public ArticuloRepository(PuntoVentaDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Articulo>> listArticulos()
        {
            return await _context.Set<Articulo>().ToListAsync();
        }

        public async Task<bool> CreateAsync(Articulo articulo)
        {
            await _context.Set<Articulo>().AddAsync(articulo);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> UpdateAsync(Articulo customer)
        {
            _context.Set<Articulo>().Attach(customer);
            _context.Entry(customer).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteAsync(string id)
        {
            var entity = await _context.Set<Articulo>()
                .SingleOrDefaultAsync(p => p.Id == id);

            if (entity != null)
            {
                _context.Set<Articulo>().Attach(entity);
                _context.Entry(entity).State = EntityState.Deleted;
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

        public async Task<Articulo> GetAsync(string id)
        {
            return await _context.Set<Articulo>()
                .Where(x => x.Id == id)
                .SingleOrDefaultAsync();
        }
    }
}
