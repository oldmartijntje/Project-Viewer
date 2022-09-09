using Microsoft.EntityFrameworkCore;

namespace ProjectsAPI.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Project> Projects => Set<Project>();
    }
}
