using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PuntoVenta.DataAccess.Interfaz;
using PuntoVenta.Entities;
using PuntoVenta.WebApi.Models;

namespace PuntoVenta.DataAccess.Reporsitories
{
    public class UserAppRepository: IUserAppRepository
    {
        private readonly PuntoVentaDbContext _context;
        public UserAppRepository(PuntoVentaDbContext context)
        {
            _context = context;
        }


        public async Task<Usuario> ValidateUser(Usuario usuario)
        {
            return await _context.Set<Usuario>()
                .Where(x => x.UserName.ToLower() == usuario.UserName.Trim().ToLower() && x.UserPassword == usuario.UserPassword.Trim())
                .SingleOrDefaultAsync();
        }


    }
}
