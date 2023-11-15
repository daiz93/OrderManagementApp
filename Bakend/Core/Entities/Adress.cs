using System;


namespace Core.Entities
{
    public class Adress
    {
        public int Id {get; set;}
        public int CustomerId { get; set; }
        public int AdressLine1 { get; set; }
        public int AdressLine2 { get; set; }
        public int City { get; set; }
        public int State { get; set; }
        public int Country { get; set; }
    }
}