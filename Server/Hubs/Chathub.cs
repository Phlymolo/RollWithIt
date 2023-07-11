using Microsoft.AspNetCore.SignalR;
using Server.Models.Transport;

namespace Server.Providers
{
    public class Chathub : Hub
    {
        public async Task SendMessage(MessageDto message)
        {
            await Clients.All.SendAsync("ReceiveMessage", message);

            // try
            // {
            //     await Clients.All.SendAsync("ReceiveMessage", message);
            // }
            // catch (Exception ex)
            // {
            //     Console.WriteLine($"An error occurred: {ex.Message}");
            //     throw;  // Re-throw the exception to let SignalR handle it.
            // }
        }

    }
}