using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Models.Transport
{
    public class LobbyDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int MaxPlayers { get; set; }
        public List<UserDto> CurrentPlayers { get; set; } = new List<UserDto>();
        public bool IsPrivate { get; set; }
        public bool IsInGame { get; set; }
        
    }
}