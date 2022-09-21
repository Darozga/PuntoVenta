using PuntoVenta.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PuntoVenta.DTO;

namespace PuntoVenta.Services.Interfaz
{
    public interface IUserService
    {
        Task<bool> ValidateAsync(UsuarioDTO request);
    }
}
