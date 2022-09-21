using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PuntoVenta.DataAccess.Interfaz;
using PuntoVenta.DTO;
using PuntoVenta.Entities;
using PuntoVenta.Services.Interfaz;
using PuntoVenta.WebApi.Models;

namespace PuntoVenta.Services.Implementacion
{
    public class UserService : IUserService
    {
        private readonly IUserAppRepository _repository;
        public UserService(IUserAppRepository repository)
        {
            _repository = repository;
        }

        public async Task<bool> ValidateAsync(UsuarioDTO request)
        {
            var usuario = await _repository.ValidateUser(new Usuario()
            {
                Id = request.Id,
                UserName = request.UserName,
                UserPassword = request.UserPassword


            });

            if (usuario == null)
                return false;

            return true;
        }
    }
}
