using Microsoft.AspNetCore.Mvc;
using Server.Models.Transport;

namespace Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LobbiesController : ControllerBase
    {

        // For now, we'll just use a static list for simplicity
        private static List<LobbyDto> _lobbies = new List<LobbyDto>();

        [HttpGet]
        public async Task<ActionResult<IEnumerable<LobbyDto>>> GetLobbies()
        {
            return await Task.FromResult(_lobbies);
        }

        [HttpPost]
        public async Task<ActionResult<LobbyDto>> CreateLobby(LobbyDto lobbyDto)
        {
            lobbyDto.Id = Guid.NewGuid();
            _lobbies.Add(lobbyDto);
            
            return await Task.FromResult(lobbyDto);
        }        

    }
}