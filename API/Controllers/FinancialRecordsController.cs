using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FinancialRecordsController : ControllerBase
    {
        private readonly StoreContext _context;

        public FinancialRecordsController(StoreContext context)
        {
            _context = context;   
        }

        [HttpGet]
        public async Task<ActionResult<List<FinancialRecord>>> GetFinancialRecords()
        {
            return await _context.FinancialRecords.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetFinancialRecords(int id)
        {
            return await _context.FinancialRecords.FindAsync(id);
        }
    }
}