using book_collection_manager.Models;
using Microsoft.EntityFrameworkCore;

namespace book_collection_manager.Database
{
    public class BookDbContext : DbContext
    {
        public BookDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Book> Books { get; set; }
    }
}
