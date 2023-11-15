using System;


namespace Core.Entities
{
    public class Adress
    {
        public int Id {get; set;}
        public int CustomerId { get; set; }
        public string AdressLine1 { get; set; }
        public string AdressLine2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
    }
}