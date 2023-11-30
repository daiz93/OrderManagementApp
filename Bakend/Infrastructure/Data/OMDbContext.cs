using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Entities.Enums;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class OMDbContext:DbContext
    {

        public DbSet<Customer> Customers { get; set; }
        public DbSet<Adress> Adresses { get; set; }
        
         public DbSet<Order> Orders { get; set; }


        public OMDbContext(DbContextOptions<OMDbContext> Options) : base(Options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Other configurations...

           
            modelBuilder.Entity<Customer>().HasData(

                new Customer {
                    Id = 1,
                    FirstName = "Serge",
                    LastName = "DOSSOU",
                    ContactNumber = "466455555",
                    Email = "serge.dossou@gmail.com",
                    IsDeleted = false
                },
                   new Customer {
                    Id = 2,
                    FirstName = "Marc",
                    LastName = "ABOH",
                    ContactNumber = "144877962",
                    Email = "marc.aboh@gmail.com",
                    IsDeleted = false
                }
            );



            modelBuilder.Entity<Adress>().HasData(

                new Adress {
                    Id = 1,
                    CustomerId = 1,
                    AdressLine1 = "San Pedro, banana",
                    AdressLine2 = "ST ABO 789",
                    City = "San perdo",
                    State ="BANABA",
                    Country = "Ivory Cost"
                },
                    new Adress {
                    Id = 2,
                    CustomerId = 2,
                    AdressLine1 = "Cabana caco",
                    AdressLine2 = "ST caca 123",
                    City = "Dakor",
                    State ="VOBO",
                    Country = "GONDOUANA"
                }
            );



            modelBuilder.Entity<Order>().HasData(

                new Order {
                    Id = 1,
                    CustomerId = 1,
                    OrderDate = new DateTime(2023, 04, 12),
                    Description = "DES",
                    TotalAmaount = 50000,
                    DepositAmount = 30000,
                    IsDelivery = true,
                    Status = Status.Shipped,
                    OtherNote = "RAS",
                    IsDeleted = false,

                    
                },
                     new Order {
                    Id = 2,
                    CustomerId = 1,
                    OrderDate = new DateTime(),
                    Description = "DES",
                    TotalAmaount = 50000,
                    DepositAmount = 30000,
                    IsDelivery = true,
                    Status = Status.Draft,
                    OtherNote = "RAS",
                    IsDeleted = false,

                    
                },
                  new Order {
                    Id = 3,
                    CustomerId = 2,
                    OrderDate = new DateTime(2023,1,5),
                    Description = "TES",
                    TotalAmaount = 10000,
                    DepositAmount = 10000,
                    IsDelivery = false,
                    Status = Status.Pending,
                    OtherNote = "RAS",
                    IsDeleted = false,

                    
                },
                  new Order {
                    Id = 4,
                    CustomerId = 2,
                    OrderDate = new DateTime(2023,2,2),
                    Description = "DES",
                    TotalAmaount = 10,
                    DepositAmount = 10,
                    IsDelivery = true,
                    Status = Status.Completed,
                    OtherNote = "RAS",
                    IsDeleted = false,

                    
                }
            );     

        }
        
    }
}