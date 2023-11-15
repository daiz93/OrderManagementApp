using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class Customer
    {
        public int Id { get; set; }
        public string FirstName {get; set;}
        public string LastName {get; set;}
        public string ContactNumber {get; set;}
        public string Email {get; set;}
        public int IsDeleted {get; set;}

        public Adress Adress {get; set;}

        public ICollection<Order> Orders {get; set;}
    }
}