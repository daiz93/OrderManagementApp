using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Services
{
    public class CustomerService : ICustomerService

    {
        private IDbContextFactory<OMDbContext> _contextFactory;

        public CustomerService (IDbContextFactory<OMDbContext> contextFactory)
        {
            _contextFactory = contextFactory;
        }
        public IQueryable<Customer> GetCustomers()
        {
            var context = _contextFactory.CreateDbContext();
            context.Database.EnsureCreated();
            return context.Customers.Where(c => !c.IsDeleted)
            .Include(c=> c.Orders)
            .Include(c=> c.Adress);
        }
    }
}