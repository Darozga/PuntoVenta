using PuntoVenta.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PuntoVenta.DataAccess.Interfaz
{
    public interface IUserAppRepository
    {
        Task<Usuario> ValidateUser(Usuario usuario);
    }
}
