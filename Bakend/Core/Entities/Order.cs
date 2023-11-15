using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Enums;

namespace Core.Entities
{
    public class Order
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        
        public DateTime OrderDate { get; set; }
        public string Description { get; set; }
        public decimal TotalAmaount { get; set; }
        public decimal DepositAmount { get; set; }
        public bool IsDelivery { get; set; }
        public Status Status { get; set; }
        public string OtherNote { get; set; }
        public bool IsDeleted { get; set; }

        public Customer Customer {get; set;}
    }
}