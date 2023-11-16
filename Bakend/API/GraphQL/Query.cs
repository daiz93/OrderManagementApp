using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace API.GraphQL
{
    public class Query
    {

    [UseFiltering]
    public IQueryable<Customer> GetCustomers([Service] OMDbContext context)
    {

        context.Database.EnsureCreated();
        return context.Customers
        .Include(o => o.Orders)
        .Include(o =>o.Adress);

    }
    [UseFiltering]
    public IQueryable<Order> GetOrders([Service] OMDbContext context)
    {
        context.Database.EnsureCreated();
        return context.Orders.Include(o=>o.Customer);

    }
    }
}