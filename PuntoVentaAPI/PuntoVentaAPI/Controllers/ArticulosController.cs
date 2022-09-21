using Microsoft.AspNetCore.Mvc;
using PuntoVenta.Services.Interfaz;
using System.Threading.Tasks;
using PuntoVenta.DTO;

namespace PuntoVenta.WebApi.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class ArticulosController : ControllerBase
    {
        private readonly IArticuloService _service;

        public ArticulosController(IArticuloService service)
        {
            _service = service;

        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _service.getArticulos());
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ArticuloDTO request)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var response = await _service.CreateAsync(request);

            return Created($"/{response}", new
            {
                Result = response
            });
        }

        [HttpPut]
        public async Task<IActionResult> Put(ArticuloDTO request)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var response = await _service.UpdateAsync(request);

            return Accepted(new
            {
                Result = response
            });
        }


        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var result =await _service.DeleteAsync(id);

            return Accepted(new
            {
                Result= result
            });
        }


        [HttpGet]
        [Route("{id}")]

        public async Task<IActionResult> Get(string id)
        {
            var response = await _service.GetByIdAsync(id);

            if (response == null)
                return Ok(null);

            return Ok(response);
        }
    }
}
