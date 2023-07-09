using Microsoft.AspNetCore.Mvc;
using Server.Models.Transport;

namespace Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {

        [HttpPost]
        public ActionResult Post([FromBody] MessageDto message)
        {
            return Ok($"Server received: {message.Text}");
        }

    }

}