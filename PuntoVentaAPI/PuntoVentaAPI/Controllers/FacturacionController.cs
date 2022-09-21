using Microsoft.AspNetCore.Mvc;
using PuntoVenta.Services.Interfaz;
using System.Threading.Tasks;
using PuntoVenta.WebApi.Models;
using PuntoVenta.DTO;

namespace PuntoVenta.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FacturacionController : Controller
    {
        private readonly IFacturacionService _service;

        public FacturacionController(IFacturacionService service)
        {
            _service = service;
        }


        [HttpPost]
        public async Task<IActionResult> Post([FromBody] FacturaDTO request)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var response = await _service.CreateAsync(request);

            return Created($"/{response}", new
            {
                Result = response
            });
        }
       
    }
}
