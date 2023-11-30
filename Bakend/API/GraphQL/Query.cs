using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace API.GraphQL
{
    public class Query
    {

    [UseFiltering]
    public IQueryable<Customer> GetCustomers([Service] ICustomerService customerService)
    {

        
        return customerService.GetCustomers();

    }
    [UseFiltering]
    public IQueryable<Order> GetOrders([Service] IOrderService orderService)
    {
        
        return orderService.GetOrders();

    }
    }
}