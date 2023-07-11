using Server.Providers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddSignalR();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseDefaultFiles(); // serves index.html
app.UseStaticFiles(); // serves other static files


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.MapFallbackToFile("/index.html"); // serves index.html for all unmatched routes, ie lets angular handle page routing
app.MapHub<Chathub>("/chatHub");

// app.UseEndpoints(endpoints =>
// {
//     endpoints.MapControllers();
//     endpoints.MapFallbackToFile("/index.html");
// });

app.UseHttpsRedirection();

app.Run();
