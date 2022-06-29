using System;

namespace API.Entities
{
    public class FinancialRecord
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public long Expenses { get; set; }
        public long Savings { get; set; }
        public long NetWorth { get; set; }
    }
}