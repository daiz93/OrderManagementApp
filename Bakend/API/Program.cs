using API.GraphQL;

using Infrastructure.Data;

using Microsoft.EntityFrameworkCore;
 
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContextFactory<OMDbContext>(options => 
{
    options.UseInMemoryDatabase("InmemoryDB");
});


// graphql
builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>()
    .AddFiltering();


var app = builder.Build();

app.MapGraphQL();

app.Run();