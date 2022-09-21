using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PuntoVenta.DTO;
using PuntoVenta.Services.Interfaz;

namespace PuntoVentaAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _service;
        public UsersController(IUserService service)
        {
            _service = service; 
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("login")]

        public async Task<IActionResult> Post([FromBody] UsuarioDTO request)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var response = await _service.ValidateAsync(request);

            return Ok(response);
        }
    }
}
