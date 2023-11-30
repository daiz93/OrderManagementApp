using System.Drawing;
using API.GraphQL;
using Core.Interfaces;
using Infrastructure.Data;
using Infrastructure.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var AllowSpecificOrigins = "_allowSpecificOrigins";

// Add services to the container.
builder.Services.AddDbContextFactory<OMDbContext>(options =>
{
    options.UseInMemoryDatabase("InmemoryDB");
});
builder.Services.AddCors(option => 
option.AddPolicy (name: AllowSpecificOrigins,
    policy => 
    {
        policy.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();
    }
));


builder.Services.AddScoped<ICustomerService, CustomerService>();
builder.Services.AddScoped<IOrderService, OrderService>();


// graphql
builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>()
    .AddFiltering();


var app = builder.Build();
app.UseCors(AllowSpecificOrigins);

app.UseGraphQLVoyager("/graphql-voyager", new GraphQL.Server.Ui.Voyager.VoyagerOptions {GraphQLEndPoint ="/graphql"});

app.MapGraphQL();

app.Run();


