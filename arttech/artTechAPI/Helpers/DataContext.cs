using Microsoft.EntityFrameworkCore;
using artTechAPI.Models;

namespace artTechAPI.Helpers
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}